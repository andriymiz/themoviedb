// TV EPISODES V3
export default {
  /**
   * Get the TV episode details by id.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id
   * @param {string} options.guest_session_id
   * @param {string} options.append_to_response - Example: 'changes,account_states,credits,external_ids,images,videos'
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisode(tv_id, season_number, episode_number, options) {
    return this.getV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}`,
      {
        ...this.metas(["api_key", "language", "session_id", "guest_session_id"]),
        ...options
      }
    );
  },

  /**
   * Get the changes for a TV episode. By default only the
   * last 24 hours are returned.
   * @param {string} episode_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisodeChanges(episode_id, options) {
    return this.getV3(`tv/episode/${episode_id}/changes`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get your rating for a episode.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {string} options.guest_session_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisodeAccountStates(tv_id, season_number, episode_number, options) {
    return this.getV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}/account_states`,
      {
        ...this.metas(["api_key", "session_id", "guest_session_id"]),
        ...options
      }
    );
  },

  /**
   * Get the credits (cast, crew and guest stars) for a TV
   * episode.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisodeCredits(tv_id, season_number, episode_number, options) {
    return this.getV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}/credits`,
      {
        ...this.metas(["api_key"]),
        ...options
      }
    );
  },

  /**
   * Get the external ids for a TV episode. We currently
   * support the following external sources.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisodeExternalIds(tv_id, season_number, episode_number, options) {
    return this.getV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}/external_ids`,
      {
        ...this.metas(["api_key"]),
        ...options
      }
    );
  },

  /**
   * Get the images that belong to a TV episode.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.include_image_language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisodeImages(tv_id, season_number, episode_number, options) {
    return this.getV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}/images`,
      {
        ...this.metas(["api_key", "language", "include_image_language"]),
        ...options
      }
    );
  },

  /**
   * Get the translation data for an episode.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisodeTranslations(tv_id, season_number, episode_number, options) {
    return this.getV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}/translations`,
      {
        ...this.metas(["api_key"]),
        ...options
      }
    );
  },

  /**
   * Rate a TV episode.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {string} options.guest_session_id
   * @param {Object} body
   * @param {number} body.value - Required, min:0.5, max:10
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  rateTvEpisode(tv_id, season_number, episode_number, options, body) {
    return this.postV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}/rating`,
      {
        ...this.metas(["api_key", "session_id", "guest_session_id"]),
        ...options
      },
      body
    );
  },

  /**
   * Remove your rating for a TV episode.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id
   * @param {string} options.guest_session_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  deleteTvEpisodeRating(tv_id, season_number, episode_number, options) {
    return this.postV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}/rating`,
      {
        ...this.metas(["api_key", "session_id", "guest_session_id"]),
        ...options
      },
      {},
      "DELETE"
    );
  },

  /**
   * Get the videos that have been added to a TV episode.
   * @param {number} tv_id
   * @param {number} season_number
   * @param {number} episode_number
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisodeVideos(tv_id, season_number, episode_number, options) {
    return this.getV3(
      `tv/${tv_id}/season/${season_number}/episode/${episode_number}/videos`,
      {
        ...this.metas(["api_key", "language"]),
        ...options
      }
    );
  }
};
