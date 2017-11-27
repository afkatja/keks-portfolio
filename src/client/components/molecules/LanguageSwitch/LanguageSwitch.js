import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { languageSwitchClick } from '../../../actions';

const mapStateToProps = state => ({
  language: state.language,
});
const mapDispatchToProps = dispatch => bindActionCreators({
  languageChangeClick: data => console.log('languageChangeClick', data) || languageSwitchClick({
    language: data,
  }),
}, dispatch);
const withState = connect(mapStateToProps, mapDispatchToProps);

function LanguageSwitch(props) {
  const { language } = props;
  const handleLanguageChange = ({ target: { value } }) => {
    props.languageChangeClick(value);
  };
  return (
    <select
      value={language}
      onChange={handleLanguageChange}
    >
      <option value="ru">Русский</option>
      <option value="en">English</option>
      <option value="nl">Nederlands</option>
    </select>
  );
}

export default withState(LanguageSwitch);
