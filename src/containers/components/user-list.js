import { connect } from 'react-redux'
import UserList from 'components/user-list'
import { setUserId } from 'modules/users'

const mapStateToProps = ({ users, userId }) => {
    const sortedUsers = users.sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })

    return {
        users: sortedUsers,
        selectedUser: users.find(user => user.id === userId)
    }
}

const mapDispatchToProps = {
    setUserId
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
