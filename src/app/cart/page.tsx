"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Minus, Plus, ArrowLeft, Lock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const subtotal = useCartStore((s) => s.subtotal());
  const shipping = useCartStore((s) => s.shipping());
  const tax = useCartStore((s) => s.tax());
  const discount = useCartStore((s) => s.discount());
  const total = useCartStore((s) => s.total());
  const promoCode = useCartStore((s) => s.promoCode);
  const promoDiscount = useCartStore((s) => s.promoDiscount);
  const applyPromo = useCartStore((s) => s.applyPromo);
  const removePromo = useCartStore((s) => s.removePromo);

  const [promoInput, setPromoInput] = useState("");

  const handleApplyPromo = () => {
    if (promoInput.trim()) {
      applyPromo(promoInput.trim());
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -80, transition: { duration: 0.3 } },
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="h-8 w-8 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Your shopping bag is empty</h2>
          <p className="text-muted-foreground mb-8">Looks like you haven&apos;t added anything yet.</p>
          <Link href="/categories">
            <Button className="bg-slate-900 hover:bg-slate-800 text-white px-8 cursor-pointer">
              <ArrowLeft className="mr-2 h-4 w-4" /> Continue Shopping
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-1">
          Your Selection
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Shopping Bag
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-2"
        >
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-slate-200 mb-6 text-xs font-semibold text-slate-500 uppercase tracking-wider">
            <div className="col-span-5">Garment Detail</div>
            <div className="col-span-2">Size / Color</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-3 text-right">Subtotal</div>
          </div>

          <AnimatePresence mode="popLayout">
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-slate-100 items-center"
              >
                <div className="md:col-span-5 flex gap-4 items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-muted rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    {item.category && (
                      <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                        {item.category}
                      </p>
                    )}
                    <h3 className="font-bold text-slate-900 text-sm md:text-base leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-slate-700 mt-1">
                       {item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="md:col-span-2 text-sm text-slate-500">
                  <span className="md:hidden font-semibold text-slate-700 mr-2">Size/Color:</span>
                  One Size / Default
                </div>

                <div className="md:col-span-2 flex items-center justify-start md:justify-center">
                  <span className="md:hidden font-semibold text-slate-700 mr-2">Qty:</span>
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="w-9 h-9 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600 cursor-pointer"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="w-9 h-9 flex items-center justify-center text-sm font-semibold border-x bg-slate-50">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-slate-100 transition-colors text-slate-600 cursor-pointer"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
                  <div>
                    <span className="md:hidden font-semibold text-slate-700 mr-2">Subtotal:</span>
                    <span className="font-bold text-slate-900">
                       {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-slate-400 hover:text-destructive transition-colors cursor-pointer"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="/categories"
              className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-primary transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 mr-2" /> Continue Shopping Catalog
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <Card className="p-6 border-slate-200 shadow-lg bg-white">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h3>

            <div className="flex gap-2 mb-6">
              <Input
                placeholder="cupon code"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                className="bg-slate-50 text-sm"
              />
              <Button
                onClick={handleApplyPromo}
                className="bg-slate-800 hover:bg-slate-900 text-white whitespace-nowrap px-4 cursor-pointer"
              >
                Apply
              </Button>
            </div>

            {promoCode && (
              <div className="flex justify-between items-center mb-4 text-sm bg-green-50 p-2.5 rounded-lg">
                <span className="text-green-700 font-medium">Promo Applied ({promoDiscount}% OFF)</span>
                <button onClick={removePromo} className="text-green-700 hover:text-green-900 underline text-xs cursor-pointer">
                  Remove
                </button>
              </div>
            )}

            <div className="space-y-3 text-sm mb-6 pb-6 border-b border-slate-100">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900"> {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-medium text-slate-900">
                  {shipping === 0 ? <span className="text-green-600">Free</span> : `  {shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Estimated Tax (8%)</span>
                <span className="font-medium text-slate-900"> {tax.toFixed(2)}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({promoDiscount}% OFF)</span>
                  <span className="font-medium">- {discount.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="text-slate-900 font-bold text-lg">Total Amount</span>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Including all taxes</span>
                <span className="text-3xl font-extrabold text-primary"> {total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/checkout">
                <Button className="w-full h-14 text-base font-bold bg-slate-900 hover:bg-slate-800 text-white shadow-lg cursor-pointer">
                  <Lock className="h-5 w-5 mr-2" /> Secure Checkout
                </Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
