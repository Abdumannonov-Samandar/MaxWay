import React, { createContext, useState, useContext } from 'react'
import { CalcContext } from '@/context/calc.provider'

interface QuantityContextType {
    quantity: { [key: number]: number }
    isVisible: { [key: number]: boolean }
    handleAddClick: (id: number, price: number) => void
    handleIncrement: (id: number, price: number) => void
    handleDecrement: (id: number) => void
}

const QuantityContext = createContext({} as QuantityContextType)

const QuantityProvider = ({ children }: { children: React.ReactNode }) => {
    const { addPrice, removePrice } = useContext(CalcContext)
    const [quantity, setQuantity] = useState<{ [key: number]: number }>({})
    const [isVisible, setIsVisible] = useState<{ [key: number]: boolean }>({})


    const handleAddClick = (id: number, price: number) => {
        setIsVisible(prevState => ({ ...prevState, [id]: true }))
        setQuantity(prevState => ({
            ...prevState,
            [id]: (prevState[id] || 0) + 1,
        }))
        addPrice(price, id) 
    }

    const handleIncrement = (id: number, price: number) => {
        setQuantity(prevState => ({
            ...prevState,
            [id]: (prevState[id] || 0) + 1,
        }))
        addPrice(price, id)
    }

    const handleDecrement = (id: number) => {
        if ((quantity[id] || 0) > 1) {
            setQuantity(prevState => ({
                ...prevState,
                [id]: prevState[id] - 1,
            }))
            removePrice(id)
        } else {
            setIsVisible(prevState => ({ ...prevState, [id]: false }))
            setQuantity(prevState => ({ ...prevState, [id]: 0 }))
            removePrice(id)
        }
    }

    return (
        <QuantityContext.Provider value={{ quantity, isVisible, handleAddClick, handleIncrement, handleDecrement }}>
            {children}
        </QuantityContext.Provider>
    )
}



export { QuantityProvider, QuantityContext }
