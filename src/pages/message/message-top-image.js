import React, { useState } from "react";
import { View, Image, Text } from "remax/wechat";
// TODO 以数组的形式来表示有多少信息吧，感觉下一步可以继承到app.js中
const messageDate = [
  {
    id: "message",
    has: true,
    count: 1,
    imageSrc: "/images/message-get.png",
    description: "通知信息",
  },
  {
    id: "talk",
    has: false,
    count: null,
    imageSrc: "/images/talk.png",
    description: "互动信息",
  },
  {
    id: "jianlou",
    has: true,
    count: null,
    imageSrc: "/images/jianlou.png",
    description: "每日捡漏",
  },
  {
    id: "zhinan",
    has: true,
    count: null,
    imageSrc: "/images/zhinan.png",
    description: "速卖指南",
  },
];

export default () => {
  const messageTops = messageDate.map((date) => {
    return (
      <View className="messageTopImage" key={date.id}>
        {/* 这个图片还能封住出来，做一个有红冒泡的信息提示 */}
        <View className="message-image">
          <Image src={date.imageSrc} />
          {date.has ? (
            <Text className={date.count ? "message-text-hasNumber" : null}>
              {date.count}
            </Text>
          ) : null}
        </View>
        <View>{date.description}</View>
      </View>
    );
  });

  return <View className="card message-card">{messageTops}</View>;
};
