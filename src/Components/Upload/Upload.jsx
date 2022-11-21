import './Upload.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function Upload () {

    const myNav = useNavigate();

    const cancelNav = (event) => {
    alert('Upload Cancelled')
    myNav('/')
}

// on submit axios post
const handleUploadVideo = (title, description) => {

    const newVideo = {
        title: title,
        description: description
      }

      axios
      .post(`http://localhost:5002/videos/`, newVideo)
      .then((response) => {
      }).catch((error) => alert(error));
    };

// Form validation function!
const handleFormValidation = (event) => {
    event.preventDefault();
    if(!event.target.title.value || !event.target.description.value){
        alert('Please add title/desc to ur vid');
    }else{
        handleUploadVideo(event.target.title.value, event.target.description.value)
        alert('your vid was uploaded!!!');
        myNav('/');
    }
}

    return(
        <section className="upload">
            <form onSubmit={handleFormValidation} className='upload__form'>
                <h2 className="upload__title">Upload Video</h2>
            
                <div className='upload__desktop--container'>
                    <div className='upload__image--container'>
                        <p className="upload__subtitle">VIDEO THUMBNAIL</p>
                        <img className="upload__image" src={thumbnail} alt="thumbnail bike" />
                    </div>
                    <div className='upload__input--container'>
                        <p className="upload__subtitle">TITLE YOUR VIDEO</p>
                        <input name='title' className="upload__input" type="text" placeholder="Add a title to your video" />
                        <p className="upload__subtitle">ADD A VIDEO DESCRIPTION</p>
                        <textarea className="upload__textBox" name="description" id="" cols="30" rows="10" placeholder="Add a description to your video"></textarea>
                    </div>
                </div>

                <div className="upload__button--container">
                    <button className="upload__publish">PUBLISH</button>

                    <button onClick={cancelNav}  className="upload__cancel">CANCEL</button>
                    
                    
                    
                </div>
            </form>
        </section>
    )
}

export default Upload;
