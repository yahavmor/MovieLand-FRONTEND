import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { authService } from "../services/auth.service";
import { useNavigate } from 'react-router-dom'
import { updateUser } from "../store/userSlice";


export function NavBar(){   
    const user = useSelector(state=>state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    async function logout(){
        try{
        await authService.logout()
        dispatch(updateUser({ fullName: "", email: "", id: null , imgUrl:''}));            
        navigate('/')
        }catch(err){
            console.log(err)
        }
    }
    return(
        <nav className="nav-bar">
            <li><Link to="/">Home Page</Link></li>
            <li><Link to="/about">About</Link></li>
            {user.user.fullName&&<li><Link to="/movies">Movie List</Link></li>}
            {user.user.fullName?<li><Link to="/me">{user.user.fullName}</Link></li>:<li><Link to="/register">Register</Link></li>}
            {user.user.fullName?<button className='logout-btn' onClick={()=>logout()}>Logout</button>:''}
        </nav>
    )
}
