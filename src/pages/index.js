import * as React from 'react';

const IndexPage = () => {
  console.log('Re-rendering');
  return <button onClick={() => {
    window.history.pushState({state: "newBrowserHistoryState"}, '', '');
    // it also happens with this:
    // const popStateEvent = new PopStateEvent('popstate',
    //     {state: "newBrowserHistoryState"});
    // dispatchEvent(popStateEvent);
  }}>
    Button
  </button>;
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
