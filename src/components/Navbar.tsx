import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Check, Cog, House, Menu, Moon, Sun } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuItemsList } from '@/config';
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Switch } from './ui/switch';
import { Label } from './ui/label';


interface ThemeToggleProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface HeaderRightContentProps {
  selectedLanguage: string;
  toggleTheme: () => void;
  isDarkMode: boolean;
  changeLanguage: () => void;
}

interface MenuItemsProps {
  setIsSheetOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuItems: React.FC<MenuItemsProps> = ({ setIsSheetOpen }) => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    setIsSheetOpen(false);
    navigate(path);
  };
const menuItems = MenuItemsList();
  return (
    <ul className="nav-menu-ul">
      {menuItems?.map((menuItem) => (
        <li
          key={menuItem.id}
          className="nav-menu-li"
          onClick={() => handleNavigate(menuItem.path)}
        >
          {menuItem.label}
        </li>
      ))}
    </ul>
  );
};

const ThemeToggleButton: React.FC<ThemeToggleProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className="center w-full p-1">
      <Switch
        className={`${isDarkMode ? 'bg-blue-500' : 'bg-slate-950'}`}
        id="dark-mode"
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
      />
      <Label htmlFor="dark-mode" className="ml-2">
        {isDarkMode ? <Moon className='dropdown-icon' /> : <Sun className='dropdown-icon' />}
      </Label>
    </div>
  );
};

const HeaderRightContent: React.FC<HeaderRightContentProps> = ({
  selectedLanguage,
  changeLanguage,
  isDarkMode,
  toggleTheme,
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-60 mx-5 p-1 rounded-md max-w-[450px] center border border-black dark:border-white md:w-20 md:border-none">
            <Cog className="nav-icon" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="bg-slate-200 dark:bg-slate-900 text-white rounded-md shadow-lg p-2"
          side="bottom"
          sideOffset={5}
          align="start"
          data-small-screen-side="right"
        >
          <DropdownMenuLabel asChild>
            <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="h-px bg-gray-600 my-2" />
          <DropdownMenuLabel asChild className="center">
            <Badge
              className="language-badge"
              onClick={changeLanguage}
            >
              {selectedLanguage==='en'?'English':'Nepali'} <Check className="ml-2 w-4 h-4 font-bold text-green-400" />
            </Badge>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const initialTheme = localStorage.getItem('theme') === 'dark';
  const initialLanguage = localStorage.getItem('language') || 'en';

  const [isDarkMode, setIsDarkMode] = useState(initialTheme);
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      setIsDarkMode(true);
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      if (newTheme) {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark');
        document.body.classList.remove('light');
      } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.add('light');
        document.body.classList.remove('dark');
      }
      return newTheme;
    });
  };

  const { i18n } = useTranslation();

  const changeLanguage = () => {
    const newLanguage = selectedLanguage === 'en' ? 'np' : 'en';
    i18n.changeLanguage(newLanguage);
    setSelectedLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    if (selectedLanguage) {
      i18n.changeLanguage(selectedLanguage);
    }
  }, [selectedLanguage, i18n]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768 && isSheetOpen) {
        setIsSheetOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSheetOpen]);

  return (
    <nav className="navbar">
      <div className="md:px-10">
        <Link to="/">
          <House className="nav-icon" />
        </Link>
      </div>
      <div className="w-full max-w-[800px] hidden md:flex flex-col md:flex-row justify-between">
        <MenuItems setIsSheetOpen={setIsSheetOpen} />
        <HeaderRightContent
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />
      </div>
      <div className="md:hidden">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger>
            <Menu className="nav-icon" />
          </SheetTrigger>
          <SheetContent
            side="left"
            className="p-4 dark:bg-gray-800 bg-slate-300  flex flex-col items-start w-72"
          >
            <MenuItems setIsSheetOpen={setIsSheetOpen} />
            <HeaderRightContent
              selectedLanguage={selectedLanguage}
              changeLanguage={changeLanguage}
              isDarkMode={isDarkMode}
              toggleTheme={toggleTheme}
            />
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
