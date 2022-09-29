import React from 'react'
import "./Products.module.scss"
import { CartItemInterface, ProductInterface } from "../../types"
import ProductsInstance from "../../components/ProductsPage/ProductsInstance/ProductsInstance"

type ProductsProps = {
    products: ProductInterface[],
    cart: Record<string, CartItemInterface>,
    setCart: React.Dispatch<React.SetStateAction<Record<string, CartItemInterface>>>
}

const Products = ({ products, cart, setCart }: ProductsProps) => {
    const elements = products.map(item =>
        <ProductsInstance key={item.id} item={item} cart={cart} setCart={setCart} />)

    return (
        <main>
            <ul>
                {elements}
            </ul>
        </main>
    )
}

export default Products