import React from "react"
import Axios from "axios";
import{Link} from 'react-router-dom'

const authentication = (e) => {
 e.preventDefault();

 const form = e.target;
 const data = {
   email: form.email.value,
   password: form.password.value,
 };

 Axios.post('https://api-edteam.alejogs4.now.sh/login', data)
   .then((response) => {
     localStorage.setItem("token", response.data.token);
     window.location = "/"
   })
   .catch(e=> {
     alert ("Error la iniciar sesión")});
};

const Login = () => {
 return (
   <div className="ed-grid">
     <div className="l-block"></div>
     <div className="m-to-center m-60 lg-30">
       <h1 className="center">Iniciar sesión</h1>
       <form onSubmit={authentication.bind()}>
         <div className="form__item">
           <label htmlFor="email">
             Correo electrónico
             <input
               type="email"
               id="email"
               placeholder="Ingrese su e-mail"
               required
               name="email"
             />
           </label>
         </div>
         <div className="form__item">
           <label htmlFor="password">
             Contraseña
             <input
               type="password"
               id="password"
               placeholder="Ingrese su contraseña"
               name="password"
             />
           </label>
         </div>
         <div className="form_item">
           <input
             type="submit"
             value="Iniciar sesión"
             className="button full fourth-color"
             required
           />
         </div>
       </form>
       <div className="center">
         <p>No tienes cuenta de usuario?<Link to="/registro">Crear Cuenta</Link></p>
       </div>
     </div>
   </div>
 );
};

export default Login;

