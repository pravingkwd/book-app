import React, { useContext } from 'react';
import BookFrom from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';
const EditBook = ({ history }) => {

    const { books, setBooks } = useContext(BooksContext);

    const { id } = useParams();
    const bookToEdit = books.find((book) => book.id === id);

    const handleOnSubmit = (book) => {

        const filterBooks = books.filter((book) => book.id !== id)

        setBooks([book, ...filterBooks]);
        history.push('/');

    }

    return (
        <div>
            <BookFrom book={bookToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );




}

export default EditBook;