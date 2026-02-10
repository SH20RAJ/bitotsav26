import { PrismFluxLoader } from "@/components/ui/prism-flux-loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050A1F] text-foreground">
      <PrismFluxLoader size={50} speed={5} />
    </div>
  );
}
