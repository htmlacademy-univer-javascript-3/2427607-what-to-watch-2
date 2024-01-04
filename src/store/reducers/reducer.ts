// import {createReducer} from '@reduxjs/toolkit';
// import {playerData} from '../../mocks/player';
// import {AuthorizationStatus} from '../../consts';
// import {Film, FilmCards, Comment} from '../../types/film';
// import {PlayerProps} from '../../types/player';
//
// type State = {
//   activeGenre: string;
//   films: FilmCards[];
//   similarFilms: {[key: string]: FilmCards[]};
//   fullFilms: {[key: string]: Film};
//   commentsMap: {[key: string]: Comment[]};
//   isLoading: boolean;
//   playerData: PlayerProps;
//   authorizationStatus: AuthorizationStatus;
// };
//
// const initialState: State = {
//   activeGenre: '',
//   films: [],
//   similarFilms: {},
//   fullFilms: {},
//   commentsMap: {},
//   isLoading: false,
//   playerData: playerData,
//   authorizationStatus: AuthorizationStatus.Unknown,
// };
// // export const getFilmsByGenre = createReducer(initialState, (builder) => {
// //   builder.addCase(setGenre, (state, action) => {
// //     state.activeGenre = action.payload;
// //   })
// //     .addCase(loadFilms, (state, action) => {
// //       state.films = action.payload;
// //     })
// //     .addCase(requireAuth, (state, action) => {
// //       state.authorizationStatus = action.payload;
// //     })
// //     .addCase(setLoadingStatus, (state, action) => {
// //       state.isLoading = action.payload;
// //     })
// //     .addCase(loadFilmById, (state, action) => {
// //       state.fullFilms[action.payload.id] = action.payload;
// //     })
// //     .addCase(loadCommentsById, (state, action) => {
// //       state.commentsMap[action.payload.id] = action.payload.comments;
// //     })
// //     .addCase(addCommentById, (state, action) => {
// //       if (!state.commentsMap[action.payload.id]) {
// //         state.commentsMap[action.payload.id] = [action.payload.comment];
// //       } else {
// //         state.commentsMap[action.payload.id].push(action.payload.comment);
// //       }
// //     })
// //     .addCase(loadSimilarFilms, (state, action) => {
// //       state.similarFilms[action.payload.id] = action.payload.films;
// //     });
// // });
