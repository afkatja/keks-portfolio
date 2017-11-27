import React from 'react';
import classNames from 'classnames';

import store from '../store/store';

import ErrorBoundary from '../components/ErrorBoundary';
import MainNav from '../components/molecules/MainNav/MainNav';
import LanguageSwitch from '../components/molecules/LanguageSwitch/LanguageSwitch';
import Footer from '../components/molecules/Footer/Footer';

export default function Layout(props) {
  const { theme, language, children } = props;
  const lang = store.getState();
  console.log(lang);
  return (
    <ErrorBoundary>
      <div className={classNames('site-container', theme)}>
        <MainNav links={[
          { id: 'home', url: '/', text: 'Home'},
          { id: 'about', url: '/about', text: 'About'}
        ]}>
          <LanguageSwitch language={language} />
        </MainNav>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export const withLayout = Component => props => <Layout><Component {...props} /></Layout>;
