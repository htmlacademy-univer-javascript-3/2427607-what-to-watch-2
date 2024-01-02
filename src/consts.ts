export enum APIRoute {
  Films = '/films',
  Film = '/films/{filmId}',
  SimilarFilms = '/films/{filmId}/similar',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
