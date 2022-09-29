import React from 'react'
import classes from "./Cart.module.scss"
import { ProductInterface } from "../../types"
import CartElement from "./CartElement/CartElement"

type CartProps = {
    cart: Record<string, ProductInterface>,
    setCart: React.Dispatch<React.SetStateAction<Record<string, ProductInterface>>>
}

const Cart = ({ cart, setCart }: CartProps) => {
    const cartElements = Object.values(cart).map(el => <CartElement data={el}/>)

    const subtotal = 1200
    const total = 1450

    const tax = 100
    const shipping = 150


    return (
        <section className={classes.section}>
            <h2>Корзина</h2>
            <ul className={classes.sectionUl}>
                {cartElements}
            </ul>
            <table className={classes.cartInfo}>
                <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>$ {subtotal}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>$ {tax}</td>
                    </tr>
                    <tr>
                        <td>Shipping</td>
                        <td>$ {shipping}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>$ {total}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Cart