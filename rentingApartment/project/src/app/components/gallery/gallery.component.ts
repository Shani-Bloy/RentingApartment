import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  images = [
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(145).webp', description: 'Image 1' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(150).webp', description: 'Image 2' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(152).webp', description: 'Image 3' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(42).webp', description: 'Image 4' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(151).webp', description: 'Image 5' },
    { img: 'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).webp', thumb:
    'https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(40).webp', description: 'Image 6' },
  
  ];

    
}
