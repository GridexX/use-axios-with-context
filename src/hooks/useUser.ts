import React from "react";
import { IUserContext, UserContext } from "../contexts/user";

const useUser = () => React.useContext<IUserContext | any>(UserContext);

export default useUser;
