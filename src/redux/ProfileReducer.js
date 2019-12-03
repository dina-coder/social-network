import { MainApi } from '../api/api'
let initialState = {
    AllPosts: [
        { message: "11111", likes: '2', ava: 'https://wallbox.ru/wallpapers/main/201135/sneg-irbis-snezhnyy-bars-b4de837.jpg' },
        { message: "22222", likes: '1', ava: 'https://pbs.twimg.com/media/DfcRcaNXUAAfkJa.jpg:large' },
        { message: "44444", likes: '8', ava: 'https://pbs.twimg.com/media/DfcRcaNXUAAfkJa.jpg:large' },
        { message: "33333", likes: '4', ava: 'https://i.pinimg.com/736x/1d/f9/6d/1df96d950e53a34a1cb42fa5c325535f--funny-animal-gifs.jpg' }
    ],
    profile: null,
    status: ''
}
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                AllPosts: [...state.AllPosts, {
                    message: action.NewPostText,
                    likes: '0',
                    ava: 'https://i.pinimg.com/736x/1d/f9/6d/1df96d950e53a34a1cb42fa5c325535f--funny-animal-gifs.jpg'
                }]
            }

        }
        case 'SET_PROFILE': {
            return { ...state, profile: action.profile }
        }
      
        default:
            return state;
    }
}
export default ProfileReducer

export const setUserProfile = (profile) => {
    return ({ type: 'SET_PROFILE', profile })
}

export const ADDPOST_CREATEACTION = (NewPostText) => {
    return ({ type: 'ADD-POST', NewPostText })
}

export const ShowUsers = (idUser) => {
    return (dispatch) => {
        MainApi.showUsers(idUser).then(response => {
            dispatch(setUserProfile(response.data))
        });
    }
}

