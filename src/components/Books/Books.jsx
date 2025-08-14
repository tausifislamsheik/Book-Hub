import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
        setLoading(false);
    },[])

if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading books data...</p>
        </div>
      </div>
    );
  }

    return (
        <div className="mt-20">
            <h1 className="text-4xl font-bold text-center mb-10">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
                {
                books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;