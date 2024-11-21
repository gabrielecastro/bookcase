import { Button, Chip, Dialog, IconButton, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const BookDetailsModal = ({ onClose, open, book }) => {
  const { 
    nextReading,
    setNextReading, 
    readingInProgress, 
    setReadingInProgress,
    completedReadings, 
    setCompletedReadings,
    openSnackbar,
    setOpenSnackbar,
  } = useContext(BooksContext);

  return (
    <Dialog onClose={onClose} open={open} maxWidth="md">
      <Stack padding={6} direction="row" gap={6}>

        <Stack gap={2}>
          <img src={book.imageLinks?.thumbnail} alt={book.title} className='img-book' />
          <Stack alignItems="start" gap={2}>
            <Button
              startIcon={<CheckCircleOutlineIcon />}
              sx={{ color: '#34D35F' }}
              onClick={() => {
                setCompletedReadings([...completedReadings, book])}
              }>
                Concluir
            </Button>
            <Button
              startIcon={<FavoriteBorderIcon />} 
              sx={{ color: '#8A8A8A' }}
              onClick={() => setNextReading([...nextReading, book])}>
                Adicionar a lista
            </Button>
            <Button 
              startIcon={<AutoStoriesIcon />} 
              sx={{ color: '#8C9EF4' }}
              onClick={() => setReadingInProgress([...readingInProgress, book])}>
                Iniciar leitura
            </Button>
          </Stack>
        </Stack>
  
        <Stack gap={2}>
          <Typography variant="h6" alignItems="center">
            {book.title}
            <Chip icon={<StarIcon sx={{ color: 'yellow' }} />} label="5.0" sx={{ width: '100px', ml: 2 }} />
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">{book.subtitle}</Typography>
          <Typography variant="body2">
            <strong>Autor:</strong>
            {book.authors.map((author) =>
              <Typography variant="body2">{author}</Typography>
            )}
          </Typography>
          <Typography variant="body2">
            <strong>Categoria:</strong>
            {book.categories?.map((categorie) =>
              <Typography variant="body2" textTransform="lowercase">{categorie}</Typography>
            )}
          </Typography>
          <Typography variant="body2">
            <strong>Descrição:</strong>
            <Typography variant="body2">
              {book.description}
            </Typography>
          </Typography>
        </Stack>

      </Stack>
    </Dialog>
  );
}

export default BookDetailsModal;