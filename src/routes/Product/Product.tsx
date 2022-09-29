import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { IoCartOutline, IoCartSharp } from "react-icons/io5"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import classes from "./Product.module.scss"
import { CartItemInterface, ProductInterface } from "../../types"

type ProductProps = {
    products: ProductInterface[],
    cart: Record<string, CartItemInterface>,
    setCart: React.Dispatch<React.SetStateAction<Record<string, CartItemInterface>>>
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
                [productId]: { ...product, amount: 1}
            }))
        }
    }

    if (!product) return (
        <div className={classes.loader}>
            <AiOutlineLoading3Quarters className={classes.loaderLine} />
        </div>
    )
    return (
        <main>
            <Link to="/products">
                <button className={classes.btn}>
                    <p>Назад к каталогу</p>
                </button>
            </Link>
            <div className={classes.photo}>
                <img src={product.url} alt={`product${productId}`} />
            </div>
            <h4>{product.title}</h4>
            <p>Item model number: {productId}</p>
            <div className={classes.cost}>
                <div onClick={handleCartClick}>
                    { cart.hasOwnProperty(product.id)
                        ? <IoCartSharp className={classes.icon} />
                        : <IoCartOutline className={classes.icon} />
                    }
                </div>
                <p>$ {product.price}</p>
            </div>
        </main>
    )
}

export default Product