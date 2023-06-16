import business from '../business/business.container';

const booksEndpoint = (router) => {
    router.get('/api/books', async (request, response, next) => {
        try {
            let result = await business.getBooksManager().query();
            response.status(200).send(result);
        } catch (error) {
            console.log(error);
        }
    });

    router.delete('/api/books/:id', async (request, response, next) => {
        try {
        const bookId = request.params.id;
          let result = await business.getBooksManager().deleteBook(bookId);
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
    });

    router.post('/api/books', async (request, response, next) => {
        try {
          const book = request.body;
          let result = await business.getBooksManager().addBook(book);
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
    });

    router.put('/api/books/:id', async (request, response, next) => {
        try {
          const id = request.params.id;
          const book = request.body;
          let result = await business.getBooksManager().editBook(id, book);
          response.status(200).send(result);
        } catch (error) {
          console.log(error);
        }
    });

};
export default booksEndpoint;
