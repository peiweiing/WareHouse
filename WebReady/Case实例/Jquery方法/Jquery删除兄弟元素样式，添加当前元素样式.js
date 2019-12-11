$(function () {

    $("#test li").click(function () {

        $(this).siblings('li').removeClass('xiahuaxian');  // 删除其他兄弟元素的样式

        $(this).addClass('xiahuaxian'); // 添加当前元素的样式

    });

});