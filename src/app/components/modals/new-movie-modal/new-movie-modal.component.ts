import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-movie-modal',
  templateUrl: './new-movie-modal.component.html',
  styleUrls: ['./new-movie-modal.component.scss']
})
export class NewMovieModalComponent implements OnInit {

  showError = false;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close(result ) {
    if (!result.name || !result.link) {return this.showError = true; }
    this.activeModal.close(result);
  }

}
