import React, { Component } from 'react';
import Identicon from 'identicon.js';
import Card from 'react-bootstrap/Card';

class Requests extends Component {


  //Rec
  handleReject = (user) => {
    // Prompt for confirmation
    const confirmReject = window.confirm("Are you sure you want to reject this request?");
    
    if (confirmReject) {
      // Implement rejection logic here
      console.log("Rejected user:", user);
      // Perform any additional actions or validations as needed
    }
  };


  render() {
    return (

      <div className="container-fluid mt-5">
        <h3 align='center' style={{ textDecoration: 'underline', marginRight: '8rem', color: '#b52264', fontSize: '4.5rem' }}>Ride Requests</h3>
        {this.props.users.map((users_var, key) => {
          // if(acc_verified){
          return (
            <div className="card mb-4" style={{ color: "#037FFF" }} key={key} >
              <Card bg="primary" text="white" style={{ marginTop: '50px', paddingTop: '3rem', border: "1px  #ffffff", backgroundColor: "#600a26", boxShadow: '0 0 8px 2px #ffffff', width: '90rem', marginRight: '1px', paddingLeft: '1.5rem', paddingBottom: '3rem', marginLeft: '18rem', borderRadius: '1px' }}>

                <div className="card-header">
                  <img
                    className='mr-2'
                    width='30'
                    height='30'
                    src={`data:image/png;base64,${new Identicon(users_var.author, 30).toString()}`}
                    style={{ marginTop: '30px', marginLeft: '2.1rem', fontSize: '28px' }}
                  />
                  <small className="text-muted" style={{ marginLeft: '0.5rem', fontSize: '28px' }}>{users_var.author}</small>
                </div>
                <ul id="imageList" className="list-group list-group-flush">
                  <li className="list-group-item">
                  

                    <form onSubmit={(event) => {
                      event.preventDefault()

                      const source = users_var.source
                      const destination = users_var.destination
                      const date = users_var.date
                      const time = users_var.time
                      console.log(users_var.time)
                      const rider = users_var.author
                      const amount = this.rideamount.value
                      this.props.uploadRide(source, destination, date, time, rider, amount)
                    }} >

                      <p style={{ marginTop: '10px', fontSize: '32px', color: '#ffffff', marginLeft: '70px' }}><b>Source: </b>{users_var.source}</p>
                      <p style={{ fontSize: '32px', color: '#ffffff', marginLeft: '70px' }}><b>Destination: </b>{users_var.destination}</p>
                      <p style={{ fontSize: '32px', color: '#ffffff', marginLeft: '70px' }}><b>Date: </b>{users_var.date}</p>
                      <p style={{ fontSize: '32px', color: '#ffffff', marginLeft: '70px' }}><b>Time: </b>{users_var.time}</p>
                      <p style={{ fontSize: '32px', color: '#ffffff', marginLeft: '70px' }}><b>Amount:</b></p>
                      <input
                        id="rideamount"
                        type="number"
                        ref={(input) => { this.rideamount = input }}
                        className="form-control"
                        placeholder="Ride amount"
                        required style={{ marginLeft: '70px', fontSize: '40px', border: "1px  #ffffff", boxShadow: "0 0 2px 3px #ffffff", borderRadius: "4px", width: '35rem', marginTop: '20px', marginBottom:"10px" }} />
                         <div className="btn-group">
                        <button type="submit" className="btn btn-success btn-x btn-grp mr-2" style={{marginRight:"10rem",rginLeft: '70px',display: 'inline-block', width: '250px', backgroundColor: '#3F704D', borderRadius: "1px", fontSize: '35px', boxShadow: "0 0 7px 3px #ffffff", marginTop: '5rem', marginLeft: '22rem'}} >Accept</button>   
                        <button type="submit" className="btn btn-danger btn-x btn-grp mr-2" style={{ buttonSpacing: '50px', display: 'inline-block', width: '250px', backgroundColor: '#881549', borderRadius: "1px", fontSize: '35px', boxShadow: "0 0 7px 3px #ffffff" }} onClick={()=> this.handleReject(users_var)}>Reject</button>
                      
                         </div>
                    </form>
                    {/* <li> style={{ marginRight: '4rem', display: 'inline-block', width: '250px', backgroundColor: '#3F704D', borderRadius: "1px", fontSize: '35px', boxShadow: "0 0 7px 3px #ffffff", marginTop: '5rem', marginLeft: '25rem' }}</li>  <button type="submit" className="btn btn-success btn-x btn-grp mr-2" >Accept</button> */}

                  </li>

                </ul>
               

              </Card>
            </div>
          )
          // }

        })}

        <br />
        <br />






      </div>

    );
  }
}

export default Requests;