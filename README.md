# react-intro-live-coding

Interactively turn a Single-Page Application into an Universal App

## Single-Page Applications (SPA)

- Single-Page Applications are nice for being highly responsive and working offline.
- However, they require JavaScript to be loaded and executed before the user sees anything
- Therefor, they are slow at providing a first page impression and for can not prerendering on social media
- SEO used to be an issue, but for Google robot might no longer be
- Progressive Enhancement (make the app work without JavaScript) hardly is thing these days any more, but also might

## Universal App
- Renders both on server and on client using the same code
- Combines the benefits of a classic Web Application and an SPA

## Steps from SPA to Universal App
### Step 0: SPA with React and Redux

- Fully functional Hello World
- Stack: Hapi, Webpack, Babel, Hot Reload
- Run
  - adapt step in `webpack.config.dev.js` and `package.json` to `step0`
  - npm start
  - open http://localhost:3000/
- Hot Reloading
  - Type in some name to send greetings to
  - Change greeting in `src/step0/client/HelloMessage.js`
  - See browser being live reloaded
  - State which contains name is conversed
- How does rendering work?
  - Open Network Tab in Chrome and capture screenshots (camera symbol)
  - Notice that there are two frames
    - initial frame is just the empty static html being served by hapi
    - 2nd frame contains the dynamically rendered result
  - in between JavaScript has been loaded and executed
    - this is what has rendered the final result
  - you might see a short flicker
- Check how app works in browser source tab
  - index.html
    - mount point
    - loading of single app file
  - `main.js` (open using CMD-p)
    - show initial rendering
  - `HelloMessage.js`
    - set a breakpoint in `render`
    - see it being hit which each re-render
    - have a look at the JSX in that method
    - it creates a virtual DOM
    - React compares this to the previous version and just updates the DOM with the diff
  - `actions.js`
    - set a breakpoint in `resetGreeting`
    - click on reset button
    - watch that action being created
    - have a look at stacktrace, it's being called by `HelloMessage.js`
  - `store.js`
    - set a breakpoint in `greetingReducer`
    - see what is in state parameter
    - check action
    - have breakpoint in 'render' in `HelloMessage.js`
      - see new state for `greeting `being passed
      - matches was is returned in store configuration
  - this is a flux/redux architecture that
    - separates state from components
    - components are stateless and merely pure functions
    - makes data and control flow in a circle

