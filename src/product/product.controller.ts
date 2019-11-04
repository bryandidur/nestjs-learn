import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('/products')
export class ProductController {
    constructor(protected readonly service: ProductService) {}

    @Get()
    public async list(): Promise<Product[]> {
        return await this.service.list();
    }

    @Get('/:id')
    public async find(
        @Param() params: { id: string }
    ): Promise<Product> {
        return await this.service.find(params.id);
    }

    @Post()
    public async store(
        @Body() requestData: { name: string, price: number }
    ): Promise<Product> {
        return await this.service.store(requestData.name, requestData.price);
    }

    @Patch('/:id')
    public async update(
        @Param() params: { id: string },
        @Body() requestData: { name: string, price: number }
    ): Promise<Product> {
        return await this.service.update(params.id, requestData.name, requestData.price);
    }

    @Delete('/:id')
    public async delete(
        @Param() params: { id: string }
    ): Promise<Product> {
        return await this.service.delete(params.id);
    }
}
