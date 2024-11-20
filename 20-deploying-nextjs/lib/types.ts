import { ObjectId } from "mongodb";

export type Post = {
  title: string;
  image: string;
  excerpt?: string;
  date: string;
  slug: string;
  content?: string;
  isFeatured?: boolean;
};

export type ContactMessage = {
  id?: ObjectId;
  email: string;
  name: string;
  message: string;
};
