import userEndpoint from './user.endpoint';
import booksEndpoint from './books.endpoint';

const routes = function (router) {
    userEndpoint(router);
    booksEndpoint(router);
};

export default routes;
