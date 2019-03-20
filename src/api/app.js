import axios from 'axios'

const endpoints = {
    data: 'public/data.json',
    locale: 'public/locale.json'
}

export const getUsersDataPromise = () => axios({
    method: 'get',
    url: endpoints.data,
})

export const getLocalesPromise = () => axios.get(endpoints.locale)
