import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppBtn() {
  const phoneNumber = "26774689754";
  const message = "Hello Lush Engineering, I would like to enquire about your services.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl p-0 flex items-center justify-center animate-bounce duration-[3000ms]"
      onClick={handleClick}
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
    </Button>
  );
}
