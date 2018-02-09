function getTitle( document ) {
  // get the title of the document and return it
  ;
  //return document.getElementsByTagName("title")[0].innerHTML
  //we also could give an id to title tag and then access it with id; 
  return document.querySelector("title").innerHTML
};

function getNumberOfBikes( document ) {
  // get the number of bikes donated from the tag with id 'donation-count-alert'
  // convert it to an integer and return it
  // hint: look up how to get text from inside an element
  // at https://developer.mozilla.org/en-US/docs/Web/API/Element
   var n = document.getElementById('donation-count-alert').innerHTML;
  return parseInt(n); 
  //return document.querySelector("donation-count-alert")[0];

  // return Number(nOb)
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
  /*  //have to ask it from someone ! 

     //myWay
    /* var li = document.createElement("li");
    li.classList = 'nav-item';
    
    var link = document.createElement("a");
    link.classList = 'nav-link';
    link.innerHTML = "Code Your Future";
    link.setAttribute("href", "https://codeyourfuture.io/");
    li.appendChild(link);

    var parent = document.getElementsByClassName("nav-item")[0].parentElement;
    console.log(parent);
    parent.appendChild(li); */

    //Vik way
    /* var li = document.createElement("li");
    li.classList = 'nav-item';
    var link = document.createElement("a");
    link.classList = 'nav-link';
    link.innerHTML = "Code Your Future";
    link.setAttribute("href", "https://codeyourfuture.io/");
    li.appendChild(link);
    var parent = document.getElementsByClassName("nav-item");console.log(parent);
    parent[parent.length - 1].appendChild(li); */
  
 //mySmartWay
var list=document.querySelector('.navbar-nav' )
list.innerHTML += '<li class="nav-item"><a class="nav-link" href="https://codeyourfuture.io/">Code Your Future</a></li>';
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

/* //this is an exercise belongs to syllabus week08 
var myButton = document.querySelector(".buttons a");
myButton.addEventListener("click", function addSomething(e) {
    //console.log(e.textContent)
	var d= document.getElementById("donation-count-alert")
	d.innerHTML++;
	console.log(e.target);
  }) */
  
 /* // this is an exercise of syllabus week08
  var link=document.querySelectorAll("a")
link.forEach(function(e){
	e.addEventListener("click",function(g){
	 g.preventDefault();
	console.log(g.clientX,g.clientY);   
	})
}) */