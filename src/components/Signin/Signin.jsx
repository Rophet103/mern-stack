import React,{Component} from 'react'
import '../LoginPage/LoginPage.css';


export default class Signin extends Component{
    render(){
        return(
            <div>
                <input className='loginpage_text' type="text"/>
                <input className='loginpage_text' type="password"/>
                <button className='loginpage_button'>Sign in</button>

            </div>
        )
    }
    
}