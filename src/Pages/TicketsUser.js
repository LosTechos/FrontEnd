import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../Assets/css/TicketsUser.css';
import axios from 'axios';

function TicketsUser() {
    //PARTE DEL TUTO DEL SEMI INDIO

    
    //FIN DEL TUTO

    //PARTE DEL TUTO DE MEDIUM
    const [postImage, setPostImage] = useState({
        myFile: "",
      });

    const url = 'https://los-techos.herokuapp.com/api/upload';
    const createImage = (newImage) => axios.put(url, {pImage: newImage, uId: localStorage.getItem("id")}, {headers: {"access-token": localStorage.getItem("access-token")}}).then(r => {console.log(r.data)});

    const createPost = async (post) => {
        try {
            await createImage(post);
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createPost(postImage);
    };

    const convertBase64=(file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);

            fileReader.onload = ()=>{
                resolve(fileReader.result);
                
            };

            fileReader.onerror = (error)=>{
                reject(error);
            };
        })
    };
    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setPostImage({ ...postImage, myFile: base64 });
        console.log(base64);
    };

    
    //FIN DEL TUTO

    return ( 
        <div>
            <Navbar/>
            <div className="tickets-box">
                <div className="top-box">
                    <text>Ticket Submition</text>
                </div>
                <div className="line-section"></div>
                <div className="mid-box">
                    <text>Payment due DATE</text>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <input type="file" name="myFile" onChange={(e) =>{
                            handleFileUpload(e);
                        }}/>
                        <div className="bottom-box">
                            <button className="send-ticket-btn">Send ticket</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
     );
}

export default TicketsUser;