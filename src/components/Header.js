import React from 'react'; 
import {Link} from 'react-router-dom'; //similar to a tag but works with "Router"

function Header(){
    return(
        <header>
            <h1>Daily Weather Report</h1>
            {/* Instead of using a tag <a href="/about">About</a> we use react <Link>*/}
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </header>
    );
}

export default Header;