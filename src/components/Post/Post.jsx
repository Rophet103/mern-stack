
import React, { Component } from 'react'
import './Post.css'
import Avatar  from '@mui/material/Avatar'
import postImage from '../../images/post.jpg';
import fb from '../../images/fb.png';

import love from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg'

export default class Post extends Component {

constructor(props){
  super();
  this.state = {
    commetList:[]
  }
}
componentDidMount(){
  this.getComment();
}
getComment = ()=>{
  let data = [
    {
      "username":"Otun",
      "commentId":"1234",
      "timestamp":"123456",
      "description":"i love React",
    },
    {
      "username":"williams",
      "commentId":"1234",
      "timestamp":"123456",
      "description":"i love React",
    },
    {
      "username":"my baby",
      "commentId":"1234",
      "timestamp":"123456",
      "description":"i love React",
    }
  ];
  this.setState({commetList:data})
}

  render() {
    return (
      <div className='post_container'>
          {/* header */}
          <div className='post_header'>
              <Avatar className = 'post_image' src = {postImage} />
              <div className='post_username'> {this.props.username} </div>
          </div>
          {/* user image */}
          <div>
          <img src={this.props.postImage} width = '615px' height = '420px' alt=''/>
          </div>
          {/* user analytics */}
          <div className='post_div'>
                 <div style={{"marginleft":"10px"}}>
                    <img src={love} className = 'post_reactimage'/>
                    <img src={comment} className = 'post_reactimage'/>
                     <img src={share} className = 'post_reactimage'/>

                 </div>
                 <div style={{"fontWeight":"bold" , "marginLeft":"20px"}}>
                    {this.props.likes} Likes
                </div>
               
          </div>
          {/* comments */}
          <div>
            {
              this.state.commetList.map((item, index)=>(
                <div className='post_comment'>{item.username}:{item.description}</div>
              )

              )
            }
          </div>
          <input type="text" className='postcomment_box' placeholder='Enter your comment here' />
  
      </div>
      
      
    



      
    )
  }
}
