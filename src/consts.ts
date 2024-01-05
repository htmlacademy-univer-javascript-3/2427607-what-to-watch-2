export enum APIRoute {
  Films = '/films',
  Promo = 'Promo',
  SimilarFilms = '/similar',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorite = '/favorite'
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

export enum NameSpace {
  Film = 'FILM',
  Films = 'FILMS',
  User = 'USER',
}
