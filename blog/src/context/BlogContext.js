import React, { useReducer } from 'react';
import createDataContext from './createDataContext';

const  BlogContext = React.createContext();

const blogReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case 'add_blogpost':
            return [
                ...state, 
                {
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog Post #${state.length + 1}`
                }
            ];
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({ type: 'add_blogpost' });
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id });
    }
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []  
);