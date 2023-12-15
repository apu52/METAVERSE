
import Card from './Card';
import Data from './Data';

const Services = () => { 
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto"> 
                        <div className="row gy-4">

                            {
                            /* <Card imgSrc={c1}/>
                            <Card imgSrc={c2}/>
                            <Card imgSrc={c6}/>
                            <Card imgSrc={c3}/>
                            <Card imgSrc={c4}/>
                            <Card imgSrc={c3}/>
                            <Card imgSrc={c6}/>
                            <Card imgSrc={c2}/>
                            <Card imgSrc={c1}/> */
                            }

                            {
                                Data.map((curr, ind) => {
                                    return <Card imgSrc={curr.imgSrc} title={curr.title}/>
                                })
                            }
                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;