import React, { useRef, useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Tittle from '../Components/Tittle';
import './Login.css';

function LoginPage() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      sessionStorage.setItem('login', emailRef.current.value);
      await login(emailRef.current.value, passwordRef.current.value)

      history.push("/dashboard")

      console.log(sessionStorage.getItem('login'))
      //setEmail({email:emailRef.current.value})
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    // <>
    <div className="LoginPage"  >
      <Tittle title={'Login'} span={'Login'} />
      <div className="container">
        <div className="form-box" style={{ height:"45rem",width: '48rem', border: "5px solid #dfecf2", boxShadow: "0 0 7px 3px #dfecf2" }}>
          <div className="header-form">
            <h4 className="text-primary text-center" ><i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
            <form onSubmit={handleSubmit}>
              {error && <Alert variant="danger">{error}</Alert>}

              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-user"></i></span>
                </div>
                <input type="email" className="form-control" ref={emailRef} placeholder="Email" style={{ backgroundColor: '#ffffff', border: "5px solid #ffffff", boxShadow: "0 0 1px 1px #ffffff", borderRadius: "4px", width: '35rem', paddingTop: '22px', paddingBottom: '15px', paddingLeft: '5px', marginTop: '4rem', marginLeft: '55px' }} />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fa fa-lock"></i></span>
                </div>
                <input type="password" className="form-control" ref={passwordRef} placeholder="Password" style={{ backgroundColor: '#ffffff', border: "5px solid #ffffff", boxShadow: "0 0 1px 1px #ffffff", borderRadius: "4px", width: '35rem', paddingTop: '22px', paddingBottom: '15px', paddingLeft: '5px', marginTop: '4rem', marginLeft: '55px' }} />
              </div>
              {/* <BrowserRouter> */}
              {/* <Link to="/bookride"> */}
              <button type="submit" className="btn btn-secondary " style={{ fontSize: '38px', width: '18rem', backgroundColor: '#040404', borderRadius: "6px", boxShadow: "0 0 11px 3px #ffffff", marginTop: '6rem', marginLeft: '12.5rem' }}>LOGIN</button>
              {/* </Link> */}
              {/* <Route path="/bookride" exact component={BookRide} /> */}

              {/* </BrowserRouter> */}
              <div className="message">
                {/* <div><input type="checkbox" /> Remember ME</div> */}
                <div style={{fontSize: '2.3rem', marginLeft: '11.5rem', marginTop: '2rem', marginBottom: '5rem' }}><a href="/"><b>New registeration</b></a></div>
              </div>
            </form>
            {/* <div className="social">
              <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
              <a href="https://twitter.com/login"><i className="fab fa-twitter-square"></i></a>
              <a href="#"><i className="fab fa-google"></i></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>

  )
}
export default LoginPage;