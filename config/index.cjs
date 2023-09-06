/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx63e06cf6f9c71405',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'd6e93b68e3ccde0d59b8fdffbc05e2c0',

  PROVINCE: '安徽',
  CITY: '滁州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '媇玥',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKI8W6ZDf-ji78SyIx2SfRKnQl6I',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mX47964kIRFYebovytdGHf6jPTxyyHwM3madAb2J8Mw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-18',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '11-06',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        //{
         // type: '生日', name: '李四', year: '1996', date: '09-31',
       // },
        //{
         // type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
       // },
      ],
       // 我们在一起已经有xxxx天了的配置
       //customizedDateList: [
         // 在一起的日子
        //{ keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
      //],
      { note_en: '"Everyday happy',note_ch:'天天开心!!',}
    },
  ],
    note_en: '"Everyday happy',note_ch:'天天开心!!',
    
      

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'eAEiO7vaOn60t4M_rWbWeZWNGbBPESjr6TmTTAHap-g',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKI8W6XT_uJKsfhrr1_bxYLZp6uw',
    }
  ],

}

module.exports = USER_CONFIG

