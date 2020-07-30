import React from 'react'

class GoogleAuth extends React.Component {

  state = { isSignedIn: null}


  componentDidMount(){
    window.gapi.load('client:auth2', ()=>{
      window.gapi.client.init({
        clientId:"424306628076-1j4j3kfrgg5icd7lit6im8q2vr9ta39f.apps.googleusercontent.com",
        scope: "email"
      }).then(()=>{
        this.auth = window.gapi.auth2.getAuthInstance()
        this.setState({ isSignedIn: this.auth.isSignedIn.get()})
        this.auth.isSignedIn.listen(this.onAuthChg)
      })


    }) 
  }

  onAuthChg = () =>{
    this.setState({isSignedIn: this.auth.isSignedIn.get()})
  }

  onSignIn=()=>{
    this.auth.signIn()
  }


  onSignOut=()=>{
    this.auth.signOut()
  }
  

  renderSignedIn () {
    if (this.state.isSignedIn === null){
      return null
    } else if( this.state.isSignedIn){
      return (
        <button onClick={this.onSignOut} className="ui red google button">
          <i className="google icon" />
          Logout
        </button>
      ) 
    } else {
      return (
        <button onClick={this.onSignIn} className="ui red google button">
          <i className="google icon" />
          Login
        </button>
      ) 
    }
  }

  render (){
    return <div>{this.renderSignedIn()}</div>
  }
}

export default GoogleAuth