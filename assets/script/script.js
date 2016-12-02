$(document).ready( function() {
$('.item-life').click(function() {
window.location.href= 'life.html'; });
$('.item').click(function() {
window.location.href= 'index.html'; });
$('.item-bio').click(function() {
window.location.href= 'bio.html'; });
$('.item-life').hover(function() {
        $(this).css('cursor','pointer');
    });
$('.item').hover(function() {
        $(this).css('cursor','pointer');
    });
$('.item-bio').hover(function() {
        $(this).css('cursor','pointer');
    });
 





});