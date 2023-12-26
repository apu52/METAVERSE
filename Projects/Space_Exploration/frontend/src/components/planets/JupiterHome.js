import HomeEle from "../../elements/HomeEle";
import LandingImg from "../../elements/LandingImg";

export default function JupiterHome(params) {
  return (
    <>
      <LandingImg
        image={
          "https://s32036.pcdn.co/wp-content/uploads/2020/06/Earth-sucked-into-jupiter.jpg"
        }
      />
      <HomeEle
        homeBtn={`Explore Other Planets`}
        homeDayNight={`Jupiter has a large number of moons, with over 80 known satellites. The four largest moons, known as the Galilean moons (Io, Europa, Ganymede, and Callisto), were discovered by Galileo Galilei in 1610.`}
        homeSizeComp={`Jupiter is the largest planet in our solar system, with a diameter of about 139,820 kilometers (86,881 miles).
It is primarily composed of hydrogen and helium, similar to the composition of the Sun.`}
        homeDesc={`Jupiter, the largest planet in our solar system, is a mesmerizing giant known for its immense size, vibrant bands of clouds, and a captivating storm called the Great Red Spot. Named after the king of the Roman gods, Jupiter is a gas giant that holds a prominent place in the cosmic ballet of celestial bodies.

`}
        homeDistEarth={`628`}
        homeDistSun={`778 `}
        homeExp={`Jupiter has been the subject of several space missions, including Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Galileo, Juno, and more recently, the European Space Agency's JUpiter ICy moons Explorer (JUICE) mission.
`}
        homeName={`Jupiter`}
        homeOrbitRot={`Jupiter is a fast spinner, completing a full rotation on its axis in just about 9.9 hours. This rapid rotation contributes to its slightly flattened shape.`}
      />
    </>
  );
}
