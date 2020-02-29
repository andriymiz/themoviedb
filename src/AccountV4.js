// ACCOUNT V4
export default {
  /**
   * Get all of the lists you've created.
   * @param {number} account_id
   * @param {Object} options
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4Lists(account_id, options) {
    return this.getV4(`account/${account_id}/lists`, options);
  },

  /**
   * Get all of the lists you've created.
   * @param {Object} options
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4Lists(options) {
    return this.getV4Lists(this.v4_account ? this.v4_account.id : 0, options);
  },

  /**
   * Get the list of movies you have marked as a favorite.
   * @param {number} account_id
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4FavoritesMovies(account_id, options) {
    return this.getV4(`account/${account_id}/movie/favorites`, options);
  },

  /**
   * Get the list of movies you have marked as a favorite.
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4FavoritesMovies(options) {
    return this.getV4FavoritesMovies(
      this.v4_account ? this.v4_account.id : 0,
      options
    );
  },

  /**
   * Get the list of TV shows you have marked as a favorite.
   * @param {number} account_id
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4FavoritesTvShows(account_id, options) {
    return this.getV4(`account/${account_id}/tv/favorites`, options);
  },

  /**
   * Get the list of TV shows you have marked as a favorite.
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4FavoritesTvShows(options) {
    return this.getV4FavoritesTvShows(
      this.v4_account ? this.v4_account.id : 0,
      options
    );
  },

  /**
   * Get a list of your personal movie recommendations.
   * @param {number} account_id
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4MovieRecommendations(account_id, options) {
    return this.getV4(`account/${account_id}/movie/recommendations`, options);
  },

  /**
   * Get a list of your personal movie recommendations.
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4MovieRecommendations(options) {
    return this.getV4MovieRecommendations(
      this.v4_account ? this.v4_account.id : 0,
      options
    );
  },

  /**
   * Get a list of your personal TV show recommendations.
   * @param {number} account_id
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4TvShowRecommendations(account_id, options) {
    return this.getV4(`account/${account_id}/tv/recommendations`, options);
  },

  /**
   * Get a list of your personal TV show recommendations.
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4TvShowRecommendations(options) {
    return this.getV4TvShowRecommendations(
      this.v4_account ? this.v4_account.id : 0,
      options
    );
  },

  /**
   * Get the list of movies you have added to your watchlist.
   * @param {number} account_id
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4MovieWatchlist(account_id, options) {
    return this.getV4(`account/${account_id}/movie/watchlist`, options);
  },

  /**
   * Get the list of movies you have added to your watchlist.
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4MovieWatchlist(options) {
    return this.getV4MovieWatchlist(
      this.v4_account ? this.v4_account.id : 0,
      options
    );
  },

  /**
   * Get the list of TV shows you have added to your watchlist.
   * @param {number} account_id
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4TvShowWatchlist(account_id, options) {
    return this.getV4(`account/${account_id}/tv/watchlist`, options);
  },

  /**
   * Get the list of TV shows you have added to your watchlist.
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4TvShowWatchlist(options) {
    return this.getV4TvShowWatchlist(
      this.v4_account ? this.v4_account.id : 0,
      options
    );
  },

  /**
   * Get the list of movies you have rated.
   * @param {number} account_id
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4RatedMovies(account_id, options) {
    return this.getV4(`account/${account_id}/movie/rated`, options);
  },

  /**
   * Get the list of movies you have rated.
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4RatedMovies(options) {
    return this.getV4RatedMovies(
      this.v4_account ? this.v4_account.id : 0,
      options
    );
  },

  /**
   * Get the list of TV shows you have rated.
   * @param {number} account_id
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4RatedTvShows(account_id, options) {
    return this.getV4(`account/${account_id}/tv/rated`, options);
  },

  /**
   * Get the list of TV shows you have rated.
   * @param {Object} options
   * @param {('created_at.asc'|'created_at.desc'|'release_date.asc'|'release_date.desc'|'title.asc'|'title.desc'|'vote_average.asc'|'vote_average.desc')} options.sort_by
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMyV4RatedTvShows(options) {
    return this.getV4RatedTvShows(
      this.v4_account ? this.v4_account.id : 0,
      options
    );
  }
};
