// LISTS V3
export default {
  /**
   * Get the details of a list.
   * @param {string|number} list_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getList(list_id, options) {
    return this.getV3(`list/${list_id}`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * You can use this method to check if a movie has already
   * been added to the list.
   * @param {string|number} list_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {number} options.movie_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  checkListItem(list_id, options) {
    return this.getV3(`list/${list_id}/item_status`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Create a list.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {Object} body
   * @param {string} body.name
   * @param {string} body.description
   * @param {string} body.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createList(options, body) {
    return this.postV3(
      "list",
      {
        ...this.metas(["api_key", "session_id"]),
        ...options
      },
      body
    );
  },

  /**
   * Add a movie to a list.
   * @param {string|number} list_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {Object} body
   * @param {number} body.media_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  addMovieToList(list_id, options, body) {
    return this.postV3(
      `list/${list_id}/add_item`,
      {
        ...this.metas(["api_key", "session_id"]),
        ...options
      },
      body
    );
  },

  /**
   * Remove a movie from a list.
   * @param {string} list_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {Object} body
   * @param {number} body.media_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  removeMovieFromList(list_id, options, body) {
    return this.postV3(
      `list/${list_id}/remove_item`,
      {
        ...this.metas(["api_key", "session_id"]),
        ...options
      },
      body
    );
  },

  /**
   * Clear all of the items from a list.
   * @param {string} list_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {boolean} options.confirm - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  clearList(list_id, options) {
    return this.postV3(`list/${list_id}/clear`, {
      ...this.metas(["api_key", "session_id"]),
      ...options
    });
  },

  /**
   * Delete a list.
   * @param {string} list_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  deleteList(list_id, options) {
    return this.postV3(
      `list/${list_id}`,
      {
        ...this.metas(["api_key", "session_id"]),
        ...options
      },
      {},
      "DELETE"
    );
  }
};
