import { Stack } from "@mui/material";
import BookCase from "../components/BookCase";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

const NextReadings = () => {
  const { books, nextReading } = useContext(BooksContext);

  return (
    <Stack>
      <BookCase title="Quero ler em breve" books={nextReading} />
    </Stack>
  );
}

export default NextReadings;