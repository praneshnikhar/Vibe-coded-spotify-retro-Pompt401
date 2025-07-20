import React from 'react';

const NavButton = ({ href, text, color, hover, animation }: { href: string; text: string; color: string; hover: string; animation?: string; }) => {
    return (
        <td className="text-center">
            <a 
                href={href}
                className={`inline-block px-4 py-2 font-headline text-xl text-black border-2 border-b-4 border-r-4 border-black transition-all duration-150 ease-in-out ${color} ${hover} active:border-b-2 active:border-r-2 active:mt-1 active:mr-1 ${animation}`}
            >
                {text}
            </a>
        </td>
    )
}

const Navigation = () => {
  return (
    <tr>
      <td colSpan={3} className="py-2">
          <table className="w-full">
              <tbody>
                  <tr>
                      <NavButton href="#music-zone" text="MUSIC ZONE" color="bg-orange-500" hover="hover:bg-orange-400" />
                      <NavButton href="#top-hits" text="TOP HITS" color="bg-lime-400" hover="hover:bg-lime-300" animation="animate-glow"/>
                      <NavButton href="#guestbook" text="GUESTBOOK" color="bg-pink-500" hover="hover:bg-pink-400" animation="animate-bounce-short"/>
                      <NavButton href="#webmaster" text="WEBMASTER" color="bg-yellow-400" hover="hover:bg-yellow-300" animation="animate-pulse-border"/>
                  </tr>
              </tbody>
          </table>
      </td>
    </tr>
  );
};

export default Navigation;
