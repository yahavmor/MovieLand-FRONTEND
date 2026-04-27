import {useEffect, useState} from 'react'
import defaultUser from '../services/user.service.js'

export function RegisterForm() {
    const [user,setUser] = useState(defaultUser)

    function handleChange(e){
        setUser(prev => ({
            ...prev,
            [name]: value
          }))
        }
    
    function handleSubmit(e){
        e.preventDefault()
        setUser(null)
    }
    return (
        <>
            <form className="register-form" onSubmit={(e)=>handleSubmit(e)}>
                <div className="input-bar">
                <label>Full Name:</label>
                <input type="text" name='fullName' placeholder="Enter full name" onChange={(e)=>handleChange(e)} />
                </div>
        
                <div className="input-bar">
                <label>Email:</label>
                <input type="email" name='email' placeholder="Enter email" onChange={(e)=>handleChange(e)} />
                </div>
        
                <div className="input-bar">
                <label>Password:</label>
                <input type="password" name='password' placeholder="Enter password" onChange={(e)=>handleChange(e)} />
                </div>
        
                <button className="register-btn" onSubmit={(e)=>handleSubmit(e)}>Register</button>
            </form>
                {user&& <div className='output'>
                    <p>{user.fullName}</p>
                        </div>}
      </>
    )
}
  