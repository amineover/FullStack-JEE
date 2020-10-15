import axios from 'axios'

const INSTRUCTOR = ''
const COURSE_API_URL = 'http://localhost:8040'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}`

class CourseDataService {
//salarie
    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/getDemande`);
    }

    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/findBySituationDemande?etat=${id}`);
    }
    retrieveCoursebySituationDemandeAndsalarier(name, id,salarier) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/findBySituationDemandeAndSalarier?etat=${id}&salarier=${salarier}`);
    }
    retrieveCoursebysalarier(name, salarier) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/findBySalarier?salarier=${salarier}`);
    }
    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/deletDemande?id=${id}`);
    }

    updateCourse(course) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/sauvegDemande`, course,{headers:{"Content-Type" : "application/json"}});
    }
   
    createCourse(name, course) {
        //console.log('executed service');
        return axios.post(`${INSTRUCTOR_API_URL}/sauvegDemande`, course,{headers:{"Content-Type" : "application/json"}});
    }
}

export default new CourseDataService