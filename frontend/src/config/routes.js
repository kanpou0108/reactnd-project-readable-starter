import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import T from 'prop-types';
import PostsListContainer from '../components/PostsListContainer';
import CategoriesListContainer from '../components/CategoriesListContainer';
import PostFormModal from '../components/PostFormModal';
import PostDetailModal from '../components/PostDetailModal';
import { Header, Footer, Sidebar } from '../components/Layouts';

import styles from './styles.css';

const DefaultLayout = ({ component: Component, showSidebar = 'false', isModal = 'false', ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => {
      const prevLocationState = matchProps.location.state;
      const prevMatchProps = prevLocationState ? {
        location: prevLocationState.prevPath,
        match: prevLocationState.prevMatch,
      } : matchProps;
      return (
        <div className={styles.app}>
          <Header />
          <div className={styles.appContainer}>
            {showSidebar === 'true' &&
            (<Sidebar>
              <CategoriesListContainer {...matchProps} />
            </Sidebar>)}
            <div className={styles.innerContainer}>
              {isModal === 'true' ?
                (
                  <div>
                    <PostsListContainer {...prevMatchProps} />
                    <Component {...matchProps} />
                  </div>
                )
                : <Component {...matchProps} />
              }

            </div>
          </div>
          <Footer />
        </div>
      );
    }}
  />
);

DefaultLayout.propTypes = {
  component: T.func.isRequired,
  showSidebar: T.string,
  isModal: T.string,
};

const routes = (
  <BrowserRouter>
    <Switch>
      <DefaultLayout
        exact
        path="/posts/new"
        showSidebar="true"
        isModal="true"
        component={PostFormModal}
      />
      <DefaultLayout
        exact
        path="/posts/:id/edit"
        showSidebar="true"
        isModal="true"
        component={PostFormModal}
      />
      <DefaultLayout
        exact
        path="/"
        showSidebar="true"
        component={PostsListContainer}
      />
      <DefaultLayout
        exact
        path="/:category"
        showSidebar="true"
        component={PostsListContainer}
      />
      <DefaultLayout
        exact
        path="/:category/:id"
        showSidebar="true"
        isModal="true"
        component={PostDetailModal}
      />
      <Route><div>Error</div></Route>
    </Switch>
  </BrowserRouter>
);

export default routes;
