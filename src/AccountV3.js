// ACCOUNT V3
export default {
  /**
   * Get your account details.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getAccount(options) {
    return this.getV3("account", {
      ...this.metas(["api_key", "session_id"]),
      ...options
    });
  },

  /**
   * Get all of the lists created by an account. Will
   * invlude private lists if you are the owner.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getLists(account_id = (this.v3_account || {id:0}).id, options) {
    return this.getV3(`account/${account_id}/lists`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get the list of your favorite movies.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getFavoritesMovies(account_id = (this.v3_account || {id:0}).id, options) {
    return this.getV3(`account/${account_id}/favorite/movies`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get the list of your favorite TV shows.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getFavoritesTvShows(account_id = (this.v3_account || {id:0}).id, options) {
    return this.getV3(`account/${account_id}/favorite/tv`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * This method allows you to mark a movie or TV show as
   * a favorite item.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {Object} body
   * @param {('movie'|'tv')} body.media_type - Required
   * @param {number} body.media_id - Required
   * @param {boolean} body.favorite - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  markAsFavorite(account_id = (this.v3_account || {id:0}).id, options, body) {
    return this.postV3(
      `account/${account_id}/favorite`,
      {
        ...this.metas(["api_key", "session_id"]),
        ...options
      },
      body
    );
  },

  /**
   * Get a list of all the movies you have rated.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getRatedMovies(account_id = (this.v3_account || {id:0}).id, options) {
    return this.getV3(`account/${account_id}/rated/movies`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the TV shows you have rated.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getRatedTvShows(account_id = (this.v3_account || {id:0}).id, options) {
    return this.getV3(`account/${account_id}/rated/tv`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the TV episodes you have rated.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getRatedTvEpisodes(account_id = (this.v3_account || {id:0}).id, options) {
    return this.getV3(`account/${account_id}/rated/tv/episodes`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the movies you have added to your
   * watchlist.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieWatchlist(account_id = (this.v3_account || {id:0}).id, options) {
    return this.getV3(`account/${account_id}/watchlist/movies`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the TV shows you have added to your
   * watchlist.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvShowWatchlist(account_id = (this.v3_account || {id:0}).id, options) {
    return this.getV3(`account/${account_id}/watchlist/movies`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Add a movie or TV show to your watchlist.
   * @param {number} account_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {Object} body
   * @param {('movie'|'tv')} body.media_type - Required
   * @param {number} body.media_id - Required
   * @param {boolean} body.watchlist - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  addToWatchlist(account_id = (this.v3_account || {id:0}).id, options, body) {
    return this.postV3(
      `account/${account_id}/watchlist`,
      {
        ...this.metas(["api_key", "session_id"]),
        ...options
      },
      body
    );
  }
};
