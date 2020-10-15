import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/salarie_formation/CourseDataService';
import CourseDataServicesalarie from '../../service/salarie/CourseDataService';
import formationDataServicesalarie from '../../service/formation/CourseDataService';
const INSTRUCTOR = ''

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            id: this.props.match.params.id,
            descriptionFormation: '',
            etat: '',
            dateDebutFormation: '',
            dateFinFormation: '',
            idsalarie: '',
            salarier: '',
            formation: []
        }

      
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    refreshCourses() {
        CourseDataServicesalarie.retrieveAllCourses(INSTRUCTOR)//HARDdescriptionFormationD
            .then(
                response => { 
                    this.setState({ courses: response.data })
                }
            )
    }formationDatarefreshCourses() {
        
        formationDataServicesalarie.retrieveAllCourses(INSTRUCTOR)//HARDCODED
        .then(
            response => { 
                this.setState({ formation: response.data })
                //alert(response.data)
            }
        )
}

    componentDidMount() {
        if(!window.localStorage.getItem("token")){
            this.props.history.push(`/login`)
            window.location.reload();
         }  
         let user = window.localStorage.getItem("logedin")
        const obj = JSON.parse(user);
         if(obj["role"]==="admin"){
            this.refreshCourses();
            this.formationDatarefreshCourses();
         }else{
            this.setState({ courses: [obj] })
            this.formationDatarefreshCourses()
         }
       
        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                descriptionFormation: ""+response.data.descriptionFormation,
                dateDebutFormation: ""+response.data.dateDebutFormation,
                dateFinFormation: ""+response.data.dateFinFormation,
                idsalarie: response.data.salarier.id
            }))
    }

    

    validate(values) {
        let errors = {}
        
        if (!values.descriptionFormation) {
            errors.descriptionFormation = 'Enter a descriptionFormation'
        } else if (values.descriptionFormation.length < 1) {
            errors.descriptionFormation = 'Enter atleast 6 Characters in descriptionFormation'
        }


        return errors

    }
 
    onSubmit(values) {
        // let username = INSTRUCTOR
        let username = '' 
        var dfirst = this.state.formation.find(s=>s.id==document.getElementById('formation').value); 
         let course = JSON.stringify({
             id: this.state.id,
             descriptionFormation: values.descriptionFormation,
             dateDebutFormation: values.dateDebutFormation,
             dateFinFormation: values.dateFinFormation,
             salarier: document.getElementById('salarie').value,
             formation: dfirst
         })
         console.log(course);
        // console.log(first);
         if (this.state.id == -1) { 
             CourseDataService.createCourse(username, course)
                 .then(() => this.props.history.push('/salarie_formation')).catch(error => {
                     console.log(error.response)
                 });
         } else {
             CourseDataService.updateCourse(username, this.state.id, course)
                 .then(() => this.props.history.push('/salarie_formation')).catch(error => {
                     console.log(error.response)
                 });
         }
         
         
     }
    render() {

        let {  id, descriptionFormation,dateDebutFormation,dateFinFormation,salarie,formation } = this.state

        return (
            <div >
                <h3 style={{marginTop: "15px"}} className="text-center">Salarier Formation</h3>
                <div  style={{padding: "30px"}} className="container">
                    <Formik
                        initialValues={{ id, descriptionFormation,dateDebutFormation,dateFinFormation,salarie }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >  
                        {
                            (props) => (
                                <Form style={{padding: "50px"}}>
                                    <ErrorMessage name="description" component="div"
                                        className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>description Formation</label>
                                        <Field className="form-control" type="text" name="descriptionFormation" />    
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>date debut</label>
                                        <Field className="form-control" type="date" name="dateDebutFormation" />    
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>date fin</label>
                                        <Field className="form-control" type="date" name="dateFinFormation" />    
                                    </fieldset> 
                                    <fieldset className="form-group">
                                        <label>Nom et Prenom</label>
                                            <select className="form-control" id="salarie" name="salarie"   >
                                        {
                                this.state.courses.map(
                                    salarie =>
                                        <option key={salarie.id} value={salarie.id}>{salarie.Nom} {salarie.Prenom}</option>
                                        )}
                                        </select>
                                        </fieldset>
                                        <fieldset className="form-group">
                                            
                                        <label>Formation</label>
                                        <select className="form-control" id="formation" name="formation" >
                                        {
                                this.state.formation.map(
                                    formation =>
                                        <option key={formation.id} value={formation.id}>{formation.formation}</option>
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

