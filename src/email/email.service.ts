import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class EmailService {
    constructor(private mailerService: MailerService) {}

    async sendEmail(to: string, subject: string, content:string) {
        await this.mailerService.sendMail({
            to:to,
            subject: subject,
            text: content,
        });
    }
}
