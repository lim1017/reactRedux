import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, fetchPostAndUsers } from '../actions'
import UserHeader from './UserHeader'


const Postlist = (props) =>{

  useEffect(() => {
    props.fetchPostAndUsers()
  }, [])


  const renderPosts=()=>{
    return props.posts.map(post =>{
      return(
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })

      
  }

  return (
    <div className='ui relaxed divided list'>{renderPosts()}</div>
  )
}

const mapStateToProps = (state) =>{
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts, fetchPostAndUsers })(Postlist)