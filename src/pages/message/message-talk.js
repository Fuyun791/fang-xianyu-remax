import React, { useState } from "react";
import { useNativeEffect } from "remax";
import { View, Image } from "remax/wechat";

const messageTalks = [
  {
    id: 1,
    userImage: "http://qic4cf851.hn-bkt.clouddn.com/1.jpg",
    userName: "风平浪静",
    lastMessage: "你有一条新消息",
    lastTime: "一个月前",
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/2.jpg",
  },
  {
    id: 2,
    userImage: "http://qic4cf851.hn-bkt.clouddn.com/3.jpg",
    userName: "浪中带皮",
    lastMessage: "你有一条新消息",
    lastTime: "一个月前",
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/4.jpg",
  },
  {
    id: 3,
    userImage: "http://qic4cf851.hn-bkt.clouddn.com/1.jpg",
    userName: "岁月静好",
    lastMessage: "商品到货请签收",
    lastTime: "24小时前",
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/3.jpg",
  },
];
export default () => {
  const [messageTalk, setMessageTalk] = useState([]);
  useNativeEffect(() => {
    getMessageDate();
  }, []);
  async function getMessageDate() {
    const date = await function () {
      return messageTalks;
    };
    setMessageTalk(date);
  }
  const messageTalkDate = messageTalk.map((message) => {
    return (
      <View className="message-talk" key={message.id}>
        <View>
          <Image src={message.userImage} />
        </View>
        <View className="scale-1px">
          <View className="talk-content">
            <View>{message.userName}</View>
            <View>{message.lastMessage}</View>
            <View>{message.lastTime}</View>
          </View>
          <View>
            <Image src={message.productImage} />
          </View>
        </View>
      </View>
    );
  });
  return (
    <View>
        {messageTalkDate}
    </View>
  );
};
