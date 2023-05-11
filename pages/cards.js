import CardTrip from "@/components/cards/cardTrip";
import CardType from "@/components/cards/cardType";
import CreateCard from "@/components/cards/createCard";
import Hero from "@/components/cards/hero";
import Security from "@/components/cards/security";
import Download from "@/components/landing/download";
import Subscribe from "@/components/landing/subscribe";
import MainLayout from "@/layout/mainLayout";

const Cards = () => {
  return (
    <MainLayout>
      <Hero />
      <CardTrip />
      <CardType />
      <CreateCard />
      <Security />
      <Download card />
      <Subscribe />
    </MainLayout>
  );
};

export default Cards;
