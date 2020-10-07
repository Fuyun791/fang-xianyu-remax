import React, { useState } from "react";
import { View, Label, Image, Text } from "remax/wechat";
import UserInfo from "./user-info";
import MyLevel from "./my-level";
import "./my.css";

export default () => {
  return (
    <View>
      <View className="top-yellow-background"></View>
      <View className="content">
        <UserInfo />
        <MyLevel />
        <View>
          <View className="card myCard">
            <View>卖在闲鱼</View>
            <View className="myPic">
              <View>1</View>
              <View>2</View>
            </View>
            <View>special</View>
          </View>
          <View className="card myCard">
            <View>买在闲鱼</View>
            <View className="myPic">
              <View>
                  <View>1</View>
                  <View>2</View>
              </View>
              <View>2</View>
            </View>
            <View>special</View>
          </View>
          <View className="card myCard">
            <View>玩在闲鱼</View>
            <View className="myPic">
              <View>1</View>
              <View>2</View>
            </View>
            <View>special</View>
          </View>
        </View>
      </View>
    </View>
  );
};
