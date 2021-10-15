import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import Banner from '../Organisms/Banner'
import store from '../../redux/store'
import { getAllPosts } from '../../redux/actionCreators'
import Publication from '../Organisms/Publication'



const Home = ({posts}) =>{

  useEffect(() =>{
    store.dispatch(getAllPosts())
  }, [])
  
  return (
    <>
     <Banner 
        color="dark-color"
        image="http://2.bp.blogspot.com/-maLSqJBzhBs/UIiFxQqD2aI/AAAAAAAACzQ/pKpHvg2VRgM/s1600/Portada%2BAbstracta%2B14.jpg"
        title="Bienvenido a la experincia mas increible de educación"
        subtitle="Nuestro equipo ha desarrolado la plataforma pensando en ti" 
        home   
        poster="http://2.bp.blogspot.com/-maLSqJBzhBs/UIiFxQqD2aI/AAAAAAAACzQ/pKpHvg2VRgM/s1600/Portada%2BAbstracta%2B14.jpg"
       />
       <main className="ed-grid m-grid-3">
        <div className="l-block m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {
            posts?
            <div>
              {
                posts.map(p => <Publication 
                title={p.title}
                author={p.author}
                fecha={p.fecha}
                content={p.content}
                key={p.id}
                />)
              }
            </div>:
            <p>no existen publicaciones en la base de datos</p>
          }
        </div>
        <div>
          <h3> Lista de categorias</h3>
          <ul className="feature-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
     </>
    )
}

const mapStateToProps = state =>({
  posts: state.postReducer.posts
})


export default connect(mapStateToProps, {}) (Home)



