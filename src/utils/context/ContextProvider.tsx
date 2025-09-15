import { createContext, useContext, useState } from "react";

interface ContextType {
    tokenContext: any,
    setokenContext: any,
    base64Convert: any,
    setbase64Convert: any
}
const Context = createContext<ContextType | undefined>(undefined);
export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [tokenContext, setokenContext] = useState<{
        privateToken: any,
        publickToken: any
    }>({
        privateToken: null,
        publickToken: null
    })

    const [base64Convert, setbase64Convert] = useState<any>(null)

    return (
        <Context.Provider
            value={{
                tokenContext,
                setokenContext,
                base64Convert,
                setbase64Convert
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const userContext = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('userContext must be used within a ContextProvider');
    }
    return context;
};


