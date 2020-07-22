import baseURL from "../apis/jsonPlaceHolder"

export const fetchPosts = ()=>{
  
  return async (dispatch, getState) => {
    const response = await baseURL.get('/posts');

    dispatch({ type: "FETCH_POSTS", payload: response.data }) 
  }

}