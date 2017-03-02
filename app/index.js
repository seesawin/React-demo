import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return ( <div> <h1>Hi Frank! Hello, World!</h1> </div> );
    }}
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// Embedding Expressions in JSX
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    <h1>
        Hello, {formatName(user)}, total: { 1 + 2 + 3}!
    </h1>
);

ReactDOM.render(
    element,
    document.getElementById('root')
);

// JSX is an Expression Too
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
    getGreeting(user),
    document.getElementById('greet')
);

// Specifying Children with JSX
const containChildren = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);

ReactDOM.render(
    containChildren,
    document.getElementById('containChildren')
);

// JSX Prevents Injection Attacks
// const title = response.potentiallyMaliciousInput;
// // This is safe:
// const elementTitle = <h1>title: {title}</h1>;
//
// ReactDOM.render(
//     elementTitle,
//     document.getElementById('elementTitle')
// );

// JSX Represents Objects
const representsObjects1 = (
    <h1 className="greeting">
        Hello, world! 1
    </h1>
);

ReactDOM.render(
    representsObjects1,
    document.getElementById('representsObjects1')
);

const representsObjects2 = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, world! 2'
);

ReactDOM.render(
    representsObjects2,
    document.getElementById('representsObjects2')
);

// React.createElement() performs a few checks to help you write bug-free code but essentially it creates an object like this:
// const representsObjects3 = {
//     type: 'h1',
//     props: {
//         className: 'greeting',
//         children: 'Hello, world! 3'
//     }
// };

// Updating the Rendered Element
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);

// Functional and Class Components
function Welcome1(props) {
    return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
    Welcome1({'name' : 'Frank1'}),
    document.getElementById('Welcome1')
);

class Welcome2 extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

const elementWelcome2 = <Welcome2 name="Frank2" />;

ReactDOM.render(
    elementWelcome2,
    document.getElementById('Welcome2')
);

// Rendering a Component
const elementSara = <Welcome name="Sara" age="56"/>;

function Welcome(props) {
    return <h1>Hello, your name: {props.name}, age: {props.age}</h1>;
}

ReactDOM.render(
    elementSara,
    document.getElementById('Rendering')
);

function WelcomeComposing(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Composing() {
    return (
        <div>
            <WelcomeComposing name="Sara" />
            <WelcomeComposing name="Cahal" />
            <WelcomeComposing name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <Composing />,
    document.getElementById('Composing')
);

// Extracting Components
function formatDate(date) {
    return date.toLocaleDateString();
}

function Comment1(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar"
                     src={props.author.avatarUrl}
                     alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment1 = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

ReactDOM.render(
    <Comment1
        author={comment1.author}
        text={comment1.text}
        date={comment1.date}/>,
    document.getElementById('Composing1')
);

function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name} />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment2(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

const comment2 = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
};

ReactDOM.render(
    <Comment2
        date={comment2.date}
        text={comment2.text}
        author={comment2.author} />,
    document.getElementById('Composing')
);