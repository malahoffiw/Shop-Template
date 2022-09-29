import React from 'react'
import classes from "./CartElement.module.scss"
import { GrClose } from "react-icons/gr"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import { ProductInterface } from "../../../types"

type CartElementProps = {
    data: ProductInterface
}

const CartElement = ({ data }: CartElementProps) => {
    return (
        <li className={classes.product}>
            <div className={classes.photo}>
                <img src={data.url} alt={`product${data.id}`}/>
            </div>
            <div className={classes.info}>
                <p>{data.title}</p>
                <span>
                    <button><AiOutlineMinus /></button>
                    <p>1</p>
                    <button><AiOutlinePlus /></button>
                    <p>{data.price}</p>
                </span>
            </div>
            <button className={classes.delete}>
                <GrClose />
            </button>
        </li>
    )
}

export default CartElement