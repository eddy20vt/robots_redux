import { call, put, takeLatest } from 'redux-saga/effects'

import { getLocalesPromise } from 'api/app'
import { FETCH_LOCALES_STARTED, setLocales, fetchLocalesEnd } from 'modules/locales'

export function * getLocales (action) {
    try {
        const promise = yield call(getLocalesPromise)
        const { data } = promise
        yield put(setLocales(data))
        yield put(fetchLocalesEnd())
    } catch (error) {
        console.log(error)
    }
}

export default function * watchGetLocales () {
    yield takeLatest(FETCH_LOCALES_STARTED, getLocales)
}
