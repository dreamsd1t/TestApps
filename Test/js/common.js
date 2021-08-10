/*select*/
$(document).ready(function(){
	"use strict";
	$("select").styledSelect();
});



/*placeholder*/
$(document).ready(function(){
	"use strict";
    $('.placeholder').autoClear();
});




/* 탭 메뉴*/
$( document ).ready(function() {
	"use strict";
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $(".tabs ul li").click(function () {
        $(".tabs ul li").removeClass("active");
        $(this).addClass("active");
        $(".tab_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
		return false;
    });
});
