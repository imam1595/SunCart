import Banner from "@/components/Banner";
import CareTips from "@/components/CareTips";
import PopularProducts from "@/components/PopularProducts";


export default function Home() {
  return (
    <div className="container mx-auto">
      <Banner />
      <PopularProducts />
      <CareTips />
    </div>
  );
}
