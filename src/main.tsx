import { StrictMode, useContext, createContext, useState, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// 1. Types
export type Tcart = {
  name: string
  image: string
  quantity: number
  price: number
}

type CartContextType = {
  cart: Tcart[]
  setCart: React.Dispatch<React.SetStateAction<Tcart[]>>
}

// 2. Create Context
export const CartContext = createContext<CartContextType | undefined>(undefined)

// 3. Provider
const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Tcart[]>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

// 4. Hook
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// 5. Wrap App
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
)
