import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  const menuItems = [
    t('discounts'),
    '0-0-6',
    t('smartphones'),
    t('home_appliances'),
    t('books'),
    t('laptops'),
    t('bestseller_2024'),
  ];

  return (
    <nav className="px-[3%] wrapper w-full py-4 border-b border-gray-200">
      <div className="mx-auto flex justify-between space-x-8 text-gray-700 font-medium">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className="hover:text-blue-500 transition text-sm font-semibold"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;