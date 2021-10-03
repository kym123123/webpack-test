import { Suspense, lazy } from 'react';
import { Provider } from 'react-redux';
import { store } from '@modules/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from '@/Profile';
import DelayedToggle from './components/DelayedToggle';
// import UserProfile from './components/UserProfile';
// import Counter from '@components/Counter';
// import NotFound from '@components/NotFound';

const Counter = lazy(() => import('@components/Counter'));
const NotFound = lazy(() => import('@components/NotFound'));

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>...Loading</div>}>
        <Router>
          <Switch>
            {/* <Route path="/" render={() => <UserProfile id={1} />} /> */}
            <Route path="/" exact component={Counter} />
            <Route path="/delayedtoggle" component={DelayedToggle} />
            <Route
              path="/profile"
              render={() => <Profile name="min" username="liam" />}
            />
            <Route path="/notFound" component={NotFound} />
          </Switch>
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
