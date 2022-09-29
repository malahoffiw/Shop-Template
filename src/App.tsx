import React, {useEffect, useRef, useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import store from "store"
import { CartItemInterface, ProductInterface} from "./types"
import fetchItems from "./services/fetchItems"
import Main from "./routes/Main/Main"
import Products from "./routes/Products/Products"
import Product from "./routes/Product/Product"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Cart from "./components/Cart/Cart"

const App = () => {
    const [products, setProducts] = useState<ProductInterface[]>([])
    const [cart, setCart] = useState<Record<string, CartItemInterface>>(store.get('cart') || {})
    const cartRef = useRef<HTMLElement>(null)
    const handleCartIconClick = () => {
        if (!cartRef.current) return

        if (cartRef.current.id === "hidden") {
            cartRef.current.style.display = "flex"
            cartRef.current.id = ""
        } else {
            cartRef.current.style.display = "none"
            cartRef.current.id = "hidden"
        }
    }

    useEffect(() => {
        fetchItems()
            .then(response => setProducts(response[0].data.slice(0, 12)
                .map((item, index) => ({
                    ...item,
                    price: response[1][index],
                }))))
    }, [])

    useEffect(() => {
        store.set('cart', cart)
    }, [cart])

    return (
        <div className="appBody">
            <div className="content">
                <Router>
                    <Header cart={cart} handleCartIconClick={handleCartIconClick}/>
                    <Cart cartRef={cartRef} cart={cart} setCart={setCart} />
                    <Routes>
                        <Route path="/"
                               element={<Main />}
                        />
                        <Route path="/products"
                               element={<Products products={products} cart={cart} setCart={setCart} />}
                        />
                        <Route path="/products/:productId"
                               element={<Product products={products} cart={cart} setCart={setCart} />}
                        />
                    </Routes>
                </Router>
            </div>
            <Footer />
        </div>
    )
}

export default App
