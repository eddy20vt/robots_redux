import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col, Card, Figure } from 'react-bootstrap'

const UserProfile = ({
    user,
    locale,
}) => (
    <div className="UserProfile">
        <Card>
            <Card.Body>
                <div className="UserProfile__id">
                    <span>{user.id}</span>
                </div>
                <Row>
                    <Col md="auto">
                        <Figure>
                            <Figure.Image
                                width={150}
                                height={150}
                                alt="171x180"
                                src={user.avatar}
                            />
                        </Figure>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <div className="UserProfile__property">{locale.full_name}</div>
                                <div className="UserProfile__value">{`${user.name} ${user.surname}`}</div>
                            </Col>
                            <Col>
                                <div className="UserProfile__property">{locale.age}</div>
                                <div className="UserProfile__value">{user.age}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="UserProfile__property">{locale.email}</div>
                                <div className="UserProfile__value">{user.email}</div>
                            </Col>
                            <Col>
                                <div className="UserProfile__property">{locale.ip_address}</div>
                                <div className="UserProfile__value">{user.ip_address}</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="UserProfile__property">{locale.phone}</div>
                                <div className="UserProfile__value">{user.phone}</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="UserProfile__property">{locale.countries}</div>
                        <div className="UserProfile__value">
                            {
                                user.countries.map(country => <span key={user.id + country.code} className="UserProfile__value--item">{country.name}</span>)
                            }
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="UserProfile__property">{locale.skills}</div>
                        <div className="UserProfile__value">
                            {
                                user.skills.map(skill => <span key={user.id + skill.name} className="UserProfile__value--item">{skill.name}</span>)
                            }
                        </div>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    </div>
)

UserProfile.propTypes = {
    user: PropTypes.object,
    locale: PropTypes.object,
}

export default UserProfile
