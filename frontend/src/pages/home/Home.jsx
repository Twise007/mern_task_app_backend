import React from 'react';
import { RiProductHuntLine } from "react-icons/ri"
import { Link }from "react-router-dom";
import Homepic from '../../assets/home.jpg'

const home = () => {
  return (   
    <div>
        <div className="navbar" style={{top: '0px', position: 'sticky',background:"var(--color-green)",zIndex:'10', color:"var(--color-black)"}} >
        <div className="flex-1" >
            <b className="btn normal-case text-xl" style={{background:'var(--color-l-green)', cursor:"none"}}>
                <RiProductHuntLine  size={35} style={{ borderRadius:"50%", color:"var(--color-black)"}}/>
                <p style={{color:"var(--color-black)"}}>Inventory {"&"} App</p>
            </b>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link to='/register' style={{border:"1px solid", marginLeft:"10px", background:"var(--color-l-green)"}}>Register</Link></li>
                <li><Link to='/login' style={{border:"1px solid", marginLeft:"10px", background:"var(--color-l-green)"}}>Login</Link></li>
                <li><Link to='/dashboard' style={{border:"1px solid", marginLeft:"10px", background:"var(--color-l-green)"}}>Dashboard</Link></li>
            </ul>
        </div>
        </div>

        {/*Hero section */}
        <div className="hero min-h-screen" style={{backgroundImage: `url(${Homepic})`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div  className="hero-content text-center text-neutral-content" style={{}}>
                <div  className="max-w-md">
                <p className="mb-3" style={{color:'var(--color-white)', fontSize:"25px", fontFamily:"fantasy"}}><span style={{fontSize:"35px"}}>14 -</span> Brand owners</p>
                <p className="mb-3" style={{color:'var(--color-white)', fontSize:"25px", fontFamily:"fantasy"}}><span style={{fontSize:"35px"}}>23 -</span> Active users</p>
                <p className="mb-3" style={{color:'var(--color-white)', fontSize:"25px", fontFamily:"fantasy"}}><span style={{fontSize:"35px"}}>50 -</span> Partners</p>
                <button className="btn" style={{background:"var(--color-l-green)", color:'var(--color-black)'}}>
                    <Link to='/dashbord'>Free Trail 1 Month</Link>
                </button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default home