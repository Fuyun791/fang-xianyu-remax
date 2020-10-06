import * as React from "react";
import { View, Input } from "remax/wechat";

const HomeInput = () => {
  return (
    <View>
      <View className="home-input-top">
        <Input
          className="my-input input-shadow"
          placeholder="苹果笔记本 || Mac book pro"
        />
      </View>
      <View className="top-text-bottom-short"></View>
      <View className="top-text-bottom"></View>
      <View className="block-100"></View>
    </View>
  );
};

export default HomeInput;