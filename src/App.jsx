import { useEffect, useState } from "react";
import { fetchImage } from "./services/api";
import ImageGallery from "./components/imageGallery/ImageGallery";

import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import SearchBar from "./components/searchBar/SearchBar";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";

const App = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImage(page, query);
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
    setQuery(topic);
    setImages([]);
    setPage(0);
  };

  return (
    <div>
      <SearchBar setQuery={handleQuery} />
      {images.length > 0 && <ImageGallery images={images} />}

      {loading && <Loader />}
      {query && <LoadMoreBtn setPage={setPage} />}

      {error && <ErrorMessage />}
    </div>
  );
};

export default App;
