import React, { useEffect, useState } from "react";
import axios from "axios";
const EditTutorial = ({ editData, getData }) => {
  const { id, title: oldTitle, description: oldDescription } = editData || {};

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEditedData = {
      title,
      description,
    };

    putTutorialData(id, newEditedData);
    getData();
  };

  const putTutorialData = async (itemId, newData) => {
    try {
      const URL = process.env.REACT_APP_URL;
      const res = await axios.put(`${URL}${itemId}/`, newData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (editData) {
      setTitle(oldTitle || "");
      setDescription(oldDescription || "");
    }
  }, [editData, oldTitle, oldDescription]);

  return (
    <div>
      <div
        className="modal fade"
        id="open-modal"
        data-bs-backdrop="true"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setTitle("");
                  setDescription("");
                }}
              />
            </div>
            <div className="model-body p-3">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    value={description || ""}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-danger mb-4"
                  onClick={handleSubmit}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
