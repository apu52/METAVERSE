import HomeEle from "../../elements/HomeEle";
import LandingImg from "../../elements/LandingImg";

export default function MarsHome(params) {
  return (
    <>
      <LandingImg
        image={
          "https://www.momjunction.com/wp-content/uploads/2020/10/Freezing-cold.jpg"
        }
      />
      <HomeEle
        homeBtn={"Explore Other Planets"}
        homeDayNight={`A day on Mars, known as a "sol," is roughly 24.6 hours. It has a similar axial tilt to Earth, resulting in seasons.Sunrise and Sunset: Mars experiences sunrises and sunsets similar to Earth due to its rotation.
        Length of Daylight: A day on Mars is just a little over 24 hours, providing a day-night cycle similar to Earth.`}
        homeDesc={`Mars is the fourth planet from the Sun in our solar system and is often referred to as the "Red Planet" due to its reddish appearance. It is a terrestrial planet with a thin atmosphere, and its surface features include deserts, valleys, polar ice caps, and ancient riverbeds.`}
        homeSizeComp={`Diameter: Mars has a diameter of approximately 6,779 kilometers (4,212 miles), making it the fourth smallest planet in our solar system.
        Mass: Mars has about 10.7% of Earth's mass.
        Gravity: Mars has about 38% of Earth's gravity, which means objects weigh less on Mars compared to Earth.`}
        homeDistEarth={`33.9`}
        homeExp={`Robotic Missions: Numerous robotic missions have been sent to Mars for exploration and research. These include rovers like Sojourner, Spirit, Opportunity, Curiosity, and Perseverance.
Human Exploration: There is ongoing interest in sending human missions to Mars, with plans for potential crewed missions in the future.`}
        homeOrbitRot={`Orbit Period: Mars takes about 687 Earth days to complete one orbit around the Sun.
        Axial Tilt: Mars has an axial tilt similar to Earth, which results in seasons. However, Mars has a more eccentric orbit, leading to more significant temperature variations between seasons.
        Rotation Period: A day on Mars, known as a "sol," is approximately 24.6 hours.
        `}
        homeName={`Mars`}
        homeDistSun={`228`}
      />
    </>
  );
}
