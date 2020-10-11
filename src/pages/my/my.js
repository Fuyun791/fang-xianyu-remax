import React, { useState } from "react";
import { View, Label, Image, Text } from "remax/wechat";
import UserInfo from "./user-info";
import MyLevel from "./my-level";
import MyCard from "./my-card";
import "./my.css";

export default () => {
  return (
    <View>
      <View className="top-yellow-background"></View>
      <View className="content">
        <UserInfo />
        <MyLevel />
        <MyCard />
      </View>
    </View>
  );
};
