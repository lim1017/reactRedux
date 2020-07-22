import React, { useState, useEffect } from 'react'
import baseURL from "../apis/jsonPlaceHolder"


const UserHeader = (props)=>{

  const [author, setAuthor] = useState("")

  useEffect(() => {

    // const getUser = async () =>{
    //   await baseURL.get(`/users/${props.userId}`)
    // }
    // const response = getUser()
    // setAuthor(response)

    baseURL.get(`/users/${props.userId}`)
    .then(response =>{
      setAuthor(response.data.name)
    })


  }, [])


  return (
    <div>{author}</div>
  )

}

export default UserHeader