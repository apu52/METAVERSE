import { useState } from "react";
import "./Comp.css"


const Contact = () => { 

    const [data, setData] = useState({
        fname: '',
        phone: '',
        email: '',
        msg: '',
    });

    const InputEvent = (e) => {
        const {name, value} = e.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Name : ${data.fname},\nPhone : ${data.phone}, \nEmail : ${data.email}, \nMessage : ${data.msg}`);
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleFormSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" onChange={InputEvent}  placeholder="Enter your name" name="fname" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <div class="input-group">
                                    <span class="input-group-text">+91</span>
                                    <input type="tel" class="form-control" id="exampleFormControlInput1" onChange={InputEvent} placeholder="Phone no." name="phone" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" onChange={InputEvent}  placeholder="name@example.com" name="email" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={InputEvent}  name="msg"></textarea>
                            </div>
                                <button type="Submit" class="btn btn-outline-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;