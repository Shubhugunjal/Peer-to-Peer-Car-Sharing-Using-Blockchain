import React from 'react';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
// import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../styles/_typography.scss';
import im1 from "../img/image3.jpg"
import im2 from "../img/image4.jpg"

function HomePage() {
  return (
    <div className="HomePage" >
      <header className="hero" style={{ width:'100rem',marginLeft: '30rem',marginBottom:"1rem" }}>
        <h1 className="hero-text">
          Welcome to
          <span> GO-CAR   </span>
        </h1>
        <p className="h-sub-text" >
          Have an amazing ride through smart contracts !
        </p>
        <div className="icons" >


          <br />

          <Card bg="primary" text="white" style={{ marginLeft:'rem',width: '45rem', marginRight: '20px', marginTop: '30px',marginBottom:'3.5rem' }}>
            <Card.Header> </Card.Header>
            <Card.Body style={{ height: '24rem', border: "2px solid #037fff", backgroundColor: '#0b6dcf', boxShadow: "0 0 7px 3px #4d90fc", borderRadius: "4px" }}>
              <Card.Title style={{ fontSize: '35px', letterSpacing: '3px', paddingTop: '3rem', paddingLeft: '3rem' }}><b>DRIVER REGISTRATION</b></Card.Title>
              <Card.Text style={{ fontSize: '30px', letterSpacing: '2px', paddingLeft: '3rem', paddingTop: '1rem' }}>New driver? Register before you drive!!
                <br />
                <Link to="/driversignup">
                  <button className="btn btn-secondary btn-block" style={{ fontSize: '36px', marginBottom: '2rem', marginTop: '4rem', backgroundColor: '#3a3848', marginLeft: '12.5rem', borderRadius: "4px", boxShadow: "0 0 8px 6px #4d90fb", marginBottom: '50px' }}> DRIVER?</button>
                </Link>
              </Card.Text>

            </Card.Body>
          </Card>
          <Card bg="info" text="white" style={{ width: '45rem', marginLeft: '20px', marginTop: '30px',marginBottom:'3.5rem' }}>
            <Card.Header> </Card.Header>
            <Card.Body style={{ height: '24rem', border: "2px solid #037fff", backgroundColor: '#049fca', boxShadow: "0 0 7px 3px #41d0f8", borderRadius: "4px" }}>
              <Card.Title style={{ fontSize: '35px', letterSpacing: '3px', paddingTop: '3rem', paddingLeft: '3rem' }}><b>RIDER REGISTRATION</b></Card.Title>
              <Card.Text style={{ fontSize: '30px', letterSpacing: '2px', paddingLeft: '3rem', paddingTop: '1rem' }}>
                New Rider? Register before you ride!!
                <br />
                <Link to="/ridersignup">
                  <button className="btn btn-secondary btn-block" style={{ fontSize: '36px', marginBottom: '2rem', marginTop: '4rem', backgroundColor: '#3a3848', marginLeft: '12.5rem', borderRadius: "4px", boxShadow: "0 0 8px 7 #41d0f8", marginBottom: '50px' }}> RIDER?</button>
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <br />
          <br />
        </div>
      </header>



      <hr style={{ width: "140rem", marginLeft: "300px"}}></hr>
      <h1 className="common-heading" style={{fontSize:'50px' ,  marginTop: '1rem', color: 'white', marginLeft: '70rem' }}>Our Team Members</h1>


      <Card bg="info" text="white" style={{ width: '65rem', marginLeft: '39rem', marginTop: '30px' }}>
        <Card.Body style={{
          position: "absolute",
          paddingRight: '4px', height: '24rem', border: "20px solid #ffffff", backgroundColor: 'white', boxShadow: "0 0 2px 7px #41d0f8", borderRadius: "15px"
        }}>
          <img style={{ marginTop: '1px' }}
            src={im2} alt="Card Image" height={270} width={320} />

          <h1 className='tit_one' style={{ color: 'black', fontSize: '30px' }}>Aparana Patil</h1>
          <p className='des' style={{ color: 'blue', fontSize: '20px' }}><b>Professor </b></p>

        </Card.Body>
      </Card>

      <Card bg="info" text="white" style={{ width: '65rem', marginTop: '30px', marginLeft: '75rem', }}>
        <Card.Body style={{
          position: "absolute",
          paddingRight: '4px', height: '24rem', border: "20px solid #ffffff", backgroundColor: 'white', boxShadow: "0 0 2px 7px #41d0f8", borderRadius: "15px"
        }}>
          <img
            src={im2} alt="Card Image" height={270} width={320} />
          <h1 className='tit_one' style={{ color: 'black', fontSize: '30px' }}>Shubhangi gunjal</h1>
          <p className='des' style={{ color: 'blue', fontSize: '20px' }}><b>BlockChain Developer</b></p>
        </Card.Body>
      </Card>

      <Card bg="info" text="white" style={{ marginLeft: '110rem', width: '65rem', marginTop: '30px' }}>
        <Card.Body style={{
          position: "absolute",
          paddingRight: '4px', height: '24rem', border: "20px solid #ffffff", backgroundColor: 'white', boxShadow: "0 0 2px 7px #41d0f8", borderRadius: "15px"
        }}>
          <img
            src={im1} alt="Card Image" height={270} width={320} />
          <h1 className='tit_one' style={{ color: 'black', fontSize: '30px' }}>Rutuja Pharande</h1>
          <p className='des' style={{ color: 'blue', fontSize: '20px' }}><b>Web Developer</b></p>
        </Card.Body>
      </Card>

      {/* <div className="container" style={{ width: '161rem' }}> */}

      <div className="container" style={{ width: '161rem' }}>

        <iframe className='iframe'
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.9819898810492!2d73.76539687479284!3d18.57485068252927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b949794ed0bd%3A0x56624695f81f245f!2sGS%20Moze%20College%20Of%20Engineering%20BALEWADI%20PUNE-45!5e0!3m2!1sen!2sin!4v1684642202631!5m2!1sen!2sin"
          width="1300" loading="lazy" referrerpolicy="no-referrer-when-downgrade" >
        </iframe>

        <form
          action="https://formspree.io/f/xrgvvzyg"
          method="POST"
          className="contact-inputs">
          <h2 className="common-heading" style={{ fontSize: '70px', marginLeft: '15rem', marginRight: '10rem' }}>Feel Free to Contact us</h2>
          <div style={{ fontSize: '60px', marginLeft: '15rem' }}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required style={{ border: "2px solid #037fff", backgroundColor: '#ffffff', boxShadow: "0 0 1px 1px #41d0f8", borderRadius: "10px", width: '40rem', paddingTop: '25px', paddingBottom: '10px', paddingLeft: '7px', marginTop: '80px', fontSize: '30px' }}
            />
            <br />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required style={{ border: "2px solid #037fff", backgroundColor: '#ffffff', boxShadow: "0 0 1px 1px #41d0f8", borderRadius: "10px", width: '40rem', paddingTop: '25px', paddingBottom: '7px', paddingLeft: '7px', marginTop: '2rem', fontSize: '30px' }}
            />
            <br />
            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required style={{ fontFamily:"sans-serif",fontSize:"30px",border: "2px solid #037fff", backgroundColor: '#ffffff', boxShadow: "0 0 1px 1px #41d0f8", borderRadius: "10px", width: '40rem', paddingTop: '25px', paddingBottom: '10px', paddingLeft: '7', marginTop: '2rem' }}></textarea>
            <br />

            <button className="btn btn-secondary btn-block" type="submit" value="send" style={{ marginLeft: '13rem', backgroundColor: '#037fff', width: '13rem', border: "2px solid #037fff", boxShadow: "0 0 3px 4px #41d0f8", borderRadius: "4px", fontSize: '30px' }} >SEND</button>
          </div>
        </form>
        {/* </div> */}
      </div>


      <footer className="footers">
        
        <div>
          <p>PRIVACY POLICY          |      TERMS & CONDITIONS</p>
        </div>
      </footer>
    </div>
  )
}

export default HomePage;