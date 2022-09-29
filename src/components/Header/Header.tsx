import React from 'react'
import { Link } from "react-router-dom"
import { IoCartOutline } from "react-icons/io5"
import classes from "./Header.module.scss"
import { ProductInterface } from "../../types"

type HeaderProps = {
    cart: Record<string, ProductInterface>,
    handleCartIconClick: React.MouseEventHandler<HTMLDivElement>
}

const Header = ({ cart, handleCartIconClick }: HeaderProps) => {
    return (
        <header>
            <Link to="/">
                <p>Shop</p>
            </Link>
            <div className={classes.cart} onClick={handleCartIconClick} >
                <div className={classes.cartCount}>
                    {Object.keys(cart).length}
                </div>
                <IoCartOutline className={classes.cartIcon}/>
            </div>
        </header>
    )
}

export default Header