import { all } from 'redux-saga/effects'

import watchGetUsersData from './getUsersData'
import watchGetLocale from './getLocale'

export default function * rootSagas () {
    yield all([
        watchGetUsersData(),
        watchGetLocale()
    ])
}
