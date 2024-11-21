import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nextReading, setNextReading] = useState([]);
  const [completedReadings, setCompletedReadings] = useState([]);
  const [readingInProgress, setReadingInProgress] = useState([]);

  const getBooks = async () => {
    try {
      setLoading(true);
      const URL = "https://api-books-dot-api-samples-423102.uc.r.appspot.com/api/books";
      const requestInit = {
        method: "GET",
        headers: {
          Authorization: "Bearer 12120806",
        },
      };
      const responseHttp = await fetch(URL, requestInit);
      if (responseHttp.ok) {
        const result = await responseHttp.json();
        setBooks(result);
      } else {
        throw new Error("Falha ao consultar os livros");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <BooksContext.Provider 
      value={{ 
        getBooks,
        books,
        loading,
        error,
        nextReading,
        setNextReading,
        completedReadings,
        setCompletedReadings,
        readingInProgress,
        setReadingInProgress,
      }}>
      {children}
    </BooksContext.Provider>
  );
}


