import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { environment } from '@environments/environment'
import { IUser } from '../interfaces/user.interface'
import { firstValueFrom } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private http = inject(HttpClient)

  constructor() {}

  public async getUsers(): Promise<IUser[]> {
    const users$ = this.http.get<IUser[]>(`${environment.baseApiUrl}/users`)
    return await firstValueFrom(users$)
  }
}
