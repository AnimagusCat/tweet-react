import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from './tweets';
import User from './User';

class App extends React.Component {
  render() {
    let allTweets = Tweets.map (eachTweet => {
       return <User identity={eachTweet.user}/>
    })
    return (
      <div>
        {allTweets}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));