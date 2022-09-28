import React from 'react'
import "./Products.module.scss"
import ProductsInstance from "../../components/ProductsPage/ProductsInstance/ProductsInstance"
import { ProductInterface } from "../../types"

type ProductsProps = {
    products: ProductInterface[],
    cart: Record<string, ProductInterface>,
    setCart: React.Dispatch<React.SetStateAction<Record<string, ProductInterface>>>
}

const Products = ({ products, cart, setCart }: ProductsProps) => {
    const elements = products.map(item =>
        <ProductsInstance key={item.id} itemId={item.id} title={item.title}
                          photoUrl={item.url} price={item.price}/>)

    return (
        <main>
            <ul>
                {elements}
            </ul>
        </main>
    )
}

export default Products