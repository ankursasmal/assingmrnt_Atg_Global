import React from 'react'
import google from './assets/google.png'
import facebook from './assets/facebook.png'
import seperate from './assets/seperate.png'
import lock from './assets/lock.png'

function Join() {
  return (
    <div className='d-flex' style={{flexDirection:'column',width:'100%'}}>
      <img src={google} alt=""  style={{padding:'1.5vw 0',width:'100%'}}/>
      <img src={facebook} alt="" style={{width:'100%'}}/>
      <img src={seperate} alt="" style={{paddingTop:'1.5vw',width:'100%'}} />
      <label for="newsletter1" class="visually-hidden">  </label>
            <input id="newsletter1" type="text" class="form-control w-80" placeholder="email "/>
            <label for="newsletter1" class="visually-hidden" style={{margin:'1.7vw 0'}}></label>
            <input id="newsletter1" type="text" class="form-control w-80" placeholder="password"/>

<div className='d-flex' style={{alignItems:'center',justifyContent:'space-between',padding:'1.5vw 0'}}>
<div style={{display:'flex',alignItems:'center'}}>
    <input type="checkbox" />
    <a style={{fontSize:'1vw',paddingLeft:'.75vw'}}>Remember me</a>
</div>
<div style={{display:'flex',alignItems:'center'}}>
<img src={lock} style={{width:'2vw',paddingRight:'.75vw'}} alt="" /> 
   <a style={{fontSize:'1vw'}}>Forgot password? </a>
</div>

</div>
<a style={{fontSize:'.8vw'}}>By continuing, you agree to our Terms of Service and Privacy Policy.</a>

<button className='btn btn-outline-secondary ' style={{fontSize:'1.3vw',marginTop:'1vw'}}> Agree And Continue</button>
    </div>
  )
}

export default Join
