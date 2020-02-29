// AUTHENTICATION V4
export default {
  /**
   * This method generates a new request token that you can
   * ask a user to approve.
   * @param {Object} body
   * @param {string} body.redirect_to
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createAuthRequestToken(body) {
    return this.postV4("auth/request_token", body);
  },

  /**
   * This method will finish the user authentication flow and
   * issue an official user access token.
   * @param {Object} body
   * @param {string} body.request_token
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createAuthAccessToken(body) {
    return this.postV4("auth/access_token", body);
  },

  /**
   * This method gives your users the ability to log out of a
   * session.
   * @param {Object} body
   * @param {string} body.access_token
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  deleteAuthAccessToken(body) {
    return this.postV4("auth/access_token", body, "DELETE");
  }
};
