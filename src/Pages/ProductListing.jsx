import { useSelector,useDispatch } from "react-redux"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect } from "react"
import { setProducts } from "../redux/actions/productActions"
import Product from "../components/Product"
const ProductListing = ()=>{
    const dispatch  = useDispatch()
    const Products = useSelector((state) => state)
    console.log(Products)

    const fetchProducts = ()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((response)=>{
            console.log(response)
            dispatch(setProducts(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchProducts()
    },[])

    return (
        <div>
        <div>
            <Navbar/>
        </div>
        <h2>
            All Products
        </h2>
        <div>
        <Product/>
        </div>
        
        
        </div>
    )
}
export default ProductListing