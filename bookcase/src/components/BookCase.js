import { Stack, Typography } from '@mui/material';
import CardBook from './CardBook';

const BookCase = ({ title, books, author, concluded, deleteBook, list }) => {

    return (
        <Stack paddingX={6} my={2}>
          <Typography variant='h6' textAlign="start" my={2}>{title}</Typography>
          <Stack direction="row" gap={6}>
            {books && books.map((book) => (
              <CardBook key={book.id} book={book} author={author} concluded={concluded} deleteBook={deleteBook} list={list} />
            ))}
          </Stack>
        </Stack>
    );
  }
 
export default BookCase;