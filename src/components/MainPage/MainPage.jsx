
import React, { Component } from 'react'
import Post from '../Post/Post'
import './MainPage.css'


export default class MainPage extends Component {
  constructor(props){
    super();
    this.state = {
      postArray:[]
    }
  }


  componentDidMount(){
    this.getPost();
  }
  getPost = ()=>{
    let data = [
      {
        "postId":"1234",
        "username":"Fashthetechguy",
        "postImgUrl":"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
        "timesstamp":"12345",
        "likes":"1234",
      },

      {
        "postId":"1234",
        "username":"Fashthetechguy",
        "postImgUrl":"https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?cs=srgb&dl=pexels-ella-olsson-3026808.jpg&fm=jpg",
        "timesstamp":"12345",
        "likes":"1234",
      },
      {
        "postId":"1234",
        "username":"Rofiat",
        "postImgUrl":"https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?cs=srgb&dl=pexels-pixabay-237272.jpg&fm=jpg",
        "timesstamp":"12345",
        "likes":"1234",
      }
    ];

    this.setState({postArray:data})
  }
  render() {
    return (
      <div>

        {
          this.state.postArray.map(( item,index)=>(

            <Post id = {item.postId}  username = {item.username} postImage = {item.postImgUrl} likes = {item.likes} />

          ))
        }
  


      </div>
    )
  }
}
