import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Download, Smartphone } from 'lucide-react';

interface DownloadQRModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DownloadQRModal = ({ isOpen, onClose }: DownloadQRModalProps) => {
  const APK_URL = "https://github.com/Bilmark1009/medication-management-expo/releases/download/Tumarnav2.0%2C0/Tumarna.apk";
  const QR_CODE_URL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(APK_URL)}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download Tumarna
          </DialogTitle>
          <DialogDescription>
            Scan the QR code below with your mobile device to download the app
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* QR Code Section */}
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src={QR_CODE_URL} 
                alt="Tumarna Download QR Code"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                How to Download:
              </h4>
              <ol className="text-sm text-muted-foreground space-y-2 ml-6 list-decimal">
                <li>Open your phone's camera app or any QR code scanner</li>
                <li>Point it at the QR code above</li>
                <li>Tap the notification that appears</li>
                <li>Follow the download instructions</li>
              </ol>
            </div>

            <div className="bg-muted/50 p-3 rounded-md text-xs text-muted-foreground">
              <p className="font-medium mb-1">Note:</p>
              <p>You may need to enable installation from unknown sources in your device settings.</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadQRModal;
