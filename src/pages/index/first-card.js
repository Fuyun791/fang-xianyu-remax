import * as React from "react";
import { View, Image, Text } from "remax/wechat";

const homeImage = [
  {
    id: 1,
    imageSrc: "/images/mobile.png",
    description: "二手手机",
  },
  {
    id: 2,
    imageSrc: "/images/weekly.png",
    description: "周刊推荐",
  },
  {
    id: 3,
    imageSrc: "/images/find-good.png",
    description: "找宝贝",
  },
  {
    id: 4,
    imageSrc: "/images/live-broadcast.png",
    description: "直播好货",
  },
  {
    id: 5,
    imageSrc: "/images/class.png",
    description: "分类",
  },
];

const homtBottomImage = [
  {
    id: 1,
    imageSrc: "/images/computer.png",
    description: "二手电脑低价收~",
  },
  {
    id: 1,
    imageSrc: "/images/student.png",
    description: "学习用品免费得~",
  },
];

function FirstCard() {
  const homeImages = homeImage.map((date) => {
    return (
      <View key={date.id}>
        <Image src={date.imageSrc} className="home-image" mode="scaleToFill" />
        <View>{date.description}</View>
      </View>
    );
  });

  return (
    <View className="card-level">
      <View className="card card-flex-col">
        <View className="card-flex-row first-block">{homeImages}</View>
        <View className="divid-row"></View>
        <View className="card-flex-row">
          <View className="small-card-row">
            <Image
              className="home-bottom-image"
              src={homtBottomImage[0].imageSrc}
            />
            <Text>{homtBottomImage[0].description}</Text>
          </View>
          <View className="divid-col"></View>
          <View className="small-card-row">
            <Image
              className="home-bottom-image"
              src={homtBottomImage[1].imageSrc}
            />
            <Text>{homtBottomImage[1].description}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default FirstCard;
