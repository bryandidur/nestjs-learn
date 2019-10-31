import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('/products')
export class ProductController {
    constructor(protected readonly service: ProductService) {}

    @Get()
    list(): Product[] {
        return this.service.list();
    }

    @Get('/:id')
    find(
        @Param() params: { id: number }
    ): Product {
        return this.service.find(Number(params.id));
    }

    @Post()
    store(
        @Body() requestData: { name: string, price: number }
    ): Product {
        return this.service.store(requestData.name, requestData.price);
    }

    @Patch('/:id')
    update(
        @Param() params: { id: number },
        @Body() requestData: { name: string, price: number }
    ): Product {
        return this.service.update(Number(params.id), requestData.name, requestData.price);
    }

    @Delete('/:id')
    delete(
        @Param() params: { id: number }
    ): Product {
        return this.service.delete(Number(params.id));
    }
}
