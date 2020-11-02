import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Places to Visit';
  image1 = 'https://explorestlouis.com/wp-content/uploads/2013/03/Citygarden.jpg';
  image2 = 'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/50/15/ff.jpg';
  image3 = 'https://media2.fdncms.com/riverfronttimes/imager/u/original/2568521/laumeier11.jpg';

  constructor() { }

  ngOnInit() {
  }

}