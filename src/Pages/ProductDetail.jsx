import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/actions/productActions';
import Grid2 from '@mui/material/Unstable_Grid2';
import Navbar from '../components/Navbar';
const ProductDetail = ()=>{
    const {id} = useParams()
    const product = useSelector((state)=>state.product) 
    const dispatch = useDispatch()
    console.log("------>",product)

    const fetchProductDetail = ()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res.data)
            dispatch(selectedProduct(res.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        if(id && id !== "") fetchProductDetail()
    },[id])
    return (
        <>
        <Navbar/>
        <Grid2 container>
            <Grid2 lg = {6} container justifyContent={'center'}>
                <img style={{height:"500px",marginTop:"20px"}} src={product.image} alt="product image" />
            </Grid2>
            <Grid2 lg = {5} >
                <h2>{product.title}</h2>
                <h3>Price: {product.price}</h3>
                <h3>Category: {product.category}</h3>
                <h4>{product.description}</h4>
            </Grid2>            
        </Grid2>
        </>
    )
}
export default ProductDetail