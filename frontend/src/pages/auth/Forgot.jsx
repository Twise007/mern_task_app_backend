import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {toast} from "react-toastify";
import { forgotPassword, validateEmail } from '../../services/authService';

const Forgot = () => {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault()

    if (!email) {
      return toast.error("Please enter an email")
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email")
    }

    const userData = {
      email,
    };

    await forgotPassword(userData)
    setEmail("")
  }

  return (
  <div className="hero min-h-screen" style={{background:"var(--color-l-green)"}}>
    <div className="hero-content flex-col " style={{background:"var(--color-l-green)"}}>
      <div className="text-center" style={{background:"var(--color-l-green)", color:"var(--color-black)"}}>
        <h1 className="text-5xl font-bold" style={{background:"var(--color-l-green)"}}>Forgot Password!</h1>
        <p className="py-6" style={{background:"var(--color-l-green)"}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <form onSubmit={forgot}>
      <div className="card shadow-2xl" style={{width:'25pc'}} >
        <div className="card-body ">
          <div className="form-control " >
            <label className="label">
              <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Email</span>
            </label>
            <input type="email" placeholder='Email' required name='email' value={email} onChange= {(e) => setEmail(e.target.value)} className="input input-bordered mb-2" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
          </div>
          <div className="form-control mb-2">
            <button type='submit' className="btn" style={{background:"var(--color-green)", color:"var(--color-white)", fontSize:"12px"}}>Get reset email link</button>
          </div>
            <Link to="/" className="label-text-alt link link-hover mb-2" style={{fontSize:"12px", color:"var(--color-black)"}}>- Home</Link>
            <Link to="/login" className="label-text-alt link link-hover mb-2" style={{fontSize:"12px", color:"var(--color-black)"}}>- Login</Link>
        </div>
      </div>
      </form>
    </div>
  </div>
  )
}

export default Forgot