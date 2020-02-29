// CREDITS V3
export default {
  /**
   * Get a movie or TV credit details by id.
   * @param {string} credit_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getCreditDetails(credit_id, options) {
    return this.getV3(`credit/${credit_id}`, {
      ...this.metas(["api_key"]),
      ...options
    });
  }
};
