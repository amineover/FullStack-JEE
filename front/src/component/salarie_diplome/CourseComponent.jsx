import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/salarie_diplome/CourseDataService';
import CourseDataServicesalarie from '../../service/salarie/CourseDataService';
import diplomeDataServicesalarie from '../../service/diplome/CourseDataService';

const INSTRUCTOR = ''

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            diplomes: [],
            id: this.props.match.params.id,
            dateObtention: '',
            salarier: '',
            diplome: ''
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
          
    }diplomeDatarefreshCourses() {
        
            diplomeDataServicesalarie.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => { 
                    this.setState({ diplomes: response.data })
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
            this.diplomeDatarefreshCourses();
         }else{
            this.setState({ courses: [obj] })
            this.diplomeDatarefreshCourses()
         }
       
        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                dateObtention: ""+response.data.dateObtention,
                idsalarie: ""+response.data.salarier,
                diplome: ""+response.data.diplome
            }))
    }

    

    validate(values) {
        let errors = {}
        
        if (!values.dateObtention) {
            errors.dateObtention = 'Enter a dateObtention'
        } else if (values.dateObtention.length < 1) {
            errors.dateObtention = 'Enter atleast 6 Characters in dateObtention'
        }


        return errors

    }
 
    onSubmit(values) {
        // let username = INSTRUCTOR
        let username = ''
        //var cfirst = this.state.courses.find(s=>s.id==document.getElementById('salarie').value); 
        var dfirst = this.state.diplomes.find(s=>s.id==document.getElementById('diplome').value); 
         let course = JSON.stringify({
             id: this.state.id,
             dateObtention: values.dateObtention,
             salarier: document.getElementById('salarie').value,
             diplome: dfirst
         })
         console.log(course);
        // console.log(cfirst);
         console.log(dfirst);
         if (this.state.id == -1) { 
             CourseDataService.createCourse(username, course)
                 .then(() => this.props.history.push('/salarie_diplome')).catch(error => {
                     console.log(error.response)
                 });
         } else {
             CourseDataService.updateCourse(username, this.state.id, course)
                 .then(() => this.props.history.push('/salarie_diplome')).catch(error => {
                     console.log(error.response)
                 });
         }
         
         
     }
    render() {

        let {  id, dateObtention, salarier ,diplome  } = this.state

        return (
            <div  style={{padding: "30px"}} className="container">
                <h3 className="text-center">Diplome de Salarie</h3>
                <div  style={{padding: "30px"}} className="container">
                    <Formik
                        initialValues={{ id, dateObtention, salarier ,diplome }}
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
                                        <label>date Obtention</label>
                                        <Field className="form-control" type="date" name="dateObtention" />    
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
                                            
                                        <label>Diplome</label>
                                        <select className="form-control" id="diplome" name="diplome" >
                                        {
                                this.state.diplomes.map(
                                    diplome =>
                                        <option key={diplome.id} value={diplome.id}>{diplome.diplome}</option>
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