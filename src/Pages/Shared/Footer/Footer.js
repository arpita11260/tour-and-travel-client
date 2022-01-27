import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: "black", mt: 5, pt: 3, pb: 1, color: "white" }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <h2>Travelers</h2>
                        <Typography variant="body1">Rajarbagh,Dhaka-1214</Typography>
                        <Typography variant="body1">Basabo, ShobujBagh, Dhaka BAngladesh</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ textAlign: "left" }}>
                        <Typography variant="h6">Company</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>About</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Project</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Our Team</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Terms and condition</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Submit Listing</Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ textAlign: "left" }}>
                        <Typography variant="h6">Quick Links</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Quick Links</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Rentals</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Bookings</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Contacts</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>Our Blogs</Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: "left" }}>
                        <Typography variant="h6">About Us</Typography>
                        <Typography variant="body1" sx={{ py: 1 }}>This is the best trusted travel agency in the town for tours</Typography>
                        <Box sx={{ py: 1 }} >
                            <img src="https://i.ibb.co/dGV62qX/Vector.png" style={{ paddingRight: "10px" }} width="30px" />
                            <img src="https://i.ibb.co/dcyNGTk/Vector-1.png" style={{ paddingRight: "10px" }} width="30px" />
                            <img src="https://i.ibb.co/drnp7F0/Vector-2.png" style={{ paddingRight: "10px" }} width="30px" />
                            <img src="https://i.ibb.co/NZy4QFm/Vector-3.png" style={{ paddingRight: "10px" }} width="30px" />
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1" sx={{ color: "gray" }}>copyright @2020-2022 All right reserved by travel.com</Typography>
            </Container>
        </Box>
    );
};

export default Footer;