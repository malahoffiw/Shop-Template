import React from 'react'
import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5"
import classes from "./ProductsInstance.module.scss"

type ProductsInstanceProps = {
    itemId: number,
    title: string,
    photoUrl: string,
    price: string,
}

const ProductsInstance = ({ itemId, title, photoUrl, price }: ProductsInstanceProps) => {
    return (
        <li>
            <Link to={`${itemId}`} className={classes.product}>
                <div className={classes.photo}>
                    <img src={photoUrl} alt="product" />
                </div>
                <p className={classes.productTitle}>{sliceTitle(title)}</p>
                <div className={classes.productCost}>
                    <div>
                        <IoCartOutline className={classes.icon}/>
                    </div>
                    <p>{price}</p>
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