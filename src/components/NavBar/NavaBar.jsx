import React from "react";
import './NavaBar.css'
import Grid from '@mui/material/Grid'
import inst_logo from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg';
import Avatar from '@mui/material/Avatar';
import pp from '../../images/pp1.png';


export default function NavaBar() {
  return (
    <div className="navbar_Content">
        <Grid container>
            <Grid xs = {2}></Grid>
            <Grid xs = {4}>
                <img className="navbar_logo" src={inst_logo} width= "105px"/>
            </Grid>
            <Grid xs = {3}>
                <input className="navbar_searchBar" type="text" placeholder="Search" />
            </Grid>
            <Grid xs = {3} style = {{"display":"flex"}}>
            <img className="navbar_img" src={home} width = "25px" />
            <img className="navbar_img" src={message} width = "25px" />
            <img className="navbar_img" src={find} width = "25px" />
            <img className="navbar_img" src={react} width = "25px" />
            <Avatar src={pp} className="navbar_img" style={{"maxWidth":"25px", "maxHeight":"25px"}}/>
            </Grid>

            <Grid xs = {1} ></Grid>



        </Grid>
    

    </div>
  )
}
