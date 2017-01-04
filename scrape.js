var cheerio = require('cheerio');
var request = require('request');

var URL = 'http://kexp.org/playlist';

/*
Here's what the HTML looks like:
We're going to target elements with specific ClassNames in order to scrape info
off this page. "AristName" and "TrackName" are great. 

<div class="TableRow">
	<div class="ArtistName"><a href="/search?q=Patti Smith" title="Learn more about Patti Smith">Patti Smith</a></div>
	<div class="TrackName">Gloria</div>
	<div class="ReleaseMetadata">
		<div class="ReleaseName">Horses</div>
		<div class="ReleaseAndLabel">Released in <span class="ReleaseEventDate">1975</span> by <span class="LabelName">Arista</span></div>
		<div class="PlayAttributes">
			<div class="buylink"><img class="IsPurchasable" src="/Resources/Images/Buy.gif" title="Purchase This Track" alt="Buy!" style="display: inline;"><div class="buymenu_div"><em>Select a store:</em><ul><li><a href="http://www.amazon.com/s?tag=kexponline-20&amp;index=music&amp;keywords=Horses%20-%20Patti Smith" class="buylink-sm" target="Amazon">Amazon</a></li><li><a href="http://www.amazon.com/s/ref=nb_sb_noss?tag=kexponline-20&amp;url=search-alias%3Ddigital-music&amp;x=0&amp;y=0&amp;field-keywords=Horses%20-%20Patti Smith" class="buylink-sm" target="Amazon_MP3">Amazon MP3</a></li></ul></div></div>
			<div class="IsLocal">Northwest Artist!</div>
			<div class="IsRequest"><img src="/Resources/Images/User.png" title="Request" alt="Listener Request"></div>
		</div>
	</div>
</div>
 */

request(URL, function(error, response, data) {
	// load the entire HTML into cheerio
  var $ = cheerio.load(data);

	// search for every div with an AristName class
  var artists = $(".ArtistName");

	// iterate through the list of found artists
  artists.each(function(index, artist) {
    // the each function gives us the raw HTML element.
	  // convert the element back to a cheerio
    artist = $(artist);

		// Notice the .TrackName div is right next to our AristName div. Divs next
    // to each other are called siblings. Cheerio docs describe the 'next()'
    // method as: Gets the next sibling of the first selected element. Convenient.
    track = artist.next();

		// Print the results!
    console.log("Arist:", artist.text());
    console.log(" Song:", track.text());
    console.log();
  });
});
