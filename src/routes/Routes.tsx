import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import BaseLayout from '../components/BaseLayout';
import { ROUTES } from '../constants/routes';
import NotFound from '../components/NotFound';
import ContactPage from '../pages/Contact';
import PricingPage from '../pages/Pricing';


const AppRoutes: React.FC = () => {

  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>

        <Route path={ROUTES.HOME} element={<Home />} />

        <Route path={ROUTES.CONTACT} element={<ContactPage />} />

        <Route path={ROUTES.PRICING} element={<PricingPage />} />
       
        <Route path="*" element={<NotFound />} />

      </Route>

      {/* Add more routes here */}
    </Routes>
  )
};

export default AppRoutes;