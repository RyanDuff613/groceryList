$(document).ready(function() {
  $('#formDiv').submit(function(event){
    event.preventDefault();

    $('#formDiv').hide();

    var blanks = ['item1', 'item2', 'item3']
    var userItems = blanks.map(function(blank){
      return $("#"+blank).val();
    });
    
    userItems.sort();
    
    var outputItems = userItems.map(function(userItem){
      return userItem.toString().toUpperCase();
    });

    outputItems.forEach(function(outputItem) {
      $('#outputList').append('<li>' + outputItem + "</li>");
    });




  });
});