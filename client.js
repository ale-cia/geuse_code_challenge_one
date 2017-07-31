// console.log("JS");
var count = 0;
 $('p').on('click', function(){
    
 });

$(document).ready(function(){
  $('button').on('click',function(){
     $('.container').append('<div></div>');
      $('.container').append('<p class="count">' + '</p>');
      $('.count').on('click', function(){

      });
      //Append button with the class swap the the div
      $('div').append('<button class="swap">Swap</button>');

      //Append delete button with the class swap the the div
      $('div').append('<button class="delete">Delete</button>');

      //When button is clicked, delete button
      $('.delete').on('click', function(){
        $(this).closest('div').remove();

        //Change div color from red to yellow using toggle class
        $(".swap").click(function(){
          $(this).toggleClass("yellow");
        //  $('.swap').on('click', function(){
        //    $(this).toggle("yellow");
         });
        // $('button').on('click', '.swap',function(){
        //   $(this).toggleClass("yellow");
        });
      });



  //  });

 });
