import { Box, Button, Chip, LinearProgress, Stack, Typography, linearProgressClasses } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import BookDetailsModal from "./BookDetaisModal";
import { useState } from "react";

const CardBook = ({ book, progress, author, concluded }) => {
  const [open, setOpen] = useState(false);

    return (
      <>
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

        <BookDetailsModal open={open} onClose={() => setOpen(false)} book={book} />
      </>
    );
}

export default CardBook;