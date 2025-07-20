import Image from 'next/image';
import StarryBackground from '@/components/retro/starry-background';
import Navigation from '@/components/retro/navigation';
import MusicPlayer from '@/components/retro/music-player';
import Guestbook from '@/components/retro/guestbook';
import LastUpdated from '@/components/retro/last-updated';

export default function Home() {
  return (
    <>
      <StarryBackground />
      <main className="container mx-auto p-4">
        <audio autoPlay loop>
           <source src="/midi/space.mid" type="audio/midi" />
        </audio>
        <div className="max-w-5xl mx-auto">
          <table className="w-full border-4 border-double border-primary" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <td className="w-1/6 align-middle text-center">
                  <Image src="/cd.png" alt="Spinning CD" width={80} height={80} className="animate-spin-slow mx-auto" unoptimized />
                </td>
                <td className="w-4/6 text-center">
                  <h1 className="font-headline text-5xl md:text-6xl text-primary text-shadow-rainbow leading-none" style={{ textRendering: 'optimizeLegibility' }}>
                    SpotiFY
                  </h1>
                  <p className="font-headline text-xl md:text-2xl text-lime-300">Your Digital Music Zone!</p>
                </td>
                <td className="w-1/6 space-y-2 align-middle text-center">
                  <Image src="https://placehold.co/150x50.png" alt="Best viewed in Netscape" width={150} height={50} data-ai-hint="netscape banner" className="mx-auto" unoptimized />
                  <div className="flex justify-center gap-2">
                     <Image src="https://placehold.co/50x25.png" alt="New!" width={50} height={25} data-ai-hint="new badge red" className="animate-blink" unoptimized />
                    <Image src="https://placehold.co/50x25.png" alt="Hot!" width={50} height={25} data-ai-hint="hot badge" className="animate-flash" unoptimized />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="border-t-4 border-b-4 border-double border-primary">
                  <marquee className="font-headline text-xl text-yellow-300" behavior="scroll" direction="left">
                    Welcome to the COOLEST music site on the World Wide Web!!! Now with more GEO-CITIES flavor!
                  </marquee>
                </td>
              </tr>
             <Navigation />
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className="p-0 border-t-4 border-double border-primary">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="w-1/5 align-top p-2 border-r-2 border-primary text-center space-y-4 hidden md:table-cell">
                          <Image src="https://placehold.co/100x100.png" width={100} height={100} alt="Under Construction" data-ai-hint="under construction gif" className="mx-auto" unoptimized />
                          <h2 className="font-headline text-2xl text-secondary animate-blink">COOL SITES</h2>
                          <ul className="space-y-2 font-headline text-yellow-400">
                            <li><a href="#" className="hover:text-secondary underline">GeoCities</a></li>
                            <li><a href="#" className="hover:text-secondary underline">Angelfire</a></li>
                            <li><a href="#" className="hover:text-secondary underline">Tripod</a></li>
                            <li><a href="#" className="hover:text-secondary underline">Ask Jeeves</a></li>
                          </ul>
                          <Image src="https://placehold.co/80x120.png" width={80} height={120} alt="Dancing Baby" data-ai-hint="dancing baby gif" className="mx-auto" unoptimized />
                        </td>
                        <td className="w-full md:w-3/5 p-4 align-top text-center space-y-4">
                          
                          <div id="music-zone" className="p-4 border-2 border-dashed border-secondary bg-black bg-opacity-20">
                            <MusicPlayer />
                          </div>

                          <Image src="https://placehold.co/400x50.png" width={400} height={50} alt="flames" data-ai-hint="flame gif" className="mx-auto" unoptimized />
                          
                          <div id="guestbook" className="p-4 border-2 border-dashed border-accent bg-black bg-opacity-20">
                            <Guestbook />
                          </div>

                        </td>
                        <td className="w-1/5 align-top p-2 border-l-2 border-primary text-center space-y-4 hidden md:table-cell" id="webmaster">
                          <h2 className="font-headline text-3xl text-accent">WebMaster Zone</h2>
                          <div className='font-headline text-yellow-300 text-sm space-y-4'>
                            <p>This site was coded by hand by a true web enthusiast!</p>
                            <Image src="https://placehold.co/120x60.png" width={120} height={60} alt="Email Me" data-ai-hint="email me gif" className="mx-auto" unoptimized />
                            <p>Email: <a href="mailto:webmaster@spotify.com" className="text-lime-300 hover:underline">webmaster@spotify.com</a></p>
                             <p>AIM: sp0t1fyHacker</p>
                          </div>
                          
                          <Image src="https://placehold.co/400x50.png" width={400} height={50} alt="flames" data-ai-hint="flame gif" className="mx-auto my-4" unoptimized />

                          <div className="text-sm font-mono text-cyan-400 space-y-2">
                             <p>Best viewed in Netscape Navigator 4.0 with a 800x600 resolution.</p>
                             <p>Thanks for all 47 guestbook entries!</p>
                             <div className="py-2">
                                <h3 className="font-headline text-lg text-secondary animate-blink">AWARDS</h3>
                                <Image src="https://placehold.co/88x31.png" width={88} height={31} alt="Cool Site of the Day" data-ai-hint="cool site badge" className="mx-auto mt-1" unoptimized />
                             </div>
                             <div className='text-left p-1 border border-dashed border-lime-400'>
                                <h4 className='font-headline text-lime-400 underline'>SITE UPDATES:</h4>
                                <p>01-02-98: Added new MP3s!</p>
                                <p>01-01-98: Site launch!</p>
                             </div>
                          </div>
                           <Image src="https://placehold.co/400x50.png" width={400} height={50} alt="flames" data-ai-hint="flame gif" className="mx-auto my-4" unoptimized />
                           <p className='font-headline text-yellow-300'>Thanks for visiting my awesome music site! Email me your favorite bands!</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-center border-t-4 border-double border-primary py-4">
                  <div className="font-headline text-lg text-yellow-300 font-mono bg-black inline-block px-2 py-1 border-2 border-gray-500">
                    00042 visitors since 1997
                  </div>
                  <LastUpdated />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </>
  );
}
