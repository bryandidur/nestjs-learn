import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
    protected items: Product[] = [];

    list(): Product[] {
        return [ ...this.items ];
    }

    find(id: number): Product {
        const product: Product = this.items.find((item: Product): boolean => item.id === id);

        if (! product) {
            throw new NotFoundException();
        }

        return { ...product };
    }

    store(name: string, price: number): Product {
        const id: number = parseInt((Math.random() * 100).toString());
        const product: Product = new Product(id, name, price);

        this.items.push(product);

        return { ...product };
    }

    update(id: number, name: string, price: number): Product {
        const index = this.getIndex(id);
        const product: Product = this.items[index];

        if (! product) {
            throw new NotFoundException();
        }

        product.name = name || product.name;
        product.price = price || product.price;

        return { ...product };
    }

    delete(id: number): Product {
        const index = this.getIndex(id);
        const product: Product = this.items[index];

        if (! product) {
            throw new NotFoundException();
        }

        this.items = this.items.filter((item: Product): boolean => item.id !== id);

        return product;
    }

    getIndex(id: number): number {
        for (let i = 0; i < this.items.length; i += 1) {
            if (this.items[i].id === id) return i;
        }

        return null;
    }
}
