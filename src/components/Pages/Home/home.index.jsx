import Menu from '../../Menu/menu.index';
import Newsletter from '../../Newsletter/newsletter.index';
import HowTo from '../../HowTo/howto.index'
import Offers from '../../Offers/offers.index';

export default function HomePage() {
  return (
    <main>
      <Menu />
      <Newsletter />
      <HowTo />
      <Offers />
    </main>
  );
}
