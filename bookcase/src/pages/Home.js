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
        <BookCase title="Lendo" books={readingInProgress} deleteBook={true} list={'reading'} />
        <BookCase title="Lidos" books={completedReadings} deleteBook={true} list={'concluded'} />
        <BookCase title="Pŕoximas leituras" books={nextReading} deleteBook={true} list={'nextReading'} />
      </Stack>
    );
}

export default Home;