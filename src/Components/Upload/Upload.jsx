import './Upload.scss';
import { useNavigate } from 'react-router-dom';

import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function Upload () {

    const myNav = useNavigate();

    const publishNav = (event) => {
    event.preventDefault();
    alert('Video Published!')
    myNav('/')
}

const cancelNav = (event) => {
    event.preventDefault();
    alert('Upload Cancelled')
    myNav('/')
}

    return(
        <section className="upload">
            <div className='upload__form'>
                <h2 className="upload__title">Upload Video</h2>
            
                <div className='upload__desktop--container'>
                    <div className='upload__image--container'>
                        <p className="upload__subtitle">VIDEO THUMBNAIL</p>
                        <img className="upload__image" src={thumbnail} alt="thumbnail bike" />
                    </div>
                    <div className='upload__input--container'>
                        <p className="upload__subtitle">TITLE YOUR VIDEO</p>
                        <input className="upload__input" type="text" placeholder="Add a title to your video" />
                        <p className="upload__subtitle">ADD A VIDEO DESCRIPTION</p>
                        <textarea className="upload__textBox" name="" id="" cols="30" rows="10" placeholder="Add a description to your video"></textarea>
                    </div>
                </div>

                <div className="upload__button--container">
                    <button onClick={publishNav} className="upload__publish">PUBLISH</button>

                    <button onClick={cancelNav} className="upload__cancel">CANCEL</button>
                    
                    
                    
                </div>
            </div>
        </section>
    )
}

export default Upload;
