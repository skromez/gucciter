import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../Header';
import Error from '../../pages/Error';
import SearchPage from '../../pages/SearchPage';
import UserPage from '../../pages/UserPage';
import IndexPage from '../../pages/IndexPage';


const Layout = ({ isLoggedIn, login }) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/user/">
          <Redirect to="/user/skromez" />
        </Route>
        <Route path="/user/:id" render={({ match }) => <UserPage match={match} />} />
        <Route path="/search" render={(url) => <SearchPage url={url} />} />
        <Route exact path="/">
          {isLoggedIn ? (
            <Redirect to={`/user/${login}`}>
              <UserPage />
            </Redirect>
          ) : <IndexPage />}
        </Route>
        <Route path={'/*/*' && '/*/'} component={Error} />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ user: { info } }) => ({
  isLoggedIn: Boolean(info.id),
  login: info.login,
});
export default connect(mapStateToProps)(Layout);
