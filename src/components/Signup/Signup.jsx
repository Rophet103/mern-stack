import React, { Component} from 'react'
import '../LoginPage/LoginPage.css';



export default class 
extends Component {
    render() {
        return(
            <div>
                <input className='loginpage_text' type="text" placeholder='Mobile Number or Email' />
                <input className='loginpage_text' type="text" placeholder='Full Name' />
                <input className='loginpage_text' type="text" placeholder='Username' />
                <input className='loginpage_text' type="password" placeholder='Password' />
                <button className='loginpage_button'>Sign UP</button>
        
            </div>
        )
    }
}