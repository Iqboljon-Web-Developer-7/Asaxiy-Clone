const Navbar = () => {
    const menuItems = [
      "Скидки",
      "0-0-6",
      "Смартфоны",
      "Бытовая техника",
      "Книги",
      "Ноутбуки",
      "Бестселлер 2024",
    ];
  
    return (
      <nav className="px-[3%] wrapper w-full py-4 border-b border-gray-200 wrapper">
        <div className="mx-auto flex justify-between space-x-8 text-gray-700 font-medium">
          {menuItems.map((item, index) => (
            <a key={index} href="#" className="hover:text-blue-500 transition text-sm font-semibold">
              {item}
            </a>
          ))}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  