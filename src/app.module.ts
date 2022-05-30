import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://test:ZDZO8lc0iiyFz4XQ@cluster0.gl2js.mongodb.net/?retryWrites=true&w=majority',
    ),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
