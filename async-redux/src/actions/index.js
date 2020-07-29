import baseURL from "../apis/jsonPlaceHolder"
import _ from "lodash"

//alternate to momoization
export const fetchPostAndUsers = () => async (dispatch, getState) =>{
  await dispatch(fetchPosts())
  const uniqueUserIds= _.uniq(_.map(getState().posts, 'userId'))

  uniqueUserIds.forEach(id => dispatch(fetchUser(id)))
}

export const fetchPosts = ()=>{
  
  return async (dispatch, getState) => {
    const response = await baseURL.get('/posts');

    dispatch({ type: "FETCH_POSTS", payload: response.data }) 
  }

}

export const fetchUser = (userId)=>{
  
  return async (dispatch, getState) => {
    const response = await baseURL.get(`/users/${userId}`);

    dispatch({ type: "FETCH_USER", payload: response.data }) 
  }

}


//momized solution to overfetching, mayne not the best cause if the user data changes it wont refetch
// using lodash for momoize
// export const fetchUser = (userId)=> dispatch=>{
//   _fetchUser(userId, dispatch)
// }
  

// const _fetchUser = _.memoize( async (userId, dispatch)=>{
//   const response = await baseURL.get(`/users/${userId}`);

//   dispatch({ type: "FETCH_USER", payload: response.data }) 

// })