
//jQuery控制滚动条滚动到某个元素所在位置

function scrollToObject(){  
    $("html,body").animate({scrollTop: $("#object").offset().top}, 1000);   
}  
