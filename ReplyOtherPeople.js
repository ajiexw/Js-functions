
//将光标移到textarea区域内文本的最后
function moveEnd(textarea){   
    if($.browser.msie){
        var rng = textarea.createTextRange();
        rng.text = textarea.value;
        rng.select();
        rng.collapse(false);
    }else{
         textarea.select();
         window.getSelection().collapseToEnd();
    }
};


//点击按钮后，鼠标焦点移动到回复框textarea内文本后面
function ReplyOtherPeople(user_name){
    var textarea = $("textarea[name=reply_content]");
    old_val = textarea.val();

    if(old_val){
        new_val = old_val + "\n@" + user_name +" ";
    }else{
        new_val = "@" + user_name +" ";
    }

    textarea.val(new_val);
    moveEnd(textarea);
}

