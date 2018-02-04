const functions = require('../src/functions');
const fs = require('fs');
const jsdom = require("jsdom");

const { JSDOM } = jsdom;
const html = fs.readFileSync('index.html', 'utf8');

test('Title', () => {
  const { window } = new JSDOM( html );
  const title = functions.getTitle( window.document );
  expect( title ).toEqual( 'Bikes for Refugees | Scotland' );
});

test('Number of bikes donated', () => {
  const { window } = new JSDOM( html );
  const numbers = functions.getNumberOfBikes( window.document );
  expect( numbers ).toEqual( 72 );
});

test('Button text', () => {
  const { window } = new JSDOM( html );
  const labels = functions.getAllButtonText( window.document );
  expect( labels ).toEqual(['Donate Now', 'Donate a bike today', 'Volunteer']);
});

test('getNavLinksText', () => {
  const { window } = new JSDOM( html );
  const labels = functions.getNavLinksText( window.document );
  expect( labels ).toEqual(['Home', 'About Us', 'News & Events', 'Contact Us', 'Donate Now']);
});

test('Add dashes', () => {
  const { window } = new JSDOM( html );
  functions.addDashesToLinks( window.document );
  const result = [];
  window.document.querySelectorAll('.nav-link').forEach( el => {
    result.push( el.textContent );
  });
  expect( result ).toEqual(['-Home-', '-About Us-', '-News & Events-', '-Contact Us-']);
});

test('Italic titles', () => {
  const { window } = new JSDOM( html );
  functions.italicTitles( window.document );
  const result = [];
  window.document.querySelectorAll('.article-title a').forEach( el => {
    result.push( el.innerHTML );
  });
  expect( result ).toEqual(['<i>Join us for our Spring fundraisers</i>', '<i>Bike dropoff event in Edinburgh on May 11</i>', '<i>Help us cycle 4,797km</i>' ]);
});

test('Green links', () => {
  const { window } = new JSDOM( html );
  functions.greenLinks( window.document );
  const result = [];
  window.document.querySelectorAll('.article-read-more a').forEach( el => {
    result.push( el.style.color );
  });
  expect( result ).toEqual([ 'green', 'green' ]);
});

test('Add link', () => {
  const { window } = new JSDOM( html );
  functions.addLink( window.document );

  const result = [];
  const links = window.document.querySelectorAll('.nav-item');
  const lastLink = [ ...links ].pop();
  expect( lastLink.outerHTML ).toEqual('<li class="nav-item"><a class="nav-link" href="https://codeyourfuture.io/">Code Your Future</a></li>');
});







