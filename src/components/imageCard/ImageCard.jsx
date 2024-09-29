import s from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image} className={s.img} />
    </div>
  );
};

export default ImageCard;
