import React, {useEffect} from 'react'
import store from '../../redux/store'
import {connect} from "react-redux"
import { getCourse } from "../../redux/actionCreators"
import Banner from '../Organisms/Banner'
import { Link } from 'react-router-dom'



const Course = ({ course  }) => {
  useEffect(() => {
    store.dispatch(getCourse(0))
  }, [])


    return (
        <>
        { course && 
        <>
          <Banner 
            color= "dark-color"
            title= {course.name}
            subtitle ={course.information}
            image={{
              src: "http://2.bp.blogspot.com/-maLSqJBzhBs/UIiFxQqD2aI/AAAAAAAACzQ/pKpHvg2VRgM/s1600/Portada%2BAbstracta%2B14.jpg",
              alt: course.name
            }}
            courseBanner
            poster={course.picture}
            // especialidad={course.data.specialities[0].name}
            info={course.information}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-10">
              <div className="course-features ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap ">
                <div>
                  <h3 className="t4">¿Que aprenderas?</h3>
                  <ul dangerouslySetInnerHTML={{__html:course.you_learn}}/>
                </div>
                <div>
                  <h3 className="t4">Conocimietos previos</h3>
                  <ul dangerouslySetInnerHTML={{__html:course.requirements}}></ul>
                </div>
                <div>
                  <h3 className="t4">Nivel del curso</h3>
                  <p>{course.level}</p>
                </div>
              </div>
              <h2>Temario del curso</h2>
              <div className=" s-border s-pxy-2 lg-pxy-4 s-radius s-bg-white l-block l-section s-shadow-bottom">
                {
                  course.data.classes.map(cl =>(
                    <div className="course-class l-section" key={cl.class.id}>
                      <h3>{cl.class.title}</h3>
                      <p>{cl.class.desciption}</p>
                      <ul>
                      {
                       cl.subjects.map(s =>(
                         <li key={s.subject.id}>
                           <Link to={`/clase/${s.subject.id}`} className="color fourth-color">
                           <div className="color fourth-color" >{s.subject.title}</div></Link>
                         </li>
                       ))  
                      }
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
            {/* <div className="lg-cols-3">
              <h2 className="t3">Profesor</h2>
              <p>Edwin Gabriel</p>
            </div> */}
          </main>             
        </>
        }
        </>
    )
  }

  const mapStateToProps = state =>({
    course: state.courseReducer.course
  })


export default connect(mapStateToProps, {})(Course)

