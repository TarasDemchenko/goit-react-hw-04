import s from "./ImageGallery.module.css";
const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={s.gallery}>
        {images.map((image) => (
          <li key={image.id} className={s.list}>
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
