// TV SEASONS V3
export default {
  /**
   * Get the TV season details by id.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id
   * @param {string} options.guest_session_id
   * @param {string} options.append_to_response - Example: 'changes,account_states,credits,external_ids,images,videos'
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvSeason(tv_id, season_number, options) {
    return this.getV3(`tv/${tv_id}/season/${season_number}`, {
      ...this.metas(["api_key", "language", "session_id", "guest_session_id"]),
      ...options
    });
  },

  /**
   * Get the changes for a TV season. By default only the
   * last 24 hours are returned.
   * @param {number} season_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvSeasonChanges(season_id, options) {
    return this.getV3(`tv/season/${season_id}/changes`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Returns all of the user ratings for the season's
   * episodes.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {string} options.guest_session_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvSeasonAccountStates(tv_id, season_number, options) {
    return this.getV3(`tv/${tv_id}/season/${season_number}/account_states`, {
      ...this.metas(["api_key", "language", "session_id", "guest_session_id"]),
      ...options
    });
  },

  /**
   * Get the credits for TV season.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvSeasonCredits(tv_id, season_number, options) {
    return this.getV3(`tv/${tv_id}/season/${season_number}/credits`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the external ids for a TV season. We currently
   * support the following external sources.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvSeasonExternalIds(tv_id, season_number, options) {
    return this.getV3(`tv/${tv_id}/season/${season_number}/external_ids`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the images that belong to a TV season.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.include_image_language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvSeasonImages(tv_id, season_number, options) {
    return this.getV3(`tv/${tv_id}/season/${season_number}/images`, {
      ...this.metas(["api_key", "language", "include_image_language"]),
      ...options
    });
  },

  /**
   * Get the videos that have been added to a TV season.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvSeasonVideos(tv_id, season_number, options) {
    return this.getV3(`tv/${tv_id}/season/${season_number}/videos`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
