import HomeEle from "../../elements/HomeEle";
import LandingImg from "../../elements/LandingImg";

export default function SatrunHome(params) {
  return (
    <>
      <LandingImg
        image={
          "https://astrotalk.com/astrology-blog/wp-content/uploads/2023/07/360_F_576940763_NiiuW6PnSxWYnh8wx3xebvDJTQaM9oB5.jpg"
        }
      />
      <HomeEle
        homeBtn={"Explore other Planets"}
        homeDayNight={`Saturn has a vast system of moons, with over 80 confirmed satellites. Titan, Saturn's largest moon, is of particular interest due to its thick atmosphere and Earth-like features. Enceladus is another moon known for its icy geysers.`}
        homeDesc={`Saturn is the sixth planet from the Sun in our solar system and the second-largest, after Jupiter. It is easily recognizable due to its stunning ring system, which is one of the most prominent features in our night sky. Saturn's captivating appearance and scientific significance make it a fascinating object of study in the field of astronomy.`}
        homeDistEarth={`1.2`}
        homeDistSun={` 1.4b`}
        homeExp={`The Cassini-Huygens mission, a collaboration between NASA and the European Space Agency, provided extensive data on Saturn and its moons. The Cassini spacecraft orbited Saturn for over 13 years, making significant discoveries before its deliberate descent into Saturn's atmosphere in 2017.`}
        homeName={`Satrun`}
        homeOrbitRot={`Saturn's ring system is composed of countless icy particles, ranging in size from tiny grains to large chunks. These rings are divided into several main ring groups, including the A, B, and C rings, with the Cassini Division separating the A and B rings.`}
        homeSizeComp={`Saturn is a gas giant, primarily composed of hydrogen and helium. It has a diameter of about 120,536 kilometers (74,898 miles), making it the second-largest planet in our solar system.`}
      />
    </>
  );
}
