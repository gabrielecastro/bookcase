import { createContext, useEffect, useState } from "react";

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tabValue, setTabValue] = useState(0);

  const setLocalStorage = (listBooks, key) => {
    localStorage.setItem(key, JSON.stringify(listBooks));
  };

  const getLocalStorage = (key) => {
    const storedData = localStorage.getItem(key);
    try {
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error(`Erro ao ler a chave "${key}" do localStorage:`, error);
      return [];
    }
  };

  const [nextReading, setNextReading] = useState(getLocalStorage('nextReading'));
  const [completedReadings, setCompletedReadings] = useState(getLocalStorage('completedReadings'));
  const [readingInProgress, setReadingInProgress] = useState(getLocalStorage('readingInProgress'));


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
  };

  // Sincroniza mudanças no estado com o localStorage
  useEffect(() => {
    setLocalStorage(nextReading, 'nextReading');
  }, [nextReading]);

  useEffect(() => {
    setLocalStorage(completedReadings, 'completedReadings');
  }, [completedReadings]);

  useEffect(() => {
    setLocalStorage(readingInProgress, 'readingInProgress');
  }, [readingInProgress]);


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
        tabValue,
        setTabValue,
        setLocalStorage,
        getLocalStorage
      }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
