import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class Ideas {
	heading= 'Flickr';
	images = [];
	url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=cake,sweet&tagmode=all&format=json';

	constructor(http){
		this.http = http;
	}

	activate() {
		this.http.jsonp(this.url).then(response => { 
			this.images = response.content.items;
		});
	}

}