import React from 'react';
import ReactDOM from 'react-dom';
import tweets from './tweets';
import User from './User';

class App extends React.Component {
  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



// class Tweet extends React.Component {
//   render() {
//         let allTweets = this.props.tweets.map (eachTweet =>
//             <User identity={eachTweet.user}></User>
//         )
//         return (
//             allTweets
//     );
//   }
// }

// class User extends React.Component {
//     render () {
//         let name = this.props.user.name
//         let username = this.props.user.screen_name

//         return (
//             <div>
//                 <p>{name}</p>
//                 <p>@{username}</p>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <Tweet post={tweets} />, document.getElementById('app') );