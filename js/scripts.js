$(document).ready(function() {
  $('#formDiv').submit(function(event){
    event.preventDefault();

    $('#formDiv').hide();

    var blanks = ['item1', 'item2', 'item3']

    var userItems = blanks.map(function(blank){
      return $("#"+blank).val();
    });

    alert(userItems);


    blanks.forEach(function(blank){
      var userItem = $('#'+blank).val();
    });
  
  
  });
});