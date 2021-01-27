import React from 'react';
import './App.css'; #these is redicules
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Redirect } from "react-router";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import  NavigationBar  from './component/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar from './component/Sidebar';
import styled from 'styled-components';
import SignInFormLogin from './component/SignInForm';
import demandeListCoursesComponent from './component/demande/ListCoursesComponent';
import diplomeListCoursesComponent from './component/diplome/ListCoursesComponent';
import fonctionListCoursesComponent from './component/fonction/ListCoursesComponent';
import formationListCoursesComponent from './component/formation/ListCoursesComponent';
import gradeListCoursesComponent from './component/grade/ListCoursesComponent';
import indisponibiliteListCoursesComponent from './component/indisponibilite/ListCoursesComponent';
import salarieListCoursesComponent from './component/salarie/ListCoursesComponent';
import salarie_formationListCoursesComponent from './component/salarie_formation/ListCoursesComponent';
import salarie_demandeListCoursesComponent from './component/salarie_demande/ListCoursesComponent';
import salarie_diplomeListCoursesComponent from './component/salarie_diplome/ListCoursesComponent';
import type_demandeListCoursesComponent from './component/type_demande/ListCoursesComponent';

import demandeCourseComponent from './component/demande/CourseComponent';
import diplomeCourseComponent from './component/diplome/CourseComponent';
import fonctionCourseComponent from './component/fonction/CourseComponent';
import formationCourseComponent from './component/formation/CourseComponent';
import gradeCourseComponent from './component/grade/CourseComponent';
import indisponibiliteCourseComponent from './component/indisponibilite/CourseComponent';
import salarieCourseComponent from './component/salarie/CourseComponent';
import salarie_formationCourseComponent from './component/salarie_formation/CourseComponent';
import salarie_demandeCourseComponent from './component/salarie_demande/CourseComponent';
import salarie_diplomeCourseComponent from './component/salarie_diplome/CourseComponent';
import type_demandeCourseComponent from './component/type_demande/CourseComponent';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 650px;
`;
 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAuthenticated: false };
  }

  login (){
    let a
    if(window.localStorage.getItem("token")){
       a=true
    }
    else{
     a=false
      
    }
     return a
}
   
  

  logout = () => {
   // this.setState({ isAuthenticated: false });
  }
  render() {

    const { isAuthenticated } = this.state;
  return (
    <React.Fragment>
      <Router>
      { this.login() ?
       <NavigationBar />  
         :  ''} 
      { this.login() ?
      <Sidebar/> 
         :  ''} 
        <Switch>
                        <Route path="/" exact component={SignInFormLogin} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/login" exact component={SignInFormLogin} />
                        <Route path="/demande" exact component={demandeListCoursesComponent} />
                        <Route path="/demande/:id" component={demandeCourseComponent} />

                        <Route path="/diplome" exact component={diplomeListCoursesComponent} />
                        <Route path="/diplome/:id" component={diplomeCourseComponent} />

                        <Route path="/fonction" exact component={fonctionListCoursesComponent} />
                        <Route path="/fonction/:id" component={fonctionCourseComponent} />

                        <Route path="/formation" exact component={formationListCoursesComponent} />
                        <Route path="/formation/:id" component={formationCourseComponent} />

                        <Route path="/grade" exact component={gradeListCoursesComponent} />
                        <Route path="/grade/:id" component={gradeCourseComponent} />

                        <Route path="/indisponibilite" exact component={indisponibiliteListCoursesComponent} />
                        <Route path="/indisponibilite/:id" component={indisponibiliteCourseComponent} />

                        <Route path="/salarie" exact component={salarieListCoursesComponent} />
                        <Route path="/salarie/:id" component={salarieCourseComponent} render={(props) => <salarieCourseComponent {...props} />} />

                        <Route path="/salarie_formation" exact component={salarie_formationListCoursesComponent} />
                        <Route path="/salarie_formation/:id" component={salarie_formationCourseComponent} />

                        <Route path="/salarie_demande" exact component={salarie_demandeListCoursesComponent} />
                        <Route path="/salarie_demande/:id" component={salarie_demandeCourseComponent} />


                        <Route path="/salarie_diplome" exact component={salarie_diplomeListCoursesComponent} />
                        <Route path="/salarie_diplome/:id" component={salarie_diplomeCourseComponent} />

                        <Route path="/type_demande" exact component={type_demandeListCoursesComponent} />
                        <Route path="/type_demande/:id" component={type_demandeCourseComponent} />
 
          <Route component={NoMatch} />
        </Switch>

       
   
      </Router>
    </React.Fragment>
  );
}}

export default App;
