import React from 'react'
import { GrClose } from "react-icons/gr"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
import classes from "./CartElement.module.scss"
import { CartItemInterface } from "../../../types"

type CartElementProps = {
    data: CartItemInterface,
    setCart: React.Dispatch<React.SetStateAction<Record<string, CartItemInterface>>>
}

const CartElement = ({ data, setCart }: CartElementProps) => {
    const handleDeleteClick = () => {
        setCart(prevCart => {
            const { [data.id]: _, ...rest } = prevCart
            return rest
        })
    }

    const incrementAmount = () => {
        setCart(prevCart => {
            const newAmount = prevCart[data.id].amount + 1
            if (newAmount < 11) return {
                ...prevCart,
                [data.id]: {
                    ...prevCart[data.id],
                    amount: newAmount
                }
            }
            return prevCart
        })
    }

    const decrementAmount = () => {
        setCart(prevCart => {
            const newAmount = prevCart[data.id].amount - 1
            if (newAmount > 0) return {
                ...prevCart,
                [data.id]: {
                    ...prevCart[data.id],
                    amount: newAmount
                }
            }
            const { [data.id]: _, ...rest } = prevCart
            return rest
        })
    }

    return (
        <li className={classes.product}>
            <div className={classes.photo}>
                <img src={data.url} alt={`product${data.id}`}/>
            </div>
            <div className={classes.info}>
                <p>{data.title}</p>
                <span>
                    <button onClick={decrementAmount}>
                        <AiOutlineMinus />
                    </button>
                    <p>{data.amount}</p>
                    <button onClick={incrementAmount}>
                        <AiOutlinePlus />
                    </button>
                    <p>$ {data.price * data.amount}</p>
                </span>
            </div>
            <button className={classes.delete} onClick={handleDeleteClick}>
                <GrClose />
            </button>
        </li>
    )
}

export default CartElement