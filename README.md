# Data Scraping Example
We can use node and npm modules to scrape data off websites. This task is
necessary when you need to interact with data that hasn't been made available
in it's own well-formatted database. Data Scraping relies on extracting data
out of the semantic structure of HTML.

Imagine HTML we might have if we ran a radio station where we kept a page that
shows our listeners everything we've played. We might have HTML and CSS styled
something like this:

```html
<div id="playlist">
  <div class="radio-play">
    <div class="time">11:34 PM</div>
    <div class="artist">Weezer</div>
    <div class="track">Song</div>
    <div class="album">Weezer</div>
  </div>
  <div class="radio-play">
    <div class="time">11:38</div>
    <div class="artist">The Rolling Stones</div>
    <div class="track">Angie</div>
    <div class="album">Goats Head Soup</div>
</div>
```

Well. If we're in the browser with jQuery (or even Vanilla JavaScript) we know
it's trivially easy to select elements on the page by their classname and extract
their text content.

```js
var artistNames = $('.aritst').map(function(index, el) {
  return el.textContent;
});
```

It turns out we can do the same thing outside the browser with the help of node
and convenient modules. 

- *request* is a module that allows us to perform network requests and
  effectively download raw HTML data.
- *cheerio* is a module that describes itself as: "Tiny, fast, and elegant
  implementation of core jQuery designed specifically for the server." It
  takes in raw HTML as string data and allows us to manipulate it just as
  we manipulate the DOM in the browser.

We can use these libraries together to write programs that download webpages
and pick data out of them. Take a look at the code to see how it works!

## Licensing
All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

