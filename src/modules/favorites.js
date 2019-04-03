export const GET_FAVORITES = 'GET_FAVORITES'

const initialState = []

export function favorites (state = initialState, { type, payload }) {
    if (type === GET_FAVORITES) {
        if (state.indexOf(payload) !== -1) {
            return state
        }
        return [ ...state, payload ]
    }

    return state
}

export const addFavorite = user => ({ type: GET_FAVORITES, payload: user })
