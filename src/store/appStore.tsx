import configureStore from "./configureStore";

/**
 * Create a store inside this file. Then import this store anywhere it is required
 * Avoid importing this file if not required. Always try to use connect method etc to get store
 */
const store = configureStore();

export default store;
