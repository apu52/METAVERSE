import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useDispatchCart, useCart } from '../../components/Contextreducer';
import Navebar from '../../components/Navebar'
import { useState } from 'react';
import Model from '../Model';
import Cart from '../../components/Cart';
import Orderlost from '../../components/Orderlost';

export default function Shop5() {
 
  let finalprice=0;
  let data = useCart();
  const [cartview, setcartview] = useState(false)
  const [orderlost, setorderlost] = useState(false)
  const [visible, setVisible] = useState(true);
  const [qty, setqty] = useState(1);
  let dispatch = useDispatchCart();
  const location = useLocation();
  const title = location.state;

  async function onhandleAddToCart(Service, Price, id, idd) {
    

    await dispatch({ type: "ADD", service: Service, price: Price, qty: 1, visible: visible })
    // console.log(data);
    const element = document.getElementById(id);
    element.style.display = "none";
    const elementt = document.getElementById(idd);
    elementt.style.display = "block";
    setVisible(false);
    return
  }




  return (
    <>
      <nav className="navbar navbar-expand navbar-light" style={{ "fontFamily": "Arial", "marginBottom": "-20px" }}>
        <div className="container-fluid">
          <Link className="navbar-brand mx-3 fw-bold" style={{ "fontSize": "30px", "color": "#5a4444", "fontFamily": "Arial" }} to="/"  >Enable US</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav me-5 " style={{ "fontSize": "15px" }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="">Why To Choose Us?</Link>
              </li>
              <li className="nav-item">
          {(localStorage.getItem("phoneNumber"))?
          <Link className="nav-link active btn mx-3" to="/My-Orders"><u>My Orders</u></Link>
          :<Link className="nav-link active" to="/login">Login/Signup</Link>}
        </li>
              
              <li className="nav-item">
                <div className="nav-link active ms-3 btn" onClick={() => setorderlost(true)}>GoBack</div>
              </li>
            </ul>
            {orderlost ? <Model onClose={() => setorderlost(false)}><Orderlost vis={visible} /></Model> : null}

          </div>
        </div>
      </nav>
      <hr />
      <div className="card mb-3 m-5" style={{ "border": "none" }}>
        <div className="row g-0">

          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title  fw-bold my-5 mx-5 text-dark">{title.Title.props}</h2>

            </div>
          </div>
          <div className="col-md-4">
            <img src={require('../man-getting-his-beard-shaved-with-razor.jpg')} className="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
      <hr className=' css-1dbjc4n r-13qz1uu ' />
      <div className="conatiner">
        <div className="row">
          <div className="col me-auto">
            <ul className=''>
              <h3>Hair Services</h3>
              <div className="ms-5">
                <li className='fw-bold'>
                  <div className="row">
                    <div className="col-3">
                      Mens-cuts
                    </div>
                    <div className="col-3">
                      <div className="btn btn-primary ms-4" id="-1" role="button" onClick={async () => onhandleAddToCart("Mens-cuts", 100, "-1", "-11")}>Add</div>
                      < div className="ms-1" style={{ "display": "none" }} id="-11">
                        <i className="bi bi-dash-circle btn " onClick={async () => {
                          data.map((service, index) => {
                            if(service.service=="Mens-cuts")
                            {
                            if ((service.qty) > 1) {
                              service.qty = service.qty - 1;
                              dispatch({ type: "UPDATE", service: "Mens-cuts", qty: service.qty });
                            }
                            else if ((service.qty) === 1) {
                              service.qty = 0;
                              dispatch({ type: "UPDATE", service: "Mens-cuts", qty: service.qty });
                              console.log(index)
                              dispatch({ type: "REMOVE", index: index })
                              document.getElementById(-1).style.display = "inline-block";
                              document.getElementById(-11).style.display = "none";
                            }
                          }})
                        }
                        }></i>
                        {
                          data.map((service, index) => {
                            if(service.service==="Mens-cuts")
                            {
                              return service.qty
                            }
                          })
                        }
                        <i className="bi bi-plus-circle btn" onClick={async () => {
                          data.map((service, index) => {
                            if(service.service=="Mens-cuts")
                            service.qty = service.qty + 1;
                            dispatch({ type: "UPDATE", service: "Mens-cuts", qty: service.qty });
                          })
                        }
                        } style={{ "position": "absolute" }}></i>
                      </div>
                    </div>
                  </div>
                </li>
                <>₹100</>
                <li className='fw-bold'>
                  <div className="row">
                    <div className="col-3">
                      beard-cuts
                    </div>
                    <div className="col-3">
                      <div className="btn btn-primary ms-4" id="-2" role="button" onClick={async () => onhandleAddToCart("beard-cuts",80, "-2", "-22")}>Add</div>
                      < div className="ms-1" style={{ "display": "none" }} id="-22">
                        <i className="bi bi-dash-circle btn " onClick={async () => {
                          data.map((service, index) => {
                            if(service.service=="beard-cuts")
                            {
                            if ((service.qty) > 1) {
                              service.qty = service.qty - 1;
                              dispatch({ type: "UPDATE", service: "beard-cuts", qty: service.qty });
                            }
                            else if ((service.qty) === 1) {
                              service.qty = 0;
                              dispatch({ type: "UPDATE", service: "beard-cuts", qty: service.qty });
                              console.log(index)
                              dispatch({ type: "REMOVE", index:index })
                              document.getElementById(-2).style.display = "inline-block";
                              document.getElementById(-22).style.display = "none";
                            }
                          }
                          })

                        }
                        }></i>
                        {
                          data.map((service, index) => {
                            if(service.service==="beard-cuts")
                            {
                              console.log("hii")
                              return service.qty
                            }
                          })
                        }
                        <i className="bi bi-plus-circle btn" onClick={async () => {
                          {
                            data.map((service, index) => {
                              if(service.service=="beard-cuts")
                              {
                              service.qty = service.qty + 1
                              dispatch({ type: "UPDATE", service: "beard-cuts", qty: service.qty });
                            }})
                          }
                        }
                        } style={{ "position": "absolute" }}></i>
                      </div>
                    </div>
                  </div>
                </li>
                <>₹80</>
                <li className='fw-bold'>
                  <div className="row">
                    <div className="col-3">
                      Child-cuts
                    </div>
                    <div className="col-3">
                      <div className="btn btn-primary ms-4" id="-3" role="button" onClick={async () => onhandleAddToCart("Child-cuts", 100, "-3", "-33")}>Add</div>
                      < div className="ms-1" style={{ "display": "none" }} id="-33">
                        <i className="bi bi-dash-circle btn " onClick={async () => {
                          data.map((service, index) => {
                            if(service.service=="Child-cuts")
                            {
                            if ((service.qty) > 1) {
                              service.qty = service.qty - 1;
                              dispatch({ type: "UPDATE", service: "Child-cuts", qty: service.qty });
                            }
                            else if ((service.qty) === 1) {
                              service.qty = 0;
                              dispatch({ type: "UPDATE", service: "Child-cuts", qty: service.qty });
                              console.log(index)
                              dispatch({ type: "REMOVE", index:index })
                              document.getElementById(-3).style.display = "inline-block";
                              document.getElementById(-33).style.display = "none";
                            }
                          }
                          })

                        }
                        }></i>
                        {
                          data.map((service, index) => {
                            if(service.service==="Child-cuts")
                            {
                              console.log("hii")
                              return service.qty
                            }
                          })
                        }
                        <i className="bi bi-plus-circle btn" onClick={async () => {
                          {
                            data.map((service, index) => {
                              if(service.service=="Child-cuts")
                              {
                              service.qty = service.qty + 1
                              dispatch({ type: "UPDATE", service: "Child-cuts", qty: service.qty });
                            }})
                          }
                        }
                        } style={{ "position": "absolute" }}></i>
                      </div>
                    </div>
                  </div>
                </li>
                <>₹100</>
                
              </div>
            </ul>
          </div>
          {!visible && (
            <div className="container" style={{ "bottom": "40px", "right": "50px", "position": "fixed", "width": "250px", "textAlign": "center", "paddingBottom": "-50px" }}>
              <div className="row border rounded-3 py-2">
                <div className="col fs-4 fw-bold " style={{"marginLeft":"-60px"}}>
                {
                          data.map((service, index) => {
                            finalprice=finalprice+service.qty*service.price;
                            console.log(finalprice)
                          })

                }
                ₹{finalprice}
                </div>
                
              </div>
            </div>
          )
          }
          <div className="container" style={{ "bottom": "40px", "right": "0px", "position": "fixed", "width": "250px", "textAlign": "center", "paddingBottom": "-50px" }}>
              <div className="row  py-2">
                <div className="v col">
                  <div className="btn btn-primary fw-bold" role="button" onClick={() => setcartview(true)}>View Cart</div>
                </div>
              </div>
            </div>
          {cartview ? <Model onClose={() => setcartview(false)}><Cart vis={visible} /></Model> : null}
         
        </div>
      </div>
    </>
  )
}
