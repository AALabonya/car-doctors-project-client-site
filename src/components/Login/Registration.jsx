/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useContext } from "react";
import login from "./../../assets/assets/images/login/login.svg"
import { Link } from "react-router-dom";
// import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAuth from "../../hooks/useAuth";


const Registration = () => {

  // const { createUser, logOut, updateUser } = useContext(AuthContext)
  const { createUser, logOut, updateUser } =useAuth()


    const handleSignUp = e => {

        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name, email, password);

        createUser(email, password)
                .then(result=>{
                  console.log(result.user);
                })
            .then(console.error())

}

  return (
        <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="w-1/2 mr-8">
      <img src={login} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" name="name"  placeholder="name" className="input input-bordered" required />
        </div>
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
          <input className="btn btn-primary" type="submit" value="SignUP" />
        </div>
      </form>
      <p className="text-center">Already have an account? <Link className="text-orange-600 font-bold" to="/login">Sign UP</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Registration;