// src/App.jsx
import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf.jsx';
import { useState } from "react";

const App = () => {
    const [books, setBooks] = useState([
      { title: "Fourth Wing", author: "Rebecca Yarros" },
      { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
    ]);

  const addBooks = (formData) => {
    // use the todos setter to add formData to todos array
    const newBooks = [...books, formData] 
    setBooks(newBooks)
  }

  return (
    <>
      <h1>My Bookshelf</h1>
      <Bookshelf books={books} addBooks={addBooks}/>
    </>
  );
};

export default App;
