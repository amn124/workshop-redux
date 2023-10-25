import { type } from '@testing-library/user-event/dist/type';
import{ADD_MOVIE,EDIT_MOVIE} from '../constants/actions-types';

export const addMovie =(payload)=>({
type:ADD_MOVIE,
payload,
}
);


export const editMovie =(payload)=>({
    type:EDIT_MOVIE,
    payload,
    }
    );
    