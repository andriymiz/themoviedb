import AccountV3 from "./AccountV3";
import AccountV4 from "./AccountV4";
import AuthenticationV4 from "./AuthenticationV4";
import AuthenticationV3 from "./AuthenticationV3";
import Certifications from "./Certifications";
import Changes from "./Changes";
import Collections from "./Collections";
import Companies from "./Companies";
import Configurations from "./Configurations";
import Credits from "./Credits";
import Discover from "./Discover";
import Find from "./Find";
import Genres from "./Genres";
import GuestSession from "./GuestSession";
import Keywords from "./Keywords";
import ListsV3 from "./ListsV3";
import ListsV4 from "./ListsV4";
import Movies from "./Movies";
import Networks from "./Networks";
import People from "./People";
import Reviews from "./Reviews";
import Search from "./Search";
import Trending from "./Trending";
import TvEpisodeGroups from "./TvEpisodeGroups";
import TvEpisodes from "./TvEpisodes";
import TvSeasons from "./TvSeasons";
import TvShows from "./TvShows";

import { assign, createOauthWindow } from "./utilities";

class TheMovieDb {
  /**
   * Creates an instance of TheMovieDb.
   * @param {string} api_key
   * @param {string} api_token
   * @param {string} session_id
   * @param {string} access_token
   * @param {string} v3_account
   * @param {string} v4_account
   * @param {string} language
   * @param {string} country
   */
  constructor(
    api_key,
    api_token,
    session_id,
    access_token,
    v3_account,
    v4_account,
    language,
    country
  ) {
    this.api_key = api_key;
    this.api_token = api_token;
    this.base_uri = "https://api.themoviedb.org/";
    this.images_uri = "https://image.tmdb.org/t/p/";
    this.session_id = session_id;
    this.access_token = access_token;
    this.v3_account = v3_account;
    this.v4_account = v4_account;
    this.language = language || {
      iso_639_1: navigator.language || navigator.userLanguage || "uk",
      english_name: "",
      name: ""
    };
    this.country = country || { iso_3166_1: "UA", english_name: "", name: "" };
  }

  /**
   * Make GET parameters
   * @param {string} startUrl
   * @param {Object} [options={}]
   * @returns {string}
   * @memberof TheMovieDb
   */
  query(startUrl, options = {}) {
    let url = new URL(startUrl);

    Object.keys(options).forEach(key => {
      if (options[key] !== null) {
        url.searchParams.append(key, options[key]);
      }
    });

    return url;
  }

  /**
   * Get default values
   * @param {Object} options
   * @returns {Object}
   * @memberof TheMovieDb
   */
  metas(options) {
    var parameters = {};
    options.map(opt => {
      switch (opt) {
        case "api_key":
          parameters.api_key = this.api_key;
          break;
        case "language":
          parameters.language = this.language.iso_639_1;
          break;
        case "region":
          parameters.region = this.country.iso_3166_1;
          break;
        case "country":
          parameters.country = this.country.iso_3166_1;
          break;
        case "session_id":
          parameters.session_id = this.session_id;
          break;
        case "guest_session_id":
          parameters.guest_session_id = this.guest_session_id;
          break;
        case "include_image_language":
          parameters.include_image_language = this.language.iso_639_1;
          break;
        default:
          break;
      }
      return 0;
    });
    return parameters;
  }

