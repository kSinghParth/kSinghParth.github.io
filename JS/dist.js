$(function () {

	$("body").paroller();
	$("#comp2").paroller({ factor: '1.0', type: 'foreground', direction: 'horizontal' });
	$(".codesnip").paroller({ factor: '0.1', type: 'foreground', direction: 'horizontal' });
  	$("#logo").paroller({ factor: '-0.2', type: 'foreground' });
  	$(".bkgmove").paroller({factor:'0.3',type:'foreground',direction:'vertical'});
	$("#comp0 img").paroller({ factor: '-0.7', type: 'foreground', direction: 'horizontal' });
	$("h1").paroller({ factor: '0.5', type: 'foreground'});
	$("header.secscreen").paroller({ factor: '-1.7', type: 'foreground', direction: 'horizontal' });
	$("footer.secscreen").paroller({ factor: '-0.3', type: 'foreground', direction: 'horizontal' });
	$(".block:odd").paroller({ factor: '0.2', type: 'foreground', direction: 'horizontal' });
	$(".block:even").paroller({ factor: '-0.2', type: 'foreground', direction: 'horizontal' });
	$("#Work").paroller({ factor: '0', type: 'foreground', direction: 'horizontal' });
});