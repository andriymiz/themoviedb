// MOVIES V3
export default {
  /**
   * Get the primary information about a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.session_id
   * @param {string} options.guest_session_id
   * @param {string} options.append_to_response - Example: 'account_states,alternative_titles,changes,credits,external_ids,images,keywords,release_dates,videos,translations,recommendations,similar,reviews,lists'
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovie(movie_id, options) {
    return this.getV3(`movie/${movie_id}`, {
      ...this.metas(["api_key", "language", "session_id", "guest_session_id"]),
      ...options
    });
  },

  /**
   * Grab the following account states for a session
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {string} options.guest_session_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieAccountStates(movie_id, options) {
    return this.getV3(`movie/${movie_id}/account_states`, {
      ...this.metas(["api_key", "session_id", "guest_session_id"]),
      ...options
    });
  },

  /**
   * Get all of the alternative titles for a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.country
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieAlternativeTitles(movie_id, options) {
    return this.getV3(`movie/${movie_id}/alternative_titles`, {
      ...this.metas(["api_key", "country"]),
      ...options
    });
  },

  /**
   * Get the changes for a movie. By default only the last
   * 24 hours are returned.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.start_date
   * @param {string} options.end_date
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieChanges(movie_id, options) {
    return this.getV3(`movie/${movie_id}/changes`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the cast and crew for a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieCredits(movie_id, options) {
    return this.getV3(`movie/${movie_id}/credits`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the external ids for a movie. We currently support
   * the following external sources.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieExternalIds(movie_id, options) {
    return this.getV3(`movie/${movie_id}/external_ids`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the images that belong to a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieImages(movie_id, options) {
    return this.getV3(`movie/${movie_id}/images`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the keywords that have been added to a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieKeywords(movie_id, options) {
    return this.getV3(`movie/${movie_id}/keywords`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the release date along with the certification for
   * a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieReleaseDates(movie_id, options) {
    return this.getV3(`movie/${movie_id}/release_dates`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the videos that have been added to a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieVideos(movie_id, options) {
    return this.getV3(`movie/${movie_id}/videos`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of translations that have been created for
   * a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieTranslations(movie_id, options) {
    return this.getV3(`movie/${movie_id}/translations`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get a list of recommended movies for a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieRecommendations(movie_id, options) {
    return this.getV3(`movie/${movie_id}/recommendations`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of similar movies. This is not the same as
   * the "Recommendation" system you see on the website.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieSimilar(movie_id, options) {
    return this.getV3(`movie/${movie_id}/similar`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the user reviews for a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieReviews(movie_id, options) {
    return this.getV3(`movie/${movie_id}/reviews`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of lists that this movie belongs to.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieLists(movie_id, options) {
    return this.getV3(`movie/${movie_id}/lists`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Rate a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {string} options.guest_session_id
   * @param {Object} body
   * @param {number} body.value - Required, min:0.5, max:10
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  rateMovie(movie_id, options, body) {
    return this.postV3(
      `movie/${movie_id}/rating`,
      {
        ...this.metas(["api_key", "session_id", "guest_session_id"]),
        ...options
      },
      body
    );
  },

  /**
   * Remove your rating for a movie.
   * @param {string} movie_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.session_id - Required
   * @param {string} options.guest_session_id
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  deleteMovieRating(movie_id, options) {
    return this.postV3(
      `movie/${movie_id}/rating`,
      {
        ...this.metas(["api_key", "session_id", "guest_session_id"]),
        ...options
      },
      {},
      "DELETE"
    );
  },

  /**
   * Get the most newly created movie. This is a live
   * response and will continuously change.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getLatestMovie(options) {
    return this.getV3("movie/latest", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of movies in theatres. This is a release
   * type query that looks for all movies that have a
   * release type of 2 or 3 within the specified date range.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.region
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getNowPlayingMovies(options) {
    return this.getV3("movie/now_playing", {
      ...this.metas(["api_key", "language", "region"]),
      ...options
    });
  },

  /**
   * Get a list of the current popular movies on TMDb. This
   * list updates daily.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.region
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPopularMovies(options) {
    return this.getV3("movie/popular", {
      ...this.metas(["api_key", "language", "region"]),
      ...options
    });
  },

  /**
   * Get the top rated movies on TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.region
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTopRatedMovies(options) {
    return this.getV3("movie/top_rated", {
      ...this.metas(["api_key", "language", "region"]),
      ...options
    });
  },

  /**
   * Get a list of upcoming movies in theatres. This is a
   * release type query that looks for all movies that have
   * a release type of 2 or 3 within the specified date
   * range.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.region
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getUpcomingMovies(options) {
    return this.getV3("movie/upcoming", {
      ...this.metas(["api_key", "language", "region"]),
      ...options
    });
  }
};
