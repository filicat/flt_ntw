import { createContext } from "react";
import { AuthInfo } from "../types";

export const AuthContext = createContext<AuthInfo|null>(null);