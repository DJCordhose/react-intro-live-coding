/* @flow */

import React from 'react';

// http://flowtype.org/docs/react.html#_
type Props = {
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
    constructor(props: Props) {
        super(props);
        this.state = {greeting: this.props.greeting};
        // ERROR: state does not contai noWay
        // console.log(this.state.noWay);
    }

    reset() {
        // WOULD WORK: setState can take a subset of state
        // this.setState({});
        this.setState({greeting: ''});
        this.refs.in.focus();
    }

    updateModel(event: SyntheticEvent) {
        // ERROR: does not work, as this would be unsafe
        // http://flowtype.org/blog/2015/02/18/Typecasts.html
        // const input: HTMLInputElement = (event.target: HTMLInputElement);

        const input = event.target;
        // http://flowtype.org/docs/dynamic-type-tests.html
        if (input instanceof HTMLInputElement) {
            this.setState({greeting: input.value});
        }
    }
}
