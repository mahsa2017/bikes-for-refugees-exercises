function getTitle( document ) {
  // get the title of the document and return it
  ;
  return document.getElementsByTagName("title")[0].innerHTML
  //we also could give an id to title tag and then access it with id; 
};

function getNumberOfBikes( document ) {
  // get the number of bikes donated from the tag with id 'donation-count-alert'
  // convert it to an integer and return it

  // hint: look up how to get text from inside an element
  // at https://developer.mozilla.org/en-US/docs/Web/API/Element

  var n = document.getElementById('donation-count-alert').innerHTML;
  return parseInt(n);
};

function getAllButtonText( document ) {
  // get the text inside all tags with class 'btn' and return as an array of strings
  
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
  // also you may want to convert the HTMLCollection to an array
  var str='';
  var newArr=[];
  var bText=document.getElementsByClassName('btn');//console.log(bText)
  for (var i = 0; i < bText.length; i++) {
    var classText = bText[i].textContent; //console.log(classText);
    str=classText.trim();
    newArr.push(str);
  }
  return newArr;
};

function getNavLinksText( document ){
  // get the text content of all 'A' tags inside element with id 'navbarSupportedContent'
  // reuturn as an array of strings
  var newArr=[];
  var navBar=document.getElementById('navbarSupportedContent');
  var res=navBar.getElementsByTagName('a');
  var str=''
  for(var i=0;i<res.length;i++){
    str=res[i].textContent.trim();
    newArr.push(str);
  }
  //console.log(typeof res)
  return newArr;
}

function addDashesToLinks( document ){
  // surround the text in navigation bar links with '-'
  // no return needed
  var links=document.querySelectorAll('.nav-link');
  links.forEach(function(item){
    item.textContent='-'+item.textContent+'-';
  })
}

function italicTitles( document ){
  // convert links in 'Upcoming Events' section to italic using `<i>` tag
  // no return needed
  /* var italic=document.getElementsByClassName(".articles")
  for(var i=0; i< italic.length;i++)
    {
      italic.textContent= "<i>" + italic.textContent + "</i>";
    }
   */
/*   const result = [];
  var italy=document.querySelectorAll('.article-title a')
  italy.forEach( l => 
    result.push('<i>' +l.innerHTML+'</i>' )); */
    var italicLinks=document.querySelectorAll('.article-title a');
    italicLinks.forEach(function(item){
      item.innerHTML='<i>'+item.innerHTML+'</i>';
    })
    

  }
function greenLinks( document ){
  // make `Learn more` links green
  // no return needed
  var greenLinks=document.querySelectorAll('.articles a');
    greenLinks.forEach(function(item){
      item.style.color = "green";
    })
}

function addLink( document ){
  // Using `createElement` etc. create a new navbar item link 'Code Your Future' which links to
  // `https://codeyourfuture.io/`. It should have same structure as the other links
  // no return needed
  
}

module.exports = {
  getTitle,
  getNumberOfBikes,
  getAllButtonText,
  getNavLinksText,
  addDashesToLinks,
  italicTitles,
  greenLinks,
  addLink
};
