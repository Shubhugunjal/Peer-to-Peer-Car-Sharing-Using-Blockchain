import React, { useRef, useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Tittle from "../Components/Tittle"

export default function RiderSignupPage() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()


    emailRef.current.value = emailRef.current.value + "@ridercryptridez.com"
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/login")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="SignupPage" style={{ marginTop:'60px', paddingTop: '3rem', border: "5px solid #037fff", boxShadow: "0 0 10px 2px #037fff", marginRight: '32rem', paddingLeft: '1.7rem', paddingBottom: '3rem' ,marginLeft:'30rem'}}>
        <Tittle title={ 'Rider Sign Up'} span={'Rider'} />

        <div className="signup-container">
          <div className="signup-form-box">
            <div className="header-form">
              <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
              <div className="image">
              </div>
            </div>
            <div className="body-form">
              <form onSubmit={handleSubmit}>
                {error && <Alert variant="danger">{error}</Alert>}

                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Email" ref={emailRef} style={{ border: "4px solid #037fff", backgroundColor: '#ffffff', boxShadow: "0 0 3px 2px #037fff", borderRadius: "9px", width: '35rem', paddingTop: '20px', paddingBottom: '18px', paddingLeft: '7px' ,marginTop:'45px',marginLeft:'45px',marginRight:'10px'}} />
                  <span className="input-group-text" id="basic-addon2" style={{fontSize:'40px'}}>@ridercryptridez.com</span>
                </div>

                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" ref={passwordRef} id="password" style={{ border: "4px solid #037fff", backgroundColor: '#ffffff', boxShadow: "0 0 3px 2px #4d90fc", borderRadius: "9px", width: '35rem', paddingTop: '20px', paddingBottom: '18px', paddingLeft: '7px' ,marginTop:'23px',marginLeft:'45px'}} />
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Confirm Password" ref={passwordConfirmRef} id="confirmpassword" style={{ border: "4px solid #037fff", backgroundColor: '#ffffff', boxShadow: "0 0 3px 2px #4d90fc", borderRadius: "9px", width: '35rem', paddingTop: '20px', paddingBottom: '18px', paddingLeft: '7px' ,marginTop:'23px',marginLeft:'45px'  }} />
                </div>
                <button type="submit" className="btn btn-secondary btn-block" style={{border: "3px solid #ffffff",fontSize:'30px', backgroundColor: '#037fff', borderRadius: "4px", boxShadow: "0 0 7px 2px #ffffff", marginTop: '4rem', marginLeft: '54px' }}><b>SIGN UP</b></button>
                <div className="message">
                  <div style={{ marginTop: '7px', marginLeft: '53px' ,fontSize:'35px'}}><a href="/login">Already registered?</a></div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </>
  )
} 