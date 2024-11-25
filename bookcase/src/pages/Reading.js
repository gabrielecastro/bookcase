import { Stack } from "@mui/material";
import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";
import BookCase from "../components/BookCase";

const Reading = () => {
  const { readingInProgress } = useContext(BooksContext);


    return (
      <Stack>
        <BookCase title="Minhas leituras atuais" books={readingInProgress} author={true} />
      </Stack>
    );
}

export default Reading;