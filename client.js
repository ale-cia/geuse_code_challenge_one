

$(document).ready(function(){
   var counter = 0;
  $('button').on('click',function(){
    counter++;
    //Appends div, p and buttons to div. Also increments count with each div
     $('.container').append('<div>' + '<p>' + counter + '</p>' +
     '<button class="swap">Swap</button>' +
        '<button class="delete">Delete</button>'  + '</div>');

      //When button is clicked, delete div
      $('.delete').on('click', function(){
        $(this).closest('div').remove();

        //Change div color from red to yellow using toggleClass
        $(".swap").click(function(){
          $(this).toggleClass("yellow");

          }); //swap listener

        });//delete listener
      }); //button
 }); //doc ready
