import { Link } from "react-router-dom";

export function NavBar(){   
    return(
        <nav className="nav-bar">
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/movies">Movie List</Link></li>
            <li><Link to="/register">Register</Link></li>
        </nav>
    )
}
