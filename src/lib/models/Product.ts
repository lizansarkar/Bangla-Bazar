import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  sellerId: mongoose.Types.ObjectId;
  category: string;
  images: string[];
  stock: number;
  rating: number;
  numReviews: number;
  tag?: "AI TOP PICK" | "NEW ARRIVAL" | "BESTSELLER" | "FLASH SALE";
  seoScore?: number;
  imageQualityScore?: number;
}

const ProductSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  sellerId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  category: { type: String, required: true },
  images: [{ type: String }],
  stock: { type: Number, required: true, default: 0 },
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  tag: { type: String, enum: ["AI TOP PICK", "NEW ARRIVAL", "BESTSELLER", "FLASH SALE"] },
  seoScore: { type: Number },
  imageQualityScore: { type: Number },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);
