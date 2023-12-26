import HomeEle from "../../elements/HomeEle";
import LandingImg from "../../elements/LandingImg";

export default function VenusHome(params) {
  return (
    <>
      <LandingImg
        image={"https://a-z-animals.com/media/2022/08/iStock-1227346702.jpg"}
      />
      <HomeEle
        homeBtn={"Explore other Planets"}
        homeDayNight={`Venus is often visible as the  or the depending on its position relative to the Sun. It's one of the brightest objects in the night sky.`}
        homeDesc={`Venus, often referred to as Earth's is a captivating celestial body that shares several similarities with our own planet. Named after the Roman goddess of love and beauty, Venus is the second planet from the Sun in our solar system. Its alluring presence in the night sky has captivated astronomers and stargazers throughout history.`}
        homeDistEarth={`41 `}
        homeDistSun={`108`}
        homeExp={`Several spacecraft, including NASA's Magellan and the European Space Agency's Venus Express, have ventured to study Venus up close. These missions have provided valuable insights into its atmospheric conditions and geological features.`}
        homeName={`Venus`}
        homeSizeComp={`Venus is similar in size to Earth, boasting a diameter of approximately 12,104 kilometers (7,521 miles).
        Composed mainly of rock and metal, Venus shares a comparable rocky structure with Earth.`}
        homeOrbitRot={`Venus experiences retrograde rotation, a unique phenomenon where it rotates on its axis very slowly and in the opposite direction to most planets.
        A year on Venus, completing one orbit around the Sun, lasts approximately 225 Earth days, while a day on Venus, one full rotation on its axis, takes around 117 Earth days.`}
      />
    </>
  );
}
