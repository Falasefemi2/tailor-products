/** @format */

import { StaticImageData } from "next/image";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string | StaticImageData;
  details: string[];
}
