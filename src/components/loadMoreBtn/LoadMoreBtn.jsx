import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ setPage }) => {
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={handleChangePage} className={s.btn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
