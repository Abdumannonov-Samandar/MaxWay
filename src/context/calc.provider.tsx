import { createContext, useState, ReactNode } from 'react'

interface CalcProps {
    price: number
    id: number
    quantity: number
}

interface CalcContext {
    prices: CalcProps[]
    calculateTotalAmount: () => number
    removePrice: (id: number) => void
    addPrice: (price: number, id: number) => void
}

const CalcContext = createContext({} as CalcContext)

const CalcProvider = ({ children }: { children: ReactNode }) => {
    const [prices, setPrices] = useState<CalcProps[]>([])

    const calculateTotalAmount = () => {
        return prices.reduce((total, calc) => total + calc.price * calc.quantity, 0)
    }

    const removePrice = (id: number) => { 
        setPrices(prevPrices => {
            const updatedPrices = prevPrices.map(price =>
                price.id === id && price.quantity > 0
                    ? { ...price, quantity: price.quantity - 1 }
                    : price
            ).filter(price => price.quantity > 0)

            return updatedPrices
        })
    }

    const addPrice = (price: number, id: number) => {
        setPrices(prevPrices => {
            const existingItem = prevPrices.find(price => price.id === id)
            if (existingItem) {
                return prevPrices.map(price =>
                    price.id === id
                        ? { ...price, quantity: price.quantity + 1 }
                        : price
                )
            } else {
                return [...prevPrices, { price, id, quantity: 1 }]
            }
        })
    }

    return (
        <CalcContext.Provider value={{ prices, calculateTotalAmount, removePrice, addPrice }}>
            {children}
        </CalcContext.Provider>
    )
}



export { CalcProvider, CalcContext }
