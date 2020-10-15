      import React, { Component } from 'react' 
      import { Formik, Form, Field, ErrorMessage } from 'formik';
      import axios from 'axios' 
      import "../containers/Login.css"; 
      import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
      import AppBar from 'material-ui/AppBar';
      import RaisedButton from 'material-ui/RaisedButton';
      import TextField from 'material-ui/TextField';
      class SignInForm extends Component {
      constructor(props){
        super(props);
        this.state={
        username:'',
        password:'',
        uploadScreen:[],
        isAuthenticated: false
        }
        
        this.validate = this.validate.bind(this)
      }
      
      componentDidMount(){
        this.login()
        //document.getElementById('logout').style.display="none";
        }

    
      validate() {
        let parm1 =0 
        let parm2 =0
        if (!this.state.username) {
          alert('Enter a username');
          parm1=1;
        } else if (this.state.username.length < 4) {
          alert('Enter atleast 4 Characters in username')
          parm1=1;
        }
        if (!this.state.password) {
          alert('Enter a password');
          parm2=1;
        } else if (this.state.password.length < 4) {
          alert('Enter atleast 4 Characters in password')
          parm2=1
        }
    
        if(parm1==1 || parm2==1)
        return 1
        else
        return 0;
    }
    login(){ 
      if(window.localStorage.getItem("token")){
        this.props.history.push('/demande')
      }
      else{ 
        this.props.history.push('/login')
      } 
  }
      handleClick(event){
        if(this.validate()===0){
          const token ="AAAAABBBBBCCCCCCDDDDDDEEEEEEE"
        
        var apiBaseUrl = "http://localhost:8040/login";
        var self = this;
        var payload={
        "email":this.state.username,
        "password":this.state.password
        }
        

        console.log(payload);
        axios.post(apiBaseUrl, payload)
        .then( response => {
          if(response.status == 200){
            if(response.data["email"]==this.state.username){
        console.log("Login successfull"); 
        window.localStorage.setItem('token',token) 
        window.localStorage.setItem('logedin',JSON.stringify(response.data)) 
        window.location.reload();
        console.log(window.localStorage.getItem('token'));
        this.props.history.push('/demande')
      }else{
        alert("email ou  mot de passe incorrecte ")
      }
        }
        else if(response.status == 204){
        console.log("Username password do not match");
        alert("username password do not match")
        }
        else{
        console.log("Username does not exists");
        alert("Username does not exist");
        }
        } 
        )
        .catch(function (error) {
        console.log(error);
        console.log("Server Error");
        alert(error)
        });}
        }
      render() {
          return (
            <div  style={{padding: "30px"}} className="container">
              <div  style={styles}>
           <h3 className="text-center">Gestion des Salaries</h3>
               
              <MuiThemeProvider>
                <div className="text-center">
                
                <TextField
                  hintText="Entrer votre Email"
                  floatingLabelText="Email" 
                  onChange = {(event,newValue) => this.setState({username:newValue})}
                  />
                <br/>
                  <TextField
                    type="password"
                    hintText="Entrer votre mot de passe"
                    floatingLabelText="Mot de passe"
                    onChange = {(event,newValue) => this.setState({password:newValue})}
                    />
                  <br/>
                  <RaisedButton label="Se connecter" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
              </div>
              </MuiThemeProvider>
            </div>
            </div>
          );
        }
      }
      const style = {
      margin: 15,
      };
      const styles = {
        margin:120
        };
      export default SignInForm;