const dotenv = require("dotenv");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const User = require("./models/user");
const Booking = require("./models/BookModel");

dotenv.config({ path: "./.env" });
const URI = process.env.DATABASE;
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
mongoose.connect(URI).then(() => {
  ////console.log("Connected Successfully");
  app.listen(PORT, () => {
    ////console.log("listening on port 5000...");
  });
});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.send("<h1>Welcome</h1>");
});

app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const res1 = await User.findOne({ email: email });

  if (res1) {
    return res.json("exist");
  } else {
    const user = User({
      name: name,
      email: email,
      password: password,
    });
    await user.save();
    return res.json("doesnt exist");
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const res1 = await User.findOne({ email: email });
  const res2 = await User.findOne({ password: password });
  if (res1) {
    if (res2) {
      return res.json({ message: "LoggedIn", name: res2.name });
    } else {
      return res.json("incorrectPassword");
    }
  } else {
    return res.json("notregistered");
  }
});
app.post("/api/booking", async (req, res) => {
  // //console.log(req.body);
  const { userid,email, phone, bookid, e, f, dis, day, logid, price } = req.body;
  const user = await User.findOne({email:userid});
  const order = Booking({
    userid: userid,
    name:user.name,
    email: email,
    contact: phone,
    bookid: bookid,
    logid: logid,
    price: price,
    e:e,
    f:f,
    dis:dis,
    day: day,
  });
  
  await order.save();
  return res.json("booked");
});

app.get('/api/booking', async (req, res) => {
  // //console.log('hemlo');
  const bookid = req.query.bookid;
  // //console.log(bookid);
  const Track=await Booking.findOne({bookid:bookid});
  // //console.log(Track);
  return res.json(Track);
})
app.post('/api/admin',async (req, res) => {
  const bookid = req.query.bookid;
  const {status,message,ddate} = req.body;
  const Track=await Booking.findOne({bookid:bookid});
  //console.log(Track);
  Track.status=parseInt(status, 10);
  Track.message=message;
  Track.ddate=ddate;
  await Track.save();
  //console.log(Track);
  return res.json('updated');

})
app.get('/api/admin', async (req, res) => {
  // //console.log('hemlo');
  
  const Track=await Booking.find();
  // //console.log(Track);
  return res.json(Track);
})


app.get("/api/profile", async (req, res) => {
  const email = req.query.email;
  const { name, picture } = await User.findOne({ email: email });
  const orderArray = await Order.find({ email: email });
  const { contact } = await Address.findOne({ email: email });
  //console.log("Profile sent");
  return res.json({
    orderArray: orderArray,
    name: name,
    email: email,
    contact: contact,
    picture: picture,
  });
});
app.post("/api/profile", async (req, res) => {
  const { email } = req.query;

  const user = await User.findOne({ email: email });
  user.name = req.body.name;
  user.contact = req.body.contact;

  await user.save();
  const cart = await Cart.findOne({ email: email });

  if (cart) {
    cart.name = req.body.name;
    await cart.save();
  }
  //console.log(cart);
  return res.json("updated");
});
app.put("/api/image", async (req, res) => {
  const { email, picture } = req.body;
  //console.log(picture);
  const imageUpdate = await User.findOne({ email: email });
  //console.log(imageUpdate);
  imageUpdate.picture = picture;
  imageUpdate.save();
  return res.json("image Uploaded succesfully");
});
