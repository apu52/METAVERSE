const express = require("express");
const User = require("./Models/userModel");
const router = express.Router();
const Audio = require("./Models/audioModel");
const path = require("path");
const multer = require("multer");
const fsextra = require("fs-extra");
const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");

router.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const user_exist = await User.findOne({ email: email });
  if (user_exist) {
    return res.json("user exists");
  } else {
    const user = new User({
      name,
      email,
      password,
    });
    await user.save();
    return res.json("new user");
  }
});

router.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  //  console.log(req.body);
  const email_exist = await User.findOne({ email: email });
  console.log(email_exist);
  if (email_exist) {
    const password_correct = await User.findOne({
      email: email,
      password: password,
    });
    // console.log(password_correct);
    if (password_correct) {
      // console.log(password_correct);
      return res.json("user exists");
    } else {
      return res.json("password incorrect");
    }
  } else {
    return res.json("user not found");
  }
});

// Set up multer storage and upload configuration
const storage = multer.diskStorage({
  destination: "audios/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/audify", upload.single("video"), async (req, res) => {
  const { file, body } = req;
  const email = req.query.email;
  const filename = file.filename;
  const path = file.path;
  const title = body.title;
  const author = body.author;
  const comment = body.comment;

  const outputFilename = `${filename}_output.mp3`;

  ffmpeg(path)
    .noVideo()
    .save(outputFilename)
    .on("end", async () => {
      console.log("Audio conversion completed.");

      // Read the converted audio file from disk
      const audioData = fs.readFileSync(outputFilename);

      // Set response headers to indicate file download
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${outputFilename}"`
      );
      res.setHeader("Content-Type", "audio/mpeg");

      const resnew = await Audio.findOne({ email: email });

      fsextra.remove("uploads");

      res.send(audioData);
      // Send the audio file as the response
      fs.unlinkSync(outputFilename);
      if (resnew) {
        resnew.audioArray.push({
          filename: outputFilename,
          title: title,
          author: author,
          comment: comment,
          date: Date.now(),
        });
        await resnew.save();
        console.log("old audio");
      } else {
        const audio = new Audio({
          audioArray: [
            {
              filename: outputFilename,
              title: title,
              author: author,
              comment: comment,
              date: Date.now(),
            },
          ],
          email: email,
        });

        // Save the audio document to MongoDB Atlas
        await audio.save();
      }

      // Delete the converted audio file from disk
    })
    .on("error", (err) => {
      console.error("Error converting video to audio:", err);
      res.status(500).send("Error converting video to audio.");
    });
});

router.get("/audify", async (req, res) => {
  // fsextra.remove('audios').then(()=>{
  //   console.log('audios folder deleted');
  // })
  const email = req.query.email;
  // console.log(email);

  const audios = await Audio.findOne({ email: email });
  // console.log(audios);
  // console.log(audios);
  // console.log(audios);
  if (audios) {
    const audioArray = audios.audioArray;
    console.log(audios);
    // console.log(audioArray);
    res.json({ audio: audioArray });
    console.log("Audio found");
  } else {
    return res.json("no audios");
  }
});
router.get("/:filename", async (req, res) => {
  const { filename } = req.params;
  console.log(filename);
  const { email } = req.query.email;
  const resnew = await Audio.findOne({ email: email });
  await resnew.audioArray.findOne({ filename }, (error, audio) => {
    if (error) {
      console.error("Error retrieving audio:", error);
      res.status(500).send("Error retrieving audio file.");
    } else if (!audio) {
      res.status(404).send("Audio file not found.");
    } else {
      const audioPath = path.join(__dirname, "audio", audio.filename);
      res.sendFile(audioPath);
    }
  });
});
router.delete("/:date", async (req, res) => {
  const { date } = req.params;
  const { email } = req.query;

  try {
    // Find the audio document for the given email
    const audio = await Audio.findOne({ email });

    if (!audio) {
      console.log("No audio found for the email");
      return res.status(404).json({ message: "No audio found for the email" });
    }

    // Find the index of the audio in the audioArray with the matching date
    const audioIndex = audio.audioArray.findIndex(
      (item) => item.date.toISOString() == date
    );

    if (audioIndex === -1) {
      console.log("No audio found for the given date");
      return res
        .status(404)
        .json({ message: "No audio found for the given date" });
    }

    // Remove the audio from the audioArray
    audio.audioArray.splice(audioIndex, 1);

    // Save the updated audio document
    await audio.save();
    console.log("Audio deleted successfully");
    res.json({ message: "Audio deleted successfully" });
  } catch (error) {
    console.log("An error occurred while deleting the audio:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
