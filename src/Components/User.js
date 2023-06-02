import React, { Component } from 'react';
import Identicon from 'identicon.js';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Card from 'react-bootstrap/Card';



class User extends Component {

  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
 
  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    
    return (
      <div role="User" className="col-lg-12 ml-auto mr-auto" >
        <br></br>
        <br></br>
        <br></br>
        
        <h1 style={{marginLeft:'35rem',fontSize:'3.3rem'}}>Add your <span style={{color:'#b52264',fontSize:'3.3rem'}}>Riderequest</span> here...</h1>
        <form onSubmit={(event) => {
                event.preventDefault()
                const source = this.userSource.value
                const destination = this.userDestination.value
                const date = this.rideDate.value
                const time = this.rideTime.value
                this.props.rideReq(source,destination,date,time)
              }} >
                {/*<input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} />*/}
                  <div className="form-group mr-sm-2">
                    <br></br>
                    <Card bg="primary" text="white" style={{marginTop:'10px', paddingTop: '3rem', border: "8px solid #48081c",backgroundColor:"#48081c", boxShadow:'0 0 4px 2px #48081c',width:'60rem', marginRight: '50rem', paddingLeft: '1.7rem', paddingBottom: '3rem' ,marginLeft:'35rem',borderRadius:'7px'}}>

                      <input
                        id="userSource"
                        type="text" 
                        ref={(input) => { this.userSource = input }}
                        className="form-control"
                        placeholder="User source..."
                        required style={{ border: "4px solid #1b020a", backgroundColor: '#ffffff',  boxShadow: "0 0 3px 2px #1b020a",borderRadius: "9px", width: '45rem', paddingTop: '25px', paddingBottom: '17px', paddingLeft: '7px' ,marginTop:'55px',marginLeft:'75px',marginRight:'10px'}}/>

                      <br></br>

                        <input
                            id="userDestination"
                            type="text"
                            ref={(input) => { this.userDestination = input }}
                            className="form-control"
                            placeholder="User Destination..."
                            required style={{ border: "2px solid #1b020a", backgroundColor: '#ffffff', boxShadow: "0 0 3px 2px #1b020a", borderRadius: "9px", width: '45rem', paddingTop: '25px', paddingBottom: '17px', paddingLeft: '7px' ,marginTop:'45px',marginLeft:'75px',marginRight:'10px'}}/>
                        <br/>
                        <input
                        id="rideDate"
                        type="date"
                        ref={(input) => {this.rideDate = input}}
                        className = "form-control"
                        required style={{ border: "2px solid #1b020a", backgroundColor: '#ffffff', boxShadow: "0 0 3px 2px #1b020a", borderRadius: "9px",width: '45rem', paddingTop: '25px', paddingBottom: '17px', paddingLeft: '7px' ,marginTop:'45px',marginLeft:'75px',marginRight:'10px'}}/>
                        <br/>
                        <input
                        id="rideTime"
                        type="time"
                        ref={(input) => {this.rideTime = input}}
                        className = "form-control"
                        required style={{ marginBottom:'4rem',border: "2px solid #1b020a", backgroundColor: '#ffffff', boxShadow: "0 0 3px 2px #1b020a", borderRadius: "9px", width: '45rem', paddingTop: '25px', paddingBottom: '17px', paddingLeft: '7px' ,marginTop:'45px',marginLeft:'75px',marginRight:'10px'}}/>
                        <button type="submit" className="btn btn-primary btn-block btn-lg" style={{  backgroundColor: '#881549', borderRadius: "4px",fontSize:'40px', boxShadow: "0 0 5px 5px #ffffff", marginTop: '1rem', marginLeft: '19.7rem'}}>Upload</button>

                </Card>
                  </div>
              </form>

              {this.props.ride.map((ride_var, key) => {
                let acc = this.props.account
                let accs = acc.toString()
                if(accs.toLowerCase() == ride_var.rider.toLowerCase()){
                  return(
                    <Card bg="primary" text="white" style={{marginTop:'40px', paddingTop: '3rem', border: "8px solid #48081c",backgroundColor:"#48081c", boxShadow:'0 0 4px 2px #48081c',width:'130rem', marginRight: '1px', paddingLeft: '1.5rem', paddingBottom: '3rem' ,marginLeft:'1rem',borderRadius:'7px'}}>

                    <div className="card mb-4" style={{ color: "#037FFF" }}  key={key} >

                      <div className="card-header">

                        {/* <img
                          className='mr-2'
                          width='30'
                          height='30'
                          src={`data:image/png;base64,${new Identicon(ride_var.author, 30).toString()}`}
                        /> */}
                        <small className="text-muted" style={{fontSize:'25px'}}><b>Driver:&emsp;</b>{ride_var.author}</small>
                      </div>
                      <ul id="imageList" className="list-group list-group-flush">
                        <li className="list-group-item">
                        <form onSubmit={(event) => {
                          event.preventDefault()                        
                          let fare = ride_var.rideamount.toString()
                          let amount = window.web3.utils.toWei(fare, 'Ether')
                          this.props.rideAmount(ride_var.author,amount)
                          
                        }}
                        >
                            <p style={{fontSize:'32px', color:'#ffffff',marginLeft:'30px'}}>Source: {ride_var.rsource}</p>
                            <p style={{fontSize:'32px', color:'#ffffff',marginLeft:'30px'}}>Destination: {ride_var.rdestination}</p>
                            <p style={{fontSize:'32px', color:'#ffffff',marginLeft:'30px'}}>Date: {ride_var.rdate}</p>
                            <p style={{fontSize:'32px', color:'#ffffff',marginLeft:'30px'}}>Time: {ride_var.rtime}</p>
                            <p style={{fontSize:'32px', color:'#ffffff',marginLeft:'30px'}}>Rider: {ride_var.rider}</p>
                            <p style={{fontSize:'32px', color:'#ffffff',marginLeft:'30px'}}>Amount: {ride_var.rideamount.toString()} Ethers</p>
                            <button type="submit" className="btn btn-success btn-x btn-grp " style={{ width:'250px', backgroundColor: '#881549', borderRadius: "4px",fontSize:'30px', boxShadow: "0 0 5px 2px #ffffff", marginTop: '3rem', marginLeft: '53rem'}}>Pay</button>
                            </form>
  
                        </li>
                        
                      </ul>
                    </div>
                    </Card>
                  )
                }
                
              })}

              
                
                  {/* <Map google={this.props.google} onClick={this.onMapClicked}>
                    <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />
 
                      <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                          <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                          </div>
                      </InfoWindow>
                  </Map> */}
                
              
      </div>
      
    );
  }
}



// export default Maps;
//export default userclass;

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyDDsCWBRT7TbgBrNZ3rwGV5sojwLBllPic')
// })(User)

export default User

