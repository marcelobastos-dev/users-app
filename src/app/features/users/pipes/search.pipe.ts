import { Pipe, PipeTransform } from '@angular/core'
import { IUser } from '../interfaces/user.interface'

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(users: IUser[], name: string): IUser[] {
    if (!name) {
      return users
    }

    if (!users) {
      return []
    }

    return users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    )
  }
}
