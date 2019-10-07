import { Component, OnInit } from '@angular/core';
import {ColorsService} from '../../services/colors.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ColorsModalComponent} from '../modals/colors-modal/colors-modal.component';
import {NewMovieModalComponent} from '../modals/new-movie-modal/new-movie-modal.component';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  movies = [];
  backgroundColor = '';
  modalOptions: NgbModalOptions;

  constructor(private colorsService: ColorsService, private modalService: NgbModal) {
    this.modalOptions = {backdrop: 'static', backdropClass: 'customBackdrop', centered: true };
  }

  ngOnInit() {
    this.backgroundColor = this.colorsService.masterBackgroundColor;
  }

  openChangeColorModal() {
    this.modalService.open(ColorsModalComponent).result.then(result => {
      if (result !== '') {
        this.colorsService.masterBackgroundColor = result;
        this.backgroundColor = this.colorsService.masterBackgroundColor;
      }
    }, () => {});
  }

  openNewMovieModal() {
    this.modalService.open(NewMovieModalComponent).result.then(result => this.movies.push(result), () => {});
  }


}
