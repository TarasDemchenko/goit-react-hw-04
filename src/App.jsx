import { useEffect, useState } from "react";
import { fetchImage } from "./services/api";
import ImageGallery from "./components/imageGallery/ImageGallery";

import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import SearchBar from "./components/searchBar/SearchBar";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import toast from "react-hot-toast";

const App = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [page, setPage] = useState(0);
  // const [modalIsOpen, setIsOpen] = useState(false);

  // function openModal() {
  //   setIsOpen(true);
  // }
  // function closeModal() {
  //   setIsOpen(false);
  // }

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        setNoResults(false);
        const data = await fetchImage(page, query);
        if (data.length === 0 && page === 0) {
          setNoResults(true);
        }
        setImages((prev) => [...prev, ...data]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleQuery = (topic) => {
    if (topic.trim() === "") {
      toast.error("Please fill the search field.");
      setNoResults(true);
      setImages([]);
      return;
    }
    setQuery(topic);
    setImages([]);
    setPage(0);
  };

  return (
    <div>
      <SearchBar setQuery={handleQuery} />
      {noResults && <ErrorMessage />}
      {images.length > 0 && (
        <>
          <ImageGallery images={images} />
          <LoadMoreBtn setPage={setPage} />
        </>
      )}

      {loading && <Loader />}

      {error && <ErrorMessage />}
    </div>
  );
};

export default App;
