import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import StarryBackground from '@/components/retro/starry-background';

export default function Home() {
  return (
    <>
      <StarryBackground />
      <main className="container mx-auto p-4">
        <div className="max-w-4xl mx-auto">
          <table className="w-full border-4 border-double border-yellow-400" cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <td className="w-1/6 align-middle text-center">
                  <Image src="https://placehold.co/80x80.png" alt="Spinning CD" width={80} height={80} data-ai-hint="spinning cd" className="animate-spin-slow mx-auto" unoptimized />
                </td>
                <td className="w-4/6 text-center">
                  <h1 className="font-headline text-5xl md:text-6xl text-yellow-300 text-shadow-rainbow leading-none">
                    SpotiFY
                  </h1>
                  <p className="font-headline text-xl md:text-2xl text-lime-300">Your Digital Music Zone!</p>
                </td>
                <td className="w-1/6 space-y-2 align-middle text-center">
                  <Image src="https://placehold.co/150x50.png" alt="Best viewed in Netscape" width={150} height={50} data-ai-hint="netscape banner" className="mx-auto" unoptimized />
                  <div className="flex justify-center gap-2">
                    <Image src="https://placehold.co/50x25.png" alt="New!" width={50} height={25} data-ai-hint="new badge" className="animate-flash" unoptimized />
                    <Image src="https://placehold.co/50x25.png" alt="Hot!" width={50} height={25} data-ai-hint="hot badge" className="animate-flash" unoptimized />
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="border-t-4 border-b-4 border-double border-yellow-400">
                  <marquee className="font-headline text-xl text-yellow-300" behavior="scroll" direction="left">
                    Welcome to the COOLEST music site on the World Wide Web!!!
                  </marquee>
                </td>
              </tr>
              <tr>
                <td colSpan={3} className="text-center py-2 space-x-2 md:space-x-4">
                  {['MUSIC ZONE', 'TOP HITS', 'GUESTBOOK', 'WEBMASTER'].map(text => (
                    <Button key={text} className="font-headline bg-yellow-400 text-black hover:bg-yellow-500 text-lg md:text-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                      {text}
                    </Button>
                  ))}
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={3} className="p-0 border-t-4 border-double border-yellow-400">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="w-1/5 align-top p-2 border-r-2 border-yellow-400 text-center space-y-4 hidden md:table-cell">
                          <Image src="https://placehold.co/100x100.png" width={100} height={100} alt="Under Construction" data-ai-hint="under construction" className="mx-auto" unoptimized />
                          <Image src="https://placehold.co/80x120.png" width={80} height={120} alt="Dancing Baby" data-ai-hint="dancing baby" className="mx-auto" unoptimized />
                        </td>
                        <td className="w-full md:w-3/5 p-4 align-top text-center space-y-4">
                          <div className="p-4 border-2 border-dashed border-lime-400 bg-black bg-opacity-20">
                            <h2 className="font-headline text-3xl text-yellow-300">Retro Music Player</h2>
                            <div className="flex justify-center items-center gap-4 mt-4">
                              <Button className="font-headline bg-gray-400 text-black text-2xl w-24 h-16 border-2 border-t-gray-200 border-l-gray-200 border-b-gray-600 border-r-gray-600 active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-200 active:border-r-gray-200">
                                Play
                              </Button>
                              <Button className="font-headline bg-gray-400 text-black text-2xl w-24 h-16 border-2 border-t-gray-200 border-l-gray-200 border-b-gray-600 border-r-gray-600 active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-200 active:border-r-gray-200">
                                Pause
                              </Button>
                              <Button className="font-headline bg-gray-400 text-black text-2xl w-24 h-16 border-2 border-t-gray-200 border-l-gray-200 border-b-gray-600 border-r-gray-600 active:border-t-gray-600 active:border-l-gray-600 active:border-b-gray-200 active:border-r-gray-200">
                                Stop
                              </Button>
                            </div>
                          </div>
                          <Image src="https://placehold.co/400x50.png" width={400} height={50} alt="flames" data-ai-hint="flames" className="mx-auto" unoptimized />
                          <div className="p-4 border-2 border-dashed border-lime-400 bg-black bg-opacity-20">
                            <h2 className="font-headline text-3xl text-yellow-300">Sign My Guestbook!</h2>
                            <form className="mt-4 space-y-4 font-body text-left w-full max-w-md mx-auto">
                              <div>
                                <Label htmlFor="name" className="font-headline text-lime-300">Your Name:</Label>
                                <Input id="name" type="text" className="font-headline text-black" />
                              </div>
                              <div>
                                <Label htmlFor="email" className="font-headline text-lime-300">Your Email:</Label>
                                <Input id="email" type="email" className="font-headline text-black" />
                              </div>
                              <div>
                                <Label htmlFor="message" className="font-headline text-lime-300">Message:</Label>
                                <Textarea id="message" className="font-headline text-black" />
                              </div>
                              <div className="text-center">
                                <Button type="submit" className="font-headline bg-yellow-400 text-black hover:bg-yellow-500 text-xl shadow-[5px_5px_0px_0px_rgba(0,0,0,0.5)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,0.5)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all">
                                  Submit Ya Message!
                                </Button>
                              </div>
                            </form>
                          </div>
                        </td>
                        <td className="w-1/5 align-top p-2 border-l-2 border-yellow-400 text-center space-y-4 hidden md:table-cell">
                          <h2 className="font-headline text-2xl text-lime-300 animate-blink">COOL SITES</h2>
                          <ul className="space-y-2 font-headline text-yellow-400">
                            <li><a href="#" className="hover:text-lime-300 underline">GeoCities</a></li>
                            <li><a href="#" className="hover:text-lime-300 underline">Angelfire</a></li>
                            <li><a href="#" className="hover:text-lime-300 underline">Tripod</a></li>
                            <li><a href="#" className="hover:text-lime-300 underline">Ask Jeeves</a></li>
                          </ul>
                          <Image src="https://placehold.co/80x120.png" width={80} height={120} alt="Dancing Baby" data-ai-hint="dancing baby" className="mx-auto" unoptimized />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-center border-t-4 border-double border-yellow-400 py-4">
                  <div className="font-headline text-lg text-yellow-300 font-mono bg-black inline-block px-2 py-1 border-2 border-gray-500">
                    00042 visitors since 1997
                  </div>
                  <p className="mt-2 text-sm text-lime-300 font-headline">
                    Last Updated: March 15, 1998
                  </p>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </>
  );
}
