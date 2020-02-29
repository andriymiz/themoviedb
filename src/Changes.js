// CHANGES V3
export default {
  /**
   * Get a list of all of the movie ids that have been
   * changed in the past 24 hours.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.end_date
   * @param {string} options.start_date
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieChangeList(options) {
    return this.getV3("movie/changes", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get a list of all of the TV show ids that have been
   * changed in the past 24 hours.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.end_date
   * @param {string} options.start_date
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvChangeList(options) {
    return this.getV3("tv/changes", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get a list of all of the person ids that have been
   * changed in the past 24 hours.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.end_date
   * @param {string} options.start_date
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonChangeList(options) {
    return this.getV3("person/changes", {
      ...this.metas(["api_key"]),
      ...options
    });
  }
};
