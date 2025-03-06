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
