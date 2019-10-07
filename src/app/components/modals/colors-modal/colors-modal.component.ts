import { Component, OnInit } from '@angular/core';
import {ColorsService} from '../../../services/colors.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-colors-modal',
  templateUrl: './colors-modal.component.html',
  styleUrls: ['./colors-modal.component.scss']
})
export class ColorsModalComponent implements OnInit {

  colorsArray = [];

  constructor(private colorsService: ColorsService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.colorsArray = this.colorsService.colorsArray;
  }
}
