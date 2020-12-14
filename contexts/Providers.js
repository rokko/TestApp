import AuthProvider from "./AuthContext.js" 
import React from "react"
export default function Providers({children}){
    
    return (<>
    <AuthProvider>
        {children}
    </AuthProvider>
    </>)
}