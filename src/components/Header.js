import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';


const Header = props => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-5">
      <span className="navbar-brand mb-0 h1 mx-auto">LyricFinder</span>
    </nav>
    <div className='mr-auto text-center align-content-center '>
        <svg width="5em" height="5em" viewBox="0 0 16 16" class="bi bi-music-note-beamed" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z"/>
  <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z"/>
</svg>
        <h1 className = 'sans-serif'>Search song by Artist's name</h1>
    </div>
        </div>
    )
}



export default Header;
