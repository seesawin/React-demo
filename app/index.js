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

// State and Lifecycle
function tick1() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('tick1')
    );
}

setInterval(tick1, 1000);

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick2() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('tick2')
    );
}

setInterval(tick2, 1000);

// Ideally we want to write this once and have the Clock update itself:
// To implement this, we need to add "state" to the Clock component.
class Clock2 extends React.Component {
    constructor(props) {
        super(props);
        // The only place where you can assign this.state is the constructor.
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, state world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    // Adding Lifecycle Methods to a Class
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}

ReactDOM.render(
    <Clock2 />,
    document.getElementById('tick3')
);

// Handling Events
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('Toggle')
);

// Another difference is that you cannot return false to prevent default behavior in React
{/*<a href="#" onclick="console.log('The link was clicked.'); return false">*/}
    {/*Click me*/}
{/*</a>*/}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}

ReactDOM.render(
    <ActionLink />,
    document.getElementById('ActionLink')
);

// property initializer syntax
class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
        console.log('this is:', this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

ReactDOM.render(
    <LoggingButton />,
    document.getElementById('LoggingButton')
);

// arrow function
class LoggingButtonArrow extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // This syntax ensures `this` is bound within handleClick
        return (
            <button onClick={(e) => this.handleClick(e)}>
                Click me
            </button>
        );
    }
}

ReactDOM.render(
    <LoggingButtonArrow />,
    document.getElementById('LoggingButtonArrow')
);

// Conditional Rendering
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={true} />,
    document.getElementById('isLoggedIn')
);


// Element Variables
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button = null;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                <h1>------------</h1>
                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogoutClick} />
                ) : (
                    <LoginButton onClick={this.handleLoginClick} />
                )}
            </div>
        );
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('LoginControl')
);

// Inline If with Logical && Operator
function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        // It works because in JavaScript, true && expression always evaluates to expression,
        // and false && expression always evaluates to false.
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            }
            {/*Inline If-Else with Conditional Operator*/}
            <h1>Hello!</h1>
            <h2>
                You have {unreadMessages.length == 3 ? 'three' : unreadMessages.length} unread messages.
            </h2>
        </div>

    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('Mailbox')
);

// Preventing Component from Rendering
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('Page')
);

// Rendering Multiple Components
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
    <li>{number}</li>
);

ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('listItems')
);

// Basic List Component
function NumberList1(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers1 = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList1 numbers={numbers1} />,
    document.getElementById('listItems1')
);

// When you don't have stable IDs for rendered items, you may use the item index as a key as a last resort
function NumberList2(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) =>
        <li key={index}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers2 = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList2 numbers={numbers2} />,
    document.getElementById('listItems2')
);

// Extracting Components with Keys
function ListItem3(props) {
    // const value = props.value;
    // return (
    //     // Wrong! There is no need to specify the key here:
    //     <li key={value.toString()}>
    //         {value}
    //     </li>
    // );

    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}

function NumberList3(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        // Wrong! The key should have been specified here:
        // {/*<ListItem3 value={number} />*/}

        // Correct! Key should be specified inside the array.
        <ListItem3 key={number.toString()} value={number} />
    );
    return (
        <ul>
            {listItems}
        </ul>
    );
}

const numbers3 = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList3 numbers={numbers3} />,
    document.getElementById('NumberList3')
);

// Keys Must Only Be Unique Among Siblings
function Post(props) {
    return (
        <div key={props.id}>
            <h3>Post : {props.title}</h3>
            <p>Post : {props.content}</p>
        </div>
    );
}
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    const contentPost = props.posts.map((post) =>
        <Post
            key={post.id}
            id={post.id}
            title={post.title} />
    );

    return (
        <div>
            {sidebar}
            <hr />
            {content}
            <hr />
            {contentPost}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('Blog')
);

// Embedding map() in JSX
function ListItem4(props) {
    return <li>{props.value}</li>;
}

function NumberList4(props) {
    const numbers = props.numbers;

    // const listItems = numbers.map((number) =>
    //     <ListItem4 key={number.toString()}
    //               value={number} />
    // );
    //
    // return (
    //     <ul>
    //         {listItems}
    //     </ul>
    // );

    // Embedding
    return (
        <ul>
            {
                numbers.map((number) =>
                    <ListItem4 key={number.toString()}
                               value={number} />)
            }
        </ul>
    );
}

const posts1 = ['a',7,'b',9,'c'];
ReactDOM.render(
    <NumberList4 numbers={posts1} />,
    document.getElementById('NumberList4')
);

// Controlled Components
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('NameForm')
);

// The textarea Tag
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('EssayForm')
);

// The select Tag
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('FlavorForm')
);


// Handling Multiple Inputs
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('Reservation')
);

// Lifting State Up
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {value: ''};
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        const value = this.state.value;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={value}
                    onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(value)} />
            </fieldset>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('Calculator')
);


const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        this.state = {value: ''};


    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        const value = this.state.value;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={value}
                       onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(value)} />
            </fieldset>
        );
    }
}

class Calculator1 extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator1 />,
    document.getElementById('TemperatureInput')
);

// Lifting State Up , keep input sync
const scaleNames2 = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(value, convert) {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function BoilingVerdict2(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class TemperatureInput2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        const value = this.props.value;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames2[scale]}:</legend>
                <input value={value}
                       onChange={this.handleChange} />
            </fieldset>
        );
    }
}

class Calculator2 extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {value: '', scale: 'c'};
    }

    handleCelsiusChange(value) {
        this.setState({scale: 'c', value});
    }

    handleFahrenheitChange(value) {
        this.setState({scale: 'f', value});
    }

    render() {
        const scale = this.state.scale;
        const value = this.state.value;
        const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
        const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

        return (
            <div>
                <TemperatureInput2
                    scale="c"
                    value={celsius}
                    onChange={this.handleCelsiusChange} />
                <TemperatureInput2
                    scale="f"
                    value={fahrenheit}
                    onChange={this.handleFahrenheitChange} />
                <BoilingVerdict2
                    celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

ReactDOM.render(
    <Calculator2 />,
    document.getElementById('Calculator2')
);

// Containment
function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog() {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft1!
            </p>
        </FancyBorder>
    );
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('WelcomeDialog')
);

function Contacts() {
    return <div className="Contacts" >Contacts</div>;
}

function Chat() {
    return <div className="Chat" >Chat</div>;
}

function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}

function App1() {
    return (
        <SplitPane
            left={
                <Contacts />
            }
            right={
                <Chat />
            } />
    );
}

ReactDOM.render(
    <App1 />,
    document.getElementById('SplitPane')
);

// Containment
function FancyBorder11(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function WelcomeDialog1() {
    return (
        <FancyBorder11 color="blue">
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft2!
            </p>
        </FancyBorder11>
    );
}

ReactDOM.render(
    <WelcomeDialog1 />,
    document.getElementById('WelcomeDialog1')
);

// Specialization
function FancyBorder2(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder2 color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder2>
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="Mars Exploration Program"
                    message="How should we refer to you?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSignUp}>
                    Sign Me Up!
                </button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('SignUpDialog')
);