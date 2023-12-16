import c1 from '../assets/c1.svg'

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 mx-auto col-10">
                <div className="card" style={{width: "18rem"}}>
                    <img src={props.imgSrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/contact" className="btn btn-primary">Checkout</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;