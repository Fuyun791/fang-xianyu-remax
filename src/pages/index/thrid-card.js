import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  Label,
  Text,
  navigateTo,
  getSystemInfo,
} from "remax/wechat";
import { useNativeEffect } from "remax";

const cards = [
  {
    productId: 1,
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/2.jpg",
    productImageWidth: 900,
    productImageHeight: 1200,
    productTitle: "FGO Saber",
    productPrice: 1200,
    productLove: 13,
    productName: "cai791",
    productCredit: "极好",
  },
  {
    productId: 2,
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/2.jpg",
    productImageWidth: 900,
    productImageHeight: 1200,
    productTitle: "FGO Saber1200",
    productPrice: 3600,
    productLove: 8,
    productName: "fuyun164",
    productCredit: null,
  },
  {
    productId: 3,
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/1.jpg",
    productImageWidth: 1200,
    productImageHeight: 856,
    productTitle: "Pokma LOVE",
    productPrice: 1000,
    productLove: 13,
    productName: "tai45781",
    productCredit: null,
  },
  {
    productId: 4,
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/2.jpg",
    productImageWidth: 900,
    productImageHeight: 1200,
    productTitle: "Saber4800",
    productPrice: 4800,
    productLove: 111,
    productName: "asda111",
    productCredit: "极好",
  },
  {
    productId: 5,
    productImage: "http://qic4cf851.hn-bkt.clouddn.com/1.jpg",
    productImageWidth: 1200,
    productImageHeight: 856,
    productTitle: "Pokma LOVE",
    productPrice: 1000,
    productLove: 13,
    productName: "tai45781",
    productCredit: null,
  },
];

function HalfCard(props) {
  return (
    <View className="width-half-card">
      <Image
        className="width-half-image"
        src={props.productImage}
        mode="widthFix"
      />
      <View>
        <View className="font-bold-black">{props.productTitle}</View>
        <View className="half-card-price">
          <Text>{"￥" + props.productPrice}</Text>
          <Text>{props.productLove + "人想要"}</Text>
        </View>
        <View className="half-card-name">
          <View>
            <Image
              src="/images/user-center.png"
              style={{ marginRight: "4px", marginBottom: "12px" }}
            />
            <Text>{props.productName}</Text>
          </View>
          <View>{props.productCredit}</View>
        </View>
      </View>
    </View>
  );
}

export default () => {
  const [cardLeftList, setCardLeftList] = useState([]);
  const [cardRightList, setCardRightList] = useState([]);

  const cardLeftLists = cardLeftList.map((date) => {
    // console.log("product id is " + date.productId);
    return (
      <HalfCard
        key={date.productId}
        productId={date.productId}
        productImage={date.productImage}
        productTitle={date.productTitle}
        productPrice={date.productPrice}
        productLove={date.productLove}
        productName={date.productName}
        productCredit={date.productCredit}
      />
    );
  });

  const cardRightLists = cardRightList.map((date) => {
    // console.log("product id is " + date.productId);
    return (
      <HalfCard
        key={date.productId}
        productId={date.productId}
        productImage={date.productImage}
        productTitle={date.productTitle}
        productPrice={date.productPrice}
        productLove={date.productLove}
        productName={date.productName}
        productCredit={date.productCredit}
      />
    );
  });

  useNativeEffect(() => {
    const fetchDate = async () => {
      const res = await getSystemInfo()
        .then((date) => {
          return date;
        })
        .catch((e) => {
          console.log(e);
        });
      // 通过上面的getSystemInfo来获取手机的屏幕这些信息
      let width = res.windowWidth;
      width = (width - 34) / 2;
      // 假装此处使用 axios 获取了数据，并把数据赋值给了cardList
      const cardList = cards;
      let leftHeight = 0,
        rightHeight = 0,
        picHeight = 0;
      let leftCard = [],
        rightCard = [];
      cardList.forEach((date) => {
        picHeight = (width * date.productImageHeight) / date.productImageWidth;
        if (leftHeight <= rightHeight) {
          leftCard.push(date);
          leftHeight += picHeight;
        } else {
          rightCard.push(date);
          rightHeight += picHeight;
        }
      });
      // 这里有一个好奇怪的点，setCardRightList调用时会导致cardLeftLists的map再重新执行一次
      setCardLeftList(leftCard);
      setCardRightList(rightCard);
    };
    fetchDate();
  }, []);

  return (
    <View className="card-level card-flex-half">
      <View className="card-flex-left">{cardLeftLists}</View>
      <View className="card-flex-right">{cardRightLists}</View>
    </View>
  );
};
