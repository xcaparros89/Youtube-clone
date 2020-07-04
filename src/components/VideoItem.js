import React from 'react'
import {Grid, Paper, Typography} from '@material-ui/core'

const VideoItem = ({video, onVideoSelect}) =>{
    return (
        <Grid item xs={12}>
            <Paper style ={{display:'flex', alignItems:'center', cursor: 'pointer', backgroundColor:'rgb(124, 124, 170)', color:'rgb(211, 211, 226)'}} onClick={()=>onVideoSelect(video)}>
                <img style={{marginRight: '20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    )
}

export default VideoItem