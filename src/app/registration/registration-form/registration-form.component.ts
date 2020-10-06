import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  @Input() badge: any;
  @Input() index: number;
  @Output() formChange = new EventEmitter<any>();
  form: FormGroup;
  types: [
    {
      name: 'Forum delegate',
      value: 'forum'
    },
    {
      name: 'Online delegate',
      value: 'online'
    }
  ];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      selected: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      industry: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
    });
    this.form.setValue({
      selected: this.badge.selected,
      firstName: this.badge.firstName,
      lastName: this.badge.lastName,
      company: this.badge.company,
      industry: this.badge.industry,
      phone: this.badge.phone,
      email: this.badge.email,
  });
    this.form.valueChanges
      .subscribe(val => {
        this.badge.firstName = this.form.value.firstName;
        this.badge.lastName = this.form.value.lastName;
        this.badge.company = this.form.value.company;
        this.badge.selected = this.form.value.selected;
        this.badge.phone = this.form.value.phone;
        this.badge.email = this.form.value.email;
        this.badge.industry = this.form.value.industry;
        this.formChange.emit(this.badge);
      });
  }

}
