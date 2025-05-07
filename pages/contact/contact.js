Page({
  data: {
    companyName: "环游飞屋",
    slogan: "让旅行更美好，让回忆更珍贵",
    aboutUsText: "环游飞屋是一家充满激情的旅行品牌！我们热爱探索世界的每个角落，致力于为你提供有趣、独特的旅行体验。无论是欧洲艺术之旅、亚洲美食探索、还是亲子主题游，我们都能为你量身定制完美行程！",
    tags: [
      { id: "tag1", iconPlaceholder: "[山]", text: "户外探险" },
      { id: "tag2", iconPlaceholder: "[餐]", text: "美食之旅" },
      { id: "tag3", iconPlaceholder: "[子]", text: "亲子游" },
      { id: "tag4", iconPlaceholder: "[摄]", text: "摄影团" }
    ],
    contactMethods: [
      { id: "cm1", iconPlaceholder: "[W]", title: "微信公众号", detail: "关注获取最新旅行资讯和优惠" },
      { id: "cm2", iconPlaceholder: "[P]", title: "咨询热线", detail: "400-888-XXXX（9:00-18:00）" },
      { id: "cm3", iconPlaceholder: "[E]", title: "电子邮箱", detail: "hello@flyingtravel.com" }
    ],
    travelAdvisor: {
      qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://example.com/founder",
      name: "王小姐 · 旅行顾问",
      description: "10年旅行策划经验，欧洲线路专家",
      badges: [
        { id: "b1", iconPlaceholder: "[✓]", text: "专业认证" },
        { id: "b2", iconPlaceholder: "[⭐]", text: "5.0 评分" }
      ]
    },
    groups: [
      {
        id: "g1",
        iconPlaceholder: "[欧]",
        name: "欧洲旅行爱好者",
        description: "每周分享欧洲旅行心得和攻略",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://example.com/europe-group",
        members: "300+ 成员",
        activity: "活跃讨论",
        memberIcon: "[员]",
        activityIcon: "[聊]"
      },
      {
        id: "g2",
        iconPlaceholder: "[童]",
        name: "亲子游交流群",
        description: "分享适合孩子的旅行地点和活动",
        qrCode: "https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://example.com/family-group",
        members: "200+ 家庭",
        activity: "定期活动",
        memberIcon: "[员]",
        activityIcon: "[历]"
      }
    ]
  },
  onLoad(options) {
    // 页面加载时触发
  },
  goBack() {
    wx.navigateBack({
      delta: 1
    });
  }
}); 