import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./routes/HomePage";
import Root from "./routes/Root";
import AboutPage from "./routes/AboutPage/AboutPage";
import ContactPage from "./routes/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
