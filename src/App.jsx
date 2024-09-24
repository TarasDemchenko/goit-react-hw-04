import { useEffect, useState } from "react";
import { fetchImage, fetchImageLarge } from "./services/api";
import ImageGallery from "./components/imageGallery/ImageGallery";

import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import SearchBar from "./components/searchBar/SearchBar";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import toast, { Toaster } from "react-hot-toast";
import ImageModal from "./components/imageModal/ImageModal";

const App = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  const [page, setPage] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = async (imageId) => {
    setLoading(true);
    try {
      const largeImage = await fetchImageLarge(imageId);
      setSelectedImage(largeImage);
      setIsOpen(true);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  function closeModal() {
    setIsOpen(false);
    setSelectedImage(null);
  }

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
    if (topic.trim() === "") {
      toast.error("Please fill the search field.");

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
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        selectedImage={selectedImage}
      />
      {images.length > 0 && (
        <>
          <ImageGallery openModal={openModal} images={images} />
          <LoadMoreBtn setPage={setPage} />
        </>
      )}

      {loading && <Loader />}

      {error && <ErrorMessage />}
      <Toaster />
    </div>
  );
};

export default App;
