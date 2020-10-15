import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/formation/CourseDataService';

const INSTRUCTOR = ''

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            code: '',
            formation: ''
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    componentDidMount() {
        if(!window.localStorage.getItem("token")){
            this.props.history.push(`/login`)
            window.location.reload();
         }  

        console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                code: response.data.code,
                formation: response.data.formation
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.code) {
            errors.code = 'Enter a code'
        } else if (values.code.length < 1) {
            errors.code = 'Enter atleast 6 Characters in code'
        }
        if (!values.formation) {
            errors.formation = 'Enter a formation'
        } else if (values.formation.length < 3) {
            errors.formation = 'Enter atleast 5 Characters in formation'
        }
        


        return errors

    }

    onSubmit(values) {
       // let username = INSTRUCTOR
       let username = ''
        let course = {
            id: this.state.id,
            code: values.code,
            formation: values.formation
        }

        if (this.state.id == -1) {
            console.log('tettt')
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/formation'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/formation'))
        }

        console.log(values);
    }

    render() {

        let { id,code,formation } = this.state

        return (
            <div  style={{padding: "30px"}} className="container">
                <h3 className="text-center">formations</h3>
                <div  style={{padding: "30px"}} className="container">
                    <Formik
                        initialValues={{ id,code,formation }}
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
                                        <label>formation</label>
                                        <Field className="form-control" type="text" name="formation" />
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