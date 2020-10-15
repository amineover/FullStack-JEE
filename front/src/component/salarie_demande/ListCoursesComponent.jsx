import React, { Component } from 'react'
import CourseDataService from '../../service/salarie_demande/CourseDataService';

const INSTRUCTOR = ''

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            message: null
        }
        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        if(!window.localStorage.getItem("token")){
            this.props.history.push(`/login`)
            window.location.reload();
         }  
        this.refreshCourses();
    }

    refreshCourses() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    //console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }

    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete Successful` })
                    this.refreshCourses()
                }
            )

    }

    addCourseClicked() {
        this.props.history.push(`/salarie_demande/-1`)
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/salarie_demande/${id}`)
    }

    render() {
        console.log('render')
        return (
            <div    style={{ marginTop: "50px" }} className="container">
                <h3 className="text-center">Tous les salariés</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div  style={{padding: "30px"}} className="container">
                    <table className="table">
                        <thead  className="table-primary">
                            <tr> 
                                <th>nom</th>
                                <th>prenom</th>
                                <th>code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    salarie =>
                                        <tr key={salarie.id}>
                                        <td>{salarie.nom}</td>
                                            <td>{salarie.prenom}</td> 
                                            <td>{salarie.code}</td>
                                            <td><button className="btn btn-primary" onClick={() => this.updateCourseClicked(salarie.id)}>Mise à jour</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteCourseClicked(salarie.id)}>Supprimer</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addCourseClicked}>Ajouter</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListCoursesComponent