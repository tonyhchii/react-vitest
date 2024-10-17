import ErrorPage from "./error-page";
import Root, {
  action as rootAction,
  loader as rootLoader,
} from "./routes/root";
import Contact, { loader as contactLoader } from "./routes/contacts";
const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        loader: contactLoader,
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
];

export default routes;
