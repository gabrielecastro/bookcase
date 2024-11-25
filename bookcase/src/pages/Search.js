import { Stack, TextField } from "@mui/material";
import BookCase from "../components/BookCase";
import { useContext, useState } from "react";
import { BooksContext } from "../context/BooksContext";

const Search = () => {
  const { books } = useContext(BooksContext);
  const [filteredBooks, setFilteredBooks] = useState([]);

  const handleChange = (event) => {
    const searchQuery = event.toLowerCase();
    const newBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.authors?.some((author) => author.toLowerCase().includes(searchQuery)) ||
      book.categories?.some((category) => category.toLowerCase().includes(searchQuery))
    );
    setFilteredBooks(newBooks);
  };

  return (
    <Stack>
      <Stack alignItems='center'>
        <Stack width='30%'>
          <TextField  id="standard-basic" label="Buscar livro" variant="filled" onChange={(e) => handleChange(e.target.value)} />
        </Stack>
      </Stack>
      <BookCase title="Encontrados" books={filteredBooks} />
    </Stack>
  );
}

export default Search;