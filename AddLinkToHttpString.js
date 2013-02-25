
//将字符串中的http地址转换为可点击的链接

String.prototype.addLinkToHttpString = function(){
        var reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
        return this.replace(reg, '<a href="$1$2">$1$2</a>');
};

var str = "将该字符串中的http地址转换为可点击的链接：https://github.com/zhaoxingjie/Js-functions";
alert(str.addLinkToHttpString());

