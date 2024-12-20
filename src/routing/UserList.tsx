import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link to={`${user.id}`}>{user.name}</Link>{" "}
        </li>
      ))}
      <Link to="/" className="btn btn-primary mt-2">
        Back Home
      </Link>{" "}
    </ul>
  );
};

export default UserList;
