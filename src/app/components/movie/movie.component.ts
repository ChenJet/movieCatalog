import { Component, OnInit, Input } from '@angular/core';
import { ColorsService } from '../../services/colors.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ColorsModalComponent} from '../modals/colors-modal/colors-modal.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() name = '';
  @Input() link = '';
  backgroundColor = '';
  subscription: Subscription = null;
  modalOptions: NgbModalOptions;

  constructor(private colorsService: ColorsService, private modalService: NgbModal) {
    this.modalOptions = {backdrop: 'static', backdropClass: 'customBackdrop', centered: true };
  }

  ngOnInit() {
    this.useMasterBackground();
  }

  openChangeColorModal() {
    this.modalService.open(ColorsModalComponent).result.then(result => {
      if (result !== '') { return this.useSelfBackground(result); }
      return this.useMasterBackground();
    }, () => {});
  }

  useSelfBackground(color) {
    this.subscription.unsubscribe();
    this.backgroundColor = color;
  }

  useMasterBackground() {
    if (!this.subscription || this.subscription.closed) {
      this.subscription = this.colorsService.masterColorChange.subscribe(color => this.backgroundColor = color);
    }
    this.backgroundColor = this.colorsService.masterBackgroundColor;
  }

}
