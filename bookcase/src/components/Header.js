import { IconButton, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <Stack direction="row" padding={2} justifyContent="space-between" alignItems="center" boxShadow={4}>
            <img src={logo} alt='logo' className='logo'></img>
            <Typography variant='h5'>Minha Biblioteca</Typography>
            <IconButton size='large'><SearchIcon /></IconButton>
        </Stack>
    );
}

export default Header;