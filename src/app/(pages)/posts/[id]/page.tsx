import React from "react";

export default (props) => {
  let {
    params: { id },
  } = props;
  return (
    <>
      <h1>Post details: </h1>
      <h3>Post id: {id}</h3>
    </>
  );
};
