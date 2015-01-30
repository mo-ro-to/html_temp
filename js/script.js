/**
 *	js
 */

//console.log();

(function($){

$(document).ready(function (){

});

// 読み込み完了
$(window).load(function() {
	// # で始まるリンクにスムーススクロール
	$('a[href^=#]').click(function() {
		var speed = 400;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

// リサイズ
$(window).resize(function() {

});

})(window.jQuery);

// Retina Display時
if(window.devicePixelRatio == 2){
	//for Retina Display
}