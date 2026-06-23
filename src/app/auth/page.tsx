"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Truck, Store, User as UserIcon, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"Customer" | "Seller" | "Delivery">("Customer");

  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full flex-col md:flex-row bg-white">
      {/* Left Split - Dark Navy Branding Panel */}
      <div className="w-full md:w-1/2 bg-slate-900 text-white flex flex-col justify-center p-8 md:p-16 lg:p-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative z-10 max-w-lg">
          <Link href="/" className="inline-block mb-12">
            <span className="text-4xl font-extrabold tracking-tight text-primary">BanglaBazar</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Securing the future of Bangladeshi Digital Commerce.
          </h1>
          <p className="text-lg text-slate-400 mb-12">
            Join the ecosystem trusted by millions. Experience frictionless commerce with institutional-grade security.
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-white">Escrow Protected</h3>
                <p className="text-sm text-slate-400">Funds locked securely until delivery is confirmed.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Truck className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Real-time Logistics</h3>
                <p className="text-sm text-slate-400">Live tracking and automated delivery milestones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Split - Warm Off-white Interaction Console */}
      <div className="w-full md:w-1/2 bg-[#F9F6F0] flex flex-col justify-center p-8 md:p-16 lg:p-24 relative">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h2>
            <p className="text-slate-600">Enter your credentials to access your account.</p>
          </div>

          <Card className="p-2 border border-slate-200 bg-white/50 backdrop-blur-sm mb-8 rounded-2xl shadow-sm">
            <div className="flex p-1 bg-slate-100 rounded-xl">
              {[
                { id: "Customer", icon: UserIcon },
                { id: "Seller", icon: Store },
                { id: "Delivery", icon: Truck },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as "Customer" | "Seller" | "Delivery")}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === tab.id 
                      ? 'bg-white text-slate-900 shadow-sm ring-1 ring-slate-200/50' 
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.id}
                </button>
              ))}
            </div>
          </Card>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Email or Phone Number</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                <Input placeholder="Enter your email" className="pl-10 h-12 bg-white" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <a href="#" className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors">Forgot Password?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                <Input type="password" placeholder="••••••••" className="pl-10 h-12 bg-white" />
              </div>
            </div>

            <Button type="button" className="w-full h-12 text-base font-bold bg-[#8B5A2B] hover:bg-[#724A24] text-white shadow-lg border-none mt-4 rounded-xl">
              Sign In as {activeTab}
            </Button>
          </form>

          <div className="mt-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-slate-300 after:mt-0.5 after:flex-1 after:border-t after:border-slate-300">
            <p className="mx-4 mb-0 text-center text-sm font-semibold text-slate-500 uppercase">Or continue with</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <Button variant="outline" className="h-12 bg-white border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="h-12 bg-white border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold rounded-xl">
              Phone OTP
            </Button>
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don&apos;t have an account? <a href="#" className="font-semibold text-primary hover:underline">Register now</a>
          </p>
        </div>
      </div>
    </div>
  );
}
