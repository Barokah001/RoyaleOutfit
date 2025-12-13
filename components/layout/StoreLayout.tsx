// ============================================================
// 5. app/(store)/layout.tsx - UPDATED (Store Layout)
// ============================================================

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#faf9f6]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
