import Image from "next/image";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 bottom-10 right-10"
    >
      <Image
        src="/images/svg/whatsapp.svg"
        alt="WhatsApp"
        width={50}
        height={50}
        
      />
    </a>
  );
}
