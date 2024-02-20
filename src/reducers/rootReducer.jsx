import { combineReducers } from "redux";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import createPostReducer from "./createPostReducer";



const rootReducer = combineReducers({
    user: userReducer,
    posts: postReducer,
    post: createPostReducer
})

export default rootReducer;