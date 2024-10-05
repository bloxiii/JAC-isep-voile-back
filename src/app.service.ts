import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGreetings(name: string, email: string): string {
    return `Hello ${name}! Your email is ${email}`;
  }
}
