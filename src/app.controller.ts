import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginResponse } from './model/LoginResponse';
import { UserService } from './user/user.service';
import { User } from './user/entities/user.entity';
import { resolve } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, 
    private userService: UserService
  ) {}

  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }

  
  
  @Get('/login')
  async getLogin(@Query('user') userFromFront: string, @Query('password') passwordFromFront: string): Promise<User> {

    let returnUser = null;
    await this.userService.findAll().then( res => { 
      console.log("nombre de users", res.length);
      res.forEach( myUser => {
          if (myUser.email === userFromFront) {
            console.log("password de la base", myUser.password);
            console.log("passwor du front", passwordFromFront)
              if (myUser.password === passwordFromFront) {
                console.log(" c super !!");
                var loginResponse : LoginResponse = new LoginResponse();
                loginResponse.user = myUser.email;
                console.log("je sors normalement");
                returnUser = myUser;
              } 
          }
      });
    }, err => {
      resolve(null);
    });

    if (returnUser == null) {
      throw new Error('not a valid user'); 
    }
    return returnUser;
    
  //return loginResponse;

    /*if (user === 'eduval@juniorisep.com' && password === 'motdepasse') {
      var loginResponse : LoginResponse = new LoginResponse();
      loginResponse.user = user;
      return loginResponse;
    } else {
      throw new Error('not a valid user');
    } */ 
    
  }

  @Get('/greetings')
  getGreetings(@Query('name') name: string, @Query("email") email: string): string {
    return this.appService.getGreetings(name, email);
  } 
}
