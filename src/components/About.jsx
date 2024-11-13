import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function About() {
    return (
        <Box sx={{ alignItems: 'center', textAlign: 'center', padding: '100px'}}>
            <Typography variant='h2' sx={{ fontSize: '3.5rem' }}>About</Typography>
        </Box>
    )
}