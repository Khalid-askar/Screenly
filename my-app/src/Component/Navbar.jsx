import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import screenlyLogo from '../assets/Logo.png';


export default function Navbar({logindata,setLoginData}){
  let navigate =useNavigate()

  function LogOut() {
    localStorage.removeItem('usertoken')
    setLoginData(null)
    navigate('/')
  }

  return <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top bg-pink">
  <div className="container-fluid">
    <Link className="navbar-brand text-white d-flex align-items-center" to="">
  <img src={screenlyLogo} alt="Screenly" width="20" className="me-2" />
  <strong>Screenly</strong>
</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="tv">TV</Link>
        </li>
      </ul>

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       {logindata?  <li className="nav-item">
        <Link onClick={LogOut} className="nav-link text-white" to="">Logout</Link>
        </li>:<>
        <li className="nav-item">
          <Link className="nav-link text-white" to="">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="register">Register</Link>
        </li>
        </>}
        
      
      </ul>
    </div>
  </div>
</nav>

  </>
}
