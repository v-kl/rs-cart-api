import { Module } from '@nestjs/common';

import { UsersService } from './services';
import { DatabaseModule } from 'src/database/database.module';
@Module({
  providers: [UsersService, DatabaseModule],
  exports: [UsersService],
})
export class UsersModule {}
