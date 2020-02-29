import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DefectTypes } from '../shared/models/defect-types.interface';
import { DefectService } from '../shared/services/defect.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public defectForm = new FormGroup({
    xcoordinate: new FormControl(''),
    ycoordinate: new FormControl(''),
    zcoordinate: new FormControl(''),
    defectType: new FormControl(''),
    comment: new FormControl('')
  });

  public defectTypes: DefectTypes[] = [
    {value: 'D', viewValue: 'Delamination'},
    {value: 'P', viewValue: 'Porosity'},
    {value: 'C', viewValue: 'Crack'}
  ];

  constructor(private defectService: DefectService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const defect = {
      xcoordinate: this.defectForm.value.xcoordinate,
      ycoordinate: this.defectForm.value.ycoordinate,
      zcoordinate: this.defectForm.value.zcoordinate,
      defecttype: this.defectForm.value.defectType,
      comment: this.defectForm.value.comment
    };
    this.defectService.postDefect(defect).subscribe((defect) => {
      console.log(defect);
    });
  }

}
