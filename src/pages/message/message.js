import React from "react";
import { useNativeEffect } from "remax";
import { View, Label,Image, Text } from "remax/wechat";
import MessageTopImage from "./message-top-image";
import MessageTalk from "./message-talk";
import "./message.css";

export default () => {
  return (
    <View>
      <View className="top-text-bottom"></View>
      <View className="content">
        <MessageTopImage />
        <MessageTalk />
        <View className="message-card">可能感兴趣的人</View>
      </View>
    </View>
  );
};
