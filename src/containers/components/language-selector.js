import { connect } from 'react-redux'

import { setLanguage } from 'modules/locales'

import LanguageSelector from 'components/language-selector'

const mapStateToProps = ({ locales, language }) => {
    return {
        languages: Object.keys(locales),
        selectedLanguage: language
    }
}

const mapDispatchToProps = {
    setLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelector)
