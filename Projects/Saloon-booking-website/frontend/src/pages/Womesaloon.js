import React from 'react'
import Navebar from '../components/Navebar'
import { Link } from 'react-router-dom'

export default function Womesaloon() {
  return (
    <>
    <div><div><Navebar></Navebar>
    <div className=" card text-center" style={{"transform":"none"}}>
  <div className="card-header">
    <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <Link className="nav-link " aria-current="true" to="../Man-Salon">Men Salons</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link active " to="../Women-Salon">Women Salons</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
      </li> */}
    </ul>
  </div>
  <div className="card-body">
  <p className="text-success text-center fs-2 mt-5">"<u><Link className="text-success" to="../Man-Salon">Arriving Soon ...</Link></u>"</p>

    {/* <Link to="#" className="btn btn-primary">Go somewhere</Link> */}
  </div>
</div>
    </div></div>
    </>
  )
}
