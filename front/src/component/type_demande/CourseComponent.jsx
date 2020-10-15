import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/type_demande/CourseDataService';

const INSTRUCTOR = ''

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            id: this.props.match.params.id,
            code: '',
            type: ''
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
                type: response.data.type
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.code) {
            errors.code = 'Enter a code'
        } else if (values.code.length < 1) {
            errors.code = 'Enter atleast 6 Characters in code'
        }
        if (!values.type) {
            errors.type = 'Enter a type'
        } else if (values.type.length < 3) {
            errors.type = 'Enter atleast 5 Characters in type'
        }
        


        return errors

    }

    onSubmit(values) {
       // let username = INSTRUCTOR
       let username = ''
        let course = {
            id: this.state.id,
            code: values.code,
            type: values.type
        }

        if (this.state.id == -1) {
            console.log('tettt')
            CourseDataService.createCourse(username, course)
                .then(() => this.props.history.push('/type_demande'))
        } else {
            CourseDataService.updateCourse(username, this.state.id, course)
                .then(() => this.props.history.push('/type_demande'))
        }

        console.log(values);
    }

    render() {

        let { id,code,type } = this.state

        return (
            <div  style={{padding: "30px"}} className="container">
                <h3 className="text-center">types demande</h3>
                <div  style={{padding: "30px"}} className="container">
                    <Formik
                        initialValues={{ id,code,type }}
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
                                        <Field className="form-control" fonction="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>code</label>
                                        <Field className="form-control" fonction="text" name="code" />    
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>type</label>
                                        <Field className="form-control" fonction="text" name="type" />
                                        </fieldset>
                                       
                                    <button className="btn btn-primary" fonction="submit">Save</button>
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