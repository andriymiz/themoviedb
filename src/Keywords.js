// KEYWORDS V3
export default {
  /**
   * Get Details
   * @param {string} keyword_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getKeyword(keyword_id, options) {
    return this.getV3(`keyword/${keyword_id}`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the movies that belong to a keyword.
   * @param {string} keyword_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {boolean} options.include_adult - Choose whether to inlcude adult (pornography) content in the results.
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getKeywordMovies(keyword_id, options) {
    return this.getV3(`keyword/${keyword_id}/movies`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
