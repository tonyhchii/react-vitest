import ErrorPage from "./error-page";
import Root, { loader as rootLoader } from "./routes/root";
import Contact from "./routes/contacts";
const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
];

export default routes;
