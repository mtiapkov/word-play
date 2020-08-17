$(document).ready(function() {
  $("form#sentence").submit(function(event){
    const sentence = $("input#sentence").val();

    const array = [sentence]
    

    const shortArray = sentence.split(" ")
    let threeArray = []

    shortArray.forEach(function(element){
      if (element.length >= 3) {
        threeArray.push(element);
        
      }
    })
    threeArray.reverse();
    threeArray.join;
    $(".output").text(threeArray);
    

    event.preventDefault();
  })
})