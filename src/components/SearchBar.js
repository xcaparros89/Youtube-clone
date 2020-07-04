import React from 'react'
import {Paper, TextField} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }

    handleChange = (e) => this.setState({searchTerm: e.target.value})
    handleSubmit = (e) =>{
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;
        e.preventDefault();
        onFormSubmit(searchTerm);
    }
    render(){
        return(
            <Paper elevation={6} style={{padding:'25px', backgroundColor:'rgb(124, 124, 170)', display:'flex', position: 'fixed', width:'97%'}}>
                <h1 style ={{cursor: 'pointer', color: 'rgb(184, 184, 199)', transform: 'skew(-10deg)'}} onClick={this.props.goHome}>Clone<span style={{backgroundColor:'rgb(75, 75, 136)', borderRadius:'10%', padding:'5px'}}>Tube</span></h1>
                <form onSubmit={this.handleSubmit} style={{width:'50%', marginLeft:'20%'}}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange}/>
                </form>
                <FontAwesomeIcon icon={faBell} size="3x" color='rgb(42, 42, 61)' filter='drop-shadow(4px 4px 2px rgb(75, 75, 136))' style={{marginLeft:'15%'}} />
                <FontAwesomeIcon icon={faUserCircle} size='3x' color='rgb(42, 42, 61)' filter='drop-shadow(4px 4px 2px rgb(75, 75, 136))' style={{marginLeft:'2%'}} />
            </Paper>
        )
    }
}

export default SearchBar