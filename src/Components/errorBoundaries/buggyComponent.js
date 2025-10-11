import React from 'react';

const BuggyComponent = ({ throwError }) => {
  if (throwError) {
    throw new Error("I crashed!");
  }
  return <div>This will not be rendered if there's an error.</div>;
};

export default BuggyComponent;
