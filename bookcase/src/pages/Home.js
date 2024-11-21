import { Stack, Typography } from "@mui/material";
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
        <BookCase title="Lendo" books={readingInProgress} />
        <BookCase title="Lidos" books={completedReadings} />
        <BookCase title="Pŕoximas leituras" books={nextReading} />
      </Stack>
    );
}

export default Home;