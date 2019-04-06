// Higgy's ultimate theme id copy tool
// April 6 2019


function themeDataGet(){
  // Let's make a sandwich.
  var balogna      = document.getElementsByClassName("bold__extension_hub-copy-hidden-input");
  var str = "";
  for (let item of balogna) {
    stringCheese += item.value;
  }
  return stringCheese;
}


function copyBoldShopID() {
  copy(() => );
}

copyDatafrom(themeDataGet);

javascript:(function(){var balogna = document.getElementsByClassName("bold__extension_hub-copy-hidden-input"); var stringCheese = ""; for (let item of balogna) { stringCheese += item.value; }; return stringCheese;})


const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

// function themeDataGet(){
//     var name = document.getElementsByClassName("bold__extension_hub-copy-hidden-input")[0].value;
//     var id = document.getElementsByClassName("bold__extension_hub-copy-hidden-input")[1].value;
//     themedata = name + " " + id;
//     return themedata;
// }
