import React from 'react'
import PropTypes from 'prop-types'

import LanguageSelector from 'containers/components/language-selector'
import UserList from 'containers/components/user-list'
import UserProfile from 'containers/components/user-profile'
import FavoritesFrame from 'containers/components/favorites'

import { Container, Col, Row } from 'react-bootstrap'

const App = ({
    selectedUser,
    locale,
}) => {
    return (
        <div className='App'>
            <LanguageSelector />
            <Container fluid>
                <Row>
                    <Col xs={12} md={3}>
                        <div className="UserSelector">
                            <h1>{ locale.user_selector }</h1>
                            <UserList />
                        </div>
                    </Col>
                    <Col>
                        <h1>{ locale.selected_user }</h1>
                        <UserProfile user={selectedUser} />
                        <FavoritesFrame/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

App.propTypes = {
    locale: PropTypes.object,
    selectedUser: PropTypes.object
}
export default App
