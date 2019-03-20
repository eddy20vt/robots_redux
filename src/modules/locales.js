export const SET_LOCALES = 'SET_LOCALE'
export const FETCH_LOCALES_STARTED = 'FETCH_LOCALES_STARTED'
export const FETCH_LOCALES_ENDED = 'FETCH_LOCALES_ENDED'

export const SET_LANGUAGE = 'SET_LANGUAGE'

export function locales (state = {}, { type, payload }) {
    if (type === SET_LOCALES) {
        return payload
    }
    return state
}

export function language (state = 'en', { type, payload }) {
    if (type === SET_LANGUAGE) return payload

    return state
}

export const setLocales = data => ({ type: SET_LOCALES, payload: data })
export const fetchLocales = () => ({ type: FETCH_LOCALES_STARTED })
export const fetchLocalesEnd = () => ({ type: FETCH_LOCALES_ENDED })

export const setLanguage = lang => ({ type: SET_LANGUAGE, payload: lang })
