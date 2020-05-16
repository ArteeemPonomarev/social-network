const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialSate = {
    users: [
        {id: 1, photoUrl: 'https://img.icons8.com/bubbles/2x/user.png', followed: false, fullName: 'Artem', status: 'I am a boss', location: { city: 'Saint-Petersburg', country: 'Russia'}},
        {id: 2, photoUrl: 'https://img.icons8.com/bubbles/2x/user.png', followed: false, fullName: 'Dima', status: 'I am a programmer', location: { city: 'Kiev', country: 'Ukraine'}},
        {id: 3, photoUrl: 'https://img.icons8.com/bubbles/2x/user.png', followed: true, fullName: 'Sasha', status: 'I am a student', location: { city: 'Moscow', country: 'Russia'}},
        {id: 4, photoUrl: 'https://img.icons8.com/bubbles/2x/user.png', followed: true, fullName: 'Ivan', status: 'I am a boss too', location: { city: 'Minsk', country: 'Belarus'}},
    ]
};

const usersReducer = (state = initialSate, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: true
                        }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: false
                        }
                    }
                    return u
                })
            }

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;
//pure function