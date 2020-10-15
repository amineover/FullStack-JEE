import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/grade/CourseDataService';

const INSTRUCTOR = ''

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            code: '',
            grade: ''
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
                grade: response.data.grade
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.code) {
            errors.code = 'Enter a code'
        } else if (values.code.length < 1) {
            errors.code = 'Enter atleast 6 Characters in code'
        }
        if (!values.grade) {
            errors.grade = 'Enter a grade'
        } else if (values.grade.length < 3) {
            errors.grade = 'Enter atleast 5 Characters in grade'
        }
        


        return errors

    }

    onSubmit(values) {
       // let username = INSTRUCTOR
       let username = ''
        let course = {
            id: this.state.id,
            code: values.code,
            grade: values.grade
        }

        if (this.state.id == -1) {
            console.log('tettt')
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/grade'))
        } else {
            CourseDataService.updateCourse(course)
                .then(() => this.props.history.push('/grade'))
        }

        console.log(values);
    }

    render() {

        let { id,code,grade } = this.state

        return (
            <div  style={{padding: "30px"}} className="container">
                <h3 className="text-center">grades</h3>
                <div  style={{padding: "30px"}} className="container">
                    <Formik
                        initialValues={{ id,code,grade }}
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
                                        <label>grade</label>
                                        <Field className="form-control" type="text" name="grade" />
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