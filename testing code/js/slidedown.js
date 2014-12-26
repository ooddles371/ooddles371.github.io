$(document).ready(function() {
  $('div.demo-show:eq(1)> div:gt(0)').hide();  
  $('div.demo-show:eq(1)> h3').click(function() {
    $(this).next('div:hidden').slideDown('fast')
    .siblings('div:visible').slideUp('fast');
  });
});