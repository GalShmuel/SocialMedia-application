import {
    legacy_createStore as createStore, // Import createStore (legacy version)
    applyMiddleware, // Middleware to extend Redux with async capabilities
    compose, // Used for combining enhancers like DevTools and middleware
} from "redux";
import { thunk } from 'redux-thunk'; // Import redux-thunk for handling async actions
import { reducers } from "../Reducers"; // Import the combined reducers

// Function to save Redux store state to local storage
function saveToLocalStorage(store) {
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem('store', serializedStore);
    } catch (e) {
        console.log(e); // Log errors if saving to localStorage fails
    }
}

// Function to load the Redux store state from local storage
function loadFromLocalStorage() {
    try {
        const serializedStore = window.localStorage.getItem('store');
        if (serializedStore === null) return undefined; // Return undefined if no data exists
        return JSON.parse(serializedStore); // Parse the stored data
    } catch (e) {
        console.log(e); // Log errors if loading from localStorage fails
        return undefined;
    }
}

// Enable Redux DevTools extension if available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Load persisted state (if any) from localStorage
const persistedState = loadFromLocalStorage();

// Create the Redux store with the reducers and persisted state, applying middleware (like thunk)
const store = createStore(
    reducers,
    persistedState, // Initial state from localStorage if any
    composeEnhancers(applyMiddleware(thunk)) // Apply thunk middleware and DevTools extension
);

// Subscribe to store changes and save the state to localStorage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store; // Export the configured store
