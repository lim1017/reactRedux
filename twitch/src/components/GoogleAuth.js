import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "424306628076-1j4j3kfrgg5icd7lit6im8q2vr9ta39f.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChg(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChg);
        });
    });
  }

  onAuthChg = (isSignedIn) => {
    if (isSignedIn){
      this.props.signIn(this.auth.currentUser.get().getId())
    } else this.props.signOut()

  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderSignedIn() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Logout
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Login
        </button>
      );
    }
  }

  render() {
    console.log(this.props)
    return <div>{this.renderSignedIn()}</div>;
  }
}

const mapStateToProps = (state) =>{
  return { isSignedIn: state.auth.isSignedIn, userId:state.auth.userId }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
