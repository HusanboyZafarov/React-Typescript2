import {
  isRouteErrorResponse,
  Navigate,
  useRouteError,
} from "react-router-dom";
import useAuth from "./hooks/useAuth";

const ErrorPage = () => {
  return (
    <>
      <h1>Oops...</h1>
      <p></p>
    </>
  );
};

export default ErrorPage;
