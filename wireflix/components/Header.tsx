import Image from "next/image";
import SearchIcon from '@heroicons/react/solid/SearchIcon';
import BellIcon from '@heroicons/react/solid/BellIcon';
import UserCircleIcon from '@heroicons/react/solid/UserCircleIcon';
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    /**
     * スクロール状態を取得してStateを更新する
     */
    const handleScroll = () => {
      console.log('scroll')
      if(window.scrollY > 0){
        setIsScrolled(true);
      }else{
        setIsScrolled(false);
      }
    };

    // NOTE: 外部のコンポーネント（グローバルwindow）のイベントに対応するためにaddEventListnerを使用
    // スクロール時のイベントをセット
    window.addEventListener('scroll', handleScroll);

    // アンマウント時にイベントを解除
    return  () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    // スクロールの距離が0以上であれば
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image src="/logo.png" width={100} height={100} className="cursor-pointer object-contain"/>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <SearchIcon className="hidden h-6 w-6 sm:inline"/>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6"/>
        <Link href="/account">
          <UserCircleIcon className="h-6 w-6"/>
        </Link>
      </div>
    </header>
  )
}

export default Header;