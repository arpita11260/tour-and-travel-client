import { CircularProgress, Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AdminShowSingleProduct from '../AdminShowSingleProduct/AdminShowSingleProduct';
import ModalMessage from '../ModalMessage/ModalMessage';


const AdminManageProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const [modalText, setModalText] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleSuccessModalOpen = (text) => {
        setModalText(text);
        setOpen(true);
    };

    useEffect(() => {
        fetch('https://dry-spire-62027.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setLoading(false);
            })
    }, [updateSuccess]);

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://dry-spire-62027.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        handleSuccessModalOpen("Product Deleted Successfully");
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    }
    return (
        <Container sx={{ mt: 0 }}>
            <Grid container spacing={5}>
                {
                    products.map(product => <AdminShowSingleProduct product={product} key={product._id} handleDeleteProduct={handleDeleteProduct} handleSuccessModalOpen={handleSuccessModalOpen} setUpdateSuccess={setUpdateSuccess} />)
                }
            </Grid>

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 10 }}>
                {loading && <CircularProgress color="success" />}
            </Box>

            <ModalMessage
                open={open}
                setOpen={setOpen}
                modalText={modalText}
            >
            </ModalMessage>
        </ Container>
    );
};

export default AdminManageProducts;