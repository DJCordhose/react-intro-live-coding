/* @flow */

import type { GreetingAction } from './actions';

// ERROR: this for sure is string
// function greetingReducer(state = 'Hello', action): number {
export default function greetingReducer(state: string = 'Hello', action: GreetingAction): ?string {
    // strange, flow does not check for proper use of string literals
    // https://github.com/facebook/flow/issues/1473
    switch (action.type) {
        case 'UPDATE_GREETING':
            return action.payload;
        case  'RESET_GREETING':
            return '';
        default:
            return state;
    }
}
