/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx1d93ce362cbc64fb',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c7bf4d227cd266659961219ff93939f4',

  PROVINCE: '湖北',
  CITY: '孝感',

  USERS: [
    {
      // 想要发送的人的名字
      name: '陈心怡',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBIuc6Jzo_N3CDQvmUdKf3alsjWM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RtItJj59Jg_tZ4TV4psilm2Vka2oDY7i32MEHjz8d98',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2003', date: '06-06',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '陈心怡', year: '2003', date: '07-23',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '04-30',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-04-30' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'TFHXivTkGCuMMTINjHO1eVARiSyhkv3q0ip6dFK6nXg',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBIuc6JfSUqO1wXvkhV7wsb7sMwc',
    }
  ],

}

module.exports = USER_CONFIG

