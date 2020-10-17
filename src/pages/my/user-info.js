import React, { useState } from "react";
import { View, Image } from "remax/wechat";

export default () => {
  const [loginName, setLoginName] = useState("不叫浮云");
  const [userName, setUserName] = useState("浮云");

  function clickUserHome() {
    console.log(`${loginName} and ${userName}`);
  }
  return (
    <View className="userInfo card-margin-bottom">
      <View>
        <Image
          className="userInfo-image"
          src="http://qic4cf851.hn-bkt.clouddn.com/1.jpg"
        />
      </View>
      <View className="userInfo-center">
        <View>{loginName}</View>
        <View>昵称：{userName}</View>
      </View>
      <View onClick={clickUserHome}>
        个人主页<View className="arrow-right"></View>
      </View>
    </View>
  );
};
