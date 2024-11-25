import { Stack } from "@mui/material";
import { useContext, useEffect } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCase from "../components/BookCase";

const Home = () => {
  const { getBooks, books, nextReading, completedReadings, readingInProgress } = useContext(BooksContext);

  useEffect(() => {
      getBooks();
  }, []);

    return (
      <Stack>
        <BookCase title="Todos" books={books} />
        <BookCase title="Estou lendo" books={readingInProgress} deleteBook={true} list={'reading'} />
        <BookCase title="Já lido" books={completedReadings} deleteBook={true} list={'concluded'} />
        <BookCase title="Quero ler" books={nextReading} deleteBook={true} list={'nextReading'} />
      </Stack>
    );
}

export default Home;