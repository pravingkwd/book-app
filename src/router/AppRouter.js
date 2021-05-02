import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import AddBook from '../components/AddBook';
import BookList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/EditBook';
import BooksContext from '../context/BooksContext';






const AppRouter = () => {

    const [books, setBooks] = useLocalStorage('books', []);

    /* using render props
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route render={(props) => (<BookList books={books} setBooks={setBooks} />)} path="/" exact={true} />
                        <Route render={(props) => (<AddBook {...props} books={books} setBooks={setBooks} />)} path="/add" />
                        <Route render={(props) => (<EditBook {...props} books={books} setBooks={setBooks} />)} path="/edit/:id" />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );*/

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <BooksContext.Provider value={{ books, setBooks }} >
                        <Switch>
                            <Route component={BookList} path="/" exact={true} />
                            <Route component={AddBook} path="/add" />
                            <Route component={EditBook} path="/edit/:id" />
                        </Switch>
                    </BooksContext.Provider>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;