import { combineReducers, createStore ,applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import { coursesReducer } from './courses/reducers/coursesReducer';
import { lessonsReducer } from './lessons/reducers/lessonsReduser';




const rootReducer = combineReducers({
    courses: coursesReducer,
    lessons: lessonsReducer
})

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);