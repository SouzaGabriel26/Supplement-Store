"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/lib/types";
import { useCartStore } from "@/store/cart-store";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {products.map((product) => (
        <Card
          key={product.id}
          className="overflow-hidden transition-all hover:shadow-lg"
        >
          <Link href={`/products/${product.id}`} className="block">
            <CardHeader className="p-0">
              <div className="relative h-60">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
          </Link>
          <CardContent className="p-4">
            <Link href={`/products/${product.id}`} className="block">
              <CardTitle className="text-lg font-semibold truncate">
                {product.name}
              </CardTitle>
              <CardDescription className="mt-2 text-sm text-gray-500 h-10 overflow-hidden text-ellipsis">
                {product.description}
              </CardDescription>
            </Link>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            <Button
              onClick={() => {
                addToCart(product.id);
                toast.success(`${product.name} added to cart!`);
              }}
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
