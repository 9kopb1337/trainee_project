import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      This page doesn't exist. Go to <Link to="/">Home</Link>
    </div>
  );
};
