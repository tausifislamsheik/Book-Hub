import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="mt-20">
            <h1 className="text-4xl font-bold text-center mb-10">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
                {
                books.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;