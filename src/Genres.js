// GENRES V3
export default {
  /**
   * Get the list of official genres for movies.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieGenres(options) {
    return this.getV3("genre/movie/list", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the list of official genres for TV shows.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvGenres(options) {
    return this.getV3("genre/tv/list", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
