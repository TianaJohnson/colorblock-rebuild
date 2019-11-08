$(document).ready(readyNow);

    console.log('DOM ready');

    countPink = 0;
    countBlue = 0;
    countGreen = 0;
    countYellow = 0;

function readyNow(){
    $('#PinkButton').on('click', pinkClickCount );
    $('#BlueButton').on('click', blueClickCount );
    $('#GreenButton').on('click', greenClickCount );
    $('#YellowButton').on('click', yellowClickCount );

}

function pinkClickCount(){
    countPink += 1;
  console.log( countPink );
  $('.colored-blocks').append( '<div class="Pink-Block"></div>');
  $('#pinkNum').html('<p>' + 'Pink Count:' + countPink + '</p>');
}

function blueClickCount(){
    countBlue += 1;
  console.log( countBlue );
  $('.colored-blocks').append( '<div class="Blue-Block"></div>');
  $('#blueNum').html('<p>' + 'Blue Count:' + countBlue + '</p>');
}


function greenClickCount(){
    countGreen += 1;
  console.log( countGreen );
  $('.colored-blocks').append( '<div class="Green-Block"></div>');
  $('.colored-blocks').append('<p>' + 'Green Count:' + countGreen + '</p>');
}

function yellowClickCount(){
    countYellow += 1;
  console.log( countYellow );
  $('.colored-blocks').append( '<div class="Yellow-Block"></div>');
  $('.colored-blocks').append( '<p>' + 'Yellow Count:' + countYellow + '</p>');
}
