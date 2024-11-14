import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Contact() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '50px'
            }}
        >
            <Typography variant="h2" sx={{ fontSize: '2.5rem', marginBottom: '20px'}}>
                Contact
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '500px', marginBottom: '20px'}}>
                I'd love to hear from you! Please fill out the form below, and I'll get back to you as soon as possible.
            </Typography>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '500px',
                    width: '100%',
                    gap: '15px'
                }}
            >
                <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    fullWidth
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                />
                <Button variant="contained" color="primary" type="submit" disabled>
                    Submit
                </Button>
            </Box>
        </Box>
    );
}
