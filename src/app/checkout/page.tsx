"use client";

import { useState } from "react";
import { ChevronRight, CreditCard, Banknote, ShieldCheck, MapPin, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState<"shipping" | "payment">("shipping");
  const [selectedPayment, setSelectedPayment] = useState<string>("bkash");

  const PAYMENT_METHODS = [
    { id: "bkash", name: "bKash", icon: "📱", color: "bg-pink-100 text-pink-600 border-pink-200" },
    { id: "nagad", name: "Nagad", icon: "🔥", color: "bg-orange-100 text-orange-600 border-orange-200" },
    { id: "rocket", name: "Rocket", icon: "🚀", color: "bg-purple-100 text-purple-600 border-purple-200" },
    { id: "bank", name: "Bank Transfer", icon: <Banknote className="h-5 w-5" />, color: "bg-blue-100 text-blue-600 border-blue-200" },
    { id: "cod", name: "Cash on Delivery", icon: <CreditCard className="h-5 w-5" />, color: "bg-green-100 text-green-600 border-green-200" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Secure Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Pane: Checkout Fields */}
        <div className="lg:col-span-2 space-y-6">
          {/* Shipping Address Accordion */}
          <Card className={`overflow-hidden transition-all duration-300 ${activeStep === 'shipping' ? 'ring-2 ring-primary border-transparent shadow-md' : 'border-slate-200'}`}>
            <div 
              className="p-6 bg-white cursor-pointer flex justify-between items-center"
              onClick={() => setActiveStep("shipping")}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${activeStep === 'shipping' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                  1
                </div>
                <h2 className="text-xl font-bold text-slate-900">Shipping Address</h2>
              </div>
              {activeStep !== 'shipping' && <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">Edit</Button>}
            </div>
            
            {activeStep === "shipping" && (
              <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                <form className="space-y-4 mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Full Name</label>
                      <Input placeholder="John Doe" className="bg-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Phone Number</label>
                      <Input placeholder="+880 1XXX-XXXXXX" className="bg-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Street Address</label>
                    <Input placeholder="House 123, Road 4, Block A" className="bg-white" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">City</label>
                      <select className="flex h-11 w-full rounded-xl border border-input bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Sylhet</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-700">Postal Code</label>
                      <Input placeholder="1212" className="bg-white" />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end">
                    <Button 
                      type="button" 
                      onClick={() => setActiveStep("payment")}
                      className="bg-slate-900 hover:bg-slate-800 text-white px-8"
                    >
                      Continue to Payment <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </Card>

          {/* Payment Method Accordion */}
          <Card className={`overflow-hidden transition-all duration-300 ${activeStep === 'payment' ? 'ring-2 ring-primary border-transparent shadow-md' : 'border-slate-200'}`}>
            <div 
              className="p-6 bg-white cursor-pointer flex justify-between items-center"
              onClick={() => setActiveStep("payment")}
            >
              <div className="flex items-center gap-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${activeStep === 'payment' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'}`}>
                  2
                </div>
                <h2 className="text-xl font-bold text-slate-900">Payment Method</h2>
              </div>
            </div>
            
            {activeStep === "payment" && (
              <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                <div className="mt-6 space-y-3">
                  {PAYMENT_METHODS.map((method) => (
                    <label 
                      key={method.id} 
                      className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${selectedPayment === method.id ? 'border-primary bg-primary/5 ring-1 ring-primary shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <div className="flex items-center flex-1 gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border ${method.color}`}>
                          {method.icon}
                        </div>
                        <span className="font-semibold text-slate-900">{method.name}</span>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedPayment === method.id ? 'border-primary' : 'border-slate-300'}`}>
                        {selectedPayment === method.id && <div className="w-3 h-3 rounded-full bg-primary" />}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>

        {/* Right Pane: Order Totalizer */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <Card className="p-6 border-slate-200 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h3>
              
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden border border-slate-200">
                    <img src="https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=100&q=80" alt="Product" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-slate-900 line-clamp-2">Titan X Pro Smart Handset</h4>
                    <p className="text-sm text-slate-500">Qty: 1</p>
                  </div>
                  <div className="font-bold text-slate-900">৳89,999</div>
                </div>
              </div>

              <div className="flex gap-2 mb-6 border-b border-slate-100 pb-6">
                <Input placeholder="Promo code" className="bg-slate-50" />
                <Button variant="outline">Apply</Button>
              </div>

              <div className="space-y-3 text-sm mb-6 pb-6 border-b border-slate-100">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">৳89,999</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-medium text-slate-900">৳150</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Platform Fee</span>
                  <span className="font-medium text-slate-900">৳50</span>
                </div>
                <div className="flex justify-between text-destructive">
                  <span>Discount</span>
                  <span className="font-medium">-৳1,000</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-slate-900 font-bold">Total</span>
                <div className="text-right">
                  <span className="text-xs text-slate-500 block">Including all taxes</span>
                  <span className="text-3xl font-extrabold text-primary">৳89,199</span>
                </div>
              </div>

              <Button size="lg" className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
                <Lock className="h-5 w-5" /> Confirm & Pay Now
              </Button>
            </Card>

            <Card className="p-4 bg-slate-900 text-white border-0">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm mb-1 text-slate-50">BanglaBazar Escrow Protection</h4>
                  <p className="text-xs text-slate-400">
                    Your payment of ৳89,199 will be held securely. The seller only gets paid after you confirm delivery within 48 hours.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
