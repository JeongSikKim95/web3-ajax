var links = {
  setColor : function(color) {
    // var aList = document.querySelectorAll('a');
    // var i = 0;
    // while(i < aList.length){
    //   aList[i].style.color = color;
    //   i = i + 1;
    // }

    $('a').css('color', color);
  }
}

var body = {
  setColor: function(color) {
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  setBackgroundColor: function(color) {
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('background', color);
  }
}

function nightDayHandler(self){
  if(self.value === 'night') {
    body.setBackgroundColor('black');
    body.setColor('powderblue');
    self.value = 'day';
    links.setColor('powderblue');

  } else {
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';

    links.setColor('black');
  }
}
