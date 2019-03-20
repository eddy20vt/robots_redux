import { combineReducers } from 'redux'

import { users, userId } from './users'
import { locales, language } from './locales'

export default combineReducers({
    users,
    userId,
    locales,
    language
})
