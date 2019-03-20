import { call, put, takeLatest } from 'redux-saga/effects'

import { getUsersDataPromise } from 'api/app'
import { FETCH_USERS_STARTED, setUsers, fetchUsersEnd } from 'modules/users'

export function * getUsersData (action) {
    try {
        const promise = yield call(getUsersDataPromise)
        const { data } = promise
        yield put(setUsers(data))
        yield put(fetchUsersEnd())
    } catch (error) {
        console.log(error)
    }
}

export default function * watchGetUsersData () {
    yield takeLatest(FETCH_USERS_STARTED, getUsersData)
}
