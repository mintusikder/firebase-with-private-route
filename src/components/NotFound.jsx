import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <h1 className="text-[200px] font-bold">404</h1>
      <h2 className="text-5xl font-bold mb-7">NOT FOUND</h2>
      <Link  className="text-2xl btn btn-success text-white" to="/">Back To Home</Link>
    </div>
  );
};

export default NotFound;
