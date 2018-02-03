function getTitle( document ) {
  // get the title of the document and return it
  ;
  return document.getElementsByTagName("title")[0].innerHTML
};

function getNumberOfBikes( document ) {
  // get the number of bikes donated from the tag with id 'donation-count-alert'
  // convert it to an integer and return it

  // hint: look up how to get text from inside an element
  // at https://developer.mozilla.org/en-US/docs/Web/API/Element

  var n=window.document.getElementById('donation-count-alert')
  return n.parseInt();
};

function getAllButtonText( document ) {
  // get the text inside all tags with class 'btn' and return as an array of strings
  
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
  // also you may want to convert the HTMLCollection to an array
  var bText= window.document.getElementsByClassName('btn')
  return bText.toString();
};

function getNavLinksText( document ){
  // get the text content of all 'A' tags inside element with id 'navbarSupportedContent'
  // reuturn as an array of strings
  var navBar=window.document.getElementById('navbarSupportedContent');
  var res=navBar.window.document.getElementsByTagName('A').innerHTML
  return res.toString();
}

function addDashesToLinks( document ){
  // surround the text in navigation bar links with '-'
  // no return needed

}

function italicTitles( document ){
  // convert links in 'Upcoming Events' section to italic using `<i>` tag
  // no return needed
}

function greenLinks( document ){
  // make `Learn more` links green
  // no return needed
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
