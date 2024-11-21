import { Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCase from "../components/BookCase";

const Read = () => {
  const { books, completedReadings } = useContext(BooksContext);

    return (
      <Stack>
        <BookCase title="Leituras concluídas" books={completedReadings} concluded={true} />
      </Stack>
    );
}

export default Read;