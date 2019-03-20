export const SET_USERS = 'SET_USERS'
export const FETCH_USERS_STARTED = 'FETCH_USERS_STARTED'
export const FETCH_USERS_ENDED = 'FETCH_USERS_ENDED'
export const SET_USER_ID = 'SET_USER_ID'

export function users (state = [], { type, payload }) {
    if (type === SET_USERS) {
        return payload
    }
    return state
}

export function userId (state = 1, { type, payload }) {
    if (type === SET_USER_ID) return payload

    return state
}

export const setUsers = data => ({ type: SET_USERS, payload: data })
export const fetchUsers = () => ({ type: FETCH_USERS_STARTED })
export const fetchUsersEnd = () => ({ type: FETCH_USERS_ENDED })

export const setUserId = userId => ({ type: SET_USER_ID, payload: userId })
