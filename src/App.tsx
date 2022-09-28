import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ProductInterface } from "./types"
import fetchItems from "./services/fetchItems"
import Main from "./routes/Main/Main"
import Products from "./routes/Products/Products"
import Product from "./routes/Product/Product"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

const App = () => {
    const [products, setProducts] = useState<ProductInterface[]>([])
    const [cart, setCart] = useState<Record<string, ProductInterface>>({})

    useEffect(() => {
        fetchItems()
            .then(response => setProducts(response[0].data.slice(0, 12)
                .map((item, index) => ({
                    ...item,
                    price: response[1][index],
                }))))
    }, [])

    return (
        <div className="appBody">
            <div className="content">
                <Router>
                    <Header cart={cart}/>
                    <Routes>
                        <Route path="/"
                               element={<Main />}
                        />
                        <Route path="/products"
                               element={<Products products={products} cart={cart} setCart={setCart}/>}
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
