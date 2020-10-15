import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/indisponibilite/CourseDataService';
import CourseDataServicesalarie from '../../service/salarie/CourseDataService';

const INSTRUCTOR = ''

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            id: this.props.match.params.id,
            code: '',
            etat: '',
            datedebut: '',
            datefin: '',
            idsalarie: '',
            salarier: ''
        }

      
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    refreshCourses() {
        CourseDataServicesalarie.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => { 
                    this.setState({ courses: response.data })
                }
            )
    }

    componentDidMount() {
        if(!window.localStorage.getItem("token")){
            this.props.history.push(`/login`)
            window.location.reload();
         }  

        this.refreshCourses();
        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                code: ""+response.data.code,
                datedebut: ""+response.data.dateDebut,
                datefin: ""+response.data.dateFin,
                idsalarie: response.data.salarier.id
            }))
            
    }

    

    validate(values) {
        let errors = {}
        
        if (!values.code) {
            errors.code = 'Enter a code'
        } else if (values.code.length < 1) {
            errors.code = 'Enter atleast 6 Characters in code'
        }


        return errors

    }
 
    onSubmit(values) {
        // let username = INSTRUCTOR
        let username = '' 
        //var first = this.state.courses.find(s=>s.id==document.getElementById('salarie').value); 
         let course = JSON.stringify({
             id: this.state.id,
             code: values.code,
             dateDebut: values.datedebut,
             dateFin: values.datefin,
             salarier: document.getElementById('salarie').value
         })
         console.log(course);
        // console.log(first);
         if (this.state.id == -1) { 
             CourseDataService.createCourse(username, course)
                 .then(() => this.props.history.push('/indisponibilite')).catch(error => {
                     console.log(error.response)
                 });
         } else {
             CourseDataService.updateCourse(username, this.state.id, course)
                 .then(() => this.props.history.push('/indisponibilite')).catch(error => {
                     console.log(error.response)
                 });
         }
         
         
     }
    render() {

        let {  id, code,datedebut,datefin,salarie } = this.state

        return (
            <div  style={{padding: "30px"}} className="container">
                <h3 className="text-center">indisponibilité Salarie</h3>
                <div  style={{padding: "30px"}} className="container">
                    <Formik
                        initialValues={{ id, code,datedebut,datefin,salarie }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >  
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>code</label>
                                        <Field className="form-control" type="text" name="code" />    
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>date debut</label>
                                        <Field className="form-control" type="date" name="datedebut" />    
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>date fin</label>
                                        <Field className="form-control" type="date" name="datefin" />    
                                    </fieldset> 
                                    <fieldset className="form-group">
                                        <label>Nom et Prenom</label>
                                        <select className="form-control" id="salarie" name="salarier"   >
                                        {
                                this.state.courses.map(
                                    salarie =>
                                        <option key={salarie.id} value={salarie.id}>{salarie.nom} {salarie.prenom}</option>
                                        )}
                                        </select>
                                        </fieldset>
                                    <button className="btn btn-primary" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default CourseComponent