import { Box, Button, Chip, IconButton, LinearProgress, Stack, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import BookDetailsModal from "./BookDetaisModal";
import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const CardBook = ({ book, progress, author, concluded, deleteBook, list }) => {
  const [open, setOpen] = useState(false);
  const { 
    nextReading,
    setNextReading, 
    readingInProgress, 
    setReadingInProgress,
    completedReadings, 
    setCompletedReadings,
  } = useContext(BooksContext);

  const addBookToList = (list, setList, book) => {
    if (!list.some((item) => item.id === book.id)) {
      setList([...list, book]);
    }
  };

  const onDeleteBook = () => {
    if (list === 'nextReading') {
      setNextReading(nextReading?.filter((item) => item.id !== book.id));
    } else if (list === 'reading') {
      setReadingInProgress(readingInProgress?.filter((item) => item.id !== book.id));
    } else if (list === 'concluded') {
      setCompletedReadings(completedReadings?.filter((item) => item.id !== book.id));
    }
  }

    return (
      <Stack alignItems="center">
        <Button
          onClick={() => setOpen(true)}
          sx={{ color: '#4B4B4B' }}>
          <Stack gap={2} sx={{ width: '180px' }}>
            <img src={book.imageLinks?.thumbnail} alt={book.title} className='img-book' />
            <Typography variant='subtitle1'>{book.title}</Typography>
            {author && book.authors.map((author) => (
              <Box>
                <Typography variant='subtitle2' color="text.secondary">. {author}</Typography>
              </Box>
            ))}
            {progress && (
              <LinearProgress
                variant="determinate"
                value={60}
                sx={{ 
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: '#ECEDF6',
                  '& .MuiLinearProgress-bar': {
                  backgroundColor: '#8C9EF4',
                }
                }}
              />
            )}
            {concluded && (
              <Chip icon={<StarIcon sx={{ color: 'yellow' }} />} label="5.0" sx={{ width: '100px' }} />
            )}
          </Stack>
        </Button>

        <Stack direction="row" alignItems="start" gap={1}>
              <IconButton
                sx={{ color: '#34D35F' }}
                onClick={() => addBookToList(completedReadings, setCompletedReadings, book)}>
                  <CheckCircleOutlineIcon />
              </IconButton>
              <IconButton
                sx={{ color: '#8A8A8A' }}
                onClick={() => addBookToList(nextReading, setNextReading, book)}>
                  <FavoriteBorderIcon />
              </IconButton>
              <IconButton 
                sx={{ color: '#8C9EF4' }}
                onClick={() => addBookToList(readingInProgress, setReadingInProgress, book)}>
                  <AutoStoriesIcon />
              </IconButton>
              {deleteBook && (
                <IconButton 
                  sx={{ color: '#da5552' }}
                  onClick={onDeleteBook}>
                    <HighlightOffIcon />
                </IconButton>
              )}
            </Stack>

        <BookDetailsModal open={open} onClose={() => setOpen(false)} book={book} />
      </Stack>
    );
}

export default CardBook;