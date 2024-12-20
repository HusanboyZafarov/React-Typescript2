import { useContext } from "react";
import TaskContext from "./tasks/tasksContext";
import { LoginStatus } from "./auth";
import useAuthStore from "./auth/store";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { user } = useAuthStore();
  const counter = useCounterStore((s) => s.counter);
  console.log("Render navbar");

  return (
    <>
      <nav className="navbar d-flex justify-content-between">
        <span className="badge text-bg-secondary">{counter}</span>
        <LoginStatus />
      </nav>
      <h3>User: {user}</h3>
    </>
  );
};

export default NavBar;
