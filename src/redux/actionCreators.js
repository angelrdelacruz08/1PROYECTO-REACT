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
Axios.get(`https://hola-1acc5-default-rtdb.firebaseio.com/posts.json`)
.then(resp =>{
    return dispatch({
      type: GET_ALL_POSTS,
      posts: resp.data
    })
  }
)
}
export const getAllSpecialities = () => dispatch =>{
  Axios.get(`https://hola-1acc5-default-rtdb.firebaseio.com/especialidades.json`)
  .then(resp =>{
      return dispatch({
        type: GET_ALL_SPECIALITIES,
        specialities: resp.data
      })
    }
  )
}

export const getAllCourses= () => dispatch =>{
  Axios.get(`https://hola-1acc5-default-rtdb.firebaseio.com/cursos.json`)
  .then(resp =>{
      return dispatch({
        type: GET_ALL_COURSES,
        courses: resp.data
      })
    }
  )
}
export const getAllTeachers= () => dispatch =>{
  Axios.get(`https://hola-1acc5-default-rtdb.firebaseio.com/profesores.json`)
  .then(resp => {
      return dispatch({
        type: GET_ALL_TEACHERS,
        teachers: resp.data
      })
    }
  )
}

export const getPost= id => dispatch =>{
  Axios.get(`https://hola-1acc5-default-rtdb.firebaseio.com/posts/${id}.json`)
  .then(resp =>{
      return dispatch({
        type: GET_POST,
        post: resp.data
      })
    }
  )
}
export const getSpeciality= id => dispatch =>{
  Axios.get(`https://hola-1acc5-default-rtdb.firebaseio.com/especialidad/${id}.json`)
  .then(resp =>{
      return dispatch({
        type: GET_SPECIALITY,
        speciality: resp.data
      })
    }
  )
}
export const getCourse = id => dispatch =>{
  Axios.get(`https://hola-1acc5-default-rtdb.firebaseio.com/curso/${id}.json`)
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
