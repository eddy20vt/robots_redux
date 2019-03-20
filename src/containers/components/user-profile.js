import { connect } from 'react-redux'
import UserProfile from 'components/user-profile'

const mapStateToProps = ({ users, userId, locales, language }) => {
    return {
        locale: locales[language].user,
        selectedUser: users.find(user => user.id === userId)
    }
}

export default connect(mapStateToProps, {})(UserProfile)
