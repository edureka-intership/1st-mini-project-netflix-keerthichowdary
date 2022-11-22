function myfaq(id) {
  //   console.log("I am faq");
  //   console.log(id);
  var res = "faq-ans-" + id;
  //   console.log(res);
  // console.log("I am at faq1");
  //   console.log(id);
  var x = document.getElementById(res);
  var res1 = "faq-btn-" + id;
  var symbol = document.getElementById(res1);
  var res2 = "cross" + id;
  var cross = document.getElementById(res2);
  if (x.hidden === true) {
    x.hidden = false;
    symbol.hidden = true;
    cross.hidden = false;
  } else {
    x.hidden = true;
    symbol.hidden = false;
    cross.hidden = true;
  }
}
