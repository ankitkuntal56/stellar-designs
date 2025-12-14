import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Phone } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">
      {/* Book a call pill */}
      <Button
        variant="floating"
        size="pill"
        className="shadow-lg hover:shadow-xl"
      >
        <Phone className="w-4 h-4" />
        Book a call
      </Button>

      {/* Social icons */}
      <div className="flex gap-3">
        <Button
          variant="floating"
          size="icon"
          className="w-12 h-12 rounded-full"
          aria-label="Telegram"
        >
          <Send className="w-5 h-5" />
        </Button>
        <Button
          variant="floating"
          size="icon"
          className="w-12 h-12 rounded-full"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default FloatingActions;
