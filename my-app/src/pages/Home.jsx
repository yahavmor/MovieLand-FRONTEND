import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setMsg } from "../store/userSlice";

export function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state=>state.user)
  function searchPage(){
    if(!user.user.id) return dispatch(setMsg({ text: "Please register!", condition: false }))
    else navigate('/movies')
  }
  return (
    <div className='home-page'>
      <h1 className='home-title'>Hello</h1>
      <h4 className='home-subtitle'>Please Sit Back And Relax</h4>

      <main className='home-hero'>
      <img 
        style={{ cursor: "pointer" }} 
        src="images.jpg" 
        alt="movie picture" 
        onClick={searchPage} 
      />
      </main>
    </div>
  )
}
