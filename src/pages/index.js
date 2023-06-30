import * as React from 'react';
import {navigate} from 'gatsby';
import {Router} from '@reach/router';

const IndexPage = () => {
  console.log('Re-rendering');

  return <Router>
    <Button path="/"/>
  </Router>;
};

const Button = () => {
  console.log('Re-rendering button');
  return <button
      onClick={() => {
        navigate('/',
            {
              state: 'newBrowserHistoryState',
              replace: true,
            },
        );
      }}>
    <Child/>
    Button
  </button>;
};
const Child = () => {
  console.log('Re-rendering child');
  return <div>Child</div>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
