module.exports = {
  pages: ['pages/index/index','pages/jewelry/jewelry','pages/message/message','pages/my/my'],
  window: {
    navigationBarTitleText: '仿闲鱼',
    navigationBarBackgroundColor: '#ffe60f',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    selectedColor: '#ffe60f',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: '/images/home.png',
        selectedIconPath: '/images/home-select.png',
        selectedColor: '#ffe60f',
        text: '首页',
      },
      {
        pagePath: 'pages/jewelry/jewelry',
        iconPath: '/images/jewelry.png',
        selectedIconPath: '/images/jewelry-select.png',
        selectedColor: '#ffe60f',
        text: '会玩',
      },
      {
        pagePath: 'pages/message/message',
        iconPath: '/images/message.png',
        selectedIconPath: '/images/message-select.png',
        selectedColor: '#ffe60f',
        text: '信息',
      },
      {
        pagePath: 'pages/my/my',
        iconPath: '/images/user-center.png',
        selectedIconPath: '/images/user-center-select.png',
        selectedColor: '#ffe60f',
        text: '我的',
      },
    ],
  }
};
