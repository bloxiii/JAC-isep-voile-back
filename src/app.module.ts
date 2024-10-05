import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EmailModule } from './email/email.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user/user.service';
import { User } from './user/entities/user.entity';

@Module({
  imports: [ EmailModule,
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Giovanni60',
      database: 'jac',
      entities: [User],
      synchronize: true,
    }), UserModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
