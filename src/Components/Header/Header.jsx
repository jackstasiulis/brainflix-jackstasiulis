import './Header.scss';

import bflogo from '../../assets/Logo/BrainFlix-logo.svg';

import userPic from '../../assets/Images/Mohan-muruge.jpg';

import { Link } from 'react-router-dom'



function Header() {
    return(

        <header className='header'>
            <div className='header__logo--container'>
                <Link to={`/Home`} ><img className='header__logo' src={bflogo} alt="BrainFlix site logo"/></Link>
            </div>
            <div className='header__items'>
                <input className='header__items--input' type="text" placeholder='Search'/>
                <img className='header__items--pic' src={userPic} alt="" />
            </div>
            <div className='header__button--container'>
                <Link to={`/Upload`} ><button className='header__button' >UPLOAD</button></Link>
            </div>
        </header>
    );
}

export default Header;