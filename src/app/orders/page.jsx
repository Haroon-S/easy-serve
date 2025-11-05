"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetOrdersQuery } from "@/services/private/orders";

function ClientOrders() {
  const { data, isLoading, isFetching } = useGetOrdersQuery();
  const loading = isLoading || isFetching;

  if (loading) {
    return (
      <div className=" h-[600px] flex justify-center items-center">
        <div className="grid gap-4 ">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-40 w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!data?.results?.length) {
    return (
      <div className=" h-[600px] flex justify-center items-center">
        <Card className="text-center p-6">
          <CardTitle>No Orders Found</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            There are currently no orders available.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {data?.results?.map((order) => (
        <Card key={order.id} className="shadow-sm hover:shadow-md transition">
          <CardHeader className="flex justify-between">
            <CardTitle>
              Order #{order.id} — {order.billing_first_name}{" "}
              {order.billing_last_name}
            </CardTitle>
            <Badge
              variant={
                order.order_status === "COMPLETED"
                  ? "default"
                  : order.order_status === "TAKING"
                  ? "secondary"
                  : "outline"
              }
            >
              {order.order_status}
            </Badge>
          </CardHeader>

          <Separator />

          <CardContent>
            <div className="flex flex-wrap gap-3 text-sm mb-4">
              <Badge variant="outline">{order.order_type}</Badge>
              <Badge variant="outline">{order.payment_status}</Badge>
              {order.order_cancelled && (
                <Badge variant="destructive">Cancelled</Badge>
              )}
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item ID</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Comments</TableHead>
                  <TableHead>Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.order_items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.menu_item}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>{item.comments || "—"}</TableCell>
                    <TableCell>{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            <Separator className="my-3" />

            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Ordered on: {new Date(order.ordered_date).toLocaleString()}
              </p>
              <p className="font-medium text-right">
                Total: {order.total_price || "N/A"}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ClientOrders;
