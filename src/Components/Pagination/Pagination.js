import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { SkipNext, SkipPrevious } from "@material-ui/icons";
import { page } from "../../Redux/Slice/pageSlice";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [itemperpage, setItemperpage] = useState(5);
  const [pageNum, setPageNum] = useState(1);
  const totalpage = Math.ceil(todos.length / itemperpage);
  const pageCount = [...Array(totalpage + 1).keys()].slice(1);
  const lastItem = pageNum * itemperpage;
  const firstItem = lastItem > itemperpage ? lastItem - itemperpage : 0;
  const display = todos.slice(firstItem, lastItem);
  const genreSelected = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  console.log(pageNum);

  const handlePrevPage = () => {
    setPageNum((prevpageNum) => (prevpageNum > 1 ? prevpageNum - 1 : 1));
    pageNum > 1 && dispatch(page(pageNum - 1));
  };
  const handleNextPage = () => {
    setPageNum((prevpageNum) => prevpageNum + 1);
    dispatch(page(pageNum + 1));
  };
  const handlePage = (pageNo) => {
    setPageNum(pageNo);
    dispatch(page(pageNo));
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${genreSelected}?api_key=219abf0a69c0d25a16cca43a3fa1c110`
      )
      .then((res) => setTodos(res.data.results));
  }, [genreSelected]);

  return (
    <>
      <div
        className="mainPage"
        style={{
          fontSize: "1.5rem",
          padding: "10px 0",
          color: "white",
          background: "black",
          display: "flex",
          placeItems: "center",
          placeContent: "center",
          gap: "10px",
        }}
      >
        <SkipPrevious onClick={() => handlePrevPage()} />
        {pageCount.map((page) => (
          <span onClick={() => handlePage(page)} key={page}>
            {page + " | "}
          </span>
        ))}
        <SkipNext onClick={() => handleNextPage()} />
      </div>
    </>
  );
}
