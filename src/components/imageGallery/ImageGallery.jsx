import ImageCard from "../imageCard/ImageCard";
import s from "./ImageGallery.module.css";
const ImageGallery = ({ openModal, images }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li
            onClick={() => openModal(image.id)}
            key={image.id}
            className={s.list}
          >
            <ImageCard image={image.urls.small} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
