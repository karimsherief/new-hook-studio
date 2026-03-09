import { ImageSlider } from "@/components/home/ImageSlider";
import { AboutUs } from "@/components/home/AboutUs";
import { Services } from "@/components/home/Services";

export default function HomePage() {
  return (
    <div className="flex  flex-col">
      <ImageSlider />
      <AboutUs />
      <Services />
    </div>
  );
}
