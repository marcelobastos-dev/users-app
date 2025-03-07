import { Component, inject, output } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-search-form',
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
})
export class SearchFormComponent {
  public searchName = output<string>()

  public searchForm!: FormGroup
  private fb = inject(FormBuilder)

  constructor() {
    this.buildSearchForm()
  }

  private buildSearchForm(): void {
    this.searchForm = this.fb.group({
      name: [''],
    })

    this.searchForm.get('name')?.valueChanges.subscribe((value) => {
      this.searchName.emit(value)
    })
  }
}
