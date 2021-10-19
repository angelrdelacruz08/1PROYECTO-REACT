import Axios from "axios";
import {
  GET_ALL_POSTS,  
  GET_ALL_SPECIALITIES, 
  GET_ALL_COURSES, 
  GET_ALL_TEACHERS, 
  GET_POST, 
  GET_SPECIALITY,
  GET_COURSE, 
  GET_FRAGMENT, 
} from "./actions";

const API_URL = process.env.REACT_APP_API_URL

export const getAllPosts = () => dispatch =>{
Axios.get(`${API_URL}/posts.json`)
.then(resp =>{
    return dispatch({
      type: GET_ALL_POSTS,
      posts: resp.data
    })
  }
)
}
export const getAllSpecialities = () => dispatch =>{
  Axios.get(`${API_URL}/especialidades.json`)
  .then(resp =>{
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        specialities: resp.data
      })
    }
  )
}

export const getAllCourses= () => dispatch =>{
  Axios.get(`${API_URL}/cursos.json`)
  .then(resp =>{
      return dispatch({
        type: GET_ALL_COURSES,
        courses: resp.data
      })
    }
  )
}
export const getAllTeachers= () => dispatch =>{
  Axios.get(`${API_URL}/profesores.json`)
  .then(resp => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: resp.data
      })
    }
  )
}

export const getPost= id => dispatch =>{
  Axios.get(`${API_URL}/posts/${id}.json`)
  .then(resp =>{
      return dispatch({
        type: GET_POST,
        post: resp.data
      })
    }
  )
}
export const getSpeciality= id => dispatch =>{
  Axios.get(`${API_URL}/especialidades/${id}.json`)
  .then(resp =>{
      return dispatch({
        type: GET_SPECIALITY,
        speciality: resp.data
      })
    }
  )
}
export const getCourse = id => dispatch =>{
  Axios.get(`${API_URL}/cursos/${id}.json`)
  .then(resp =>{
      return dispatch({
        type: GET_COURSE,
        course: resp.data
      })
    }
  )
}
export const getFragment= id => dispatch =>{
  Axios.get(`${API_URL}/clases/${id}.json`)
  .then(resp =>{
      return dispatch({
        type: GET_FRAGMENT,
        fragment: resp.data
      })
    }
  )
}
