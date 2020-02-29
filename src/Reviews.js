// REVIEWS V3
export default {
  /**
   * Get Details
   * @param {number} review_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getReview(review_id, options) {
    return this.getV3(`review/${review_id}`, {
      ...this.metas(["api_key"]),
      ...options
    });
  }
};
