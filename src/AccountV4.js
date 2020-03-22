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
  getV4Lists(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/lists`, options);
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
  getV4FavoritesMovies(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/movie/favorites`, options);
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
  getV4FavoritesTvShows(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/tv/favorites`, options);
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
  getV4MovieRecommendations(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/movie/recommendations`, options);
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
  getV4TvShowRecommendations(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/tv/recommendations`, options);
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
  getV4MovieWatchlist(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/movie/watchlist`, options);
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
  getV4TvShowWatchlist(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/tv/watchlist`, options);
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
  getV4RatedMovies(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/movie/rated`, options);
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
  getV4RatedTvShows(account_id = (this.v4_account || {id:0}).id, options) {
    return this.getV4(`account/${account_id}/tv/rated`, options);
  }
};
