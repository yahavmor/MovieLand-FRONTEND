import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

export function NavBar(){   
    const user = useSelector(state=>state.user)
    return(
        <nav className="nav-bar">
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/movies">Movie List</Link></li>
            {user.fullName?<li><Link to="/me">{user.fullName}</Link></li>:<li><Link to="/register">Register</Link></li>}
        </nav>
    )
}
