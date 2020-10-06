import React from "react";
import { View, Image, Text } from "remax/wechat";

const secondCardImage = [
  {
    id: 1,
    title: "闲鱼玩家",
    description: "最懂的人",
    images: [
      "https://fuyun791.github.io/assets/img/xian-yu/1.jpg",
      "https://fuyun791.github.io/assets/img/xian-yu/2.jpg",
    ],
  },
  {
    id: 2,
    title: "值得买",
    description: "自用闲置低价转",
    images: [
      "https://fuyun791.github.io/assets/img/xian-yu/3.jpg",
      "https://fuyun791.github.io/assets/img/xian-yu/4.jpg",
    ],
  },
  {
    id: 3,
    title: "闲鱼直播",
    description: "LIVE",
    images: [
      "https://fuyun791.github.io/assets/img/xian-yu/3.jpg",
      "https://fuyun791.github.io/assets/img/xian-yu/4.jpg",
    ],
  },
  {
    id: 4,
    title: "优品捡漏",
    description: "有质保 可退换",
    images: [
      "https://fuyun791.github.io/assets/img/xian-yu/1.jpg",
      "https://fuyun791.github.io/assets/img/xian-yu/2.jpg",
    ],
  },
];

function SecondCard() {
  const secondCard = secondCardImage.map((date, index) => {
    return (
      <View className={index % 2 == 1 ? "second-card-magin-bottom" : null}>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              marginRight: "8px",
              fontSize: ".875rem",
            }}
          >
            {date.title}
          </Text>
          <Text className="second-font">{date.description}</Text>
        </View>
        <View style={{ display: "flex", marginTop: "10px" }}>
          <Image
            src={date.images[0]}
            className="home-second-image"
            mode="aspectFill"
          />
          <Image
            src={date.images[1]}
            className="home-second-image"
            mode="aspectFill"
          />
        </View>
      </View>
    );
  });

  return (
    <View className="card-level">
      <View className="card card-flex-row">
        <View className="card-flex-col auto-flex-width">
          {secondCard[0]}
          {secondCard[1]}
        </View>
        <View className="divid-col"></View>
        <View className="card-flex-col auto-flex-width">
          {secondCard[2]}
          {secondCard[3]}
        </View>
      </View>
    </View>
  );
}

export default SecondCard;
