import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h1>OOPS!</h1>
      <p>
        {err.status}: {err.statusText}
      </p>
    </div>
  );
};

export default ErrorPage;
