import { connect } from 'react-redux'
import FavoritesFrame from 'components/favorites'
import { addFavorite } from 'modules/favorites'

const mapStateToProps = ({ users, userId, locales, language, favorites }) => {
    const sortedFavorites = favorites.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })

    return {
        locale: locales[language].app,
        selectedUser: users.find(user => user.id === userId),
        favorites: sortedFavorites
    }
}

const mapDispatchToProps = {
    addFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesFrame)
