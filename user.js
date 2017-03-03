# pref(key,value) 会覆盖默认设置,在删除之后会恢复默认设置.
# user_pref(key,value)等同于从about:config修改,删除之后,修改的设置仍然有效

//New Tab
user_pref("browser.startup.homepage", "about:newtab");//首頁
user_pref("browser.newtabpage.columns", 14);//新标签页列数

//标签页固定网站
user_pref("browser.newtabpage.pinned", "[{\"url\":\"https://www.google.com/\",\"title\":\"Google\"},{\"url\":\"https://www.plus.google.com\",\"title\":\"Google+\"},{\"url\":\"http://www.haosou.com/\",\"title\":\"Haosou\"},{\"url\":\"https://www.wikipedia.org/\",\"title\":\"Wikipedia\"},{\"url\":\"http://www.cnn.com/\",\"title\":\"CNN\"},{\"url\":\"http://www.economist.com/\",\"title\":\"Economist\"},{\"url\":\"http://www.linkedin.com/today/?trk=nav_responsive_sub_nav_pulse\",\"title\":\"Linkedin\"},{\"url\":\"https://www.youtube.com/\",\"title\":\"Youtube\"},{\"url\":\"http://twitter.com/\",\"title\":\"Twitter\"},{\"url\":\"http://www.quora.com/\",\"title\":\"Quora\"},{\"url\":\"http://tieba.baidu.com/\",\"title\":\"Tieba\"},{\"url\":\"http://www.zhihu.com/explore\",\"title\":\" Zhihu\"},{\"url\":\"http://www.douban.com/\",\"title\":\"Douban\"},{\"url\":\"http://www.guokr.com/\",\"title\":\"Guokr\"},{\"url\":\"http://music.163.com/\",\"title\":\"Music\"},{\"url\":\"http://mail.qq.com/\",\"title\":\"QQmail\"},{\"url\":\"http://weibo.com/\",\"title\":\"Weibo\"},{\"url\":\"http://www.cnbeta.com/\",\"title\":\"Cnbeta\"},{\"url\":\"http://www.wooyun.org/\",\"title\":\"Wooyun\"},{\"url\":\"https://mail.google.com/\",\"title\":\"Gmail\"},{\"url\":\"https://mail.ru/\",\"title\":\"RuMail\"},{\"url\":\"https://outlook.live.com/\",\"title\":\"Hotmail\"},{\"url\":\"https://www.guerrillamail.com/\",\"title\":\"1Hmail\"},{\"url\":\"https://10minutemail.net/\",\"title\":\"10minMail\"},{\"url\":\"https://hk.yahoo.com/\",\"title\":\"Yahoo.hk\"},{\"url\":\"http://www.ebay.com.hk/\",\"title\":\"Ebay.hk\"},{\"url\":\"http://www.yp.com.hk/\",\"title\":\"Yellow page\"},{\"url\":\"http://www.oschina.net/\",\"title\":\"Oschina\"},{\"url\":\"http://git.oschina.net/\",\"title\":\"Mayun\"},{\"url\":\"https://github.com/\",\"title\":\"Github\"},{\"url\":\"http://www.w3school.com.cn/\",\"title\":\"W3school\"},{\"url\":\"http://www.mycodes.net/\",\"title\":\"Yuanma\"},{\"url\":\"http://pan.baidu.com/\",\"title\":\"Baiduyun\"},{\"url\":\"http://yunpan.360.cn/\",\"title\":\"360Yunpan\"},{\"url\":\"http://www.weiyun.com/\",\"title\":\"Weiyun\"},{\"url\":\"https://mega.nz/\",\"title\":\"Mega\"},{\"url\":\"https://greasyfork.org/zh-CN/\",\"title\":\"Greasyfork\"},{\"url\":\"https://sleazyfork.org/zh-CN/\",\"title\":\"GreasyforkAdult\"},{\"url\":\"http://www.pt80.net/\",\"title\":\"PT80\"},{\"url\":\"http://bbs.kafan.cn/forum-215-1.html\",\"title\":\"Kafan\"},{\"url\":\"http://www.pcbeta.com/\",\"title\":\"Pcbeta\"},{\"url\":\"https://userstyles.org/\",\"title\":\"Userstyles\"}]");











