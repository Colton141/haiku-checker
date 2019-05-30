// require('exports-loader?file!./bootstrap/js/dist/.js')
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
$(document).ready(function() {
  let firstFive = ($("#firstLine").val()).split(' ');
  let firstSeven = $("#secoundLine").val();
  let secondFive = $("#thirdLine").val();

  //checks from haiku run then display if it is a haiku or not .... ie if statements or switches?


  for(let i = 0; i < firstFive.length; i++){
    if (firstFive[i] )
  }
});
