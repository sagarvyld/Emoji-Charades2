import React from 'react'
import GuessBox from '../components/GuessBox'
import profile from "../assets/Profile.png" 
import { useState,useEffect } from 'react'
const Landingpage = () => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [style,setstyle]=useState({});
    useEffect(()=>{
        if(isEmpty){
            setstyle({opacity:0.5});
        }else{
            setstyle({});
        }
    },[isEmpty]);
  return (
    <div className='app_container'>
      <div className="background_svg">
      <svg width="360" height="250" viewBox="0 0 360 250" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-12 -97C16.3333 -95.3333 137.593 89.8627 95 62.5C12.5 9.5 -5.5 80.5 43.5 108.5C108 145.357 218.245 240 144 240C95 240 113 137.5 191.5 159.5C270 181.5 313.387 225.588 336.5 172.5C368.5 99 257.5 52 311 -23C360.614 -92.5529 388 -32 388 0.5" stroke="#1D2939" stroke-width="19"/>
</svg>
      

      </div>
      <div className="upper_buttons">
    <button className="back_button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.165 11.9934L13.1634 11.6393C13.1513 10.2348 13.0666 8.98174 12.9206 8.18763C12.9206 8.17331 12.7613 7.38572 12.6599 7.12355C12.5006 6.74463 12.2126 6.42299 11.8515 6.2192C11.5624 6.0738 11.2592 6 10.9417 6C10.6922 6.01157 10.2806 6.13714 9.98692 6.24242L9.74283 6.33596C8.12612 6.97815 5.03561 9.07656 3.85199 10.3598L3.76473 10.4495L3.37527 10.8698C3.12982 11.1915 3 11.5847 3 12.0077C3 12.3866 3.11563 12.7656 3.3469 13.0718C3.41614 13.171 3.52766 13.2983 3.62693 13.4058L4.006 13.8026C5.31046 15.1243 8.13485 16.9782 9.59883 17.5924C9.59883 17.6057 10.5086 17.9857 10.9417 18H10.9995C11.6639 18 12.2846 17.6211 12.6021 17.0086C12.6888 16.8412 12.772 16.5132 12.8352 16.2252L12.949 15.6813C13.0788 14.8067 13.165 13.465 13.165 11.9934ZM19.4967 13.5183C20.3269 13.5183 21 12.8387 21 12.0004C21 11.1622 20.3269 10.4825 19.4967 10.4825L15.7975 10.8097C15.1463 10.8097 14.6183 11.3417 14.6183 12.0004C14.6183 12.6581 15.1463 13.1912 15.7975 13.1912L19.4967 13.5183Z" fill="white"/>
</svg>
</button>
<button className="skip_button">
    Skip
</button>
    </div>
      <div className="heading_above">
        <p className='you_got_a'>You Got a</p>
        <p className='Emoji_charades'>Emoji charades</p>
      </div>
      <GuessBox isEmpty={isEmpty} setIsEmpty={setIsEmpty}/>
      {(
        <div className="Lie_Information">
          <div className="User_picture">
            <img src={profile} alt="User" />
          </div>
          <div className="User_text">
          Wow !! that’s a tough one and I have managed something let’s see if you get it
          </div>
        </div>
      )}
      {(
        <button className="SpotPage_Submit" >
            <p style={style}>Send</p>
        </button>
      )}
    </div>
  )
}

export default Landingpage
