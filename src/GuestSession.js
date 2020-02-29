// GUEST SESSIONS V3
export default {
  /**
   * Get the rated movies for a guest session.
   * @param {string} guest_session_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getGuestRatedMovies(guest_session_id, options) {
    return this.getV3(`guest_session/${guest_session_id}/rated/movies`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the rated TV shows for a guest session.
   * @param {string} guest_session_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getGuestRatedTv(guest_session_id, options) {
    return this.getV3(`guest_session/${guest_session_id}/rated/tv`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the rated TV episodes for a guest session.
   * @param {string} guest_session_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getGuestRatedTvEpisodes(guest_session_id, options) {
    return this.getV3(`guest_session/${guest_session_id}/rated/tv/episodes`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
