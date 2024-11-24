import { IconButton, Stack, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { BooksContext } from '../context/BooksContext';

const Header = () => {  
    const { setTabValue } = useContext(BooksContext);

    return (
        <Stack direction="row" padding={2} justifyContent="space-between" alignItems="center" boxShadow={4}>
            <img src={logo} alt='logo' className='logo' onClick={() => setTabValue(0)}></img>
            <Typography variant='h5'>Minha Biblioteca</Typography>
            <IconButton size='large' onClick={() => setTabValue(4)}><SearchIcon /></IconButton>
        </Stack>
    );
}

export default Header;