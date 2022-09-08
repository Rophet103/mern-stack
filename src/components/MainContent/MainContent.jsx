import React from 'react'
import Grid from '@mui/material/Grid'
import './MainContent.css'
import StatusBar from '../StatusBar/StatusBar'
import MainPage from '../MainPage/MainPage'
import InfoSection from '../InfoSection/InfoSection'
import Suggestion from '../Suggestion/Suggestion'

export default function MainContent() {
  
  return (
    <div>
        <Grid container>
            <Grid item xs={2}>
            
            </Grid>
             <Grid item xs = {6}>
                <StatusBar/>
                <MainPage/>
            </Grid>
            <Grid item xs = {2}>
                <InfoSection/>
                <Suggestion/>

            </Grid>
            <Grid item xs={2}>
              
             
            </Grid>

        </Grid>
    </div>
  )
}
