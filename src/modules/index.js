import { combineReducers } from 'redux'

import { favorites } from './favorites'
import { users, userId } from './users'
import { locales, language } from './locales'

export default combineReducers({
    favorites,
    users,
    userId,
    locales,
    language
})
