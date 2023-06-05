import { Module } from '@nestjs/common';


import { OrderModule } from '../order/order.module';
import { DatabaseModule } from 'src/database/database.module';

import { CartController } from './cart.controller';
import { CartService } from './services';


@Module({
  imports: [ OrderModule, DatabaseModule ],
  providers: [ CartService ],
  controllers: [ CartController ]
})
export class CartModule {}
