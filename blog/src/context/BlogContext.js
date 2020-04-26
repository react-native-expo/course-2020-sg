import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {

    const { type, payload } = action;

    switch (type) {
        case 'get_blogpost':
            return payload;
        case 'add_blogpost':
            return [
                ...state, 
                {
                    id: Math.floor(Math.random() * 99999),
                    title: payload.title,
                    content: payload.content
                }
            ];
        case 'delete_blogpost':
            return state.filter(blogPost => blogPost.id !== payload);
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === payload.id ? payload : blogPost;
            });
        default:
            return state;
    }
};

const getBlogPost = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        console.log('res', response.data.length);
        dispatch({ type: 'get_blogpost', payload: response.data });
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await  jsonServer.post('/blogposts', { title, content });
        // dispatch({ type: 'add_blogpost', payload: { title, content} });
        if (callback) {
            console.log('callback');
            callback();
        }
        
    }
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id });
    }
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: 'edit_blogpost', payload: { id, title, content} });

        if (callback) {
            callback();
        }
        
    }
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPost },
    []  
);