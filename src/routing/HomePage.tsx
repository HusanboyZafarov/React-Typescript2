import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam omnis quam
        et sequi asperiores consectetur, illum cumque assumenda! Similique,
        commodi.
      </p>
      <Link to="/users" className="btn btn-primary">
        Users
      </Link>
    </div>
  );
};

export default HomePage;
