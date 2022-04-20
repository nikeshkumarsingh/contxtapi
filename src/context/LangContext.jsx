import{ createContext}from "react";
export const LangContext= createContext();
export const LangContextProvider=()=>{

    return <LangContext.Provider value={"en"}>{children}</LangContext.Provider>
}