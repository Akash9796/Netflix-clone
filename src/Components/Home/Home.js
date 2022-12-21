import { useDispatch } from "react-redux";
import Display from "../Display/Display";
import {genre} from "../../Redux/Slice/genreSlice"
export default function Home({ movies }) {
  const dispatch = useDispatch();
  dispatch(genre("trending/all/day"));
  return (
    <div>
      <Display movies={movies} />
    </div>
  );
}
