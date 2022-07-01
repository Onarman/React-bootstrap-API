import React from 'react'
import {useState,useEffect} from "react";

const Users = () => {
    const [user,setUser] = useState() ;

    const getUsers = () => {
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((res)=>res.json())
 .then((data)=>setUser(data))
     }

     useEffect(() => {
       getUsers();
       
     },[])
     console.log(user);

    
     

  return (
    <div>
        <h1>USER LIST</h1>

        <div className='mb-5 display-4' >

        <div  className='row gap-5 justify-content-center ' >
            {user && user.map((item,index)=>{
                console.log(user);
                const {id,name,username,email} = item;

                return(
                    <div className='col col-md-6 col-lg-3   bg-info rounded '>
                        <img className='rounded-circle mt-3' src={`https://i.pravatar.cc/300?img=${index}`} alt="" />
                        <h1>{name}</h1>
                        <h2>{username}</h2>
                        <h4>{email}</h4>
                    </div>
                        
                )
                
            })}
            </div>
            
        </div>
    </div>
  )
}

export default Users