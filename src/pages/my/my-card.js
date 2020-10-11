import React, { useState } from "react";
import { View, Label, Image, Text } from "remax/wechat";

const userProductInfo = [
  {
    title: "卖在闲鱼",
    arrayImage: [
      {
        id: 1,
        imageSrc: "/images/all.png",
        text: "我发布的",
      },
      {
        id: 2,
        imageSrc: "/images/ms.png",
        text: "我卖出的",
      },
    ],
    specialBottom: {
      imageSrc: "/images/all.png",
      description: "交易成功",
      bottonText: "去评价",
    },
  },
  {
    title: "买在闲鱼",
    arrayImage: [
      {
        id: 1,
        imageSrc: "/images/wan.png",
        text: "我买到的",
      },
      {
        id: 2,
        imageSrc: "/images/rent.png",
        text: "我租到的",
      },
    ],
    specialBottom: {
      imageSrc: "/images/all.png",
      description: "交易成功",
      bottonText: "去评价",
    },
  },
];

function MyCardAndPic(props) {
  const [title, setTitle] = useState(props.title);
  const [arrayImage, setArrayImage] = useState(props.arrayImage);
  const [specialBottom, setSpecialBottom] = useState(props.specialBottom);

  const myPicImage = arrayImage.map((date) => {
    return (
      <View key={date.id}>
        <Image className="myPic-image" src={date.imageSrc} />
        <View>{date.text}</View>
      </View>
    );
  });
  return (
    <View className="card myCard">
      <View>{title}</View>
      <View className="myPic">{myPicImage}</View>
      <View>special</View>
    </View>
  );
}

export default () => {
  const MyCardAndPics = userProductInfo.map((date) => {
    return (
      <MyCardAndPic
        key={date.title}
        title={date.title}
        arrayImage={date.arrayImage}
        specialBottom={date.specialBottom}
      />
    );
  });
  return <View>{MyCardAndPics}</View>;
};
