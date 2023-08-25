import { createBrowserRouter} from 'react-router-dom';

import Home from './Pages/Home';
import Linktree from './Pages/Linktree';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "links",
    element: <Linktree />
  }
]);

export default router;