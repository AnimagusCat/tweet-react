import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from './tweets';

class User extends React.Component {
    render() {
        let name = this.props.identity.name
        let username = this.props.identity.screen_name
        console.log(this.props.identity)
        return(
            <div>
                <p>{name}</p>
                <p>@{username}</p>
            </div>
        );
    }
}

export default User;