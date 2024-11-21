import { Stack, Typography } from '@mui/material';
import CardBook from './CardBook';

const BookCase = ({ title, books, progress, author, concluded }) => {

  console.log('books', books);

    return (
        <Stack paddingX={4}>
          <Typography variant='h6' textAlign="start" my={2}>{title}</Typography>
          <Stack direction="row" gap={6}>
            {books && books.map((book) => (
              <CardBook key={book.id} book={book} progress={progress} author={author} concluded={concluded} />
            ))}
          </Stack>
        </Stack>
    );
  }
 
export default BookCase;