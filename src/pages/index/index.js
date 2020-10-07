import React, { useState, useRef } from "react";
import {
  View,
  Input,
  Image,
  Label,
  Text,
  navigateTo,
} from "remax/wechat";
import HomeInput from "./home-input";
import FirstCard from "./first-card";
import SecondCard from "./second-card";
import ThridCard from "./thrid-card";
//import { TodoContext } from "@/app";
import "./index.css";

export default () => {
  return (
    <View className="container">
      <HomeInput />
      {/* 第一个方块 */}
      <FirstCard />
      {/* 第二个方块 */}
      <SecondCard />
      {/* 第三个部分 */}
      <ThridCard />
    </View>
  );
};
