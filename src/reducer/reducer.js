/**
 * Using the useReducer hook to create a reducer.  As of now this reducer just adds a post
 */
export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: [ ...state.posts, action.payload ]
      }
    default:
      return state
  }
}
