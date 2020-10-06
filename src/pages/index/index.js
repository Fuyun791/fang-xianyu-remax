import React, { useState, useRef } from "react";
import { View, Input, Image, Label, Text, navigateTo,getSystemInfo } from "remax/wechat";
import HomeInput from "./index-input";
import FirstCard from "./first-card";
import SecondCard from "./second-card";
//import { TodoContext } from "@/app";
import "./index.css";

export default () => {
  const cardWidth = getSystemInfo({
    success (res) {
      console.log(res);
      console.log(res.windowWidth);
      console.log(res.windowHeight);
    }
  })
  return (
    <View className="container">
      <HomeInput />
      {/* 第一个方块 */}
      <FirstCard />
      {/* 第二个方块 */}
      <SecondCard />
      {/* 第三个部分 */}
      <View className="card-level card-flex-left">
        <View className="width-half-card">
          <Image
            className="width-half-image"
            src="https://fuyun791.github.io/assets/img/xian-yu/2.jpg"
            mode="widthFix"
          />
          <View>pokem love</View>
        </View>
        <View className="width-half-card">
          <Image
            className="width-half-image"
            src="https://fuyun791.github.io/assets/img/xian-yu/2.jpg"
            mode="widthFix"
          />
          <View>pokem love</View>
        </View>
        <View className="width-half-card">
          <Image
            className="width-half-image"
            src="https://fuyun791.github.io/assets/img/xian-yu/1.jpg"
            mode="widthFix"
          />
          <View>pokem love</View>
        </View>
        <View className="width-half-card">
          <Image
            className="width-half-image"
            src="https://fuyun791.github.io/assets/img/xian-yu/2.jpg"
            mode="widthFix"
          />
          <View>pokem love</View>
        </View>
        <View className="width-half-card">
          <Image
            className="width-half-image"
            src="https://fuyun791.github.io/assets/img/xian-yu/1.jpg"
            mode="widthFix"
          />
          <View>pokem love</View>
        </View>
      </View>
    </View>
  );
};
