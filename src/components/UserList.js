/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'

const UserList = () => {
  

    const users=[
        {
        email :	"michael.lawson@reqres.in",
        first_name :	"Michael",
        last_name :	"Lawson",
        avatar :"https://reqres.in/img/faces/7-image.jpg",
        },
        {
        email :	"michael.lawson@reqres.in",
        first_name :	"Lindsay",
        last_name :	"Lawson",
        avatar :"https://reqres.in/img/faces/8-image.jpg"
        },
        {
        email :	"michael.lawson@reqres.in",
        first_name :	"Michael",
        last_name :	"Lawson",
        avatar :"https://reqres.in/img/faces/7-image.jpg",
        },
    
    ]

    return (
    <div className='container'>
        <div className='row'>
        {
            users.map((user, index) => (
            <div key={index} className='col-md-3'>
                <div className='card'>
                    <img src={user.avatar} alt='avatar' />
                    <div className='card-body'>
                        <h5 className='card-title'>{`${user.first_name} ${user.last_name} ` }</h5>
                        <p className='card-text'> {user.email} </p>
                    </div>
                </div>
            </div>
            ))
        }
        </div>
    </div>
  )
}

export default UserList