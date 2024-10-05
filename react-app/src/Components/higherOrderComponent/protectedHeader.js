import React from "react";
import Headerfile from "../Header";
import WithAuth from "./withAuth";

const ProtectedDashboard = WithAuth(Headerfile);

export default ProtectedDashboard;