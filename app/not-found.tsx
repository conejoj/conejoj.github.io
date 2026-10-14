import type { Metadata } from "next";
import NotFoundView from "@/components/NotFoundView";

/** Branded 404, exported as 404.html (GitHub Pages serves it for unknown paths). */
export const metadata: Metadata = {
  title: "Page not found | Jose Conejo",
};

export default function NotFound() {
  return <NotFoundView />;
}
