
import Grid from '@mui/material/Grid';
import React, {Component} from 'react';
import inst_image from '../../images/9364675fb26a.svg';
import inst_logo from '../../images/logoinsta.png';
import fblogo from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';


import './LoginPage.css';
import Signin from '../Signin/Signin';
import Signup from '../Signup/Signup';


export default class LoginPage extends Component {
    constructor(props){
        super();
        this.state = {
            isLogin :true
        }
    }

    changeLogin= ()=> {
        if(this.state.isLogin)
          this.setState({isLogin: false})
        else
        this.setState({isLogin: true})
    }




  render(){
  return (
    <div>
        <Grid container>
        <Grid item xs ={3}>        </Grid>   

        <Grid item xs = {6}>
            <div className='Loginpage_main'>
                <div>
                <img src ={inst_image} width = "454px"/>
                </div>
                <div>
                    <div className='Loginpage_rightcomponent'>
                        <img className='Loginpage_logo' src ={inst_logo}/>

                        <div className='loginPage_Signin'>
                            {
                                this.state.isLogin ? <Signin/> : <Signup/>
                            }
                        
                            

                            <div className='login_ordiv'>
                                <div className='login_dividor'></div>
                                <div className='login_or'>OR</div>
                                <div className='login_dividor'></div>

                            </div>

                            <div className='login_fb'>
                              <img src = {fblogo} width ='15px' style={{'marginRight':'15px'}} /> Login with facebook</div>
                            <div className='login_forget'>Forget Password</div>

                            <div className='loginpage_signupoption'>
                            {
                                this.state.isLogin ?
                            
                                <div className='loginpage_signin'>
                                    have an account  <span onClick={this.changeLogin} style={{'fontWeight':'bold','color':'#0395f6'}}>Sign in</span>
                                </div>:

                                <div className='loginpage_signup'>
                                Dont have an account <span onClick={this.changeLogin} style={{'fontWeight':'bold','color':'#0395f6'}}>Sign UP</span>
                                </div>
                            
                            }
                            </div>
  

                            <div className='loginpage_downloadSection'>
                                <div>Get the App</div>
                                <div className='loginpage_downloadOption'>
                                    <img className='loginpage_dwImg' src={appstore} width = "136px"/>
                                    <img className='loginpage_dwImg' src={playstore} width = "136px"/>

                                </div>
                            </div>




                        </div>
                    </div>

                    <div>
                        <div></div>
                    </div>
                </div>
            </div>
        </Grid>
        <Grid item xs ={3}>
        </Grid>
        </Grid>
    </div>
    
  )
  }
}