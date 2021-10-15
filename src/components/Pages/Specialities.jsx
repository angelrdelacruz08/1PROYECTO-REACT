import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import store from '../../redux/store'
import { getAllSpecialities } from '../../redux/actionCreators'
import { connect } from 'react-redux'
import Card from '../Organisms/Card'


const Specialities = ({ specialities}) => {

  useEffect(() =>{
    store.dispatch(getAllSpecialities())
  }, [])

  return(
  <>
    <Banner 
    color="second-color"
    image={{
      src:"https://s.libertaddigital.com/fotos/noticias/1920/1080/fit/maestro_alumno_banner.jpg",
      alt:"Banner especialidades"
    }}
    title="Especialidades"
    subtitle="Domina una tecnologia con als rutas de aprendisaje que te ofrecemos"
   />
   {
    specialities &&
    <main className="ed-grid m-grid-3">
      {
        specialities.map(s =>(
          <Card picture={s.picture} name={s.name} key={s.id} />
        ))
      }
    </main>
   }
  </>
  )
}

const mapStateToProps = state => ({
  specialities: state.specialityReducer.specialities
})
export default connect(mapStateToProps, {})(Specialities)

