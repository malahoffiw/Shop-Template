import React from 'react'
import { Link } from "react-router-dom"
import classes from "./Main.module.scss"
import ProductOfTheDay from "../../components/MainPage/ProductOfTheDay/ProductOfTheDay"
import Bestsellers from "../../components/MainPage/Bestsellers/Bestsellers"
import Promo from "../../components/MainPage/Promo/Promo"

const Main = () => {
    return (
        <main className={classes.main}>
            <Link to="/products" className={classes.catalog}>
                <p>Каталог</p>
            </Link>
            <Promo />
            <ProductOfTheDay />
            <Bestsellers />
        </main>
    )
}

export default Main