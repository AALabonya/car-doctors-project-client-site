
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useContext } from "react";
import login from "./../../assets/assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  // const{signIn} = useContext(AuthContext)
  const{signIn} =useAuth()
 
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = e =>{


    e.preventDefault()
        
        const email = e.target.email.value
        const password = e.target.password.value
        console.log( email, password);

        signIn(email, password)
            .then((result) => {
              const loggedUser=result.user;
              console.log(loggedUser);
              const user ={email}
              
              // access toke
               axios.post("https://car-doctors-server-dun.vercel.app/jwt", user)
               .then(res=>{
                console.log(res.data);
               })
            })
            .catch((error) => {
               console.log(error)

            })
    
  }
    return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-8">
      <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email"  placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="LogIn" />
        </div>
      </form>
      <p className="text-center">New to car Doctors? <Link className="text-orange-600 font-bold" to="/registration">Sign UP</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;