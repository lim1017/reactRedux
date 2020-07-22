import React, { useState, useEffect } from 'react'
import baseURL from "../apis/jsonPlaceHolder"


import { connect } from 'react-redux'
import { fetchUser } from '../actions'

const UserHeader = (props)=>{

  const { user } = props

  useEffect(() => {

    // const getUser = async () =>{
    //   await baseURL.get(`/users/${props.userId}`)
    // }
    // const response = getUser()
    // setAuthor(response)

    // baseURL.get(`/users/${props.userId}`)
    // .then(response =>{
    //   setAuthor(response.data.name)
    // })

    // props.fetchUser(props.userId)
  

  }, [])

  return (
    <div>
      {user ? user.name : null }
    </div>
    
  )

}

const mapStateToProps = (state, ownProps)=>{
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader)