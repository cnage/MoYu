/***********************************
 
> 应用名称：问真八字
> 软件版本：1.2.2
> 脚本作者：问真八字

[rewrite_local]
# > 问真八字☆解锁钻石会员权限
^https?:\/\/bzpp.*\.iwzbz\.com\/api\/.*\/user\/getvipinfo url script-response-body https://github.com/cnage/MoYu/raw/master/WenZhenBaZiPro.js

[mitm] 
hostname=bzpp*.iwzbz.com

***********************************/























var ddgksf2013={"code":-1,"data":{"vipTipsType":0,"vipLevel":3,"adtype":0,"expires":"2099-12-31 23:59:59"},"message":"","validateKey":"","isSuccess":true};
$done({body:JSON.stringify(ddgksf2013)});
