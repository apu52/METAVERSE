import './Settings.css'
import React from 'react'

const Settings = () => {
  return (
    <div id="main" class=" bord mainbody">  
       {/* <button id="ham">&#9776;</button>--> */}
  

      <h3 class="tab">Today's Customer Transactions</h3>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>No.</th>
            <th>Customer's ID</th>
            <th>Customer's Name</th>
            <th>Item</th>
            <th>Rate</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody class="rovhov">
        <tr>
            <td>1</td>
            <td>121</td>
            <td>Yash Ainapure</td>
            <td>Sand</td>
            <td>300</td>
            <td>6000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>122</td>
            <td>Radheya Patil</td>
            <td>Steel</td>
            <td>860</td>
            <td>10320</td>
        </tr>
        <tr>
            <td>3</td>
            <td>123</td>
            <td>Pruthwiraj Sawant</td>
            <td>Cement</td>
            <td>1000</td>
            <td>20000</td>
        </tr>
        </tbody>
      </table>


      <h3 class="tab">Today's Suppliers Transactions</h3>
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th>No.</th>
            <th>Suppliers's ID</th>
            <th>Suppliers's Name</th>
            <th>Item</th>
            <th>Rate</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody class="rovhov">
        <tr>
            <td>1</td>
            <td>121</td>
            <td>Yash Ainapure</td>
            <td>Sand</td>
            <td>300</td>
            <td>6000</td>
        </tr>
        <tr>
            <td>2</td>
            <td>122</td>
            <td>Radheya Patil</td>
            <td>Steel</td>
            <td>860</td>
            <td>10320</td>
        </tr>
        <tr>
            <td>3</td>
            <td>123</td>
            <td>Pruthwiraj Sawant</td>
            <td>Cement</td>
            <td>1000</td>
            <td>20000</td>
        </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default Settings