// FIND V3
export default {
  /**
   * The find method makes it easy to search for objects in
   * our database by an external id. For example, an IMDB ID.
   * @param {string} external_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {('imdb_id'|'freebase_mid'|'freebase_id'|'tvdb_id'|'tvrage_id'|'facebook_id'|'twitter_id'|'instagram_id')} options.external_source
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  findById(external_id, options) {
    return this.getV3(`find/${external_id}`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
