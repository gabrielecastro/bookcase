import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './components/Header';
import MenuTabs from './components/MenuTabs';
import { BooksContextProvider } from './context/BooksContext';


function App() {
  return (
    <BooksContextProvider>
      <div className="App">
        <Header />
        <MenuTabs />
      </div>
    </BooksContextProvider>
  );
}

export default App;
