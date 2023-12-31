import Common from './Common';
import about from '../assets/About.svg'

const About = () => { 
    let t1 = "Know About us"
    let bre = "Welcome to Star Devs, where innovation meets functionality. As expert developers, we specialize in crafting bespoke websites tailored to elevate your business. From sleek e-commerce platforms to dynamic corporate sites, our team is dedicated to translating your vision into a digital reality. With a commitment to cutting-edge technology and user-centric design, we empower businesses of all sizes to thrive in the online realm. Elevate your online presence with Star Devs – where your success is our code."

    return (
        <>
            <Common imgSrc={about} title1={t1} brief={bre}/>
        </>
    );
}

export default About;