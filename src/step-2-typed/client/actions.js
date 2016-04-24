/* @flow */

type Action<ActionType, PayloadType> = {
    type: ActionType;
    payload: PayloadType;
}

export type GreetingAction = Action<'UPDATE_GREETING' | 'RESET_GREETING', ?string>;

// Action creator
export function updateGreeting(greeting: string): GreetingAction {
    return {
        type: 'UPDATE_GREETING',
        payload: greeting
        // ERROR: if it is present, it must be a string
        // payload: 10
    };
}

export function resetGreeting(): GreetingAction {
    return {
        // ERROR: can not do this
        // type: 'RESET_GREETING2'
        type: 'RESET_GREETING',
        // payload may be null or undefined
        payload: null
    };
}
