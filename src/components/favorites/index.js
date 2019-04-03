import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'
import FavoriteRow from './favorite-row'

class FavoritesFrame extends React.Component {
    render () {
        const {
            addFavorite,
            favorites,
            locale,
            selectedUser,
        } = this.props

        return (
            <div className="UserProfile">
                <Card>
                    <Card.Body>
                        <Button variant="primary" size="lg" onClick={ () => addFavorite(selectedUser) } >{locale.add_button_text}</Button>
                        <h1>{ locale.favorites_tittle}</h1>
                        {
                            favorites.map((user, index) => (
                                <FavoriteRow key={ index } user={ user }/>
                            ))
                        }
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

FavoritesFrame.propTypes = {
    user: PropTypes.object,
    locale: PropTypes.object,
    addFavorite: PropTypes.func,
    favorites: PropTypes.array,
    selectedUser: PropTypes.object,
}

export default FavoritesFrame
