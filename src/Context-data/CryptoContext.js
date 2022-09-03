import { createContext, useState, useEffect } from "react"

const crypto = createContext({})
export const CryptoContext = ({ children }) => {
    const [currensy, setCurrency] = useState('USD')
    const [symboll, setSymboll] = useState('$')
    

    useEffect(() => {
        currensy === 'USD' ? setSymboll('$') : setSymboll('€')
    }, [currensy])
    const handleSubmit = (e) => {
        setCurrency(e.target.value)
    }
    
    return (
        <crypto.Provider
            value={{
                currensy, setCurrency, handleSubmit,symboll
            }}
        >
            {children}
        </crypto.Provider>
    )
}


export default crypto
