import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner';
import store from '../../redux/store';
import { getAllTeachers } from '../../redux/actionCreators';
import { connect } from "react-redux"
import { Teacher } from '../Organisms/Teacher';


const Teachers = ({ match, teachers }) =>  {

  useEffect(()=>{
    store.dispatch(getAllTeachers())
  },[match])

  return(
    <>
        <Banner
      color="third-color"
      image={{
        src: "https://s.libertaddigital.com/fotos/noticias/1920/1080/fit/maestro_alumno_banner.jpg",
        alt: "Banner profesores"
      }}
      title="Nuestros profesores"
      subtitle="Los docentes estan altamente calificado"
    />
    {
      teachers &&
      <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
      {
        teachers.map(t => (
          <Teacher
          key={t.id}
          picture={t.picture}
          name={t.name}
          country={t.country}
          />
        ))
      }
      </main>
    }
    </>
    )
}

const mapStateToProps = state => ({
  teachers: state.teacherReducer.teachers
})
export default connect(mapStateToProps,{}) (Teachers)

