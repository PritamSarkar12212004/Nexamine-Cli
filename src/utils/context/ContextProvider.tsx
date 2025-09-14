import { createContext, useContext, useState } from "react";

interface ContextType {
    tokenContext: any,
    setokenContext: any
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

    return (
        <Context.Provider
            value={{
                tokenContext,
                setokenContext
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


