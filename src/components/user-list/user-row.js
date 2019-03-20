import React from 'react'
import PropTypes from 'prop-types'

import { ListGroup } from 'react-bootstrap'

const UserRow = ({
    id,
    name,
    surname,
    onClick,
    isSelected,
}) => {
    return (
        <ListGroup.Item
            onClick={() => onClick(id)}
            active={isSelected}
        >
            { name } { surname}
        </ListGroup.Item>
    )
}

UserRow.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
    onClick: PropTypes.func,
    isSelected: PropTypes.bool,
}

export default UserRow
