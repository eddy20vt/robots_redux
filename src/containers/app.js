import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import App from 'components/app'

import { fetchUsers } from 'modules/users'
import { fetchLocales } from 'modules/locales'

class AppContainer extends React.Component {
    constructor (props) {
        super(props)
        props.fetchLocales()
        props.fetchUsers()
    }

    render () {
        const {
            isMinimumDataAvailable,
            selectedUser,
            locale
        } = this.props

        if (isMinimumDataAvailable) {
            return <App selectedUser={selectedUser} locale={locale} />
        }

        return null
    }
}

AppContainer.propTypes = {
    isMinimumDataAvailable: PropTypes.bool,
    selectedUser: PropTypes.object,
    locale: PropTypes.object,
    users: PropTypes.array,
    fetchLocales: PropTypes.func,
    fetchUsers: PropTypes.func,
}

const mapStateToProps = ({ users, userId, language, locales }) => {
    const isMinimumDataAvailable = Object.entries(locales).length > 0 && Object.entries(users).length > 0

    if (isMinimumDataAvailable) {
        return {
            isMinimumDataAvailable,
            locale: locales[language].app,
            selectedUser: users.find(user => user.id === userId)
        }
    }

    return {
        isMinimumDataAvailable
    }
}

const mapDispatchToProps = {
    fetchLocales,
    fetchUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
