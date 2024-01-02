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

export enum AppRoute {
  Login = '/login',
  Film = 'films/:id',
  Review = 'review',
  Player = 'player/:id',
  MyList = 'mylist',
  Main = '/',
  Other = '*'
}
