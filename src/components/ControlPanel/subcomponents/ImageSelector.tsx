import { Dispatch, SetStateAction, useState } from "react";

import imageUndefined from "@assets/image-undefined.png";
import { MiniPic } from "../ControlPanel.styles";
import { Image } from "react-native";

type Props = {
  images: Array<{ order: number; id: number; path: string }>;
  setPhotoCursor: Dispatch<SetStateAction<number>>;
};

const ImageSelector = (props: Props) => {
  const { images, setPhotoCursor } = props;
  const [error, setError] = useState(false);
  const setSmartImage = () => {
    setError(!error);
  };
  return (
    <>
      {images.map((image) => {
        return (
          <MiniPic
            onPress={() => {
              setPhotoCursor(image.order - 1);
            }}
            key={image.id}
          >
            <Image
              source={error ? imageUndefined : { uri: image.path }}
              style={{ height: "99%", aspectRatio: 1 }}
              onError={setSmartImage}
            />
          </MiniPic>
        );
      })}
    </>
  );
};
export default ImageSelector;
