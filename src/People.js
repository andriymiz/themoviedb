// PEOPLE V3
export default {
  /**
   * Get the primary person details by id.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPerson(person_id, options) {
    return this.getV3(`person/${person_id}`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the changes for a person. By default only the last
   * 24 hours are returned.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonChanges(person_id, options) {
    return this.getV3(`person/${person_id}/changes`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the movie credits for a person.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonMovieCredits(person_id, options) {
    return this.getV3(`person/${person_id}/movie_credits`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the TV show credits for a person.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonTvCredits(person_id, options) {
    return this.getV3(`person/${person_id}/tv_credits`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the movie and TV credits together in a single
   * response.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonCombinedCredits(person_id, options) {
    return this.getV3(`person/${person_id}/combined_credits`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the external ids for a person. We currently support
   * the following external sources.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonExternalIds(person_id, options) {
    return this.getV3(`person/${person_id}/external_ids`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the images for a person.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonImages(person_id, options) {
    return this.getV3(`person/${person_id}/images`, {
      ...this.metas(["api_key"]),
      ...options
    });
  },

  /**
   * Get the images that this person has been tagged in.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonTaggedImages(person_id, options) {
    return this.getV3(`person/${person_id}/tagged_images`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get a list of translations that have been created for
   * a person.
   * @param {number} person_id
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPersonTranslations(person_id, options) {
    return this.getV3(`person/${person_id}/translations`, {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the most newly created person. This is a live
   * response and will continuously change.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @memberof TheMovieDb
   */
  getLatestPerson(options) {
    return this.getV3("person/latest", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  },

  /**
   * Get the list of popular people on TMDb. This list
   * updates daily.
   * @param {Object} options
   * @param {string} options.api_key - Required
   * @param {string} options.language
   * @param {number} options.page
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getPopularPersons(options) {
    return this.getV3("person/popular", {
      ...this.metas(["api_key", "language"]),
      ...options
    });
  }
};
