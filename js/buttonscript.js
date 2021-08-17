function clickHandler(buttonId, cName){
    var elements = document.getElementsByClassName(cName);
    var visibleStatus = false;
    for (var i = 0; i < elements.length; i++){

      if (elements[i].style.display == "block"){
        elements[i].style.display = "none";
        var visibleStatus = false;
      }
      else {
        elements[i].style.display = "block";
        var visibleStatus = true;
      }

  }
  //if the content is now visible
  if (visibleStatus){
    document.querySelector(buttonId).innerHTML = 'Hide';
  }
  //if the content is no longer visible
  else {
    document.querySelector(buttonId).innerHTML = 'Click Me!';
  }

}
