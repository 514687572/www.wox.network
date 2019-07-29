function copyContent(ElementObj){
    //获取点击的值
    var clickContent = ElementObj.innerText;
    //获取要赋值的input的元素
    var inputElement =  document.getElementById("copy_content");
    //给input框赋值
    inputElement.value = clickContent;
    //选中input框的内容
    inputElement.select();
    // 执行浏览器复制命令
    document.execCommand("Copy");
    //提示已复制
    alert('已复制');
}