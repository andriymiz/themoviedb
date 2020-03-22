## Classes

<dl>
<dt><a href="#TheMovieDb">TheMovieDb</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#assign">assign</a> ⇒ <code>Object</code></dt>
<dd><p>Extend the given object.</p>
</dd>
<dt><a href="#createOauthWindow">createOauthWindow</a> ⇒ <code>Window</code></dt>
<dd><p>Create oAuth modal window</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#isObject">isObject(value)</a> ⇒ <code>boolean</code></dt>
<dd><p>Check if the given value is an object.</p>
</dd>
</dl>

<a name="TheMovieDb"></a>

## TheMovieDb
**Kind**: global class  

* [TheMovieDb](#TheMovieDb)
    * [new TheMovieDb(api_key, api_token, session_id, access_token, v3_account, v4_account, language, country)](#new_TheMovieDb_new)
    * _instance_
        * [.query(startUrl, [options])](#TheMovieDb+query) ⇒ <code>URL</code>
        * [.metas(options)](#TheMovieDb+metas) ⇒ <code>Object</code>
        * [.getV3(url, [options])](#TheMovieDb+getV3) ⇒ <code>Promise</code>
        * [.postV3(url, [options], [body], [method])](#TheMovieDb+postV3) ⇒ <code>Promise</code>
        * [.getV4(url, [options])](#TheMovieDb+getV4) ⇒ <code>Promise</code>
        * [.postV4(url, [body], [method])](#TheMovieDb+postV4) ⇒ <code>Promise</code>
        * [.oAuthV4([windowTitle])](#TheMovieDb+oAuthV4) ⇒ <code>Promise</code>
        * [.oAuth([windowTitle])](#TheMovieDb+oAuth) ⇒ <code>Promise</code>
        * [.logoutV4()](#TheMovieDb+logoutV4) ⇒ <code>Promise</code>
        * [.logout()](#TheMovieDb+logout) ⇒ <code>Promise</code>
    * _static_
        * [.getAccount(options)](#TheMovieDb.getAccount) ⇒ <code>Promise</code>
        * [.getLists(account_id, options)](#TheMovieDb.getLists) ⇒ <code>Promise</code>
        * [.getFavoritesMovies(account_id, options)](#TheMovieDb.getFavoritesMovies) ⇒ <code>Promise</code>
        * [.getFavoritesTvShows(account_id, options)](#TheMovieDb.getFavoritesTvShows) ⇒ <code>Promise</code>
        * [.markAsFavorite(account_id, options, body)](#TheMovieDb.markAsFavorite) ⇒ <code>Promise</code>
        * [.getRatedMovies(account_id, options)](#TheMovieDb.getRatedMovies) ⇒ <code>Promise</code>
        * [.getRatedTvShows(account_id, options)](#TheMovieDb.getRatedTvShows) ⇒ <code>Promise</code>
        * [.getRatedTvEpisodes(account_id, options)](#TheMovieDb.getRatedTvEpisodes) ⇒ <code>Promise</code>
        * [.getMovieWatchlist(account_id, options)](#TheMovieDb.getMovieWatchlist) ⇒ <code>Promise</code>
        * [.getTvShowWatchlist(account_id, options)](#TheMovieDb.getTvShowWatchlist) ⇒ <code>Promise</code>
        * [.addToWatchlist(account_id, options, body)](#TheMovieDb.addToWatchlist) ⇒ <code>Promise</code>
        * [.getV4Lists(account_id, options)](#TheMovieDb.getV4Lists) ⇒ <code>Promise</code>
        * [.getV4FavoritesMovies(account_id, options)](#TheMovieDb.getV4FavoritesMovies) ⇒ <code>Promise</code>
        * [.getV4FavoritesTvShows(account_id, options)](#TheMovieDb.getV4FavoritesTvShows) ⇒ <code>Promise</code>
        * [.getV4MovieRecommendations(account_id, options)](#TheMovieDb.getV4MovieRecommendations) ⇒ <code>Promise</code>
        * [.getV4TvShowRecommendations(account_id, options)](#TheMovieDb.getV4TvShowRecommendations) ⇒ <code>Promise</code>
        * [.getV4MovieWatchlist(account_id, options)](#TheMovieDb.getV4MovieWatchlist) ⇒ <code>Promise</code>
        * [.getV4TvShowWatchlist(account_id, options)](#TheMovieDb.getV4TvShowWatchlist) ⇒ <code>Promise</code>
        * [.getV4RatedMovies(account_id, options)](#TheMovieDb.getV4RatedMovies) ⇒ <code>Promise</code>
        * [.getV4RatedTvShows(account_id, options)](#TheMovieDb.getV4RatedTvShows) ⇒ <code>Promise</code>
        * [.createGuestSession(options)](#TheMovieDb.createGuestSession) ⇒ <code>Promise</code>
        * [.createRequestToken(options)](#TheMovieDb.createRequestToken) ⇒ <code>Promise</code>
        * [.createSession(options, body)](#TheMovieDb.createSession) ⇒ <code>Promise</code>
        * [.createSessionWithLogin(options, body)](#TheMovieDb.createSessionWithLogin) ⇒ <code>Promise</code>
        * [.createSessionFromV4AccessToken(options, body)](#TheMovieDb.createSessionFromV4AccessToken) ⇒ <code>Promise</code>
        * [.deleteSession(options, body)](#TheMovieDb.deleteSession) ⇒ <code>Promise</code>
        * [.createAuthRequestToken(body)](#TheMovieDb.createAuthRequestToken) ⇒ <code>Promise</code>
        * [.createAuthAccessToken(body)](#TheMovieDb.createAuthAccessToken) ⇒ <code>Promise</code>
        * [.deleteAuthAccessToken(body)](#TheMovieDb.deleteAuthAccessToken) ⇒ <code>Promise</code>
        * [.getMovieCertifications(options)](#TheMovieDb.getMovieCertifications) ⇒ <code>Promise</code>
        * [.getTvCertifications(options)](#TheMovieDb.getTvCertifications) ⇒ <code>Promise</code>
        * [.getMovieChangeList(options)](#TheMovieDb.getMovieChangeList) ⇒ <code>Promise</code>
        * [.getTvChangeList(options)](#TheMovieDb.getTvChangeList) ⇒ <code>Promise</code>
        * [.getPersonChangeList(options)](#TheMovieDb.getPersonChangeList) ⇒ <code>Promise</code>
        * [.getCollectionDetails(collection_id, options)](#TheMovieDb.getCollectionDetails) ⇒ <code>Promise</code>
        * [.getCollectionImages(collection_id, options)](#TheMovieDb.getCollectionImages) ⇒ <code>Promise</code>
        * [.getCollectionTranslations(collection_id, options)](#TheMovieDb.getCollectionTranslations) ⇒ <code>Promise</code>
        * [.getCompanyDetails(company_id, options)](#TheMovieDb.getCompanyDetails) ⇒ <code>Promise</code>
        * [.getCompanyAlternativeNames(company_id, options)](#TheMovieDb.getCompanyAlternativeNames) ⇒ <code>Promise</code>
        * [.getCompanyImages(company_id, options)](#TheMovieDb.getCompanyImages) ⇒ <code>Promise</code>
        * [.getConfiguration(options)](#TheMovieDb.getConfiguration) ⇒ <code>Promise</code>
        * [.getCountries(options)](#TheMovieDb.getCountries) ⇒ <code>Promise</code>
        * [.getJobs(options)](#TheMovieDb.getJobs) ⇒ <code>Promise</code>
        * [.getLanguages(options)](#TheMovieDb.getLanguages) ⇒ <code>Promise</code>
        * [.getPrimaryTranslations(options)](#TheMovieDb.getPrimaryTranslations) ⇒ <code>Promise</code>
        * [.getTimezones(options)](#TheMovieDb.getTimezones) ⇒ <code>Promise</code>
        * [.getCreditDetails(credit_id, options)](#TheMovieDb.getCreditDetails) ⇒ <code>Promise</code>
        * [.getMovieDiscover(options)](#TheMovieDb.getMovieDiscover) ⇒ <code>Promise</code>
        * [.getTvDiscover(options)](#TheMovieDb.getTvDiscover) ⇒ <code>Promise</code>
        * [.findById(external_id, options)](#TheMovieDb.findById) ⇒ <code>Promise</code>
        * [.getMovieGenres(options)](#TheMovieDb.getMovieGenres) ⇒ <code>Promise</code>
        * [.getTvGenres(options)](#TheMovieDb.getTvGenres) ⇒ <code>Promise</code>
        * [.getGuestRatedMovies(guest_session_id, options)](#TheMovieDb.getGuestRatedMovies) ⇒ <code>Promise</code>
        * [.getGuestRatedTv(guest_session_id, options)](#TheMovieDb.getGuestRatedTv) ⇒ <code>Promise</code>
        * [.getGuestRatedTvEpisodes(guest_session_id, options)](#TheMovieDb.getGuestRatedTvEpisodes) ⇒ <code>Promise</code>
        * [.getKeyword(keyword_id, options)](#TheMovieDb.getKeyword) ⇒ <code>Promise</code>
        * [.getKeywordMovies(keyword_id, options)](#TheMovieDb.getKeywordMovies) ⇒ <code>Promise</code>
        * [.getList(list_id, options)](#TheMovieDb.getList) ⇒ <code>Promise</code>
        * [.checkListItem(list_id, options)](#TheMovieDb.checkListItem) ⇒ <code>Promise</code>
        * [.createList(options, body)](#TheMovieDb.createList) ⇒ <code>Promise</code>
        * [.addMovieToList(list_id, options, body)](#TheMovieDb.addMovieToList) ⇒ <code>Promise</code>
        * [.removeMovieFromList(list_id, options, body)](#TheMovieDb.removeMovieFromList) ⇒ <code>Promise</code>
        * [.clearList(list_id, options)](#TheMovieDb.clearList) ⇒ <code>Promise</code>
        * [.deleteList(list_id, options)](#TheMovieDb.deleteList) ⇒ <code>Promise</code>
        * [.getV4List(list_id, options)](#TheMovieDb.getV4List) ⇒ <code>Promise</code>
        * [.createV4List(body)](#TheMovieDb.createV4List) ⇒ <code>Promise</code>
        * [.updateV4List(list_id, body)](#TheMovieDb.updateV4List) ⇒ <code>Promise</code>
        * [.clearV4List(list_id)](#TheMovieDb.clearV4List) ⇒ <code>Promise</code>
        * [.removeV4List(list_id)](#TheMovieDb.removeV4List) ⇒ <code>Promise</code>
        * [.addItemsToV4List(list_id, body)](#TheMovieDb.addItemsToV4List) ⇒ <code>Promise</code>
        * [.updateV4ListItems(list_id, body)](#TheMovieDb.updateV4ListItems) ⇒ <code>Promise</code>
        * [.removeV4ListItems(list_id, body)](#TheMovieDb.removeV4ListItems) ⇒ <code>Promise</code>
        * [.checkV4ListItem(list_id, options)](#TheMovieDb.checkV4ListItem) ⇒ <code>Promise</code>
        * [.getMovie(movie_id, options)](#TheMovieDb.getMovie) ⇒ <code>Promise</code>
        * [.getMovieAccountStates(movie_id, options)](#TheMovieDb.getMovieAccountStates) ⇒ <code>Promise</code>
        * [.getMovieAlternativeTitles(movie_id, options)](#TheMovieDb.getMovieAlternativeTitles) ⇒ <code>Promise</code>
        * [.getMovieChanges(movie_id, options)](#TheMovieDb.getMovieChanges) ⇒ <code>Promise</code>
        * [.getMovieCredits(movie_id, options)](#TheMovieDb.getMovieCredits) ⇒ <code>Promise</code>
        * [.getMovieExternalIds(movie_id, options)](#TheMovieDb.getMovieExternalIds) ⇒ <code>Promise</code>
        * [.getMovieImages(movie_id, options)](#TheMovieDb.getMovieImages) ⇒ <code>Promise</code>
        * [.getMovieKeywords(movie_id, options)](#TheMovieDb.getMovieKeywords) ⇒ <code>Promise</code>
        * [.getMovieReleaseDates(movie_id, options)](#TheMovieDb.getMovieReleaseDates) ⇒ <code>Promise</code>
        * [.getMovieVideos(movie_id, options)](#TheMovieDb.getMovieVideos) ⇒ <code>Promise</code>
        * [.getMovieTranslations(movie_id, options)](#TheMovieDb.getMovieTranslations) ⇒ <code>Promise</code>
        * [.getMovieRecommendations(movie_id, options)](#TheMovieDb.getMovieRecommendations) ⇒ <code>Promise</code>
        * [.getMovieSimilar(movie_id, options)](#TheMovieDb.getMovieSimilar) ⇒ <code>Promise</code>
        * [.getMovieReviews(movie_id, options)](#TheMovieDb.getMovieReviews) ⇒ <code>Promise</code>
        * [.getMovieLists(movie_id, options)](#TheMovieDb.getMovieLists) ⇒ <code>Promise</code>
        * [.rateMovie(movie_id, options, body)](#TheMovieDb.rateMovie) ⇒ <code>Promise</code>
        * [.deleteMovieRating(movie_id, options)](#TheMovieDb.deleteMovieRating) ⇒ <code>Promise</code>
        * [.getLatestMovie(options)](#TheMovieDb.getLatestMovie) ⇒ <code>Promise</code>
        * [.getNowPlayingMovies(options)](#TheMovieDb.getNowPlayingMovies) ⇒ <code>Promise</code>
        * [.getPopularMovies(options)](#TheMovieDb.getPopularMovies) ⇒ <code>Promise</code>
        * [.getTopRatedMovies(options)](#TheMovieDb.getTopRatedMovies) ⇒ <code>Promise</code>
        * [.getUpcomingMovies(options)](#TheMovieDb.getUpcomingMovies) ⇒ <code>Promise</code>
        * [.getNetwork(network_id, options)](#TheMovieDb.getNetwork) ⇒ <code>Promise</code>
        * [.getNetworkAlternativeNames(network_id, options)](#TheMovieDb.getNetworkAlternativeNames) ⇒ <code>Promise</code>
        * [.getNetworkImages(network_id, options)](#TheMovieDb.getNetworkImages) ⇒ <code>Promise</code>
        * [.getPerson(person_id, options)](#TheMovieDb.getPerson) ⇒ <code>Promise</code>
        * [.getPersonChanges(person_id, options)](#TheMovieDb.getPersonChanges) ⇒ <code>Promise</code>
        * [.getPersonMovieCredits(person_id, options)](#TheMovieDb.getPersonMovieCredits) ⇒ <code>Promise</code>
        * [.getPersonTvCredits(person_id, options)](#TheMovieDb.getPersonTvCredits) ⇒ <code>Promise</code>
        * [.getPersonCombinedCredits(person_id, options)](#TheMovieDb.getPersonCombinedCredits) ⇒ <code>Promise</code>
        * [.getPersonExternalIds(person_id, options)](#TheMovieDb.getPersonExternalIds) ⇒ <code>Promise</code>
        * [.getPersonImages(person_id, options)](#TheMovieDb.getPersonImages) ⇒ <code>Promise</code>
        * [.getPersonTaggedImages(person_id, options)](#TheMovieDb.getPersonTaggedImages) ⇒ <code>Promise</code>
        * [.getPersonTranslations(person_id, options)](#TheMovieDb.getPersonTranslations) ⇒ <code>Promise</code>
        * [.getLatestPerson(options)](#TheMovieDb.getLatestPerson)
        * [.getPopularPersons(options)](#TheMovieDb.getPopularPersons) ⇒ <code>Promise</code>
        * [.getReview(review_id, options)](#TheMovieDb.getReview) ⇒ <code>Promise</code>
        * [.searchCompany(options)](#TheMovieDb.searchCompany) ⇒ <code>Promise</code>
        * [.searchCollection(options)](#TheMovieDb.searchCollection) ⇒ <code>Promise</code>
        * [.searchKeyword(options)](#TheMovieDb.searchKeyword) ⇒ <code>Promise</code>
        * [.searchMovie(options)](#TheMovieDb.searchMovie) ⇒ <code>Promise</code>
        * [.searchMulti(options)](#TheMovieDb.searchMulti) ⇒ <code>Promise</code>
        * [.searchPerson(options)](#TheMovieDb.searchPerson) ⇒ <code>Promise</code>
        * [.searchTv(options)](#TheMovieDb.searchTv) ⇒ <code>Promise</code>
        * [.getTrending(media_type, time_window, options)](#TheMovieDb.getTrending) ⇒ <code>Promise</code>
        * [.getTvEpisodeGroup(id, options)](#TheMovieDb.getTvEpisodeGroup) ⇒ <code>Promise</code>
        * [.getTvEpisode(tv_id, season_number, episode_number, options)](#TheMovieDb.getTvEpisode) ⇒ <code>Promise</code>
        * [.getTvEpisodeChanges(episode_id, options)](#TheMovieDb.getTvEpisodeChanges) ⇒ <code>Promise</code>
        * [.getTvEpisodeAccountStates(tv_id, season_number, episode_number, options)](#TheMovieDb.getTvEpisodeAccountStates) ⇒ <code>Promise</code>
        * [.getTvEpisodeCredits(tv_id, season_number, episode_number, options)](#TheMovieDb.getTvEpisodeCredits) ⇒ <code>Promise</code>
        * [.getTvEpisodeExternalIds(tv_id, season_number, episode_number, options)](#TheMovieDb.getTvEpisodeExternalIds) ⇒ <code>Promise</code>
        * [.getTvEpisodeImages(tv_id, season_number, episode_number, options)](#TheMovieDb.getTvEpisodeImages) ⇒ <code>Promise</code>
        * [.getTvEpisodeTranslations(tv_id, season_number, episode_number, options)](#TheMovieDb.getTvEpisodeTranslations) ⇒ <code>Promise</code>
        * [.rateTvEpisode(tv_id, season_number, episode_number, options, body)](#TheMovieDb.rateTvEpisode) ⇒ <code>Promise</code>
        * [.deleteTvEpisodeRating(tv_id, season_number, episode_number, options)](#TheMovieDb.deleteTvEpisodeRating) ⇒ <code>Promise</code>
        * [.getTvEpisodeVideos(tv_id, season_number, episode_number, options)](#TheMovieDb.getTvEpisodeVideos) ⇒ <code>Promise</code>
        * [.getTvSeason(tv_id, season_number, options)](#TheMovieDb.getTvSeason) ⇒ <code>Promise</code>
        * [.getTvSeasonChanges(season_id, options)](#TheMovieDb.getTvSeasonChanges) ⇒ <code>Promise</code>
        * [.getTvSeasonAccountStates(tv_id, season_number, options)](#TheMovieDb.getTvSeasonAccountStates) ⇒ <code>Promise</code>
        * [.getTvSeasonCredits(tv_id, season_number, options)](#TheMovieDb.getTvSeasonCredits) ⇒ <code>Promise</code>
        * [.getTvSeasonExternalIds(tv_id, season_number, options)](#TheMovieDb.getTvSeasonExternalIds) ⇒ <code>Promise</code>
        * [.getTvSeasonImages(tv_id, season_number, options)](#TheMovieDb.getTvSeasonImages) ⇒ <code>Promise</code>
        * [.getTvSeasonVideos(tv_id, season_number, options)](#TheMovieDb.getTvSeasonVideos) ⇒ <code>Promise</code>
        * [.getTvShow(tv_id, options)](#TheMovieDb.getTvShow) ⇒ <code>Promise</code>
        * [.getTvShowAccountStates(tv_id, options)](#TheMovieDb.getTvShowAccountStates) ⇒ <code>Promise</code>
        * [.getTvShowAlternativeTitles(tv_id, options)](#TheMovieDb.getTvShowAlternativeTitles) ⇒ <code>Promise</code>
        * [.getTvShowChanges(tv_id, options)](#TheMovieDb.getTvShowChanges) ⇒ <code>Promise</code>
        * [.getTvShowContentRatings(tv_id, options)](#TheMovieDb.getTvShowContentRatings) ⇒ <code>Promise</code>
        * [.getTvShowCredits(tv_id, options)](#TheMovieDb.getTvShowCredits) ⇒ <code>Promise</code>
        * [.getTvShowEpisodeGroups(tv_id, options)](#TheMovieDb.getTvShowEpisodeGroups) ⇒ <code>Promise</code>
        * [.getTvShowExternalIds(tv_id, options)](#TheMovieDb.getTvShowExternalIds) ⇒ <code>Promise</code>
        * [.getTvShowImages(tv_id, options)](#TheMovieDb.getTvShowImages) ⇒ <code>Promise</code>
        * [.getTvShowKeywords(tv_id, options)](#TheMovieDb.getTvShowKeywords) ⇒ <code>Promise</code>
        * [.getTvShowRecommendations(tv_id, options)](#TheMovieDb.getTvShowRecommendations) ⇒ <code>Promise</code>
        * [.getTvShowReviews(tv_id, options)](#TheMovieDb.getTvShowReviews) ⇒ <code>Promise</code>
        * [.getTvShowScreenedTheatrically(tv_id, options)](#TheMovieDb.getTvShowScreenedTheatrically) ⇒ <code>Promise</code>
        * [.getTvShowSimilar(tv_id, options)](#TheMovieDb.getTvShowSimilar) ⇒ <code>Promise</code>
        * [.getTvShowTranslations(tv_id, options)](#TheMovieDb.getTvShowTranslations) ⇒ <code>Promise</code>
        * [.getTvShowVideos(tv_id, options)](#TheMovieDb.getTvShowVideos) ⇒ <code>Promise</code>
        * [.rateTvShow(tv_id, options, body)](#TheMovieDb.rateTvShow) ⇒ <code>Promise</code>
        * [.deleteTvShowRating(tv_id, options)](#TheMovieDb.deleteTvShowRating) ⇒ <code>Promise</code>
        * [.getLatestTvShow(options)](#TheMovieDb.getLatestTvShow) ⇒ <code>Promise</code>
        * [.getAiringTodayTvShows(options)](#TheMovieDb.getAiringTodayTvShows) ⇒ <code>Promise</code>
        * [.getOnTheAirTvShows(options)](#TheMovieDb.getOnTheAirTvShows) ⇒ <code>Promise</code>
        * [.getPopularTvShows(options)](#TheMovieDb.getPopularTvShows) ⇒ <code>Promise</code>
        * [.getTopRatedTvShows(options)](#TheMovieDb.getTopRatedTvShows) ⇒ <code>Promise</code>

<a name="new_TheMovieDb_new"></a>

### new TheMovieDb(api_key, api_token, session_id, access_token, v3_account, v4_account, language, country)
Creates an instance of TheMovieDb.


| Param | Type |
| --- | --- |
| api_key | <code>string</code> | 
| api_token | <code>string</code> | 
| session_id | <code>string</code> | 
| access_token | <code>string</code> | 
| v3_account | <code>string</code> | 
| v4_account | <code>string</code> | 
| language | <code>string</code> | 
| country | <code>string</code> | 

<a name="TheMovieDb+query"></a>

### theMovieDb.query(startUrl, [options]) ⇒ <code>URL</code>
Make GET parameters

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Default |
| --- | --- | --- |
| startUrl | <code>string</code> |  | 
| [options] | <code>Object</code> | <code>{}</code> | 

<a name="TheMovieDb+metas"></a>

### theMovieDb.metas(options) ⇒ <code>Object</code>
Get default values

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="TheMovieDb+getV3"></a>

### theMovieDb.getV3(url, [options]) ⇒ <code>Promise</code>
Get method

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  |  |
| [options] | <code>Object</code> | <code>{}</code> | GET parameters |

<a name="TheMovieDb+postV3"></a>

### theMovieDb.postV3(url, [options], [body], [method]) ⇒ <code>Promise</code>
Post method

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  |  |
| [options] | <code>Object</code> | <code>{}</code> | GET parameters |
| [body] | <code>Object</code> | <code>{}</code> | POST parameters |
| [method] | <code>string</code> | <code>&quot;\&quot;POST\&quot;&quot;</code> |  |

<a name="TheMovieDb+getV4"></a>

### theMovieDb.getV4(url, [options]) ⇒ <code>Promise</code>
Get method

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  |  |
| [options] | <code>Object</code> | <code>{}</code> | GET parameters |

<a name="TheMovieDb+postV4"></a>

### theMovieDb.postV4(url, [body], [method]) ⇒ <code>Promise</code>
Post method

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  |  |
| [body] | <code>Object</code> | <code>{}</code> | POST parameters |
| [method] | <code>string</code> | <code>&quot;\&quot;POST\&quot;&quot;</code> | Method name |

<a name="TheMovieDb+oAuthV4"></a>

### theMovieDb.oAuthV4([windowTitle]) ⇒ <code>Promise</code>
oAuth

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Default |
| --- | --- | --- |
| [windowTitle] | <code>string</code> | <code>&quot;\&quot;OAuth V4 login\&quot;&quot;</code> | 

<a name="TheMovieDb+oAuth"></a>

### theMovieDb.oAuth([windowTitle]) ⇒ <code>Promise</code>
oAuth

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Default |
| --- | --- | --- |
| [windowTitle] | <code>string</code> | <code>&quot;\&quot;OAuth V3 login\&quot;&quot;</code> | 

<a name="TheMovieDb+logoutV4"></a>

### theMovieDb.logoutV4() ⇒ <code>Promise</code>
Logout

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  
<a name="TheMovieDb+logout"></a>

### theMovieDb.logout() ⇒ <code>Promise</code>
Logout

**Kind**: instance method of [<code>TheMovieDb</code>](#TheMovieDb)  
<a name="TheMovieDb.getAccount"></a>

### TheMovieDb.getAccount(options) ⇒ <code>Promise</code>
Get your account details.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |

<a name="TheMovieDb.getLists"></a>

### TheMovieDb.getLists(account_id, options) ⇒ <code>Promise</code>
Get all of the lists created by an account. Will
invlude private lists if you are the owner.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getFavoritesMovies"></a>

### TheMovieDb.getFavoritesMovies(account_id, options) ⇒ <code>Promise</code>
Get the list of your favorite movies.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getFavoritesTvShows"></a>

### TheMovieDb.getFavoritesTvShows(account_id, options) ⇒ <code>Promise</code>
Get the list of your favorite TV shows.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.markAsFavorite"></a>

### TheMovieDb.markAsFavorite(account_id, options, body) ⇒ <code>Promise</code>
This method allows you to mark a movie or TV show as
a favorite item.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.media_type | <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> | Required |
| body.media_id | <code>number</code> | Required |
| body.favorite | <code>boolean</code> | Required |

<a name="TheMovieDb.getRatedMovies"></a>

### TheMovieDb.getRatedMovies(account_id, options) ⇒ <code>Promise</code>
Get a list of all the movies you have rated.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getRatedTvShows"></a>

### TheMovieDb.getRatedTvShows(account_id, options) ⇒ <code>Promise</code>
Get a list of all the TV shows you have rated.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getRatedTvEpisodes"></a>

### TheMovieDb.getRatedTvEpisodes(account_id, options) ⇒ <code>Promise</code>
Get a list of all the TV episodes you have rated.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getMovieWatchlist"></a>

### TheMovieDb.getMovieWatchlist(account_id, options) ⇒ <code>Promise</code>
Get a list of all the movies you have added to your
watchlist.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTvShowWatchlist"></a>

### TheMovieDb.getTvShowWatchlist(account_id, options) ⇒ <code>Promise</code>
Get a list of all the TV shows you have added to your
watchlist.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.addToWatchlist"></a>

### TheMovieDb.addToWatchlist(account_id, options, body) ⇒ <code>Promise</code>
Add a movie or TV show to your watchlist.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| account_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.media_type | <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> | Required |
| body.media_id | <code>number</code> | Required |
| body.watchlist | <code>boolean</code> | Required |

<a name="TheMovieDb.getV4Lists"></a>

### TheMovieDb.getV4Lists(account_id, options) ⇒ <code>Promise</code>
Get all of the lists you've created.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.getV4FavoritesMovies"></a>

### TheMovieDb.getV4FavoritesMovies(account_id, options) ⇒ <code>Promise</code>
Get the list of movies you have marked as a favorite.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.getV4FavoritesTvShows"></a>

### TheMovieDb.getV4FavoritesTvShows(account_id, options) ⇒ <code>Promise</code>
Get the list of TV shows you have marked as a favorite.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.getV4MovieRecommendations"></a>

### TheMovieDb.getV4MovieRecommendations(account_id, options) ⇒ <code>Promise</code>
Get a list of your personal movie recommendations.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.getV4TvShowRecommendations"></a>

### TheMovieDb.getV4TvShowRecommendations(account_id, options) ⇒ <code>Promise</code>
Get a list of your personal TV show recommendations.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.getV4MovieWatchlist"></a>

### TheMovieDb.getV4MovieWatchlist(account_id, options) ⇒ <code>Promise</code>
Get the list of movies you have added to your watchlist.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.getV4TvShowWatchlist"></a>

### TheMovieDb.getV4TvShowWatchlist(account_id, options) ⇒ <code>Promise</code>
Get the list of TV shows you have added to your watchlist.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.getV4RatedMovies"></a>

### TheMovieDb.getV4RatedMovies(account_id, options) ⇒ <code>Promise</code>
Get the list of movies you have rated.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.getV4RatedTvShows"></a>

### TheMovieDb.getV4RatedTvShows(account_id, options) ⇒ <code>Promise</code>
Get the list of TV shows you have rated.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| account_id | <code>number</code> | 
| options | <code>Object</code> | 
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> | 
| options.page | <code>number</code> | 

<a name="TheMovieDb.createGuestSession"></a>

### TheMovieDb.createGuestSession(options) ⇒ <code>Promise</code>
This method will let you create a new guest session.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.createRequestToken"></a>

### TheMovieDb.createRequestToken(options) ⇒ <code>Promise</code>
Create a temporary request token that can be used to
validate a TMDb user login.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.createSession"></a>

### TheMovieDb.createSession(options, body) ⇒ <code>Promise</code>
You can use this method to create a fully valid
session ID once a user has validated the request
token.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.request_token | <code>string</code> | Required |

<a name="TheMovieDb.createSessionWithLogin"></a>

### TheMovieDb.createSessionWithLogin(options, body) ⇒ <code>Promise</code>
This method allows an application to validate a
request token by entering a username and password.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.username | <code>string</code> | Required |
| body.password | <code>string</code> | Required |
| body.request_token | <code>string</code> | Required |

<a name="TheMovieDb.createSessionFromV4AccessToken"></a>

### TheMovieDb.createSessionFromV4AccessToken(options, body) ⇒ <code>Promise</code>
Use this method to create a v3 session ID if you
already have a valid v4 access token.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.access_token | <code>string</code> | Required |

<a name="TheMovieDb.deleteSession"></a>

### TheMovieDb.deleteSession(options, body) ⇒ <code>Promise</code>
If you would like to delete (or "logout") from a
session, call this method with a valid session ID.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.session_id | <code>string</code> | Required |

<a name="TheMovieDb.createAuthRequestToken"></a>

### TheMovieDb.createAuthRequestToken(body) ⇒ <code>Promise</code>
This method generates a new request token that you can
ask a user to approve.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 
| body.redirect_to | <code>string</code> | 

<a name="TheMovieDb.createAuthAccessToken"></a>

### TheMovieDb.createAuthAccessToken(body) ⇒ <code>Promise</code>
This method will finish the user authentication flow and
issue an official user access token.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 
| body.request_token | <code>string</code> | 

<a name="TheMovieDb.deleteAuthAccessToken"></a>

### TheMovieDb.deleteAuthAccessToken(body) ⇒ <code>Promise</code>
This method gives your users the ability to log out of a
session.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| body | <code>Object</code> | 
| body.access_token | <code>string</code> | 

<a name="TheMovieDb.getMovieCertifications"></a>

### TheMovieDb.getMovieCertifications(options) ⇒ <code>Promise</code>
Get an up to date list of the officially supported
movie certifications on TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getTvCertifications"></a>

### TheMovieDb.getTvCertifications(options) ⇒ <code>Promise</code>
Get an up to date list of the officially supported TV
show certifications on TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getMovieChangeList"></a>

### TheMovieDb.getMovieChangeList(options) ⇒ <code>Promise</code>
Get a list of all of the movie ids that have been
changed in the past 24 hours.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.end_date | <code>string</code> |  |
| options.start_date | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTvChangeList"></a>

### TheMovieDb.getTvChangeList(options) ⇒ <code>Promise</code>
Get a list of all of the TV show ids that have been
changed in the past 24 hours.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.end_date | <code>string</code> |  |
| options.start_date | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getPersonChangeList"></a>

### TheMovieDb.getPersonChangeList(options) ⇒ <code>Promise</code>
Get a list of all of the person ids that have been
changed in the past 24 hours.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.end_date | <code>string</code> |  |
| options.start_date | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getCollectionDetails"></a>

### TheMovieDb.getCollectionDetails(collection_id, options) ⇒ <code>Promise</code>
Get collection details by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| collection_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getCollectionImages"></a>

### TheMovieDb.getCollectionImages(collection_id, options) ⇒ <code>Promise</code>
Get the images for a collection by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| collection_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getCollectionTranslations"></a>

### TheMovieDb.getCollectionTranslations(collection_id, options) ⇒ <code>Promise</code>
Get the list translations for a collection by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| collection_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getCompanyDetails"></a>

### TheMovieDb.getCompanyDetails(company_id, options) ⇒ <code>Promise</code>
Get a companies details by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| company_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getCompanyAlternativeNames"></a>

### TheMovieDb.getCompanyAlternativeNames(company_id, options) ⇒ <code>Promise</code>
Get the alternative names of a company.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| company_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getCompanyImages"></a>

### TheMovieDb.getCompanyImages(company_id, options) ⇒ <code>Promise</code>
Get a companies logos by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| company_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getConfiguration"></a>

### TheMovieDb.getConfiguration(options) ⇒ <code>Promise</code>
Get the system wide configuration information.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getCountries"></a>

### TheMovieDb.getCountries(options) ⇒ <code>Promise</code>
Get the list of countries (ISO 3166-1 tags) used
throughout TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getJobs"></a>

### TheMovieDb.getJobs(options) ⇒ <code>Promise</code>
Get a list of the jobs and departments we use on TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getLanguages"></a>

### TheMovieDb.getLanguages(options) ⇒ <code>Promise</code>
Get the list of languages (ISO 639-1 tags) used
throughout TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getPrimaryTranslations"></a>

### TheMovieDb.getPrimaryTranslations(options) ⇒ <code>Promise</code>
Get a list of the officially supported translations
on TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getTimezones"></a>

### TheMovieDb.getTimezones(options) ⇒ <code>Promise</code>
Get the list of timezones used throughout TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getCreditDetails"></a>

### TheMovieDb.getCreditDetails(credit_id, options) ⇒ <code>Promise</code>
Get a movie or TV credit details by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| credit_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getMovieDiscover"></a>

### TheMovieDb.getMovieDiscover(options) ⇒ <code>Promise</code>
Discover movies by different types of data like average
rating, number of votes, genres and certifications.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.region | <code>string</code> |  |
| options.sort_by | <code>&#x27;popularity.asc&#x27;</code> \| <code>&#x27;popularity.desc&#x27;</code> \| <code>&#x27;release\_date.asc&#x27;</code> \| <code>&#x27;release\_date.desc&#x27;</code> \| <code>&#x27;revenue.asc&#x27;</code> \| <code>&#x27;revenue.desc&#x27;</code> \| <code>&#x27;primary\_release\_date.asc&#x27;</code> \| <code>&#x27;primary\_release\_date.desc&#x27;</code> \| <code>&#x27;original\_title.asc&#x27;</code> \| <code>&#x27;original\_title.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> \| <code>&#x27;vote\_count.asc&#x27;</code> \| <code>&#x27;vote\_count.desc&#x27;</code> |  |
| options.certification_country | <code>string</code> |  |
| options.certification | <code>string</code> |  |
| options.certification.gte | <code>string</code> |  |
| options.certification.lte | <code>string</code> |  |
| options.include_adult | <code>boolean</code> |  |
| options.include_video | <code>boolean</code> |  |
| options.page | <code>number</code> |  |
| options.primary_release_year | <code>number</code> |  |
| options.primary_release_date.gte | <code>string</code> |  |
| options.primary_release_date.lte | <code>string</code> |  |
| options.release_date.gte | <code>string</code> |  |
| options.release_date.lte | <code>string</code> |  |
| options.with_release_type | <code>number</code> |  |
| options.year | <code>number</code> |  |
| options.vote_average.gte | <code>number</code> |  |
| options.vote_average.lte | <code>number</code> |  |
| options.vote_count.gte | <code>number</code> |  |
| options.vote_count.lte | <code>number</code> |  |
| options.with_cast | <code>string</code> |  |
| options.with_crew | <code>string</code> |  |
| options.with_people | <code>string</code> |  |
| options.with_companies | <code>string</code> |  |
| options.with_genres | <code>string</code> |  |
| options.without_genres | <code>string</code> |  |
| options.with_keywords | <code>string</code> |  |
| options.without_keywords | <code>string</code> |  |
| options.with_runtime.gte | <code>number</code> |  |
| options.with_runtime.lte | <code>number</code> |  |
| options.with_original_language | <code>string</code> |  |

<a name="TheMovieDb.getTvDiscover"></a>

### TheMovieDb.getTvDiscover(options) ⇒ <code>Promise</code>
Discover TV shows by different types of data like
average rating, number of votes, genres, the network
they aired on and air dates.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.sort_by | <code>&#x27;vote\_average.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;first\_air\_date.desc&#x27;</code> \| <code>&#x27;first\_air\_date.asc&#x27;</code> \| <code>&#x27;popularity.desc&#x27;</code> \| <code>&#x27;popularity.asc&#x27;</code> |  |
| options.air_date.gte | <code>string</code> |  |
| options.air_date.lte | <code>string</code> |  |
| options.first_air_date.gte | <code>string</code> |  |
| options.first_air_date.lte | <code>string</code> |  |
| options.first_air_date_year | <code>number</code> |  |
| options.page | <code>number</code> |  |
| options.timezone | <code>string</code> |  |
| options.vote_average.gte | <code>number</code> |  |
| options.vote_count.gte | <code>number</code> |  |
| options.with_genres | <code>string</code> |  |
| options.with_networks | <code>string</code> |  |
| options.without_genres | <code>string</code> |  |
| options.with_runtime.gte | <code>number</code> |  |
| options.with_runtime.lte | <code>number</code> |  |
| options.include_null_first_air_dates | <code>boolean</code> |  |
| options.with_original_language | <code>string</code> |  |
| options.without_keywords | <code>string</code> |  |
| options.screened_theatrically | <code>boolean</code> |  |
| options.with_companies | <code>string</code> |  |
| options.with_keywords | <code>string</code> |  |

<a name="TheMovieDb.findById"></a>

### TheMovieDb.findById(external_id, options) ⇒ <code>Promise</code>
The find method makes it easy to search for objects in
our database by an external id. For example, an IMDB ID.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| external_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.external_source | <code>&#x27;imdb\_id&#x27;</code> \| <code>&#x27;freebase\_mid&#x27;</code> \| <code>&#x27;freebase\_id&#x27;</code> \| <code>&#x27;tvdb\_id&#x27;</code> \| <code>&#x27;tvrage\_id&#x27;</code> \| <code>&#x27;facebook\_id&#x27;</code> \| <code>&#x27;twitter\_id&#x27;</code> \| <code>&#x27;instagram\_id&#x27;</code> |  |

<a name="TheMovieDb.getMovieGenres"></a>

### TheMovieDb.getMovieGenres(options) ⇒ <code>Promise</code>
Get the list of official genres for movies.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvGenres"></a>

### TheMovieDb.getTvGenres(options) ⇒ <code>Promise</code>
Get the list of official genres for TV shows.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getGuestRatedMovies"></a>

### TheMovieDb.getGuestRatedMovies(guest_session_id, options) ⇒ <code>Promise</code>
Get the rated movies for a guest session.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| guest_session_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |

<a name="TheMovieDb.getGuestRatedTv"></a>

### TheMovieDb.getGuestRatedTv(guest_session_id, options) ⇒ <code>Promise</code>
Get the rated TV shows for a guest session.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| guest_session_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getGuestRatedTvEpisodes"></a>

### TheMovieDb.getGuestRatedTvEpisodes(guest_session_id, options) ⇒ <code>Promise</code>
Get the rated TV episodes for a guest session.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| guest_session_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getKeyword"></a>

### TheMovieDb.getKeyword(keyword_id, options) ⇒ <code>Promise</code>
Get Details

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| keyword_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getKeywordMovies"></a>

### TheMovieDb.getKeywordMovies(keyword_id, options) ⇒ <code>Promise</code>
Get the movies that belong to a keyword.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| keyword_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.include_adult | <code>boolean</code> | Choose whether to inlcude adult (pornography) content in the results. |

<a name="TheMovieDb.getList"></a>

### TheMovieDb.getList(list_id, options) ⇒ <code>Promise</code>
Get the details of a list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> \| <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.checkListItem"></a>

### TheMovieDb.checkListItem(list_id, options) ⇒ <code>Promise</code>
You can use this method to check if a movie has already
been added to the list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> \| <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.movie_id | <code>number</code> | Required |

<a name="TheMovieDb.createList"></a>

### TheMovieDb.createList(options, body) ⇒ <code>Promise</code>
Create a list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.name | <code>string</code> |  |
| body.description | <code>string</code> |  |
| body.language | <code>string</code> |  |

<a name="TheMovieDb.addMovieToList"></a>

### TheMovieDb.addMovieToList(list_id, options, body) ⇒ <code>Promise</code>
Add a movie to a list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> \| <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.media_id | <code>number</code> | Required |

<a name="TheMovieDb.removeMovieFromList"></a>

### TheMovieDb.removeMovieFromList(list_id, options, body) ⇒ <code>Promise</code>
Remove a movie from a list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| body | <code>Object</code> |  |
| body.media_id | <code>number</code> | Required |

<a name="TheMovieDb.clearList"></a>

### TheMovieDb.clearList(list_id, options) ⇒ <code>Promise</code>
Clear all of the items from a list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| options.confirm | <code>boolean</code> | Required |

<a name="TheMovieDb.deleteList"></a>

### TheMovieDb.deleteList(list_id, options) ⇒ <code>Promise</code>
Delete a list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |

<a name="TheMovieDb.getV4List"></a>

### TheMovieDb.getV4List(list_id, options) ⇒ <code>Promise</code>
This method will retrieve a list by id

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> | Required |
| options.sort_by | <code>&#x27;created\_at.asc&#x27;</code> \| <code>&#x27;created\_at.desc&#x27;</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.createV4List"></a>

### TheMovieDb.createV4List(body) ⇒ <code>Promise</code>
This method will create a new list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>Object</code> |  |
| body.name | <code>string</code> | Required |
| body.iso_639_1 | <code>string</code> | Required |
| body.description | <code>string</code> |  |
| body.public | <code>boolean</code> |  |
| body.iso_3166_1 | <code>string</code> |  |

<a name="TheMovieDb.updateV4List"></a>

### TheMovieDb.updateV4List(list_id, body) ⇒ <code>Promise</code>
This method will let you update the details of a list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| body | <code>Object</code> |  |
| body.name | <code>string</code> | Required |
| body.description | <code>string</code> |  |
| body.public | <code>boolean</code> |  |
| body.sort_by | <code>&#x27;original\_order.asc&#x27;</code> \| <code>&#x27;original\_order.desc&#x27;</code> \| <code>&#x27;vote\_average.asc&#x27;</code> \| <code>&#x27;vote\_average.desc&#x27;</code> \| <code>&#x27;primary\_release\_date.asc&#x27;</code> \| <code>&#x27;primary\_release\_date.desc&#x27;</code> \| <code>&#x27;title.asc&#x27;</code> \| <code>&#x27;title.desc&#x27;</code> |  |

<a name="TheMovieDb.clearV4List"></a>

### TheMovieDb.clearV4List(list_id) ⇒ <code>Promise</code>
This method lets you clear all of the items from a list
in a single request. This action cannot be reversed so
use it with caution.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| list_id | <code>string</code> | 

<a name="TheMovieDb.removeV4List"></a>

### TheMovieDb.removeV4List(list_id) ⇒ <code>Promise</code>
This method will delete a list by id. This action is
not reversible so take care when issuing it.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type |
| --- | --- |
| list_id | <code>string</code> | 

<a name="TheMovieDb.addItemsToV4List"></a>

### TheMovieDb.addItemsToV4List(list_id, body) ⇒ <code>Promise</code>
This method will let you add items to a list. We
support essentially an unlimited number of items to be
posted at a time. Both movie and TV series are support.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| body | <code>Object</code> |  |
| body.items | <code>Array.&lt;array&gt;</code> | Required |
| body.items[].media_type | <code>string</code> | Required |
| body.items[].media_id | <code>number</code> | Required |

<a name="TheMovieDb.updateV4ListItems"></a>

### TheMovieDb.updateV4ListItems(list_id, body) ⇒ <code>Promise</code>
This method will let you update an individual item on a
list. Currently, only adding a comment is suported.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| body | <code>Object</code> |  |
| body.items | <code>Array.&lt;array&gt;</code> | Required |
| body.items[].media_type | <code>string</code> | Required |
| body.items[].media_id | <code>number</code> | Required |
| body.items[].comment | <code>string</code> | Required |

<a name="TheMovieDb.removeV4ListItems"></a>

### TheMovieDb.removeV4ListItems(list_id, body) ⇒ <code>Promise</code>
This method will let you remove items from a list. You
can remove multiple items at a time.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| body | <code>Object</code> |  |
| body.items | <code>Array.&lt;array&gt;</code> | Required |
| body.items[].media_type | <code>string</code> | Required |
| body.items[].media_id | <code>number</code> | Required |

<a name="TheMovieDb.checkV4ListItem"></a>

### TheMovieDb.checkV4ListItem(list_id, options) ⇒ <code>Promise</code>
This method lets you quickly check if the item is
already added to the list.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| list_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.media_type | <code>string</code> | Required |
| options.media_id | <code>number</code> | Required |

<a name="TheMovieDb.getMovie"></a>

### TheMovieDb.getMovie(movie_id, options) ⇒ <code>Promise</code>
Get the primary information about a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |
| options.append_to_response | <code>string</code> | Example: 'account_states,alternative_titles,changes,credits,external_ids,images,keywords,release_dates,videos,translations,recommendations,similar,reviews,lists' |

<a name="TheMovieDb.getMovieAccountStates"></a>

### TheMovieDb.getMovieAccountStates(movie_id, options) ⇒ <code>Promise</code>
Grab the following account states for a session

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| options.guest_session_id | <code>string</code> |  |

<a name="TheMovieDb.getMovieAlternativeTitles"></a>

### TheMovieDb.getMovieAlternativeTitles(movie_id, options) ⇒ <code>Promise</code>
Get all of the alternative titles for a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.country | <code>string</code> |  |

<a name="TheMovieDb.getMovieChanges"></a>

### TheMovieDb.getMovieChanges(movie_id, options) ⇒ <code>Promise</code>
Get the changes for a movie. By default only the last
24 hours are returned.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.start_date | <code>string</code> |  |
| options.end_date | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getMovieCredits"></a>

### TheMovieDb.getMovieCredits(movie_id, options) ⇒ <code>Promise</code>
Get the cast and crew for a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getMovieExternalIds"></a>

### TheMovieDb.getMovieExternalIds(movie_id, options) ⇒ <code>Promise</code>
Get the external ids for a movie. We currently support
the following external sources.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getMovieImages"></a>

### TheMovieDb.getMovieImages(movie_id, options) ⇒ <code>Promise</code>
Get the images that belong to a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getMovieKeywords"></a>

### TheMovieDb.getMovieKeywords(movie_id, options) ⇒ <code>Promise</code>
Get the keywords that have been added to a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getMovieReleaseDates"></a>

### TheMovieDb.getMovieReleaseDates(movie_id, options) ⇒ <code>Promise</code>
Get the release date along with the certification for
a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getMovieVideos"></a>

### TheMovieDb.getMovieVideos(movie_id, options) ⇒ <code>Promise</code>
Get the videos that have been added to a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getMovieTranslations"></a>

### TheMovieDb.getMovieTranslations(movie_id, options) ⇒ <code>Promise</code>
Get a list of translations that have been created for
a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getMovieRecommendations"></a>

### TheMovieDb.getMovieRecommendations(movie_id, options) ⇒ <code>Promise</code>
Get a list of recommended movies for a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getMovieSimilar"></a>

### TheMovieDb.getMovieSimilar(movie_id, options) ⇒ <code>Promise</code>
Get a list of similar movies. This is not the same as
the "Recommendation" system you see on the website.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getMovieReviews"></a>

### TheMovieDb.getMovieReviews(movie_id, options) ⇒ <code>Promise</code>
Get the user reviews for a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getMovieLists"></a>

### TheMovieDb.getMovieLists(movie_id, options) ⇒ <code>Promise</code>
Get a list of lists that this movie belongs to.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.rateMovie"></a>

### TheMovieDb.rateMovie(movie_id, options, body) ⇒ <code>Promise</code>
Rate a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| options.guest_session_id | <code>string</code> |  |
| body | <code>Object</code> |  |
| body.value | <code>number</code> | Required, min:0.5, max:10 |

<a name="TheMovieDb.deleteMovieRating"></a>

### TheMovieDb.deleteMovieRating(movie_id, options) ⇒ <code>Promise</code>
Remove your rating for a movie.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| movie_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| options.guest_session_id | <code>string</code> |  |

<a name="TheMovieDb.getLatestMovie"></a>

### TheMovieDb.getLatestMovie(options) ⇒ <code>Promise</code>
Get the most newly created movie. This is a live
response and will continuously change.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getNowPlayingMovies"></a>

### TheMovieDb.getNowPlayingMovies(options) ⇒ <code>Promise</code>
Get a list of movies in theatres. This is a release
type query that looks for all movies that have a
release type of 2 or 3 within the specified date range.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.region | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getPopularMovies"></a>

### TheMovieDb.getPopularMovies(options) ⇒ <code>Promise</code>
Get a list of the current popular movies on TMDb. This
list updates daily.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.region | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTopRatedMovies"></a>

### TheMovieDb.getTopRatedMovies(options) ⇒ <code>Promise</code>
Get the top rated movies on TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.region | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getUpcomingMovies"></a>

### TheMovieDb.getUpcomingMovies(options) ⇒ <code>Promise</code>
Get a list of upcoming movies in theatres. This is a
release type query that looks for all movies that have
a release type of 2 or 3 within the specified date
range.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.region | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getNetwork"></a>

### TheMovieDb.getNetwork(network_id, options) ⇒ <code>Promise</code>
Get the details of a network.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| network_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getNetworkAlternativeNames"></a>

### TheMovieDb.getNetworkAlternativeNames(network_id, options) ⇒ <code>Promise</code>
Get the alternative names of a network.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| network_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getNetworkImages"></a>

### TheMovieDb.getNetworkImages(network_id, options) ⇒ <code>Promise</code>
Get the TV network logos by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| network_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getPerson"></a>

### TheMovieDb.getPerson(person_id, options) ⇒ <code>Promise</code>
Get the primary person details by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.append_to_response | <code>string</code> | Example: 'changes,movie_credits,tv_credits,combined_credits,external_ids,images,tagged_images,translations' |

<a name="TheMovieDb.getPersonChanges"></a>

### TheMovieDb.getPersonChanges(person_id, options) ⇒ <code>Promise</code>
Get the changes for a person. By default only the last
24 hours are returned.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getPersonMovieCredits"></a>

### TheMovieDb.getPersonMovieCredits(person_id, options) ⇒ <code>Promise</code>
Get the movie credits for a person.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getPersonTvCredits"></a>

### TheMovieDb.getPersonTvCredits(person_id, options) ⇒ <code>Promise</code>
Get the TV show credits for a person.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getPersonCombinedCredits"></a>

### TheMovieDb.getPersonCombinedCredits(person_id, options) ⇒ <code>Promise</code>
Get the movie and TV credits together in a single
response.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getPersonExternalIds"></a>

### TheMovieDb.getPersonExternalIds(person_id, options) ⇒ <code>Promise</code>
Get the external ids for a person. We currently support
the following external sources.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getPersonImages"></a>

### TheMovieDb.getPersonImages(person_id, options) ⇒ <code>Promise</code>
Get the images for a person.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getPersonTaggedImages"></a>

### TheMovieDb.getPersonTaggedImages(person_id, options) ⇒ <code>Promise</code>
Get the images that this person has been tagged in.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getPersonTranslations"></a>

### TheMovieDb.getPersonTranslations(person_id, options) ⇒ <code>Promise</code>
Get a list of translations that have been created for
a person.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| person_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getLatestPerson"></a>

### TheMovieDb.getLatestPerson(options)
Get the most newly created person. This is a live
response and will continuously change.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getPopularPersons"></a>

### TheMovieDb.getPopularPersons(options) ⇒ <code>Promise</code>
Get the list of popular people on TMDb. This list
updates daily.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getReview"></a>

### TheMovieDb.getReview(review_id, options) ⇒ <code>Promise</code>
Get Details

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| review_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.searchCompany"></a>

### TheMovieDb.searchCompany(options) ⇒ <code>Promise</code>
Search for companies.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.query | <code>number</code> | Required |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.searchCollection"></a>

### TheMovieDb.searchCollection(options) ⇒ <code>Promise</code>
Search for collections.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.query | <code>number</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.searchKeyword"></a>

### TheMovieDb.searchKeyword(options) ⇒ <code>Promise</code>
Search for keywords.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.query | <code>number</code> | Required |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.searchMovie"></a>

### TheMovieDb.searchMovie(options) ⇒ <code>Promise</code>
Search for movies.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.query | <code>number</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.include_adult | <code>boolean</code> |  |
| options.region | <code>string</code> |  |
| options.year | <code>number</code> |  |
| options.primary_release_year | <code>number</code> |  |

<a name="TheMovieDb.searchMulti"></a>

### TheMovieDb.searchMulti(options) ⇒ <code>Promise</code>
Search multiple models in a single request. Multi
search currently supports searching for movies, tv
shows and people in a single request.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.query | <code>number</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.include_adult | <code>boolean</code> |  |
| options.region | <code>string</code> |  |

<a name="TheMovieDb.searchPerson"></a>

### TheMovieDb.searchPerson(options) ⇒ <code>Promise</code>
Search for people.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.query | <code>number</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.include_adult | <code>boolean</code> |  |
| options.region | <code>string</code> |  |

<a name="TheMovieDb.searchTv"></a>

### TheMovieDb.searchTv(options) ⇒ <code>Promise</code>
Search for a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.query | <code>number</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |
| options.first_air_date_year | <code>number</code> |  |

<a name="TheMovieDb.getTrending"></a>

### TheMovieDb.getTrending(media_type, time_window, options) ⇒ <code>Promise</code>
Get the daily or weekly trending items. The daily
trending list tracks items over the period of a day
while items have a 24 hour half life. The weekly list
tracks items over a 7 day period, with a 7 day half
life.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| media_type | <code>&#x27;all&#x27;</code> \| <code>&#x27;movie&#x27;</code> \| <code>&#x27;tv&#x27;</code> \| <code>&#x27;person&#x27;</code> |  |
| time_window | <code>&#x27;day&#x27;</code> \| <code>&#x27;week&#x27;</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvEpisodeGroup"></a>

### TheMovieDb.getTvEpisodeGroup(id, options) ⇒ <code>Promise</code>
Get the details of a TV episode group. Groups support
7 different types which are enumerated as the following

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvEpisode"></a>

### TheMovieDb.getTvEpisode(tv_id, season_number, episode_number, options) ⇒ <code>Promise</code>
Get the TV episode details by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |
| options.append_to_response | <code>string</code> | Example: 'changes,account_states,credits,external_ids,images,videos' |

<a name="TheMovieDb.getTvEpisodeChanges"></a>

### TheMovieDb.getTvEpisodeChanges(episode_id, options) ⇒ <code>Promise</code>
Get the changes for a TV episode. By default only the
last 24 hours are returned.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| episode_id | <code>string</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTvEpisodeAccountStates"></a>

### TheMovieDb.getTvEpisodeAccountStates(tv_id, season_number, episode_number, options) ⇒ <code>Promise</code>
Get your rating for a episode.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| options.guest_session_id | <code>string</code> |  |

<a name="TheMovieDb.getTvEpisodeCredits"></a>

### TheMovieDb.getTvEpisodeCredits(tv_id, season_number, episode_number, options) ⇒ <code>Promise</code>
Get the credits (cast, crew and guest stars) for a TV
episode.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getTvEpisodeExternalIds"></a>

### TheMovieDb.getTvEpisodeExternalIds(tv_id, season_number, episode_number, options) ⇒ <code>Promise</code>
Get the external ids for a TV episode. We currently
support the following external sources.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getTvEpisodeImages"></a>

### TheMovieDb.getTvEpisodeImages(tv_id, season_number, episode_number, options) ⇒ <code>Promise</code>
Get the images that belong to a TV episode.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.include_image_language | <code>string</code> |  |

<a name="TheMovieDb.getTvEpisodeTranslations"></a>

### TheMovieDb.getTvEpisodeTranslations(tv_id, season_number, episode_number, options) ⇒ <code>Promise</code>
Get the translation data for an episode.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.rateTvEpisode"></a>

### TheMovieDb.rateTvEpisode(tv_id, season_number, episode_number, options, body) ⇒ <code>Promise</code>
Rate a TV episode.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| options.guest_session_id | <code>string</code> |  |
| body | <code>Object</code> |  |
| body.value | <code>number</code> | Required, min:0.5, max:10 |

<a name="TheMovieDb.deleteTvEpisodeRating"></a>

### TheMovieDb.deleteTvEpisodeRating(tv_id, season_number, episode_number, options) ⇒ <code>Promise</code>
Remove your rating for a TV episode.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="TheMovieDb.getTvEpisodeVideos"></a>

### TheMovieDb.getTvEpisodeVideos(tv_id, season_number, episode_number, options) ⇒ <code>Promise</code>
Get the videos that have been added to a TV episode.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| episode_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvSeason"></a>

### TheMovieDb.getTvSeason(tv_id, season_number, options) ⇒ <code>Promise</code>
Get the TV season details by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |
| options.append_to_response | <code>string</code> | Example: 'changes,account_states,credits,external_ids,images,videos' |

<a name="TheMovieDb.getTvSeasonChanges"></a>

### TheMovieDb.getTvSeasonChanges(season_id, options) ⇒ <code>Promise</code>
Get the changes for a TV season. By default only the
last 24 hours are returned.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| season_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTvSeasonAccountStates"></a>

### TheMovieDb.getTvSeasonAccountStates(tv_id, season_number, options) ⇒ <code>Promise</code>
Returns all of the user ratings for the season's
episodes.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> | Required |
| options.guest_session_id | <code>string</code> |  |

<a name="TheMovieDb.getTvSeasonCredits"></a>

### TheMovieDb.getTvSeasonCredits(tv_id, season_number, options) ⇒ <code>Promise</code>
Get the credits for TV season.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvSeasonExternalIds"></a>

### TheMovieDb.getTvSeasonExternalIds(tv_id, season_number, options) ⇒ <code>Promise</code>
Get the external ids for a TV season. We currently
support the following external sources.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvSeasonImages"></a>

### TheMovieDb.getTvSeasonImages(tv_id, season_number, options) ⇒ <code>Promise</code>
Get the images that belong to a TV season.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.include_image_language | <code>string</code> |  |

<a name="TheMovieDb.getTvSeasonVideos"></a>

### TheMovieDb.getTvSeasonVideos(tv_id, season_number, options) ⇒ <code>Promise</code>
Get the videos that have been added to a TV season.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| season_number | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvShow"></a>

### TheMovieDb.getTvShow(tv_id, options) ⇒ <code>Promise</code>
Get the primary TV show details by id.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |
| options.append_to_response | <code>string</code> | Example: 'account_states,alternative_titles,changes,content_ratings,credits,episode_groups,external_ids,images,keywords,recommendations,reviews,screened_theatrically,similar,translations,videos' |

<a name="TheMovieDb.getTvShowAccountStates"></a>

### TheMovieDb.getTvShowAccountStates(tv_id, options) ⇒ <code>Promise</code>
Grab the following account states for a session:

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="TheMovieDb.getTvShowAlternativeTitles"></a>

### TheMovieDb.getTvShowAlternativeTitles(tv_id, options) ⇒ <code>Promise</code>
Returns all of the alternative titles for a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvShowChanges"></a>

### TheMovieDb.getTvShowChanges(tv_id, options) ⇒ <code>Promise</code>
Get the changes for a TV show. By default only the last
24 hours are returned.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTvShowContentRatings"></a>

### TheMovieDb.getTvShowContentRatings(tv_id, options) ⇒ <code>Promise</code>
Get the list of content ratings (certifications) that
have been added to a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvShowCredits"></a>

### TheMovieDb.getTvShowCredits(tv_id, options) ⇒ <code>Promise</code>
Get the credits (cast and crew) that have been added
to a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvShowEpisodeGroups"></a>

### TheMovieDb.getTvShowEpisodeGroups(tv_id, options) ⇒ <code>Promise</code>
Get all of the episode groups that have been created
for a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvShowExternalIds"></a>

### TheMovieDb.getTvShowExternalIds(tv_id, options) ⇒ <code>Promise</code>
Get the external ids for a TV show. We currently
support the following external sources.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getTvShowImages"></a>

### TheMovieDb.getTvShowImages(tv_id, options) ⇒ <code>Promise</code>
Get the images that belong to a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.include_image_language | <code>string</code> |  |

<a name="TheMovieDb.getTvShowKeywords"></a>

### TheMovieDb.getTvShowKeywords(tv_id, options) ⇒ <code>Promise</code>
Get the keywords that have been added to a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getTvShowRecommendations"></a>

### TheMovieDb.getTvShowRecommendations(tv_id, options) ⇒ <code>Promise</code>
Get the list of TV show recommendations for this item.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTvShowReviews"></a>

### TheMovieDb.getTvShowReviews(tv_id, options) ⇒ <code>Promise</code>
Get the reviews for a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTvShowScreenedTheatrically"></a>

### TheMovieDb.getTvShowScreenedTheatrically(tv_id, options) ⇒ <code>Promise</code>
Get a list of seasons or episodes that have been
screened in a film festival or theatre.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getTvShowSimilar"></a>

### TheMovieDb.getTvShowSimilar(tv_id, options) ⇒ <code>Promise</code>
Get a list of similar TV shows. These items are
assembled by looking at keywords and genres.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTvShowTranslations"></a>

### TheMovieDb.getTvShowTranslations(tv_id, options) ⇒ <code>Promise</code>
Get a list of the translations that exist for a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |

<a name="TheMovieDb.getTvShowVideos"></a>

### TheMovieDb.getTvShowVideos(tv_id, options) ⇒ <code>Promise</code>
Get the videos that have been added to a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.rateTvShow"></a>

### TheMovieDb.rateTvShow(tv_id, options, body) ⇒ <code>Promise</code>
Rate a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |
| body | <code>Object</code> |  |
| body.value | <code>number</code> | Required, min:0.5, max:10 |

<a name="TheMovieDb.deleteTvShowRating"></a>

### TheMovieDb.deleteTvShowRating(tv_id, options) ⇒ <code>Promise</code>
Remove your rating for a TV show.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| tv_id | <code>number</code> |  |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.session_id | <code>string</code> |  |
| options.guest_session_id | <code>string</code> |  |

<a name="TheMovieDb.getLatestTvShow"></a>

### TheMovieDb.getLatestTvShow(options) ⇒ <code>Promise</code>
Get the most newly created TV show. This is a live
response and will continuously change.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |

<a name="TheMovieDb.getAiringTodayTvShows"></a>

### TheMovieDb.getAiringTodayTvShows(options) ⇒ <code>Promise</code>
Get a list of TV shows that are airing today. This
query is purely day based as we do not currently
support airing times.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getOnTheAirTvShows"></a>

### TheMovieDb.getOnTheAirTvShows(options) ⇒ <code>Promise</code>
Get a list of shows that are currently on the air.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getPopularTvShows"></a>

### TheMovieDb.getPopularTvShows(options) ⇒ <code>Promise</code>
Get a list of the current popular TV shows on TMDb.
This list updates daily.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="TheMovieDb.getTopRatedTvShows"></a>

### TheMovieDb.getTopRatedTvShows(options) ⇒ <code>Promise</code>
Get a list of the top rated TV shows on TMDb.

**Kind**: static method of [<code>TheMovieDb</code>](#TheMovieDb)  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> |  |
| options.api_key | <code>string</code> | Required |
| options.language | <code>string</code> |  |
| options.page | <code>number</code> |  |

<a name="assign"></a>

## assign ⇒ <code>Object</code>
Extend the given object.

**Kind**: global constant  
**Returns**: <code>Object</code> - The extended object.  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The object to be extended. |
| args | <code>\*</code> | The rest objects which will be merged to the first object. |

<a name="createOauthWindow"></a>

## createOauthWindow ⇒ <code>Window</code>
Create oAuth modal window

**Kind**: global constant  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>string</code> |  | Required |
| [name] | <code>string</code> | <code>&quot;\&quot;Authorization\&quot;&quot;</code> |  |
| [width] | <code>number</code> | <code>500</code> |  |
| [height] | <code>number</code> | <code>600</code> |  |
| [left] | <code>number</code> | <code>0</code> |  |
| [top] | <code>number</code> | <code>0</code> |  |

<a name="isObject"></a>

## isObject(value) ⇒ <code>boolean</code>
Check if the given value is an object.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if the given value is an object, else `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to check. |

