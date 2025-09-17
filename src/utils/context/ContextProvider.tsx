import { createContext, useContext, useState } from "react";

interface ContextType {
    tokenContext: any,
    setokenContext: any,
    base64Convert: any,
    setbase64Convert: any,
    tempOtpData: any,
    setTempOtpData: any
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
    const [tempOtpData, setTempOtpData] = useState<{
        otp: number | string | null
        phoneNumber: number | string | null
        firstName: string | null
        lastName: string | null
        userName: string | null | any
        passowrd: string | null | any
    } | null>({
        otp: null,
        phoneNumber: null,
        firstName: null,
        lastName: null,
        userName: null,
        passowrd: null
    })

    return (
        <Context.Provider
            value={{
                tokenContext,
                setokenContext,
                base64Convert,
                setbase64Convert,
                tempOtpData,
                setTempOtpData
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


