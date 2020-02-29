// CONFIGURATION V3
export default {
  /**
   * Get the system wide configuration information.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getConfiguration(options) {
    return this.getV3("configuration", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the list of countries (ISO 3166-1 tags) used
   * throughout TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getCountries(options) {
    return this.getV3("configuration/countries", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get a list of the jobs and departments we use on TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getJobs(options) {
    return this.getV3("configuration/jobs", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the list of languages (ISO 639-1 tags) used
   * throughout TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getLanguages(options) {
    return this.getV3("configuration/languages", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get a list of the officially supported translations
   * on TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPrimaryTranslations(options) {
    return this.getV3("configuration/primary_translations", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the list of timezones used throughout TMDb.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getTimezones(options) {
    return this.getV3("configuration/timezones", {
      ...this.metas(["api_key"]),
      ...options
    });
  }
};
