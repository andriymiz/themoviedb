// SEARCH V3
export default {
  /**
   * Search for companies.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {number} options.page
   * @param {number} options.query - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  searchCompany(options) {
    return this.getV3("search/company", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Search for collections.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @param {number} options.query - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  searchCollection(options) {
    return this.getV3("search/collection", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Search for keywords.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {number} options.page
   * @param {number} options.query - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  searchKeyword(options) {
    return this.getV3("search/keyword", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Search for movies.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  searchMovie(options) {
    return this.getV3("search/movie", {
      ...this.metas(["api_key", "language", "region"]),
      ...options
    });
  },

  /**
   * Search multiple models in a single request. Multi
   * search currently supports searching for movies, tv
   * shows and people in a single request.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  searchMulti(options) {
    return this.getV3("search/multi", {
      ...this.metas(["api_key", "language", "region"]),
      ...options
    });
  },

  /**
   * Search for people.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  searchPerson(options) {
    return this.getV3("search/person", {
      ...this.metas(["api_key", "language", "region"]),
      ...options
    });
  },

  /**
   * Search for a TV show.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  searchTv(options) {
    return this.getV3("search/tv", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
