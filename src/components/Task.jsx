export const Task = ({
  id,
  title,
  deleteTaskFunc,
  toggleDoneTaskFunc,
  completed,
}) => {
  const deleteBtnOnClick = () => {
    deleteTaskFunc(id);
  };

  const toggleDoneBtnOnClick = () => {
    toggleDoneTaskFunc(id);
  };

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span className={completed ? "text-decoration-line-through" : ""}>
        {title}
      </span>

      <button className="btn btn-success" onClick={toggleDoneBtnOnClick}>
        Done
      </button>
      <button className="btn btn-danger" onClick={deleteBtnOnClick}>
        Delete
      </button>
    </div>
  );
};
