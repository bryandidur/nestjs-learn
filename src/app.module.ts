import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
    imports: [
        ProductModule,
        MongooseModule.forRoot('mongodb+srv://bryan:tKAOyjmFmBCWrAIL@nestjs-puktl.mongodb.net/test?retryWrites=true&w=majority'),
    ],
    controllers: [],
    providers: [],
})

export class AppModule {}
