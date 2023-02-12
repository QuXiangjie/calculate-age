$(document).ready(function () {
  $('#calculate').click(function () {
    $('#fee').text($('#age').val() * 5 + 300 + '$/per year');
    console.log('calculate');
  });
  $('#clear').click(function () {
    $('#fee').hide(1000);
    $('#age').val(' ');
    console.log('clear');
  });
});
