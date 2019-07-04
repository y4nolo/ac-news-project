import React from "react";

function ErrorPage({ error }) {
  return (
    <div>{error ? <p> {error.response.data.msg} </p> : <p>Error!</p>}</div>
    //catching error from backend- set in state and pass into frontend to render for user
  );
}

export default ErrorPage;
