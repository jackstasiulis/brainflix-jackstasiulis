import './Header.scss';

import bflogo from '../../assets/Logo/BrainFlix-logo.svg';
// import search from '../../assets/Icons/search.svg';
// import upload from '../../assets/Icons/upload.svg';
import userPic from '../../assets/Images/Mohan-muruge.jpg';


function Header() {
    return(

        <header className='header'>
            <div className='header__logo--container'>
                <img className='header__logo' src={bflogo} alt="BrainFlix site logo"/>
            </div>
            <div className='header__items'>
                <input className='header__items--input' type="text" placeholder='Search'/>
                <img className='header__items--pic' src={userPic} alt="" />
            </div>
            <div className='header__button--container'>
                <button className='header__button'>UPLOAD</button>
            </div>
        </header>
    );
}

export default Header;