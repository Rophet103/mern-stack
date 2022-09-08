import React, { Component } from 'react'
import './InfoSection.css'
import imageSrc from '../../images/pp1.png'
import  Avatar from '@mui/material/Avatar';

export default class InfoSection extends Component {

    constructor(props){
        super();
        this.state = {

        }
    }
  render() {
    return (
      <div className='info_container'>
          <Avatar className="info_image" src = {imageSrc}/>
          <div className='info_content'>
            <div className='info_username'> Fashthetechguy </div>
            <div className='info_description'> I will mentor you on React</div>
          </div>

      </div>    
    )
  }
}
