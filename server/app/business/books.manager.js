import booksDAO from '../DAO/booksDAO';

function create(context) {
    async function query() {
        let result = booksDAO.query();
        if (result) {
            return result;
        }
    }

     async function get(id) {
         let result = await booksDAO.get(id);
         if (result) {
             return result;
         }
     }

     async function deleteBook(id) {
        let result = await booksDAO.deleteBook(id);
        if (result) {
            return result;
        }
    }

    async function addBook(book) {
        let result = await booksDAO.addBook(book);
        if (result) {
            return result;
        }
    }

    async function editBook(id, book) {
        let result = await booksDAO.editBook(id, book);
        if (result) {
            return result;
        }
    }

    return {
        query: query,
        get: get,
        addBook: addBook,
        deleteBook: deleteBook,
        editBook: editBook,
    };
}

export default {
    create: create
};
