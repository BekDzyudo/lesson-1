import React, { useContext } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { GlobalContext } from "../../context/globalContext";
import ImagesLikes from "./ImagesLikes";

function Like() {
  const { images } = useContext(GlobalContext);
  console.log(images);

  return (
    <div className="py-3 align-elements">
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {images &&
            images.map((item) => {
              return (
                <ImagesLikes
                  key={item.id}
                  urls={item.urls}
                  alt={item.alt_description}
                  //   profilImg={item.user.profile_image.small}
                  //   name={item.user.name}
                />
              );
            })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default Like;
