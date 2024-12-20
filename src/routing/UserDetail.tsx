import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Viewing user with ID: {id}</p>
    </div>
  );
};

export default UserDetail;
