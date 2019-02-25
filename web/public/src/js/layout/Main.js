import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../../../site-routes';
import NoMatch from '../pages/NoMatch';


export default class Main extends React.Component{
  render(){
    return (
      <main>
        <Switch>
          {routes.map(({ path, exact, component: Component, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <Component {...props} {...rest} />
              )}
            />
          ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </main>
    )
  }
}

