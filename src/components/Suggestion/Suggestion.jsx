import { Avatar } from '@mui/material';
import React, { Component } from 'react'
import './Suggestion.css'
import imageSrc from '../../images/pp1.png';


export default class Suggestion extends Component {

    
    constructor(props){
        super();
        this.state =  {
         
        }
    }


  render() {
    return (
      <div>

        <div className='suggestion_container'>
          <div className='suggestion_header'>
            <div>Suggestion for you</div>
          </div>

          <div className='suggestion_body'> 
            <div className='suggestion_friends'>
              <Avatar src = {imageSrc} className = "suggestion_images"  />
              <div className='suggestion_usernames'>Fashthetechguy</div>
            </div>
            <div className='suggestion_friends'>
              <Avatar src = {imageSrc} className = "suggestion_images"  />
              <div className='suggestion_usernames'>Zainab_otun</div>
            </div>
            <div className='suggestion_friends'>
              <Avatar src = {imageSrc} className = "suggestion_images"  />
              <div className='suggestion_usernames'>moh</div>
            </div>
            <div className='suggestion_friends'>
              <Avatar src = {imageSrc} className = "suggestion_images"  />
              <div className='suggestion_usernames'>Liam</div>
            </div>
            <div className='suggestion_friends'>
              <Avatar src = {imageSrc} className = "suggestion_images"  />
              <div className='suggestion_usernames'>mz_lawal</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}