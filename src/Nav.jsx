import React from 'react'
import Navimg from './assets/Navimg.png'
import Layer2 from './assets/Layer2.png'
import Hobbies from './assets/Hobbies.png'
import cart from './assets/cart.png'
import notification from './assets/notification.png'
import bookmark from './assets/bookmark.png'
import arrow from './assets/arrow.png'
import search from './assets/search.png'
import menu from './assets/menu.png'
import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <div className='container pt-2 pb-2 pt-md-3 pb-md-3'>
<div className='d-none d-md-block'>
    <div className='  d-flex  align-items-center  justify-content-between' >
<img src={Navimg} alt="" style={{width:'15vw'}} />
<div className='d-none d-md-block'> 
<div  className="d-flex flex-column flex-sm-row  " style={{width:'22vw'}}>
            <label for="newsletter1"  className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text"  className="form-control  " placeholder="Email address"/>
            <button className='rounded-end' style={{backgroundColor:'#8064A2'}} type="button">Invite</button>
          </div>
          </div>
          <div className='d-none d-md-block'> 

          <div className='d-flex justify-content-center align-items-center'  >
<div className='d-flex' style={{alignItems:'center',margin:'0 1.5vw'}}>
<img src={Layer2} style={{width:'2vw'}} alt="" />
<div  className="dropdown">
  <button  className="btn " style={{outline:'none',fontSize:'1.2vw'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Explore  </button>
  <ul  className="dropdown-menu">
    <li><a  className="dropdown-item" href="#">Action</a></li>
    <li><a  className="dropdown-item" href="#">Another action</a></li>
    <li><a  className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<img src={arrow}style={{width:'2vw'}} alt="" />
</div>
<div className='d-flex' style={{alignItems:'center'}}>
<img src={Hobbies} style={{width:'2vw'}} alt="" />
<div  className="dropdown">
  <button  className="btn   " style={{outline:'none',fontSize:'1.2vw'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Hobbies  </button>
  <ul  className="dropdown-menu">
    <li><a  className="dropdown-item" href="#">Action</a></li>
    <li><a  className="dropdown-item" href="#">Another action</a></li>
    <li><a  className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
<img src={arrow}style={{width:'2vw'}} alt="" />

<img src={bookmark} style={{width:'2vw',margin:'0 1.5vw'}} alt="" />
<img src={notification} style={{width:'2vw'}} alt="" />
<img src={cart} style={{width:'2vw',margin:'0 1.5vw'}} alt="" />
<Link to='/signin'> <button className='btn btn-outline-primary rounded'>Signin</button></Link>
</div>
      </div> 
          </div>
          
<div>

</div>
</div>
</div>
<div className='d-block d-md-none'> 
<div  className='d-flex justify-content-between align-items-center'> 
<img src={Navimg} alt="" style={{width:'25vw'}} />

          <div className='d-flex align-items-center'>
          <img src={search} style={{width:'3vw'}} alt="" />
          <img src={notification} style={{width:'3vw',padding:'2vw 0'}} alt="" />
          <img src={menu} style={{width:'3vw'}} alt="" />
</div>
</div>
</div>
    </div>
  )
}

export default Nav
