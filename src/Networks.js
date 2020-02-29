// NETWORKS V3
export default {
  /**
   * Get the details of a network.
   * @param {string} network_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getNetwork(network_id, options) {
    return this.getV3(`network/${network_id}`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the alternative names of a network.
   * @param {string} network_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getNetworkAlternativeNames(network_id, options) {
    return this.getV3(`network/${network_id}/alternative_names`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the TV network logos by id.
   * @param {string} network_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getNetworkImages(network_id, options) {
    return this.getV3(`network/${network_id}/images`, {
      ...this.metas(["api_key"]),
      ...options
    });
  }
};
