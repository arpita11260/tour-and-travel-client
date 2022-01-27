import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import {CircularProgress, Container, Typography } from '@mui/material';
import Product from '../Product/Product';
import { useHistory } from 'react-router';
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    const [page, setPage] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const size = 10;
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                const count = data.count;
                const pageNumber = Math.ceil(count/size);
                setPageCount(pageNumber);
                setLoading(false);
            })
    }, [page]);

    const handleSeeAll = () => {
        history.push("/products");
    }
    return (
        <Container sx={{ mt: 0 }}>
            <Typography variant="h4" style={{ marginTop: 0 }} sx={{ fontWeight: 900, pb: 3 }}>Our Awesome <span style={{ color: "#F63E7B" }}>Spots</span></Typography>
            <Grid container spacing={5}>
                {
                    products.map(product => <Product product={product} key={product._id} />)
                }
                
            </Grid>
            <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number =><button
                        className= {number === page ? 'selected' : ''}
                        key={number}
                        onClick={() => setPage(number)}
                        >{number}</button>)
                    }
                </div>
            {loading && <CircularProgress color="success" />}
        </ Container>
    );
};

export default Products;