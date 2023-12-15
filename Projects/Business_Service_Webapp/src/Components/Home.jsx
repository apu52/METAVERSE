import Common from './Common';
import hero from '../assets/home.svg'


const Home = () => { 
    return (
        <>
            <Common imgSrc={hero} title1={"Grow Your Business"} subHeading={"Let the world know you by you!"} title2={"with"} title3={"Star Devs"}/>
        </>
    );
}

export default Home;