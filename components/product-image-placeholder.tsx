import { Image as ImageIcon } from "lucide-react";

export default function ProductImagePlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-gray-300 rounded-lg p-4">
          <ImageIcon className="w-12 h-12 text-gray-500" strokeWidth={1.5} />
        </div>
        <p className="text-gray-500 text-sm font-medium">Product Image</p>
      </div>
    </div>
  );
}
