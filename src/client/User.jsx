import React from 'react';
import ReactDOM from 'react-dom';
import tweets from './tweets';

class User extends React.Component {
    render() {
        let name = tweets[0].user.name;
        let username = tweets[0].user.screen_name;
        return(
            <div>
                <p>{name}</p>
                <p>{username}</p>
            </div>
        );
    }
}

export default User;