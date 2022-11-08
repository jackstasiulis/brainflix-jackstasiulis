import './Upload.scss';

import thumbnail from "../../assets/Images/Upload-video-preview.jpg";

function Upload () {
    return(
        <section className="upload">
            <div className='upload__form'>
                <h2 className="upload__title">Upload Video</h2>
                <p className="upload__subtitle">VIDEO THUMBNAIL</p>
                <img className="upload__image" src={thumbnail} alt="thumbnail bike" />
                <p className="upload__subtitle">TITLE YOUR VIDEO</p>
                <input className="upload__input" type="text" placeholder="Add a title to your video" />
                <p className="upload__subtitle">VIDEO THUMBNAIL</p>
                <textarea className="upload__textBox" name="" id="" cols="30" rows="10" placeholder="Add a description to your video"></textarea>
                
                <div className="upload__button--container">
                    <button className="upload__publish">PUBLISH</button>
                    <button className="upload__cancel">CANCEL</button>
                </div>
            </div>
        </section>
    )
}

export default Upload;