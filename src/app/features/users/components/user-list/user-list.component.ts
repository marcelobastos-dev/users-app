import { Component, input } from '@angular/core'
import { IUser } from '@features/users/interfaces/user.interface'
import { CardComponent } from '@shared/ui/components/card/card.component'

@Component({
  selector: 'app-user-list',
  imports: [CardComponent],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  public users = input.required<IUser[]>()
}
