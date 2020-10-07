import React, { useState } from "react";
import { View } from "remax/wechat";

const myLevels = [
  {
    id: 1,
    count: 0,
    description: "收藏",
  },
  {
    id: 2,
    count: 3,
    description: "历史浏览",
  },
  {
    id: 3,
    count: 0,
    description: "关注",
  },
  {
    id: 4,
    count: 0,
    description: "粉丝",
  },
];

export default () => {
  const myLevel = myLevels.map((date) => {
    return (
      <View key={date.id}>
        <View>{date.count}</View>
        <View>{date.description}</View>
      </View>
    );
  });
  return <View className="myLevel card-margin-bottom">{myLevel}</View>;
};
