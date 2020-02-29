// TRENDING V3
export default {
  /**
   * Get the daily or weekly trending items. The daily
   * trending list tracks items over the period of a day
   * while items have a 24 hour half life. The weekly list
   * tracks items over a 7 day period, with a 7 day half
   * life.
   * @param {('all'|'movie'|'tv'|'person')} media_type
   * @param {('day'|'week')} time_window
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTrending(media_type, time_window, options) {
    return this.getV3(`trending/${media_type}/${time_window}`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
