'use strict';

import userManager from './user.manager';
import booksManager from './books.manager';


function getter(manager, request) {
  return function () {
    return manager.create(request, this);
  };
}

export default {
    getUserManager: getter(userManager),
    getBooksManager: getter(booksManager)
};
