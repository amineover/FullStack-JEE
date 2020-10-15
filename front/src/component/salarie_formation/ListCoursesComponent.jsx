import React, { Component } from 'react'
import CourseDataService from '../../service/salarie_formation/CourseDataService';
import CourseDataServicesalarie from '../../service/salarie/CourseDataService';


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
         if(!window.localStorage.getItem("token")){
            this.props.history.push(`/login`)
            window.location.reload();
         }  
         let user = window.localStorage.getItem("logedin")
         const obj = JSON.parse(user);
         
         if(obj["role"]==="admin"){
            this.refresh();
         }
         else{
            this.refreshCourses(parseInt(obj["id"]));
         }
    }

   
    refreshCourses(id) {
        let a= parseInt(id)
        CourseDataService.retrieveCourse(INSTRUCTOR,a)//HARDCODED
            .then(
                response => {
                     this.setState({ courses: response.data })
                }
            ) .catch(error => {
                console.error('no diplomeaaaaaa', error);
              });
    }
    refresh() {
        CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => {
                    //alert(JSON.stringify (response));
                    this.setState({ courses: response.data })
                }
            ).catch(error => {
                console.error('no diplome', error);
              });
    }
    deleteCourseClicked(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete Successful` })
                    let user = window.localStorage.getItem("logedin")
                    const obj = JSON.parse(user);
                    
                    if(obj["role"]==="admin"){
                       this.refresh();
                    }
                    else{
                       this.refreshCourses(obj["id"]);
                    }
                }
            )

    }

    addCourseClicked() {
        this.props.history.push(`/salarie_formation/-1`)
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/salarie_formation/${id}`)
    }
    salarieFonction(id) {
       

        CourseDataServicesalarie.retrieveCourse(INSTRUCTOR,""+id)//HARDCODED
        .then(
            response => { 
                this.setState({ salarier: response.data })
               
                alert(response.data.Nom+" "+response.data.Prenom);
            }
        )
        
}
    render() {
        console.log('render')
        return (
            <div    style={{ marginTop: "50px" }} className="container">
                <h3 className="text-center">Formation des Salaries</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div  style={{padding: "30px"}} className="container">
                    <table className="table">
                        <thead  className="table-primary">
                            <tr> 
                                <th>date Debut Formation</th> 
                                <th>date Fin Formation</th>
                                <th>description</th>
                                <th>Salarie</th>   
                                <th>Suppression</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.courses.map(
                                    salarie =>
                                        <tr key={salarie.id}>
                                            <td>{salarie.dateDebutFormation}</td>  
                                            <td>{salarie.dateFinFormation}</td>
                                            <td>{salarie.descriptionFormation}</td> 
                                            <td><a className="" onClick={() => this.salarieFonction(salarie.salarier)}>voir</a></td>
                                             <td><button className="btn btn-danger" onClick={() => this.deleteCourseClicked(salarie.id)}>Supprimer</button></td>
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