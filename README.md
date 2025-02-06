# React Native useEffect Async Operation Error

This repository demonstrates a common error in React Native applications involving asynchronous operations within the `useEffect` hook. The problem occurs when the component unmounts before the asynchronous operation completes, causing warnings or crashes.

The `useEffectBug.js` file showcases the problematic code.  `useEffectSolution.js` provides a solution using cleanup functions and state management to handle the asynchronous operation safely, preventing issues when components are unmounted.

## How to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the necessary dependencies.
4. Run `npx react-native run-android` or `npx react-native run-ios` to run the application.
5. Observe the console logs and behavior to see the error in `useEffectBug.js` and the corrected behavior in `useEffectSolution.js`.