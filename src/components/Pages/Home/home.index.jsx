import Newsletter from '../../Newsletter/newsletter.index';
import HowTo from '../../HowTo/howto.index'
import Offers from '../../Offers/offers.index';
import Footer from '../../Footer/footer.index';

export default function HomePage() {
  return (
    <main>
      <Newsletter />
      <HowTo />
      <Offers />
      <Footer />

    </main>
  );
}
