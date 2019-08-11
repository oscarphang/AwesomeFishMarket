import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import firebase from 'firebase'
import {LOGIN,LOGOUT} from '../../store/reducers/authReducer'

export class Login extends Component {
    handleLogin=()=>{
        
        var provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            if (token){
                this.props.signIn();
            }
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    }
    handleLogout=()=>{
        this.props.signOut();
    }
    render() {
        return (
            <div>
                {
                    this.props.isSignedIn?
                    <Button variant="secondary" onClick={this.handleLogout}>Logout</Button>
                    :<Button variant="primary" onClick={this.handleLogin}>Login</Button>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isSignedIn:state.auth.isSignedIn
})

const mapDispatchToProps = (dispatch) => ({
    signIn:()=>dispatch({type:LOGIN}),
    signOut:()=>dispatch({type:LOGOUT})
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
