import "./styles.css";

export const RoundImage = ({ src, wh, ht }) => {
  // add .round-image {
  //  border-radius: 100%;
  // }
  // to style.css to get round image
  return (
    <div
      className="round-image"
      style={{
        backgroundImage: `url(${src})`,
        width: `${wh}px`,
        height: `${ht}px`,
        backgroundSize: "cover",
      }}
    ></div>
  );
};
