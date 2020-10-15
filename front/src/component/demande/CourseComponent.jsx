import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CourseDataService from '../../service/demande/CourseDataService';
import CourseDataServicesalarie from '../../service/salarie/CourseDataService';
import type_demandeDataServicesalarie from '../../service/type_demande/CourseDataService';
//import salarie_demandeDataServicesalarie from '../../service/salarie_demande/CourseDataService';

const INSTRUCTOR = ''

class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            type_demande: [],
            situation_demande: [],
            id: this.props.match.params.id,
            code: '',
            etat: '',
            datedebut: '',
            datefin: '', 
            salarier: '',  
            idsalarie: '',  
            idSituation: '',
            codeSituation: '',
            etatSituation: '',
            Situationdate: '' 
        }

      
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.refreshtypedemandeCourses = this.refreshtypedemandeCourses.bind(this)

    }

    refreshCourses() {
        CourseDataServicesalarie.retrieveAllCourses(INSTRUCTOR)//HARDCODED
            .then(
                response => { 
                    this.setState({ courses: response.data })
                }
            ) 
    }
    refreshtypedemandeCourses() {
        type_demandeDataServicesalarie.retrieveAllCourses(INSTRUCTOR)//HARDCODED
        .then(
            response => { 
                this.setState({ type_demande: response.data })
                //console.log("type_demande: "+this.state.type_demande)
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
          //   this.diplomeDatarefreshCourses();
          }else{
             this.setState({ courses: [obj] })
         //    this.diplomeDatarefreshCourses()
          }
          this.refreshtypedemandeCourses();
        //this.refreshCourses();
       // console.log(this.state.id)

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        CourseDataService.retrieveCourse(INSTRUCTOR, this.state.id)
            .then(response => this.setState({
                code: ""+response.data.code,
                etat: ""+response.data.etat,
                datedebut: ""+response.data.datedebut,
                datefin: ""+response.data.datefin,
                idsalarie: response.data.salarier
            }))
    }

    

    validate(values) {
        let errors = {}
        
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
        var etats = document.getElementById('etatSituation').value; 
        var etatdemande = document.getElementById('etat').value; 
        if(etatdemande=="1"){etatdemande=1}else{etatdemande=0}
        var first = this.state.courses.find(s=>s.id==document.getElementById('salarie').value);
        var type_demandeSelect = this.state.type_demande.find(s=>s.type==document.getElementById('type_demande').value);
         
        /* let situation_demandes = {
            
            code: values.codeSituation,
            Etat: etats,
            dateEtat: values.Situationdate
         }*/
         
         console.log("document.getElementById('type_demande').value  :  "+document.getElementById('type_demande').value);
         
         console.log("first  :  "+first);
         let course = JSON.stringify({
            code: values.code,
            datedebut: values.datedebut,
            datefin: values.datefin,
            etat: etatdemande,
            salarier: first.id,
            situationDemande:etats,
            typeDemande:type_demandeSelect
        })
         console.log("demande : "+course);
         //console.log(first);
       if (this.state.id == -1) { 
         /*   salarie_demandeDataServicesalarie.createCourse(username, situation_demandes)
                 .then().catch(error => {
                     console.log(error.response)
                 });*/
           CourseDataService.createCourse(username, course)
            .then(
                () => this.props.history.push('/demande')).catch(error => {
                console.log(error.response)
            });
        }
             else {
           /* salarie_demandeDataServicesalarie.createCourse(username, situation_demandes)
            .then().catch(error => {
                console.log(error.response)
            });*/
             CourseDataService.updateCourse(username, this.state.id, course)
                 .then(() => this.props.history.push('/demande')).catch(error => {
                     console.log(error.response)
                 });
         }
      
         
     }
    render() {

        let {  id, code,etat,datedebut,datefin,salarier,type_demande,etatSituation,idSituation,codeSituation,Situationdate } = this.state

        return (
            <div  style={{padding: "30px"}} className="container">
                <h3 className="text-center">Demande  de salarie</h3>
                <div  style={{padding: "30px"}} className="container">
                    <Formik
                        initialValues={{ id, code,etat,datedebut,datefin,salarier,type_demande,etatSituation,idSituation,codeSituation,Situationdate }}
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
                                    <fieldset className="form-group" hidden>
                                        <label>etat</label> 
                                        <select className="form-control" id="etat" name="etat" >
                                        <option value="0">Activé</option>
                                        <option value="1">Déactivé</option>
                                        </select>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>date debut</label>
                                        <Field className="form-control" type="date" name="datedebut" />    
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>date fin</label>
                                        <Field className="form-control" type="date" name="datefin" />    
                                    </fieldset> 
                                    <fieldset className="form-group">
                                        <label>Nom et Prenom</label>
                                        <select   className="form-control" id="salarie" name="salarier" >
                                        {
                                this.state.courses.map(
                                    salarie =>
                                        <option key={salarie.id} value={salarie.id}>{salarie.nom} {salarie.prenom}</option>
                                        )}
                                        </select>
                                        </fieldset>
                                        <fieldset className="form-group">
                                        <label>type demande</label>
                                        <select className="form-control" id="type_demande" name="type_demande" >
                                        {
                                this.state.type_demande.map(
                                    salarie =>
                                        <option key={salarie.id} value={salarie.type}>{salarie.type}</option>
                                        )}
                                        </select>
                                        </fieldset>
                                        <fieldset className="form-group">
                                        <label>Situation demande</label>
                                        <select className="form-control" id="etatSituation" name="etatSituation" >
                                        <option value="en attente">en attente</option>
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