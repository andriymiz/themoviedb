// AUTHENTICATION V3
export default {
  /**
   * This method will let you create a new guest session.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createGuestSession(options) {
    return this.getV3("authentication/guest_session/new", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Create a temporary request token that can be used to
   * validate a TMDb user login.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createRequestToken(options) {
    return this.getV3("authentication/token/new", {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * You can use this method to create a fully valid
   * session ID once a user has validated the request
   * token.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {Object} body
   * @param {string} body.request_token - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createSession(options, body) {
    return this.postV3(
      "authentication/session/new",
      {
        ...this.metas(["api_key"]),
        ...options
      },
      body
    );
  },

  /**
   * This method allows an application to validate a
   * request token by entering a username and password.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {Object} body
   * @param {string} body.username - Required
   * @param {string} body.password - Required
   * @param {string} body.request_token - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createSessionWithLogin(options, body) {
    return this.postV3(
      "authentication/token/validate_with_login",
      {
        ...this.metas(["api_key"]),
        ...options
      },
      body
    );
  },

  /**
   * Use this method to create a v3 session ID if you
   * already have a valid v4 access token.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {Object} body
   * @param {string} body.access_token - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  createSessionFromV4AccessToken(options, body) {
    return this.postV3(
      "authentication/session/convert/4",
      {
        ...this.metas(["api_key"]),
        ...options
      },
      body
    );
  },

  /**
   * If you would like to delete (or "logout") from a
   * session, call this method with a valid session ID.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {Object} body
   * @param {string} body.session_id - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  deleteSession(options, body) {
    return this.postV3(
      "authentication/session",
      {
        ...this.metas(["api_key"]),
        ...options
      },
      body,
      "DELETE"
    );
  }
};
