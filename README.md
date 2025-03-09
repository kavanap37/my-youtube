Requirement clarification

1. TechStack:
   -Tailwind : UI layer
   -Redux: Data layer(Other eg: useContext)
   -React Router DOM
   -Formix: Form library
   -Bundler:
   -jest testing library
2. Feature

Steps:

1. Design of App:
   a. Main Page
   Head
   Body

- SideBar
- Maincontainer
  -- ButtonList
  --- Button
  --VideoContainer
  --- VideoCard

b. Video Page
Head
WatchVideo

2. create-react-app

3. Setup tailwind

- npm install -D tailwindcss@3
  npx tailwindcss init
- In tailwind.config.js:
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
- In index.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

4. Design App with tailwind css

5. For state management: redux

- npm i @reduxjs/toolkit
- npm i react-redux
- Steps to create redux store
  a. Configure store(appStore.js)
  b. Create slice with reducers and then export reducers and actions(appSlice.js)
  c. Register the slice in app store(In reducer section)
  d. Provide the access to store through Provider in app.js(`<Provider store="appStore">`)
- How to check if store is working:
  a. Use redux devtools chrome extension
  b useSelector
- How to use actions of slice? useDispatch hook
- How to subscribe to store to access data? useSelector

6. Youtube API not working: Solution enabled YouTube Data API v3

7. Routing:

- npm i react-router-dom
- In App.js createBrowserRouter and add routes
- RouterProvider in App.js to provide the created router
- Use `<Outlet/>` for changing components based on URL
- `<Link>` to link the routes

8. Getting video on WatchPage: use useSearchParams to fetch information from URL not useParams

- native browser search params: URLSearchParams which has property
- Change all iframe classes to camelcase as iframe is used inside react

9. Higher Order Component: Takes existing component and modifies it to match requirement

10. Search Bar: Use debouncing

- Debouncing:
  --Perfomance:
  --- iphone pro max = 14 letter _ 1000 = 140000
  --- with debouncing= 3 API calls _ 1000 = 3000
- Use Youtube search suggestion API: `https://suggestqueries.google.com/complete/search?output=toolbar&hl=en&q=YOURSEARCHTERM`(Gave xml o/p and not specific to youtube) or `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=Query`(gave json o/p)
  -- How to check if API works: Just in browser console use fetch()
- clearing timer of setTimeOut
- use Cache, through useState
- How the whole cycle works:
  -- 1. when a key is pressed(eg: a):
  ---- render the component
  ---- useEffect()
  ---- start timer => make api call after 200ms
  -- 2. now one more key pressed(eg:ab):
  ---- destroy the component and calls timer close method(useEffect timer closing return method). As we every re-render will create new component
  ---- re-render component
  ---- useEffect()
  ---- start timer => make api call after 200ms
  -- 3. if no key was pressed after a then simply setTimeout(200ms) will work => make api call after 200ms

  11. n-level comments struture: Even youtube just has 2 level. Eg of n-level: reddit.Recursion of components
