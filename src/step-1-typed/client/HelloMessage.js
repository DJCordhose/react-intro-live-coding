/* @flow */

import React from 'react';

// http://flowtype.org/docs/react.html#_
type Props = {
    // ERROR: trying to assign this boolean to state 
    // greeting: boolean
    greeting: string
};

type State =  {
    greeting: string;
};

// https://github.com/facebook/flow/blob/master/lib/react.js
export default class HelloMessage extends React.Component<any, Props, State> {
    props: Props;
    state: State;
    // optional, is of type 'any' in base class
    refs: {
        in: HTMLInputElement
    };

    constructor(props: Props) {
        super(props);
        this.state = {greeting: this.props.greeting};
        // console.log(this.state.greeting);
        // ERROR: state does not contain noWay
        // console.log(this.state.noWay);
    }

    render() {
        return (
            <div>
                <input ref="in"
                       onChange={this.updateModel.bind(this)}
                       value={this.state.greeting} />
                <p>{this.state.greeting}, World</p>
                <button
                    onClick={this.reset.bind(this)}>
                    Clear
                </button>
            </div>);
    }

    reset() {
        // WOULD WORK: setState can take a subset of state
        // this.setState({});
        this.setState({greeting: ''});
        this.refs.in.focus();
    }

    // WILL WORK
    // once 'Allow `Event` to be parameterized on its target' 
    // is released: https://github.com/facebook/flow/commit/ea3dcbf59bf5330c7710773bd727e273963d6b21
    // updateModel(event: SyntheticEvent<HTMLInputElement>) {
    //         this.setState({greeting: input.value});
    // }

    // https://github.com/facebook/flow/blob/master/lib/dom.js
    updateModel(event: SyntheticEvent) {
        // ERROR: does not work, as this would be unsafe
        // http://flowtype.org/blog/2015/02/18/Typecasts.html
        // const input: HTMLInputElement = (event.target: HTMLInputElement);

        const input = event.target;
        // const input: EventTarget = event.target;
        // http://flowtype.org/docs/dynamic-type-tests.html
        if (input instanceof HTMLInputElement) {
            this.setState({greeting: input.value});
        }
    }
}
// could be generated by
// https://github.com/brigand/babel-plugin-flow-react-proptypes
HelloMessage.propTypes = {
    // ERROR Finds out statically, three is no boolean
    // greeting: React.PropTypes.boolean.isRequired,

    // NO ERROR - BUT SHOULD BE ONE: causes runtime warning 
    // greeting: React.PropTypes.bool.isRequired,

    // greeting: React.PropTypes.Object.isRequired
    greeting: React.PropTypes.string.isRequired

};