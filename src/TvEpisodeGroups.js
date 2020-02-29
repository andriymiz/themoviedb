// TV EPISODE GROUPS V3
export default {
  /**
   * Get the details of a TV episode group. Groups support
   * 7 different types which are enumerated as the following
   * @param {string} id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvEpisodeGroup(id, options) {
    return this.getV3(`tv/episode_group/${id}`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
