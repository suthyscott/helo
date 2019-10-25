
const initialState = {
    username: '',
    id: 0,
    profilePic: ''
}

const UPDATE_REDUX_STATE = 'UPDATE_REDUX_STATE'

export function updateReduxState(userId, username, profilePic){
    console.log('hit updateReduxState', initialState)
    console.log('updateReduxState params', userId, username, profilePic)
    return{
        type: UPDATE_REDUX_STATE,
        payload: {
            userId,
            username,
            profilePic
        }
    }
}

function reducer(state = initialState, action){
    // console.log(action)
    const {type, payload} = action
    switch(type){

        case UPDATE_REDUX_STATE:
                console.log(payload)
            return{...state,
                username: payload.username,
                id: payload.userId,
                profilePic: payload.profilePic
            }
        default:
            return state
    }
}

export default reducer