import React from 'react'
import PropTypes from 'prop-types'

import { ButtonGroup, Button } from 'react-bootstrap'

const LangSelector = ({
    languages,
    selectedLanguage,
    setLanguage,
}) => {
    return (
        <div className="LanguageSelector">
            <ButtonGroup size="lg">
                {
                    languages.map(language => {
                        const variant = language === selectedLanguage ? 'primary' : 'secondary'

                        return (
                            <Button variant={variant}
                                key={`lang${language}`}
                                onClick={() => setLanguage(language)}
                            >
                                { language }
                            </Button>
                        )
                    })
                }
            </ButtonGroup>
        </div>
    )
}

LangSelector.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string),
    selectedLanguage: PropTypes.string,
    setLanguage: PropTypes.func,
}

export default LangSelector
