import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


export function Header() {
    const [value, setValue] = useState('about');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
            <Typography variant="h3" sx={{ fontSize: "1.2rem", marginRight: "50px", fontWeight: "bold" }}>
                GRANDIMAM
            </Typography>
            <Tabs value={value} onChange={handleChange}>
                <Tab value="posts" label="posts" component={Link} to="/posts" sx={{ fontWeight: "bold", fontSize: "1rem" }} />
                <Tab value="contact" label="Contact" component={Link} to="/contact" sx={{ fontWeight: "bold", fontSize: "1rem" }} />
            </Tabs>
        </Box>
    )
}