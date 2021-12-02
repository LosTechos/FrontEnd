import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import '../Assets/css/TicketsUser.css';
import axios from 'axios';

class TicketsUser extends Component {
    //PARTE DEL TUTO
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUplaodHandler = event => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
        axios.put('https://los-techos.herokuapp.com/api/ticket', fd, {
            onUploadProgress: ProgressEvent => {
                console.log('Upload Progress: ' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%')
            }
        })
            .then(res => {
                console.log(res);
            });
    }
    //FIN DE PARTE DEL TUTO

    render() { 
        return (
        <div>
            <Navbar/>
            <div className="tickets-box">
                <div className="top-box">
                    <text>UsernameGoesHere you have Paid/NotPaid</text>
                </div>
                <div className="line-section"></div>
                <div className="mid-box">
                    <text>Payment due DATE</text>
                    <br/>
                    <input type="file" onChange={this.fileSelectedHandler}/>
                </div>
                <div className="bottom-box">
                    <button className="send-ticket-btn" onClick={this.fileUplaodHandler}>Send ticket</button>
                </div>
            </div>
        </div>
    );
    }
}
 
export default TicketsUser;