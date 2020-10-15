import React, { Component } from 'react'
import CourseDataService from '../../service/demande/CourseDataService';
import CourseDataServicesalarie from '../../service/salarie/CourseDataService';
import indisponibiliteService from '../../service/indisponibilite/CourseDataService';

const INSTRUCTOR = ''

class ListCoursesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [],
            salarier: '',
            message: null,
            value: '',
            admin: '',
            idSalarie:''
        }
        this.delete = this.delete.bind(this)
        this.valide = this.valide.bind(this)
        this.addCourseClicked = this.addCourseClicked.bind(this)
        this.refreshCourses = this.refreshCourses.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.retrieveCoursebysalarier = this.retrieveCoursebysalarier.bind(this);
        this.retrieveCoursebySituationDemandeAndsalarier = this.retrieveCoursebySituationDemandeAndsalarier.bind(this);
        this.openNav = this.openNav.bind(this)
        this.closeNav = this.closeNav.bind(this)
        this.openCity = this.openCity.bind(this)
        this.search = this.search.bind(this)
    }

    componentDidMount() {
        if (!window.localStorage.getItem("token")) {
            this.props.history.push(`/login`)
            window.location.reload();
        }

        let user = window.localStorage.getItem("logedin")
        const obj = JSON.parse(user);

        if (obj["role"] === "admin") {
            this.refresh();
            this.state.admin = "admin"
        }
        else {
            this.retrieveCoursebysalarier(parseInt(obj["id"]));

        }

    }
    openNav(id) {
    this.state.idSalarie=id
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
    refreshCourses(id) {
        let a = parseInt(id)
        CourseDataService.retrieveCourse(INSTRUCTOR, a)//HARDCODED
            .then(
                response => {
                    this.setState({ courses: response.data })
                }
            ).catch(error => {
                console.error('no ', error);
            });
    }
    retrieveCoursebysalarier(id) {
        let a = parseInt(id)
        CourseDataService.retrieveCoursebysalarier(INSTRUCTOR, a)//HARDCODED
            .then(
                response => {
                    this.setState({ courses: response.data })
                }
            ).catch(error => {
                console.error('no ', error);
            });
    }
    retrieveCoursebySituationDemandeAndsalarier(id, salarier) {
        let a = parseInt(id)
        CourseDataService.retrieveCoursebySituationDemandeAndsalarier(INSTRUCTOR, a, salarier)//HARDCODED
            .then(
                response => {
                    this.setState({ courses: response.data })
                }
            ).catch(error => {
                console.error('no ', error);
            });
    }
    refresh() {
        let user = window.localStorage.getItem("logedin")
        const obj = JSON.parse(user);
        if (obj["role"] === "admin") {
            CourseDataService.retrieveAllCourses(INSTRUCTOR)//HARDCODED
                .then(
                    response => {
                        //alert(JSON.stringify (response));
                        this.setState({ courses: response.data })
                    }
                ).catch(error => {
                    console.error('no diplome', error);
                });
        } else {
            CourseDataService.retrieveCoursebysalarier(INSTRUCTOR, obj["id"])//HARDCODED
                .then(
                    response => {
                        //alert(JSON.stringify (response));
                        this.setState({ courses: response.data })
                    }
                ).catch(error => {
                    console.error('no diplome', error);
                });
        }

    }


    salarieFonction(id) {


        CourseDataServicesalarie.retrieveCourse(INSTRUCTOR, "" + id)//HARDCODED
            .then(
                response => {
                    this.setState({ salarier: response.data })
                    console.log(response.data);
                    alert(response.data.Nom + " " + response.data.Prenom);
                }
            )

    }
    delete(id) {
        CourseDataService.deleteCourse(INSTRUCTOR, id)
            .then(
                response => {
                    this.setState({ message: `Delete of course ${id} Successful` })
                    this.refresh()
                }
            )

    }
    valide(id, situationDemande) {
        if(situationDemande=="rejeté")
        {
            let motiftext= document.getElementById("motif").value
            if(motiftext.trim() == ''){
               document.getElementById("motiferror").textContent ="veuillez entrer le motif !"
               //alert("vide");
               return
            }
            
           // alert(situationDemande);
        }
        var foundIndex = this.state.courses.findIndex(x => x.id == id);
        var a = Object.assign({}, this.state.courses[foundIndex], { situationDemande: situationDemande, motifrejet: document.getElementById("motif").value })
        console.log("aaaaaaaaaaaaaa"+JSON.stringify(a))
        CourseDataService.updateCourse(JSON.stringify(a))
            .then(
                this.refresh()


            ).catch(error => {
                console.log(error.response)
            });
            if(situationDemande=="validé")
        {
            let indisponiblesalarie = JSON.stringify({ 
                code: a["id"],
                dateDebut: a["datedebut"] ,
                dateFin: a["datefin"] ,
                salarier: a["salarier"] 
            })
            console.log("indisponiblesalarie  : "+indisponiblesalarie); 
          
           indisponibiliteService.createCourse('', indisponiblesalarie)
                    .then().catch(error => {
                        console.log(error.response)
                    
            })
        }
        window.location.reload()
    }

    addCourseClicked() {
        this.props.history.push(`/demande/-1`)
    }


    handleChange(event) {

        let user = window.localStorage.getItem("logedin")
        const obj = JSON.parse(user);

        if (obj["role"] === "admin") {


            this.setState({ Value: event.target.value });
            //alert( event.target.value);
            if (event.target.value === "tout")
                this.refresh()
            else {
                CourseDataService.retrieveCourse(INSTRUCTOR, "" + event.target.value)//HARDCODED
                    .then(
                        response => {
                            this.setState({ courses: response.data })

                        }
                    )
            }


        } else {
            this.setState({ Value: event.target.value });
            //alert( event.target.value);
            if (event.target.value === "tout") {
                CourseDataService.retrieveCoursebysalarier(INSTRUCTOR, obj["id"])//HARDCODED
                    .then(
                        response => {
                            //alert(JSON.stringify (response));
                            this.setState({ courses: response.data })
                        }
                    ).catch(error => {
                        console.error('no diplome', error);
                    });
            }
            else {
                CourseDataService.retrieveCoursebySituationDemandeAndsalarier(INSTRUCTOR, event.target.value, obj["id"])//HARDCODED
                    .then(
                        response => {
                            this.setState({ courses: response.data })

                        }
                    ).catch(error => {
                        console.error('no diplome', error);
                    });
            }
        }
    }
     search(event) {
        var input, filter, table, tr, td, i, txtValue,feild;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("mytable");
  tr = table.getElementsByTagName("tr");
  feild = document.getElementById("feild").value;
  console.log(feild)
  for (i = 0; i < tr.length; i++) {
     
    td = tr[i].getElementsByTagName("td")[feild];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }  
          
  }
    }
    render() {
        console.log('render')
        return (
            
            <div   style={{ marginTop: "50px" }} className="container">
                <h3 className="text-center">Tous les Demandes de salarie</h3>
                
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div style={{ marginTop: "20px" }} className="container">


                    <table className="table" style={{ textAlign: "center" }} id="">
                        <thead className="table-light">
                            <tr>
                                <th> <label>tout</label>
                                    <input className="radio" type="radio" id="tout" name="radio" value="tout" onChange={this.handleChange} />
                                </th>
                                <th><label>en attente</label>
                                    <input className="radio" type="radio" id="en attente" name="radio" value="en attente" onChange={this.handleChange} />
                                </th>
                                <th><label>validé</label>
                                    <input className="radio" type="radio" id="validé" name="radio" value="validé" onChange={this.handleChange} />
                                </th>
                                <th> <label>rejeté</label>
                                    <input className="radio" type="radio" id="rejeté" name="radio" value="rejeté" onChange={this.handleChange} />
                                </th>

                            </tr>
                        </thead>

                    </table>


                    <table className="table" id="">
                    <thead className="table-light">
                           <tr style={{ textAlign:'center' }}>
                 <th>  <input className="form-control" type="text" id="myInput" onChange={this.search} placeholder="Rechercher Par ...." title="Type in a name"></input></th>
                   <th>  
                                        <select className="form-control" id="feild"   >
                                        <option value="0">code</option>
                                        <option value="1">etat</option>
                                        <option value="2">date Début</option>
                                        <option value="3">date Fin</option>
                                        <option value="5">Type Demande</option>
                                        <option value="6">Situation</option>
                                        <option value="7">Motif de rejet</option>
                                        </select></th>
                          </tr>
                        </thead></table>
                    <table className="table" id="mytable"> 
                        <thead className="table-primary">
                            <tr style={{ textAlign:'center' }}>
                                <th>code</th>
                                <th>etat</th>
                                <th>Début</th>
                                <th>Fin</th>
                                <th>Salarie</th>
                                <th>Type Demande</th>
                                <th>Situation</th>
                                <th>Motif de rejet</th>
                                <th style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' }}>Validation</th>
                                <th style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody id="body">
                            {
                                this.state.courses.map(
                                    salarie =>
                                        <tr key={salarie.id}>
                                            <td style={{ backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9'}}>{salarie.code}</td>
                                            <td style={{ backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9'}}>{salarie.etat == 0 ? 'Activé' : 'Déactivé'}</td>
                                            <td style={{ backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9'}}>{salarie.datedebut}</td>
                                            <td style={{ backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9'}}>{salarie.datefin}</td>
                                            <td style={{ backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9'}}><button className="btn btn-link" onClick={() => this.salarieFonction(salarie.salarier)}>voir</button></td>
                                            <td style={{ backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9'}}>{salarie.typeDemande.type}</td>
                                            <td style={{ backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9'}}>{salarie.situationDemande}</td>
                                            <td style={{ backgroundColor:  salarie.situationDemande != "rejeté"   ? '#AAAA':'' , color :  salarie.situationDemande != "rejeté"   ? '':'#Ff3232'}}>{salarie.motifrejet}</td>
                                            <td style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' , backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9' , textAlign:'center'  }}><button className="btn btn-link" style={{  backgroundColor:'#def1f9'}}  onClick={() => this.openNav(salarie.id)}><span className="fa fa-info"></span></button></td>
                                            <td style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' , backgroundColor:  salarie.situationDemande != "en attente"   ? '':'#def1f9' , textAlign:'center' }}><button className="btn btn-danger" id="delete" onClick={() => this.delete(salarie.id)}>X</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.addCourseClicked}>Ajouter</button>
                    </div>


                </div>



                <div id="id01" className="w3-modal">
                    <div className="w3-modal-content w3-card-4 w3-animate-zoom">
                        <header className="w3-container w3-blue">
                            <span onClick={this.closeNav}
                                className="w3-button w3-blue w3-xlarge w3-display-topright">&times;</span>
                            <h2>Validation</h2>
                        </header>

                        <div className="w3-bar w3-border-bottom">
                            <button className="tablink w3-bar-item w3-button" onClick={(event) => this.openCity(event, 'London')}>Validé la demande</button> 
                            <button className="tablink w3-bar-item w3-button" onClick={(event) => this.openCity(event, 'Paris')}>rejeté la demande</button> 
                        </div>

                        <div id="Paris" className="w3-container city">
                            <div style={{ padding: "20px" }} className="container">
                                
                            <table className="table">
                                    <thead className="table-primary">
                                        <tr style={{textAlign: "center"}}>
                                            <th></th> 
                                            <th>rejeter</th> 
                                            <th></th>  
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                          
                                                    <tr  style={{textAlign: "center"}}>
                                             <td style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' }}>Motif de rejet :</td>
                                             <td style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' }}><input className="form-control" type="text" id="motif" /></td>
                                             <td style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' }}><button className="btn btn-danger" onClick={() => this.valide(this.state.idSalarie, "rejeté")}>rejeter</button></td>
                                            
                                                    </tr>
                                        <tr>
                                         <td></td>   
                                        <td style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' }}><span  style={{color:'#Ff3232'}} id="motiferror" ></span></td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div id="London" className="w3-container city">
                                <div style={{ padding: "20px" }} className="container">
                                    <table className="table">
                                        <thead className="table-primary">
                                            <tr  style={{textAlign: "center"}}>
                                                
                                            <th>accépter la demande</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                                        <tr  style={{textAlign: "center"}}>
                                                        <td style={{ display: this.state.admin == "admin" ? 'table-cell' : 'none' }}><button className="btn btn-success" onClick={() => this.valide(this.state.idSalarie, "validé")}>accépter</button></td>
                                          
                                                        </tr>
                                             
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
        )
    }
}

export default ListCoursesComponent