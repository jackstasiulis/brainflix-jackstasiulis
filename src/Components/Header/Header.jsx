import './Header.scss';

import bflogo from '../../assets/Logo/BrainFlix-logo.svg';
import userPic from '../../assets/Images/Mohan-muruge.jpg';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Header() {

    const myNav = useNavigate();

    const uploadNav = (event) => {
        event.preventDefault();
        myNav('/upload')
    }

    return(
        <header className='header'>
            <div className='header__logo--container'>
                <Link to={`/`} ><img className='header__logo' src={bflogo} alt="BrainFlix site logo"/></Link>
            </div>
            <div className='header__items'>
                <input className='header__items--input' type="text" placeholder='Search'/>
                <img className='header__items--pic' src={userPic} alt="" />
            </div>
            <div className='header__button--container'>
                <button onClick={uploadNav} className='header__button' >UPLOAD</button>
            </div>
        </header>
    );
}

export default Header;