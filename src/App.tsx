import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <LanguageSwitcher />
      <h1 className="text-4xl font-bold mt-10">{t('welcome')}</h1>
    </div>
  );
};

export default App;