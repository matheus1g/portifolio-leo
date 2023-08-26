import { createBrowserRouter} from 'react-router-dom';

import Home from './Pages/Home';
import Linktree from './Pages/Linktree';
import Blog from './Pages/Blog';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "links",
    element: <Linktree />
  },
  {
    path: "blog",
    element: <Blog />
  },
]);

export default router;