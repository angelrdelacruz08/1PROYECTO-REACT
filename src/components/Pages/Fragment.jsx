import React, {useEffect} from 'react'
import Vimeo from '@u-wave/react-vimeo'
import store from '../../redux/store'
import { getCourse, getFragment } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



export const Fragment = ({fragment, course,}) => {

 

  useEffect(() => {

    store.dispatch(getCourse(0))
    store.dispatch(getFragment(1))

  },[])
    



  return (


    <div className="class-page-container background dark-color s-pxy-4">
        {
          (fragment && course) &&
          <div className="ed-grid lg-grid-12">
            <div className="lg-cols-8">
              <div>
                <Vimeo
                  
                  video={fragment.video}
                  // {course.data.classes[0].subjects[0].subject.video_url}
                  
                  width={780}
                />    
              </div>
              <div>
                <h1 className="color accent-color  s-mb-0 ">{course.data.classes[0].subjects[0].subject.title}</h1>
                <span className="color light-color">{fragment.id}</span>
              </div>
            </div>
            <div className="lg-cols-4"> 
              <div>
                <h2 className="color light-color">Temario del curso</h2>
                {
                  course.data.classes.map(cl =>(
                    <div className="course-class l-section" key={cl.class.id}>
                      <h3 className="color light-color" >{cl.class.title}</h3>
                      <ul className="data-list">
                      {
                       cl.subjects.map(s =>(
                         <li key={s.subject.id}>
                           <Link to={`/clase/${s.subject.id}`} className="color light-color">
                             <div className="color light-color" >{s.subject.title}</div>
                        
                             </Link>
                         </li>
                       ))  
                      }
                      </ul>
                    </div>
                  ))
                }
              </div>   
          </div> 
      </div>
        }
    </div>
  )
}
const mapStateToProps = state => ({
  fragment:state.fragmentReducer.fragment, 
  course: state.courseReducer.course})
export default connect(mapStateToProps, {})(Fragment)
