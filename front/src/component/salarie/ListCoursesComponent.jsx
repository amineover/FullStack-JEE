import React, { Component } from 'react'
import CourseDataService from '../../service/salarie/CourseDataService';
import salarie_diplome from '../../service/salarie_diplome/CourseDataService';
import salarie_formation from '../../service/salarie_formation/CourseDataService';
import indisponibilite_service from '../../service/indisponibilite/CourseDataService';
import fonctionService from '../../service/fonction/CourseDataService';
const INSTRUCTOR = ''

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            diplome: [],
            formation: [],
            indispo: [],
            fonction: [],
            message: null
        }

        this.deleteCourseClicked = this.deleteCourseClicked.bind(this)
        this.updateCourseClicked = this.updateCourseClicked.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
        this.openCity = this.openCity.bind(this)
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
        this.refreshCoursesdiplome = this.refreshCoursesdiplome.bind(this)
        this.refreshCoursesformation = this.refreshCoursesformation.bind(this)
        this.refreshCoursesfonction = this.refreshCoursesfonction.bind(this)
        this.refreshCoursesindisponibitile = this.refreshCoursesindisponibitile.bind(this)
    }
    openNav(id) {
        this.refreshCoursesdiplome(id)
        this.refreshCoursesformation(id)
        this.refreshCoursesindisponibitile(id)
        this.refreshCoursesfonction(id)
        if (
            document.getElementById("id01")
        ) {
            document.getElementById('id01').style.display = 'block'
        }
    };

    closeNav(evt, id) {
        if (
            document.getElementById("id01")
        ) {
            document.getElementById('id01').style.display = 'none'
        }
    };

    componentDidMount() {
        if (!window.localStorage.getItem("token")) {
            this.props.history.push(`/login`)
            window.location.reload();
        }
        this.refreshCourses();
        document.getElementsByClassName("tablink")[0].click();
    }
    refreshCoursesdiplome(id) {
        let a = parseInt(id)
        salarie_diplome.retrieveCourse(INSTRUCTOR, a)//HARDCODED
            .then(
                response => {
                    this.setState({ diplome: response.data })
                    console.log("diplome : " + JSON.stringify(this.state.diplome))
                }
            ).catch(error => {
                console.error('no diplome', error);
            });
    }
    refreshCoursesfonction(id) {
        let a = parseInt(id)
        fonctionService.retrieveCourse(INSTRUCTOR, a)//HARDCODED
            .then(
                response => {
                    this.setState({ fonction: response.data })
                    console.log("fonction : " + JSON.stringify(this.state.fonction))
                }
            ).catch(error => {
                console.error('no fonction', error);
            });
    }
    refreshCoursesindisponibitile(id) {
        let a = parseInt(id)
        indisponibilite_service.retrieveCourse(INSTRUCTOR, a)//HARDCODED
            .then(
                response => {
                    this.setState({ indispo: response.data })
                    console.log("indisponibilite : " + JSON.stringify(this.state.indispo))
                }
            ).catch(error => {
                console.error('no indisponibilite', error);
            });
    }
    refreshCoursesformation(id) {
        let a = parseInt(id)
        salarie_formation.retrieveCourse(INSTRUCTOR, a)//HARDCODED
            .then(
                response => {
                    this.setState({ formation: response.data })
                    console.log("formation : " + JSON.stringify(this.state.formation))
                }
            ).catch(error => {
                console.error('no formation', error);
            });
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
        this.props.history.push(`/salarie/-1`)
    }

    updateCourseClicked(id) {
        console.log('update ' + id)
        this.props.history.push(`/salarie/${id}`)
    }


    openCity(evt, cityName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
            tablinks[i].classList.remove("w3-light-grey");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.classList.add("w3-light-grey");
    }

    render() {
        console.log('render')
        return (

            <div   style={{ marginTop: "50px" }} className="container">
                <h3 className="text-center">Tous les salariés</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div style={{ padding: "10px" }} className="container">
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>nom</th>
                                <th>prenom</th>
                                <th>numero carte nationale</th>
                                <th hidden>Mise à jour</th>
                                <th>inofrmation</th>
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
                                            <td hidden><button className="btn btn-link" onClick={() => this.updateCourseClicked(salarie.id)}>Mise à jour</button></td>
                                            <td><button className="btn btn-link" onClick={() => this.openNav(salarie.id)}>détails</button></td>
                                         
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addCourseClicked}>Ajouter</button>
                    </div>


                    <div id="id01" className="w3-modal">
                        <div className="w3-modal-content w3-card-4 w3-animate-zoom">
                            <header className="w3-container w3-blue">
                                <span onClick={this.closeNav}
                                    className="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>
                                <h2>Information</h2>
                            </header>

                            <div className="w3-bar w3-border-bottom">
                                <button className="tablink w3-bar-item w3-button" onClick={(event) => this.openCity(event, 'London')}>Diplomes</button>
                                <button className="tablink w3-bar-item w3-button" onClick={(event) => this.openCity(event, 'Paris')}>Formations</button>
                                <button className="tablink w3-bar-item w3-button" onClick={(event) => this.openCity(event, 'Tokyo')}>Indisponibilité</button>
                                <button className="tablink w3-bar-item w3-button" onClick={(event) => this.openCity(event, 'fonction')}>fonction</button>
                            </div>

                            <div id="London" className="w3-container city">
                                <div style={{ padding: "20px" }} className="container">
                                    <table className="table">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>date Obtention</th>
                                                <th>diplome</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.diplome.map(
                                                    salarie =>
                                                        <tr key={salarie.id}>
                                                            <td>{salarie.dateObtention}</td>
                                                            <td>{salarie.diplome.diplome}</td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>

                                </div>
                            </div>

                            <div id="Paris" className="w3-container city">
                                <div style={{ padding: "20px" }} className="container">
                                    <table className="table">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>date Debut Formation</th>
                                                <th>date Fin Formation</th>
                                                <th>description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.formation.map(
                                                    salarie =>
                                                        <tr key={salarie.id}>
                                                            <td>{salarie.dateDebutFormation}</td>
                                                            <td>{salarie.dateFinFormation}</td>
                                                            <td>{salarie.descriptionFormation}</td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="Tokyo" className="w3-container city">
                                <div style={{ padding: "20px" }} className="container">
                                    <table className="table">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>code</th>
                                                <th>Début</th>
                                                <th>Fin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.indispo.map(
                                                    salarie =>
                                                        <tr key={salarie.id}>
                                                            <td>{salarie.code}</td>
                                                            <td>{salarie.dateDebut}</td>
                                                            <td>{salarie.dateFin}</td>
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="fonction" className="w3-container city">
                                <div style={{ padding: "20px" }} className="container">
                                    <table className="table">
                                        <thead className="table-primary">
                                            <tr>
                                                <th>code</th>
                                                <th>fonction</th> 
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                this.state.fonction.map(
                                                    salarie =>
                                                        <tr key={salarie.id}>
                                                            <td>{salarie.code}</td>
                                                            <td>{salarie.fonction}</td> 
                                                        </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="w3-container w3-light-grey w3-padding">
                                <button className="w3-button w3-right w3-white w3-border" onClick={this.closeNav}>Close</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

export default ListCoursesComponent
