import LandingImg from "../../elements/LandingImg";
import HomeEle from "../../elements/HomeEle";

export default function MercuryHome(params) {
  return (
    <>
      <LandingImg image="https://studybreaks.com/wp-content/uploads/2018/07/merc-rx-vir-2016.jpg" />
      <HomeEle
        homeBtn={"Explore other Planets"}
        homeDayNight={
          "Mercury has a slow rotation on its axis, taking about 59 Earth days to complete one rotation.Despite its slow rotation, it has a relatively short day-night cycle due to its fast orbit around the Sun, about 88 Earth days."
        }
        homeDesc={
          " Mercury is the smallest and innermost planet in our solar system, and it is named after the Roman messenger god. Mercury's proximity  to the Sun and its extreme temperatures make it a challenging targetfor exploration, but studying it helps scientists understand moreabout the formation and evolution of our solar system."
        }
        homeDistEarth={"77.3"}
        homeDistSun={" 57.9"}
        homeExp={
          " NASA's Mariner 10 mission was the first spacecraft to visitMercury in 1974-1975, and it provided valuable data about theplanet. The MESSENGER spacecraft orbited Mercury from 2011 to2015, significantly expanding our knowledge of the planet."
        }
        homeName={"Mercury"}
        homeOrbitRot={
          "     Mercury has a slow rotation on its axis, taking about 59 Earth days to complete one rotation. Despite its slow rotation, it has a relatively short day-night cycle due to its fast orbit around then sun, about 88 Earth days."
        }
        homeSizeComp={
          "Mercury is the smallest of the eight planets in our solar system. It has a rocky, terrestrial composition and is primarily made up of metal and rock."
        }
      />
    </>
  );
}
