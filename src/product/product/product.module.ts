import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../schemas/product.schema';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),

    // ClientsModule.register([
    //   {
    //     name: 'GREETING_SERVICE',
    //     transport: Transport.kafka,
    //     options: {
    //       url: 'kafka://localhost:6379',
    //     },
    //   },
    // ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
