import React, { createContext } from 'react'
import  { CalcProvider }  from './calc.provider'
import { QuantityProvider } from './quantity.provider'

const GlobalContext = createContext<null>(null)

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<GlobalContext.Provider value={null}>
            <CalcProvider>
                <QuantityProvider>
                    {children}
                </QuantityProvider>
            </CalcProvider>
		</GlobalContext.Provider>
	)
}

export { GlobalContext, GlobalProvider }
