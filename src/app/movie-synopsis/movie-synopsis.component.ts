import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * @description Component representing a dialog box displaying a movie synopsis
 * @selector: 'app-movie-synopsis'
 * @templateUrl: './movie-synopsis.component.html'
 * @styleUrls: ['./movie-synopsis.component.scss']
 */

@Component({
  selector: 'app-movie-synopsis',
  templateUrl: './movie-synopsis.component.html',
  styleUrls: ['./movie-synopsis.component.scss']
})
export class MovieSynopsisComponent implements OnInit {

  /**
   * Called when creating an instance of the class
   * @constructor
   * @param data pulled from Description key of movies array
   */

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      Description: string
    }
  ) { }

  ngOnInit(): void {
  }

}
