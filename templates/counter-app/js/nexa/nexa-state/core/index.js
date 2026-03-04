export function createNexaState(initialValue) {
    let value = initialValue;
    const subscribers = new Set(); // functions to call on update

    // The "get" function returns current value
    function get() {
        return value;
    }

    // The "set" function updates the value and notifies subscribers
    function set(newValue) {
        value = newValue;
        subscribers.forEach(fn => fn(value)); // call all subscribed functions
    }

    // Add a subscriber function
    function subscribe(fn) {
        subscribers.add(fn);
        // Immediately call it with current value
        fn(value);
        // Return an unsubscribe function
        return () => subscribers.delete(fn);
    }

    return [get, set, subscribe];
}