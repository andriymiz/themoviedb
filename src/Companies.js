// COMPANIES V3
export default {
  /**
   * Get a companies details by id.
   * @param {string} company_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getCompanyDetails(company_id, options) {
    return this.getV3(`company/${company_id}`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the alternative names of a company.
   * @param {string} company_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getCompanyAlternativeNames(company_id, options) {
    return this.getV3(`company/${company_id}/alternative_names`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get a companies logos by id.
   * @param {string} company_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getCompanyImages(company_id, options) {
    return this.getV3(`company/${company_id}/images`, {
      ...this.metas(["api_key"]),
      ...options
    });
  }
};
