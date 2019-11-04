import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
    public constructor(@InjectModel('Product') protected readonly model: Model<Product>) {}

    public async list(): Promise<Product[]> {
        return await this.model.find();
    }

    public async find(id: string): Promise<Product> {
        let product: Product;

        try {
            product = await this.model.findById(id);
        } catch (error) {
            //
        }

        if (! product) {
            throw new NotFoundException();
        }

        return product;
    }

    public async store(name: string, price: number): Promise<Product> {
        const product: Product = new this.model({
            name,
            price,
        });

        await product.save();

        return product;
    }

    public async update(id: string, name: string, price: number): Promise<Product> {
        const product: Product = await this.find(id);

        product.name = name || product.name;
        product.price = price || product.price;

        await product.save();

        return product;
    }

    public async delete(id: string): Promise<Product> {
        const product: Product = await this.find(id);

        await this.model.deleteOne({ _id: product._id });

        return product;
    }
}
