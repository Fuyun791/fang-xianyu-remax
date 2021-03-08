# 使用 Remax 编写的仿闲鱼UI的微信小程序

## 计划编写：

* 首页
* 会玩
* 消息
* 我的

## 运行方式

```text
// 项目拷下来后，先下载依赖
npm install
// 然后启动运行（如果你执行这个模式，用微信小程序打开会发现控制台有个报红，不会对程序有影响采用build会清除）
// or 执行构建的形式
npm run dev or npm run build
// 用微信小程序打开dist文件夹
```

## 关于技术选型

这个项目就是为了练习react写小程序而写的。在此期间看了 taro，remax，rax 。在选择上偏向阿里，所以没选京东的taro，先使用了rax。但在rax的使用过程中发现改不了顶部导航栏的颜色。简单的用了下感觉rax写支付宝小程序肯定没问题，但微信小程序就很奇怪。然后就跑去用remax，总体用下来感觉不错，因为正像他们宣传的一样用真正的react写小程序，在编程中引入的包也就是react的包，所以可以说是无缝连接，平时该怎么写就怎么写。

## 目前页面

<figure>
	<a href="public\show\3.jpg"><img height="600px" src="public\show\3.jpg"></a>
    <a href="public\show\pubu.jpg" style="margin-left: 60px"><img height="600px" src="public\show\pubu.jpg"></a>
    <a href="public\show\message.jpg"><img height="600px" src="public\show\message.jpg"></a>
    <a href="public\show\my.jpg" style="margin-left: 60px"><img height="600px" src="public\show\my.jpg"></a>
</figure>
<figure>
	<a href="public\show\top.gif"><img height="600px" src="public\show\top.gif"></a>
</figure>

## [项目详情可看 Gitbook 中记录的开发日志](https://fuyun791.gitbook.io/fang-xianyu/)

* 首页 （顶部的那个黄块的效果与瀑布流）
* 我的



