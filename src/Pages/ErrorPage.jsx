import { Link } from "react-router-dom";
import img from '../assets/detective-animation-404-error-page.gif'

const ErrorPage = () => {
    return (
        <div className="">
            <div className="text-center p-4"><button className="btn btn-primary mx-auto"><Link to="/">Back to home</Link></button></div>
            <img className="min-h-screen mx-auto" src={img} alt="" />
            
        </div>
    );
};

export default ErrorPage;