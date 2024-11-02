# Boi-Poka

Setup a Project in React 

* create a file with the tag --> npm create vite@latest boi-poka -- --template react

* change file repository -->  cd boi-poka

* Install React dom  --> npm install react-router-dom

* Install sort-by --> npm install localforage match-sorter sort-by

* Install Tailwind --> npm install -D tailwindcss postcss autoprefixer

* Install inteligentence -->npx tailwindcss init -p

* Install DaisyUi -->npm i -D daisyui@latest

* Add daisy element to tailwind.js --> plugins: [
    require('daisyui'),
  ],
  
* import router to main.jsx -->  import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
  
* Add router to main.jsx --> const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
 
  
* Add routeing to main.jsx -->   <RouterProvider router={router} />
  
* Dev-->npm run dev


## Surge Deploy 

1. surge dist (if 1st time doesn;t work try multiple time)

## Live link  :https://boi-poka-site-serve.surge.sh/


