import { useOrderStore } from "@/store/order-store";
import { notFound } from "next/navigation";
import { OrderDetailsClient } from "./OrderDetailsClient";

interface OrderDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderDetailsPage({
  params,
}: OrderDetailsPageProps) {
  const { id } = await params;
  const { orders } = useOrderStore.getState();
  const order = orders.find((o) => o.id === id);

  if (!order) {
    notFound();
  }

  return <OrderDetailsClient order={order} />;
}
