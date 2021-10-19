import React, {useEffect} from 'react'
import Banner from '../Organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/actionCreators'
import Card from '../Organisms/Card'

const Courses = ({courses}) => {

  useEffect(() =>{
    store.dispatch(getAllCourses())
  }, [])

  return(
    <>
    <Banner 
      color="dark-color"
       image={{
         src:"https://s.libertaddigital.com/fotos/noticias/1920/1080/fit/maestro_alumno_banner.jpg",
         alt:"Banner Cursos"
       }}
       title="Nuestros cursos"
       subtitle="Comienza desde cero hoy mismo en tu camino al dominar la tecnología"
    />  
    {
      courses &&
      <main className='ed-grid m-grid-5'>
        {
          courses.map(c =>(
          <Card 
          path="cursos"
          picture={c.picture} 
          name={c.name} 
          key={c.id}
          cardId={c.id}
          />

          ))
        }
      </main>
      }
    </>
  )

}

const mapStateToProps = state => ({
  courses: state.courseReducer.courses
})

export default connect(mapStateToProps, {})(Courses)


