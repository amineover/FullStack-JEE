import axios from 'axios'

const INSTRUCTOR = ''
const COURSE_API_URL = 'http://localhost:8040'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}`

class CourseDataService {
//salarie
    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/getSalarierFormation`);
    }

    retrieveCourse(name, id) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/searchSalarierFormation?id=${id}`);
    }

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/deletSalarierFormation?id=${id}`);
    }

    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/sauvegSalarierFormation`, course,{headers:{"Content-Type" : "application/json"}});
    }

    createCourse(name, course) {
        //console.log('executed service');
        return axios.post(`${INSTRUCTOR_API_URL}/sauvegSalarierFormation`, course,{headers:{"Content-Type" : "application/json"}});
    }
}

export default new CourseDataService