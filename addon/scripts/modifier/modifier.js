var url = document.documentURI;


function updateDiv(elem) {
  if(elem && elem.openOrClosedShadowRoot) {
    var d = elem.openOrClosedShadowRoot.querySelectorAll('div');
    d.forEach(function(e) {
      e.innerHTML = '';
    });
  };
};

function updateDivs(elems) {
  elems && elems.forEach(function(elem) {
    updateDiv(elem);
  });
};

function removeDiv(elem) {
  if(elem) {
    elem.remove();
  };
};

if (url.includes('censor.net') || url.includes('gagadget.com')) {
  
  setTimeout(function(){
    
    debugger;

    var h = document.body.querySelector('header');
    updateDiv(h);

    var d = document.body.querySelectorAll('div');
    updateDivs(d);

    var p = document.body.querySelectorAll('p');
    updateDivs(p);

    var s = document.body.querySelectorAll('section');
    updateDivs(s);

  //  document.body.style.border = "5px solid red";

  }, 750);

};

if (url.includes('glavnoe.ua') || url.includes('gagadget.com')) {

  var p = document.querySelector("div.headed-block.padded");
  removeDiv(p);

  var y = document.querySelector("div.after-news-ads#yottos");
  removeDiv(y);

  var d = document.querySelector('div[id="yottos"]');
  removeDiv(d);

}

if (url.includes('petrimazepa.com')) {

  
  setTimeout(function(){

    debugger;

    var p = document.querySelector("table tbody");
    removeDiv(p);

  }, 750);

}
