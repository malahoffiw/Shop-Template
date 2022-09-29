import React from 'react'
import { Link } from "react-router-dom"
import { IoCartOutline, IoCartSharp } from "react-icons/io5"
import classes from "./ProductsInstance.module.scss"
import { CartItemInterface, ProductInterface } from "../../../types"

type ProductsInstanceProps = {
    item: ProductInterface,
    cart: Record<string, CartItemInterface>,
    setCart: React.Dispatch<React.SetStateAction<Record<string, CartItemInterface>>>
}

const ProductsInstance = ({ item, cart, setCart }: ProductsInstanceProps) => {
    const handleCartClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault()
        if (!item.id) return
        if (cart.hasOwnProperty(item.id)) {
            setCart(prevCart => {
                const { [item.id]: _, ...rest } = prevCart
                return rest
            })
        } else {
            setCart(prevCart => ({
                ...prevCart,
                [item.id]: { ...item, amount: 1}
            }))
        }
    }

    return (
        <li>
            <Link to={`${item.id}`} className={classes.product}>
                <div className={classes.photo}>
                    <img src={item.url} alt="product" />
                </div>
                <p className={classes.productTitle}>{sliceTitle(item.title)}</p>
                <div className={classes.productCost}>
                    <div onClick={handleCartClick}>
                        { cart.hasOwnProperty(item.id)
                            ? <IoCartSharp className={classes.icon} />
                            : <IoCartOutline className={classes.icon} />
                        }
                    </div>
                    <p>$ {item.price}</p>
                </div>
            </Link>
        </li>
    )
}

const sliceTitle: (str: string) => string = str => {
    const words = str.split(' ').reverse()
    let result = ""
    while (result.length < 45 && words.length > 0) {
        result += ` ${words.pop()}`
    }

    return words.length > 0 ? `${result} ...` : result
}

export default ProductsInstance