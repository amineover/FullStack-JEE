import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/salarie/CourseDataService';
import gradeService from '../../service/grade/CourseDataService';

const INSTRUCTOR = ''

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nom: '',
            prenom: '',
            email: '',
            code: '',
            grade: '',
            password: '',
            grade:[],
            message: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.refreshgrade = this.refreshgrade.bind(this)

    }

    componentDidMount() {
        if(!window.localStorage.getItem("token")){
            this.props.history.push(`/login`)
            window.location.reload();
         }  
         this.refreshgrade()
        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                nom: response.data.nom,
                prenom: response.data.prenom,
                email: response.data.email,
                code: response.data.code,
                password: response.data.password,
                grade: response.data.grade,
                role: response.data.role
            }))
    }
    refreshgrade() {
        gradeService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => { 
                    this.setState({ grade: response.data })
                }
            ) 
    }
    validate(values) {
        let errors = {}
        if (!values.nom) {
            errors.nom = 'Enter a nom'
        } else if (values.nom.length < 4) {
            errors.nom = 'Enter atleast 5 Characters in nom'
        }

        if (!values.prenom) {
            errors.prenom = 'Enter a prenom'
        } else if (values.prenom.length < 4) {
            errors.prenom = 'Enter atleast 5 Characters in prenom'
        }
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
        let course = {
            id: this.state.id,
            nom: values.nom,
            email: values.email,
            prenom: values.prenom,
            code: values.code,
            password: values.password,
            role: "salarie",
            grade:document.getElementById('grade').value
        }

        if (this.state.id == -1) {
            console.log('tettt')
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/salarie'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/salarie'))
        }

        console.log(values);
    }

    render() {

        let { id,nom,prenom,code,grade, email, password  } = this.state

        return (
            <div  style={{padding: "30px"}} className="container">
                <h3 className="text-center">Salarie</h3>
                <div  style={{padding: "30px"}} className="container">
                    <Formik
                        initialValues={{ id,nom,prenom,code,grade, email, password }}
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
                                        <label>nom</label>
                                        <Field className="form-control" type="text" name="nom" />
                                        </fieldset>
                                    <fieldset className="form-group">
                                        <label>prenom</label>
                                        <Field className="form-control" type="text" name="prenom" />
                                        </fieldset>
                                    <fieldset className="form-group">
                                        <label>cin</label>
                                        <Field className="form-control" type="text" name="code" />    
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>grade</label>
                                        <select className="form-control" id="grade" name="grade"   >
                                        {
                                this.state.grade.map(
                                    salarie =>
                                        <option key={salarie.id} value={salarie.id}>{salarie.grade}</option>
                                        )}
                                        </select>
                                        </fieldset>
                                    <fieldset className="form-group">
                                        <label>Nom de l'utilisateur</label>
                                        <Field className="form-control" type="text" name="email" />
                                        </fieldset>
                                    <fieldset className="form-group">
                                        <label>mot de passe</label>
                                        <Field className="form-control" type="password" name="password" />    
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