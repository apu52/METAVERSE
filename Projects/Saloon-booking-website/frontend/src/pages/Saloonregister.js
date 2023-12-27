import React from 'react'
import { useState } from 'react';
import Navebar from '../components/Navebar'

export default function Saloonregister() {
    const [selectedImage, setSelectedImage] = useState();
    // This function will de triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault()
        alert(URL.createObjectURL(selectedImage))
    }
    const removeSelectedImage = () => {
        setSelectedImage();
    }

    return (
        <div>
            <Navebar />
            <hr />
            <div className="container " style={{ "marginLeft": "250px", "transition": "none", "boxShadow": "none" }}>
                <section >
                    <div className="row">
                        <div className="col-md-8 mb-4">
                            <div className="card mb-4" style={{ "transition": "none", "transform": "none", "textDecorationColor": "none" }} >
                                <div className="card-header py-3">
                                    <h5 className="mb-0 text text-uppercase" style={{ "color": "black" }}>Shop Details</h5>
                                </div>
                                <div className="card-body mx-5">
                                    <form onSubmit={onSubmit}>
                                        <div className="row ">
                                            <div className="col">
                                                <div className="form-outline">
                                                    <label className="form-label" htmlFor="form11Example1" style={{ "color": "black" }}>Shop name</label>
                                                    <input type="text" id="form11Example1" className="form-control mb-4" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form11Example3" style={{ "color": "black" }}>Complete Address</label>
                                            <input type="text" id="form11Example3" className="form-control" />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form11Example6" style={{ "color": "black" }}>Contact Number</label>
                                            <input type="number mb-4" id="form11Example6" className="form-control" />

                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form11Example1" style={{ "color": "black" }}>Shop owner full name</label>
                                                <input type="text" id="form11Example1" className="form-control mb-4" />

                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <label className="form-label" htmlFor="form11Example1" style={{ "color": "black" }}>Shop owner email address</label>
                                                <input type="email" id="form11Example1" className="form-control mb-4" />

                                            </div>
                                        </div>
                                        <div className=""> <label className="text-grey mt-1 mb-3" style={{ "color": "black" }}>Open Hours</label>
                                            <div className="container mb-3" style={{ "color": "black" }}>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mob"> <label className="text-grey mr-1  input-date">From</label> <input className="ml-1" type="time" name="from" /> </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="mob mb-2"> <label className="text-grey mr-4">To</label> <input className="ml-1" type="time" name="to" /> </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="mt-1 cancel fa fa-times text-danger"></div>
                                            <div className="container" style={{ "color": "black" }}>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-check  mb-2">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form11Example8" checked />
                                                            <label className="form-check-label " htmlFor="form11Example8">
                                                                Monday
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-check  mb-2">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form11Example8" checked />
                                                            <label className="form-check-label " htmlFor="form11Example8">
                                                                Friday
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-check  mb-2">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form11Example8" checked />
                                                            <label className="form-check-label " htmlFor="form11Example8">
                                                                Tuesday
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-check  mb-2">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form11Example8" checked />
                                                            <label className="form-check-label " htmlFor="form11Example8">
                                                                Saturday
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-check  mb-2">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form11Example8" checked />
                                                            <label className="form-check-label " htmlFor="form11Example8">
                                                                Wednesday
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="form-check  mb-2">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form11Example8" checked />
                                                            <label className="form-check-label " htmlFor="form11Example8">
                                                                Sunday
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="form-check  mb-2">
                                                            <input className="form-check-input me-2" type="checkbox" value="" id="form11Example8" checked />
                                                            <label className="form-check-label " htmlFor="form11Example8">
                                                                Thursday
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="col">
                                            <div className="form-outline">
                                                <label className="form-label mt-3 fs-4" htmlFor="form11Example1" style={{ "color": "black" }}>Shop Images</label>
                                                <div className="form-group">
                                                    <input type="file" className="form-control  w-50 " style={{ "marginLeft": "160px","marginTop":"20px" }} onChange={imageChange} accept="image/*" />
                                                </div> <br />
                                                {selectedImage && (
                                                    <div style={styles.preview}>
                                                        <img className=""
                                                            src={URL.createObjectURL(selectedImage)}
                                                            style={styles.image}
                                                            alt="Thumb"
                                                        />
                                                        <button onClick={removeSelectedImage} style={styles.delete}>
                                                            Delete
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>


                                    </form>
                                    <div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn button-order col-md-10 btn btn-success">Submit</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        </div >

    );
};

// Just some styles
const styles = {
    preview: {
        marginTop: 50,
        display: "flex",
        flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
        cursor: "pointer",
        padding: 15,
        background: "grey",
        color: "white",
        border: "none",
        margin:"auto",
        marginTop:"10px"
        
       
    },
};
