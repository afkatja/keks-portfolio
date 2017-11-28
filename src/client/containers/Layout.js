import React from 'react';
import classNames from 'classnames';

import store from '../store/store';

import ErrorBoundary from '../components/ErrorBoundary';
import MainNav from '../components/molecules/MainNav/MainNav';
import LanguageSwitch from '../components/molecules/LanguageSwitch/LanguageSwitch';
import Footer from '../components/molecules/Footer/Footer';

export default function Layout(props) {
  const { theme, language, links, children } = props;
  return (
    <ErrorBoundary>
      <div className={classNames('site-container', theme)}>
        <MainNav links={links}>
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

export const withLayout = Component => links => props => <Layout links={links}><Component {...props} /></Layout>;
