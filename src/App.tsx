import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./routes/HomePage";
import Root from "./routes/Root";
import AboutPage from "./routes/AboutPage/AboutPage";
import ContactPage from "./routes/ContactPage/ContactPage";
import SearchResultsPage from "./routes/SearchResultsPage/SearchResultsPage";
import ItemDetailsPage from "./routes/ItemDetailsPage/ItemDetailsPage";
import GuidePage from "./routes/GuidePage/GuidePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "guide", element: <GuidePage /> },
      { path: "contact", element: <ContactPage /> },
      {
        path: "search-results",
        children: [{ path: ":searchInput", element: <SearchResultsPage /> }],
      },
      {
        path: "item-details",
        children: [{ path: ":itemId", element: <ItemDetailsPage /> }],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
