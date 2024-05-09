import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Link,  useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import swal from "sweetalert";


const Login = () => {
  const {signIn,googleLogin} = useContext (AuthContext)
  const navigate = useNavigate();
  console.log("location in the login page", location)
    const handelLogin = e => {
        e.preventDefault ();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const logIn = {
            email,
            password
        }
        console.log (logIn)
        signIn (email,password)
        .then (result => {
            console.log (result.user)
            navigate(location?.state ? location.state : '/')
        })
        .catch (error => {
            console.log (error)
        })
    }

      // google signIn
         
      //---- google sign in -------
   const handleGoogleSignIn = async () => {
    try {
      await googleLogin()
      swal({
        title: "Done",
        text: "You hae successfully logged in",
        icon: "success",
        dangerMode: true,
      })
      navigate(location?.state ? location.state : '/')
    }
    catch(err) {
        console.log(err)
      } 
  }
  
    return (
        <div className="hero min-h-screen  bg-base-200">
  <div className="hero-content  flex-col">
    <div className="card shrink-0  w-80 lg:w-[500px] shadow-2xl bg-base-100">
      <form onSubmit={handelLogin} className="card-body">
      <div className="text-center">
      <h1 className="text-5xl font-bold p-5">Login now!</h1>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="">If you new in this account? Please <Link className="text-blue-700 btn-link" to='/signUp'>SignUp</Link></p>
      </form>
      <div className="flex items-center justify-center gap-5">
        <hr className="w-20"></hr>
         <h2>or</h2>
        <hr className="w-20"/>
      </div>
      <button className="btn bg-blue-600 mx-5 text-white text-lg mb-2" onClick={handleGoogleSignIn}> <span className="w-6 h-6 bg-white  flex items-center "><FcGoogle className="mx-auto" /></span>  Google</button>
    </div>
  </div>
</div>
    );
};

export default Login;