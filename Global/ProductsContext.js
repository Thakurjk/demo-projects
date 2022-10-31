import React, { createContext, useState } from "react"

import vegetable from "../assets/vegetable.jpg"
import fruit from "../assets/fruit.jpg"
import leafyveg from "../assets/leafyveg.jpg"
import bittergourd from "../assets/bittergourd.jpg"
import ladyfingers from "../assets/ladyfingers.jpg"
import bottlegourd from "../assets/bottlegourd.jpg"

export const ProductsContext = createContext();


const ProductsContextProvider = (props) => {
    const [products] = useState([
        { id: 1, name: 'Vegetable', price: 40, image: vegetable, status: 'fresh' },
        { id: 2, name: 'Fruit', price: 30, image: fruit, status: 'fresh' },
        { id: 3, name: 'Leafyveg', price: 50, image: leafyveg, status: 'fresh' },
        { id: 3, name: 'bittergourd', price: 20, image: bittergourd, status: 'fresh' },
        { id: 3, name: 'ladyfingres', price: 10, image: ladyfingers, status: 'fresh' },
        { id: 3, name: 'bottlegourd', price: 25, image: bottlegourd, status: 'fresh' },
    ]);

    return (
        <ProductsContext.Provider value={{ products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;