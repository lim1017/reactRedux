export default (state=[], action) =>{
  


  switch (action.type){
    case 'FETCH_POSTS':
      return action.payload;
    case 'case2':
      return "yaya"
    default:
      return state;
  }

}