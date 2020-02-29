// COLLECTIONS V3
export default {
  /**
   * Get collection details by id.
   * @param {string} collection_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getCollectionDetails(collection_id, options) {
    return this.getV3(`collection/${collection_id}`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the images for a collection by id.
   * @param {string} collection_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getCollectionImages(collection_id, options) {
    return this.getV3(`collection/${collection_id}/images`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the list translations for a collection by id.
   * @param {string} collection_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getCollectionTranslations(collection_id, options) {
    return this.getV3(`collection/${collection_id}/translations`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
