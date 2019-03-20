import React from 'react'
import PropTypes from 'prop-types'

import UserRow from './user-row'

import { ListGroup } from 'react-bootstrap'

const UserList = ({
    users,
    selectedUser,
    setUserId
}) => {
    const selectUser = id => setUserId(id)

    return (
        <div className="UserList">
            <ListGroup>
                {
                    users.map((user, index) => (
                        <UserRow
                            key={index}
                            name={user.name}
                            surname={user.surname}
                            id={user.id}
                            onClick={selectUser}
                            isSelected={user.id === selectedUser.id}
                        />
                    ))
                }
            </ListGroup>
        </div>
    )
}

UserList.propTypes = {
    users: PropTypes.array,
    setUserId: PropTypes.func,
    selectedUser: PropTypes.object,
}

export default UserList
