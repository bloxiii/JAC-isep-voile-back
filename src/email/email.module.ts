import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'eduval@juniorisep.com',
          pass: 'zynfgcorzqfvqtth',
        }
      },
      defaults: {
        from: '"No Reply" <noreply@juniorisep.com>',
      }
    })
  ]
})
export class EmailModule {}
