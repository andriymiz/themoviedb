// DISCOVER V3
export default {
  /**
   * Discover movies by different types of data like average
   * rating, number of votes, genres and certifications.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {string} options.region
   * @param {('popularity.asc'|'popularity.desc'|'release_date.asc'|'release_date.desc'|'revenue.asc'|'revenue.desc'|'primary_release_date.asc'|'primary_release_date.desc'|'original_title.asc'|'original_title.desc'|'vote_average.asc'|'vote_average.desc'|'vote_count.asc'|'vote_count.desc')} options.sort_by
   * @param {string} options.certification_country
   * @param {string} options.certification
   * @param {string} options.certification.gte
   * @param {string} options.certification.lte
   * @param {boolean} options.include_adult
   * @param {boolean} options.include_video
   * @param {number} options.page
   * @param {number} options.primary_release_year
   * @param {string} options.primary_release_date.gte
   * @param {string} options.primary_release_date.lte
   * @param {string} options.release_date.gte
   * @param {string} options.release_date.lte
   * @param {number} options.with_release_type
   * @param {number} options.year
   * @param {number} options.vote_average.gte
   * @param {number} options.vote_average.lte
   * @param {number} options.vote_count.gte
   * @param {number} options.vote_count.lte
   * @param {string} options.with_cast
   * @param {string} options.with_crew
   * @param {string} options.with_people
   * @param {string} options.with_companies
   * @param {string} options.with_genres
   * @param {string} options.without_genres
   * @param {string} options.with_keywords
   * @param {string} options.without_keywords
   * @param {number} options.with_runtime.gte
   * @param {number} options.with_runtime.lte
   * @param {string} options.with_original_language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieDiscover(options) {
    return this.getV3("discover/movie", {
      ...this.metas(["api_key", "language", "region"]),
      ...options
    });
  },

  /**
   * Discover TV shows by different types of data like
   * average rating, number of votes, genres, the network
   * they aired on and air dates.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {('vote_average.desc'|'vote_average.asc'|'first_air_date.desc'|'first_air_date.asc'|'popularity.desc'|'popularity.asc')} options.sort_by
   * @param {string} options.air_date.gte
   * @param {string} options.air_date.lte
   * @param {string} options.first_air_date.gte
   * @param {string} options.first_air_date.lte
   * @param {number} options.first_air_date_year
   * @param {number} options.page
   * @param {string} options.timezone
   * @param {number} options.vote_average.gte
   * @param {number} options.vote_count.gte
   * @param {string} options.with_genres
   * @param {string} options.with_networks
   * @param {string} options.without_genres
   * @param {number} options.with_runtime.gte
   * @param {number} options.with_runtime.lte
   * @param {boolean} options.include_null_first_air_dates
   * @param {string} options.with_original_language
   * @param {string} options.without_keywords
   * @param {boolean} options.screened_theatrically
   * @param {string} options.with_companies
   * @param {string} options.with_keywords
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvDiscover(options) {
    return this.getV3("discover/tv", {
      ...this.metas(["api_key", "language", "region", "timezone"]),
      ...options
    });
  }
};
