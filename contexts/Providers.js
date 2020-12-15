import AuthProvider from "./AuthContext.js"
import CardProvider from "./CardContext.js"
import React from "react"
export default function Providers({ children }) {

    return (<>
        <AuthProvider>
            <CardProvider>
                {children}
            </CardProvider>
        </AuthProvider>
    </>)
}