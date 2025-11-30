// import routes from "../routes";
import paths from "@/configs/paths";
import { Link } from "react-router";

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to={paths.editAvatar}>Bài 1: Sử dụng useEffect cleanup</Link>
        </li>
        <li>
          <Link to={paths.useRef}>Bài 2: Sử dụng useRef</Link>
        </li>
        <li>
          <Link to={paths.reactMemo}>
            Bài 3: Sử dụng React memo và useCallback
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
