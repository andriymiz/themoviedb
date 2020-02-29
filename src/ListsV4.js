// LISTS V4
export default {
  /**
   * This method will retrieve a list by id
   * @param {string} list_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4List(list_id, options) {
    return this.getV4(`list/${list_id}`, options);
  },

  /**
   * This method will create a new list.
   * @param {Object} body
   * @param {string} body.name - Required
   * @param {string} body.iso_639_1 - Required
   * @param {string} body.description
   * @param {boolean} body.public
   * @param {string} body.iso_3166_1
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createV4List(body) {
    return this.postV4("list", body);
  },

  /**
   * This method will let you update the details of a list.
   * @param {string} list_id
   * @param {Object} body
   * @param {string} body.name - Required
   * @param {string} body.description
   * @param {boolean} body.public
   * @param {('original_order.asc'|'original_order.desc'|'vote_average.asc'|'vote_average.desc'|'primary_release_date.asc'|'primary_release_date.desc'|'title.asc'|'title.desc')} body.sort_by
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  updateV4List(list_id, body) {
    return this.postV4(`list/${list_id}`, body, "PUT");
  },

  /**
   * This method lets you clear all of the items from a list
   * in a single request. This action cannot be reversed so
   * use it with caution.
   * @param {string} list_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  clearV4List(list_id) {
    return this.getV4(`list/${list_id}/clear`);
  },

  /**
   * This method will delete a list by id. This action is
   * not reversible so take care when issuing it.
   * @param {string} list_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  removeV4List(list_id) {
    return this.postV4(`list/${list_id}`, {}, "DELETE");
  },

  /**
   * This method will let you add items to a list. We
   * support essentially an unlimited number of items to be
   * posted at a time. Both movie and TV series are support.
   * @param {string} list_id
   * @param {Object} body
   * @param {array[]} body.items - Required
   * @param {string} body.items[].media_type - Required
   * @param {number} body.items[].media_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  addItemsToV4List(list_id, body) {
    return this.postV4(`list/${list_id}/items`, body);
  },

  /**
   * This method will let you update an individual item on a
   * list. Currently, only adding a comment is suported.
   * @param {string} list_id
   * @param {Object} body
   * @param {array[]} body.items - Required
   * @param {string} body.items[].media_type - Required
   * @param {number} body.items[].media_id - Required
   * @param {string} body.items[].comment - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  updateV4ListItems(list_id, body) {
    return this.postV4(`list/${list_id}/items`, body, "PUT");
  },

  /**
   * This method will let you remove items from a list. You
   * can remove multiple items at a time.
   * @param {string} list_id
   * @param {Object} body
   * @param {array[]} body.items - Required
   * @param {string} body.items[].media_type - Required
   * @param {number} body.items[].media_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  removeV4ListItems(list_id, body) {
    return this.postV4(`list/${list_id}/items`, body, "DELETE");
  },

  /**
   * This method lets you quickly check if the item is
   * already added to the list.
   * @param {string} list_id
   * @param {Object} options
   * @param {string} options.media_type - Required
   * @param {number} options.media_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  checkV4ListItem(list_id, options) {
    return this.getV4(`list/${list_id}/item_status`, options);
  }
};
