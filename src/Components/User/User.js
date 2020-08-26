import React from 'react';
import './user.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVoicemail } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    //console.log(props.user);
    const {name,email,location} = props.user
    const {title,first,last} = name
    const fullname =title+' '+first+' '+last
    const salary = location.street.number
    const img = props.user.picture.large

    const newArray = {fullname, email,salary,img}
    //console.log(newArray);
    
    return (
        <div className="user">
            <div className="photo">
                <img src={img} alt=""/>
            </div>
            <div>
                <h2>{fullname}</h2>
                <p>email: {email}</p>                
                <p>Salary : {salary} $</p>
                <button onClick={()=>props.getDetails(newArray)}>Add salary</button>
            </div>
        </div>
    );
};

export default User;