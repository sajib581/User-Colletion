import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import User from '../User/User';
import './result.css'

const Result = () => {
    const [users, setUsers] = useState([])
    useEffect(()=>{
     fetch('https://randomuser.me/api/?results=15')
     .then(res => res.json())
     .then(data => setUsers(data.results))
    },[])
    const [cart, setCart] = useState([]);
    function getDetails(user){
     const newData = [...cart,user] ;
     setCart(newData)
   }
   const total = 0 ;
   const totalsalary = cart.reduce((total,user)=>total+user.salary,0) ;
   console.log(totalsalary);
    return (
        <div className="main">
            <h1>USER COLLECTION</h1>
            <h3>Total added : {cart.length} </h3>
            <h3>Total Salary : {totalsalary}</h3>
        {
            users.map(user=><User getDetails={getDetails} user={user}></User>)
        }
        </div>
    );
};

export default Result;