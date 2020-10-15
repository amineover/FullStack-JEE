import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SignInFormLogin from './SignInForm';
import demandeListCoursesComponent from './demande/ListCoursesComponent';
import diplomeListCoursesComponent from './diplome/ListCoursesComponent';
import fonctionListCoursesComponent from './fonction/ListCoursesComponent';
import formationListCoursesComponent from './formation/ListCoursesComponent';
import gradeListCoursesComponent from './grade/ListCoursesComponent';
import indisponibiliteListCoursesComponent from './indisponibilite/ListCoursesComponent';
import salarieListCoursesComponent from './salarie/ListCoursesComponent';
import salarie_formationListCoursesComponent from './salarie_formation/ListCoursesComponent';
import salarie_demandeListCoursesComponent from './salarie_demande/ListCoursesComponent';
import salarie_diplomeListCoursesComponent from './salarie_diplome/ListCoursesComponent';
import type_demandeListCoursesComponent from './type_demande/ListCoursesComponent';

import demandeCourseComponent from './demande/CourseComponent';
import diplomeCourseComponent from './diplome/CourseComponent';
import fonctionCourseComponent from './fonction/CourseComponent';
import formationCourseComponent from './formation/CourseComponent';
import gradeCourseComponent from './grade/CourseComponent';
import indisponibiliteCourseComponent from './indisponibilite/CourseComponent';
import salarieCourseComponent from './salarie/CourseComponent';
import salarie_formationCourseComponent from './salarie_formation/CourseComponent';
import salarie_demandeCourseComponent from './salarie_demande/CourseComponent';
import salarie_diplomeCourseComponent from './salarie_diplome/CourseComponent';
import type_demandeCourseComponent from './type_demande/CourseComponent';

class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                    <h1>Gestion salariés</h1>
                    <Switch>
                        <Route path="/" exact component={SignInFormLogin} />
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
                        <Route path="/salarie/:id" component={salarieCourseComponent} />

                        <Route path="/salarie_formation" exact component={salarie_formationListCoursesComponent} />
                        <Route path="/salarie_formation/:id" component={salarie_formationCourseComponent} />

                        <Route path="/salarie_demande" exact component={salarie_demandeListCoursesComponent} />
                        <Route path="/salarie_demande/:id" component={salarie_demandeCourseComponent} />


                        <Route path="/salarie_diplome" exact component={salarie_diplomeListCoursesComponent} />
                        <Route path="/salarie_diplome/:id" component={salarie_diplomeCourseComponent} />

                        <Route path="/type_demande" exact component={type_demandeListCoursesComponent} />
                        <Route path="/type_demande/:id" component={type_demandeCourseComponent} />

                    </Switch>
                </>
            </Router>
        )
    }
}

export default InstructorApp