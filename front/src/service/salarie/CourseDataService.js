import axios from 'axios'

const INSTRUCTOR = ''
const COURSE_API_URL = 'http://localhost:8040'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}`

class CourseDataServiceSalarie {
//salarie
    retrieveAllCourses(name) {
        //console.log('executed service')
        return axios.get(`${INSTRUCTOR_API_URL}/getSalarie`);
    }

    retrieveCourse(name, id) {
        console.log('executed service '+id)
        return axios.get(`${INSTRUCTOR_API_URL}/searchSalarier?id=${id}`);
    }

    deleteCourse(name, id) {
        //console.log('executed service')
        return axios.delete(`${INSTRUCTOR_API_URL}/deletSalarier?id=${id}`);
    }

    updateCourse(name, id, course) {
        //console.log('executed service')
        return axios.post(`${INSTRUCTOR_API_URL}/sauvegSalarier`, course,{headers:{"Content-Type" : "application/json"}});
    }

    createCourse(name, course) {
        //console.log('executed service');
        return axios.post(`${INSTRUCTOR_API_URL}/sauvegSalarier`, course,{headers:{"Content-Type" : "application/json"}});
    }
}

export default new CourseDataServiceSalarie