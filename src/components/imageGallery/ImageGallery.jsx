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
            <div>
              <img src={image.urls.small} className={s.img} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
