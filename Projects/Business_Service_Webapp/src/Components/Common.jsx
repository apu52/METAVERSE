import './Comp.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom';
import 'animate.css';

const Common = (props) => { 
    return (
        <>
            {/* <h1>Home</h1> */}
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto"> 
                        <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <h1>{props.title1} <br/> {props.title2} <strong className='brand-name'><abbr title="https://www.linkedin.com/in/aditya--gaikwad/">{props.title3}</abbr></strong></h1>
                                <h2 className="my-3">{props.subHeading}</h2>
                                <p>{props.brief}</p>
                                <div className="mt-3">
                                    <NavLink className="btn-get-started" to="/services">Get Started</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img className='image-fluid animate__animated animate__pulse animate__slow animate__infinite infinite' src={props.imgSrc} alt="home img" />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Common;