  /**
   * Get method
   * @param {string} url
   * @param {Object} [options={}] - GET parameters
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV3(url, options = {}) {
    return fetch(this.query(`${this.base_uri}3/${url}`, options)).then(res =>
      res.json()
    );
  }

  /**
   * Post method
   * @param {string} url
   * @param {Object} [options={}] - GET parameters
   * @param {Object} [body={}] - POST parameters
   * @param {string} [method="POST"]
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  postV3(url, options = {}, body = {}, method = "POST") {
    return fetch(this.query(`${this.base_uri}3/${url}`, options), {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }

  /**
   * Get method
   * @param {string} url
   * @param {Object} [options={}] - GET parameters
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  getV4(url, options = {}) {
    return fetch(this.query(`${this.base_uri}4/${url}`, options), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + this.api_token
      }
    }).then(res => res.json());
  }

  /**
   * Post method
   * @param {string} url
   * @param {Object} [body={}] - POST parameters
   * @param {string} [method="POST"] - Method name
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  postV4(url, body = {}, method = "POST") {
    return fetch(`${this.base_uri}4/${url}`, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + this.api_token
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }

  // ADDITION METHODS FOR AUTHENTICATION

  /**
   * oAuth
   * @param {string} [windowTitle="OAuth V4 login"]
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  oAuthV4(windowTitle = "OAuth V4 login") {
    return this.createAuthRequestToken().then(data => {
      return new Promise((resolve, reject) => {
        let windowHandle = createOauthWindow(
          `https://www.themoviedb.org/auth/access?request_token=${data.request_token}`,
          windowTitle
        );
        let intervalId = null;
        let loopCount = 100;
        let intervalLength = 1000;

        intervalId = window.setInterval(() => {
          if (loopCount-- < 0 || !windowHandle.opener) {
            window.clearInterval(intervalId);
            windowHandle.close();
            reject(data);
          } else {
            this.createAuthAccessToken({
              request_token: data.request_token
            }).then(data => {
              if (data.success === true) {
                this.access_token = data.access_token;
                this.v4_account = { id: data.account_id };

                window.clearInterval(intervalId);
                windowHandle.close();
                return resolve(data);
              }
            });
          }
        }, intervalLength);
        windowHandle.onclose = () => window.clearInterval(intervalId);
      });
    });
  }

  /**
   * oAuth
   * @param {string} [windowTitle="OAuth V3 login"]
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  oAuth(windowTitle = "OAuth V3 login") {
    return this.createRequestToken().then(data => {
      return new Promise((resolve, reject) => {
        let windowHandle = createOauthWindow(
          `https://www.themoviedb.org/authenticate/${data.request_token}`,
          windowTitle
        );
        let intervalId = null;
        let loopCount = 100;
        let intervalLength = 1000;

        intervalId = window.setInterval(() => {
          if (loopCount-- < 0 || !windowHandle.opener) {
            window.clearInterval(intervalId);
            windowHandle.close();
            reject(data);
          } else {
            this.createSession(
              {},
              {
                request_token: data.request_token
              }
            ).then(data => {
              if (data.success === true) {
                this.session_id = data.session_id;

                window.clearInterval(intervalId);
                windowHandle.close();
                return resolve(data);
              }
            });
          }
        }, intervalLength);
        windowHandle.onclose = () => window.clearInterval(intervalId);
      });
    });
  }

  /**
   * Logout
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  logoutV4() {
    return this.deleteAuthAccessToken({
      access_token: this.access_token
    }).then(data => {
      localStorage.removeItem("tmdb_access_token");
      this.access_token = null;
      return Promise.resolve(data);
    });
  }

  /**
   * Logout
   * @returns {Promise}
   * @memberof TheMovieDb
   */
  logout() {
    return this.deleteSession(
      {},
      {
        session_id: this.session_id
      }
    ).then(data => {
      localStorage.removeItem("tmdb_session_id");
      this.session_id = null;
      return Promise.resolve(data);
    });
  }
}

assign(
  TheMovieDb.prototype,
  AccountV3,
  AccountV4,
  AuthenticationV4,
  AuthenticationV3,
  Certifications,
  Changes,
  Collections,
  Companies,
  Configurations,
  Credits,
  Discover,
  Find,
  Genres,
  GuestSession,
  Keywords,
  ListsV3,
  ListsV4,
  Movies,
  Networks,
  People,
  Reviews,
  Search,
  Trending,
  TvEpisodeGroups,
  TvEpisodes,
  TvSeasons,
  TvShows
);

export default TheMovieDb;
