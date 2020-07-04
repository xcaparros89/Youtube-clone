import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoList, VideoDetail} from './components';
import './Style.css';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        isVideoChosen: false,
    }
    componentDidMount(){
        this.handleSubmit('javascript')
    }

    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get('search', {params:{
            part: 'snippet',
            maxResults: 15,
            key: 'AIzaSyC5VX2_2TBk3EJV6dx8EKl3Q634tLoMQKU',
            q:searchTerm,
        }});
        this.setState({videos:response.data.items, selectedVideo: response.data.items[0]})
    }
    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video, isVideoChosen: true})
    }
    goHome = () =>{
        this.setState({isVideoChosen: false})
    }

    render(){
        const {selectedVideo, videos, isVideoChosen} = this.state;
        const videos1 = videos.slice(0,5);
        const videos2 = videos.slice(5,10);
        const videos3 = videos.slice(10);

        return(
            <Grid justify="center" container spacing={9} style={{backgroundColor:'rgb(172, 172, 202)', width:'100vw'}}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit} goHome={this.goHome}/>
                        </Grid>
                        <div style={{height:'150px'}}></div>
                        {isVideoChosen && (<Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>)}
                        <Grid item xs={4}>
                            <VideoList videos={videos1} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                        {!isVideoChosen && ( 
                            <>
                                <Grid item xs={4}>
                                    <VideoList videos={videos2} onVideoSelect={this.onVideoSelect} />
                                </Grid>
                                <Grid item xs={4}>
                                    <VideoList videos={videos3} onVideoSelect={this.onVideoSelect} />
                                </Grid>
                            </>
                            )}
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App