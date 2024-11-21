import { Stack, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCase from "../components/BookCase";

const Reading = () => {
  const { books, readingInProgress } = useContext(BooksContext);


    return (
      <Stack>
        <BookCase title="Minhas leituras atuais" books={readingInProgress} progress={true} author={true} />
      </Stack>
    );
}

export default Reading;