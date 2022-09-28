import React, {useEffect, useState} from 'react'
import { Link, useParams } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5"
import classes from "./Product.module.scss"
import { ProductInterface } from "../../types"

type ProductProps = {
    products: ProductInterface[],
    cart: Record<string, ProductInterface>,
    setCart: React.Dispatch<React.SetStateAction<Record<string, ProductInterface>>>
}

const Product = ({ products, cart, setCart }: ProductProps) => {
    const { productId } = useParams<{productId?: string}>()
    const [product, setProduct] = useState<ProductInterface>(products[Number(productId) - 1])

    useEffect(() => {
        setProduct(products[Number(productId) - 1])
    }, [products, productId])

    const handleCartClick = () => {
        if (!productId) return
        if (cart.hasOwnProperty(productId)) {
            setCart(prevCart => {
                const { [productId]: _, ...rest } = prevCart
                return rest
            })
        } else {
            setCart(prevCart => ({
                ...prevCart,
                [productId]: product
            }))
        }
    }

    if (!product) return <></> // Loading
    return (
        <main>
            <button className={classes.btn}>
                <Link to="/products">
                    <p>Назад к каталогу</p>
                </Link>
            </button>
            <div className={classes.photo}>
                <img src={product.url} alt={`product${productId}`} />
            </div>
            <h4>{product.title}</h4>
            <p>Item model number: {productId}</p>
            <div className={classes.cost}>
                <div onClick={handleCartClick}>
                    <IoCartOutline className={classes.icon}/>
                </div>
                <p>{product.price}</p>
            </div>
        </main>
    )
}

export default Product