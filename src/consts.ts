export enum APIRoute {
  Films = '/films',
  SimilarFilms = '/similar',
  Comments = '/comments',
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
  Other = '/*'
}
