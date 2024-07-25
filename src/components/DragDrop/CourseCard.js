const CourseCard = ({
  id,
  showActions,
  toggleShowActions,
  imageUrl,
  name,
  price,
  type,
  handleMoveToTop,
  handleMoveToBottom,
  handleRemove,
}) => {
  return (
    <div className="course-card">
      <img src={`${process.env.PUBLIC_URL}/images/move.png`} alt="three-dots" />
      <img className="course-image" src={imageUrl} alt="course" />
      <p className="course-name"> {name}</p>
      <p className="course-price"> {isNaN(price) ? price : `Rs ${price}/- `}</p>
      <p className="course-type"> {type}</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/threeDots.png`}
        alt="three-dots"
        onClick={() => toggleShowActions(id)}
        className="threeDots"
      />
      {showActions && (
        <div className="course-card-actions">
          <div onClick={() => handleMoveToTop(id)}>
            <img src={`${process.env.PUBLIC_URL}/images/up.png`} alt="top" />
            <p>Move To Top</p>
          </div>
          <div onClick={() => handleMoveToBottom(id)}>
            <img src={`${process.env.PUBLIC_URL}/images/down.png`} alt="top" />
            <p>Move To Bottom</p>
          </div>
          <div className="remove" onClick={() => handleRemove(id)}>
            <img
              src={`${process.env.PUBLIC_URL}/images/delete.png`}
              alt="top"
            />
            <p> Remove</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
