import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./routes/HomePage";
import Root from "./routes/Root";
import AboutPage from "./routes/AboutPage/AboutPage";
import ContactPage from "./routes/ContactPage/ContactPage";
import SearchResults from "./routes/SearchResults/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "search-results",
        children: [{ path: ":searchInput", element: <SearchResults /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
