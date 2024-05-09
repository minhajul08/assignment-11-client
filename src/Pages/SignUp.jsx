import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link } from "react-router-dom";

const SignUp = () => {
    const {createUser} = useContext (AuthContext)

    const handelRegister = e => {
        e.preventDefault ();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const logIn = {
            name,
            email,
            password
        }
        console.log (logIn);
        createUser (email,password)
        .then (result => {
            console.log (result.user)
        })
        .catch (error => {
            console.log (error)
        })
    }
    return (
        <div className="hero min-h-screen  bg-base-200">
        <div className="hero-content  flex-col">
          <div className="card shrink-0  w-80 lg:w-[500px] shadow-2xl bg-base-100">
            <form onSubmit={handelRegister} className="card-body">
            <div className="text-center">
            <h1 className="text-5xl font-bold p-5">SignUp now!</h1>
          </div>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Name" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
              <p className="mr-5">Already have a account <Link className="text-blue-700 btn-link" to="/login">Login</Link></p>
            </form>
            
          </div>
        </div>
      </div>
    );
};

export default SignUp;