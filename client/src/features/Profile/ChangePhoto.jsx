/* eslint-disable no-param-reassign */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updatePhoto } from "../store/userSlice";

function ChangePhoto() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handlerUloadPhoto = async (event) => {
    const file = new FormData();
    const picturesData = [...event.target.files];
    picturesData.forEach((img) => {
      file.append("homesImg", img);
      dispatch(updatePhoto(file));
    });
  };

  return (
    <div>
      <label htmlFor="avatar">
        <div className="avatarBox">
          <img
            className="photoOnAvatar"
            src={`${user.user.avatar}`}
            alt="avatar"
          />
          <form id="formAvatar" action="/multer" method="POST">
            <label className="input-file">
              <input
                className="visually-hidden"
                name="file"
                id="multer"
                type="file"
                onChange={handlerUloadPhoto}
              />
              <span className="input-file-btn">Выберите файл</span>
              {/* <button type="button" className="button btn">
                Сохранить изменения
              </button> */}
            </label>
          </form>
        </div>
      </label>
    </div>
  );
}

export default ChangePhoto;
