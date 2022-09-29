import React, { useState } from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import classes from "./Cart.module.scss"
import { CartItemInterface } from "../../types"
import CartElement from "./CartElement/CartElement"

type CartProps = {
    cart: Record<string, CartItemInterface>,
    setCart: React.Dispatch<React.SetStateAction<Record<string, CartItemInterface>>>,
    cartRef: React.RefObject<HTMLElement>
}

const Cart = ({ cartRef, cart, setCart }: CartProps) => {
    const [isOrdering, setIsOrdering] = useState(false)
    const cartElements = Object.values(cart).map(el => <CartElement key={el.id} data={el} setCart={setCart} />)
    const subtotal = Object.values(cart).reduce((sum: number, curr) => sum + curr.price * curr.amount, 0)
    const tax = 100
    const shipping = 150

    const handleOrder = () => {
        setIsOrdering(true)
        setTimeout(() => {
            setCart({})
            setIsOrdering(false)
            if (!!cartRef.current && cartRef.current.id !== "hidden") {
                cartRef.current.style.display = "none"
                cartRef.current.id = "hidden"
            }
        }, 2000)
    }

    return (
        <section id="hidden" className={classes.section} ref={cartRef}>
            <h2>Корзина</h2>
            <ul className={classes.sectionUl}>
                { cartElements.length > 0
                    ? cartElements
                    : <p>Корзина пуста</p>
                }
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
                        <td>$ {subtotal + tax + shipping}</td>
                    </tr>
                </tbody>
            </table>
            <button className={classes.placeOrderBtn}
                onClick={handleOrder}
            >
                { isOrdering
                    ? (
                        <div className={classes.loader}>
                            <AiOutlineLoading3Quarters className={classes.loaderLine} />
                        </div>
                    )
                    : <p>Оформить заказ</p>
                }
            </button>
        </section>
    )
}

export default Cart