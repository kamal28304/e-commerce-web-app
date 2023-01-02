import React, {Children, createContext} from "react"


export const UserContext = createContext(Children);
// createContext<unknown>(defaultValue: unknown): React.Context<unknown>
// import createContext
export const AlertContext= createContext(Children);

export const CartContext= createContext(Children)