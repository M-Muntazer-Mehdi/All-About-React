import React from "react";
import WrapFile from "./testFile";
import WithAuth from "./withAuth";

const ProtectedComponent = WithAuth(WrapFile);

export default ProtectedComponent;