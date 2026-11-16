import HomeGallery from "@/components/HomeGallery";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <SiteHeader active="home" fixed />
      <h1 className="sr-only">Lucifer — Selected work</h1>
      <HomeGallery />
    </main>
  );
}
