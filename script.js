$(document).ready(function () {
  $('#calculate').click(function () {
    $('#fee')
      .text($('#age').val() * 5 + 300 + '$/per year')
      .fadeIn();
    console.log('calculate');
  });
  $('#clear').click(function () {
    $('#fee').fadeOut(1000);
    $('#age').val('');
    console.log('clear');
  });
});
