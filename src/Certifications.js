// CERTIFICATIONS V3
export default {
  /**
   * Get an up to date list of the officially supported
   * movie certifications on TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getMovieCertifications(options) {
    return this.getV3("certification/movie/list", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get an up to date list of the officially supported TV
   * show certifications on TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTvCertifications(options) {
    return this.getV3("certification/tv/list", {
      ...this.metas(["api_key"]),
      ...options
    });
  }
};
