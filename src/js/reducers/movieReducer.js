import React from 'react'
import movies from '../../App'
import { ADD_MOVIE } from '../constants/actions-types';



    const initialState = {
        movieList: movies,
        searchWord: '',
        ratingSearch: 0,
      };
      const movieReducer = (state = initialState, { type, payload }) => {
        switch (type) {
          case ADD_MOVIE:
            return {
              movieList: [...state.movieList, payload],
            };
            default:
                return state
        }
    }
export default movieReducer;
