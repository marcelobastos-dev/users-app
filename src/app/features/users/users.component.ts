import { afterNextRender, Component, inject, signal } from '@angular/core'
import { SearchFormComponent } from './components/search-form/search-form.component'
import { UserListComponent } from './components/user-list/user-list.component'
import { IUser } from './interfaces/user.interface'
import { SearchPipe } from './pipes/search.pipe'
import { UsersService } from './services/users.service'

@Component({
  selector: 'app-users',
  imports: [SearchPipe, SearchFormComponent, UserListComponent],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  private usersService = inject(UsersService)
  public users = signal<IUser[]>([])
  public searchName = signal<string>('')

  constructor() {
    afterNextRender(() => {
      this.getUsers()
    })
  }

  private async getUsers() {
    try {
      const users = await this.usersService.getUsers()
      this.users.set(users)
    } catch (error) {
      console.error(error)
    }
  }

  public onSearchName(searchName: string) {
    this.searchName.set(searchName)
  }
}
