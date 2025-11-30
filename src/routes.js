import paths from "./configs/paths";

import HomePage from "./pages/HomePage";
import UseRef from "./pages/UseRef";
import EditAvatar from "./pages/EditAvatar";
import ReactMemo from "./pages/ReactMemo";

const routes = [
  { path: paths.home, component: HomePage },
  { path: paths.useRef, component: UseRef },
  { path: paths.editAvatar, component: EditAvatar },
  { path: paths.reactMemo, component: ReactMemo },
];

export default routes;
