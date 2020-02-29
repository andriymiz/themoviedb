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
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getLists(account_id, options) {
    return this.getV3(`account/${account_id}/lists`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get all of the lists created by an account. Will
   * invlude private lists if you are the owner.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyLists(options) {
    return this.getLists(this.v3_account ? this.v3_account.id : 0, options);
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
  getFavoritesMovies(account_id, options) {
    return this.getV3(`account/${account_id}/favorite/movies`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get the list of your favorite movies.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyFavoritesMovies(options) {
    return this.getFavoritesMovies(
      this.v3_account ? this.v3_account.id : 0,
      options
    );
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
  getFavoritesTvShows(account_id, options) {
    return this.getV3(`account/${account_id}/favorite/tv`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get the list of your favorite TV shows.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyFavoritesTvShows(options) {
    return this.getFavoritesTvShows(
      this.v3_account ? this.v3_account.id : 0,
      options
    );
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
  markAsFavorite(account_id, options, body) {
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
   * This method allows you to mark a movie or TV show as
   * a favorite item.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  markAsMyFavorite(options) {
    return this.markAsFavorite(
      this.v3_account ? this.v3_account.id : 0,
      options
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
  getRatedMovies(account_id, options) {
    return this.getV3(`account/${account_id}/rated/movies`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the movies you have rated.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyRatedMovies(options) {
    return this.getRatedMovies(
      this.v3_account ? this.v3_account.id : 0,
      options
    );
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
  getRatedTvShows(account_id, options) {
    return this.getV3(`account/${account_id}/rated/tv`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the TV shows you have rated.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyRatedTvShows(options) {
    return this.getRatedTvShows(
      this.v3_account ? this.v3_account.id : 0,
      options
    );
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
  getRatedTvEpisodes(account_id, options) {
    return this.getV3(`account/${account_id}/rated/tv/episodes`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the TV episodes you have rated.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyRatedTvEpisodes(options) {
    return this.getRatedTvEpisodes(
      this.v3_account ? this.v3_account.id : 0,
      options
    );
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
  getMovieWatchlist(account_id, options) {
    return this.getV3(`account/${account_id}/watchlist/movies`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the movies you have added to your
   * watchlist.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyMovieWatchlist(options) {
    return this.getMovieWatchlist(
      this.v3_account ? this.v3_account.id : 0,
      options
    );
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
  getTvShowWatchlist(account_id, options) {
    return this.getV3(`account/${account_id}/watchlist/movies`, {
      ...this.metas(["api_key", "language", "session_id"]),
      ...options
    });
  },

  /**
   * Get a list of all the TV shows you have added to your
   * watchlist.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyTvShowWatchlist(options) {
    return this.getTvShowWatchlist(
      this.v3_account ? this.v3_account.id : 0,
      options
    );
  },

  /**
   * Add a movie or TV show to your watchlist.
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
  addToWatchlist(account_id, options) {
    return this.postV3(
      `account/${account_id}/watchlist`,
      this.metas(["api_key", "language", "session_id"]),
      options
    );
  },

  /**
   * Add a movie or TV show to your watchlist.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id - Required
   * @param {('created_at.asc'|'created_at.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  addToMyWatchlist(options) {
    return this.addToWatchlist(
      this.v3_account ? this.v3_account.id : 0,
      options
    );
  }
};
