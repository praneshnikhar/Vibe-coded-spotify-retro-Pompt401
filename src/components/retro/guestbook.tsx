"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface GuestbookEntry {
  name: string;
  message: string;
  timestamp: string;
}

const initialEntries: GuestbookEntry[] = [
    { name: 'CoolCat42', message: 'This site is DA BOMB!', timestamp: '01-01-1998' },
    { name: 'Sk8rBoi', message: 'Totally radical music dude!', timestamp: '01-02-1998' },
];

const Guestbook = () => {
  const { toast } = useToast();
  const [entries, setEntries] = useState<GuestbookEntry[]>(initialEntries);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && message) {
      const newEntry = {
        name,
        message,
        timestamp: new Date().toLocaleDateString('en-US'),
      };
      setEntries([newEntry, ...entries]);
      setName('');
      setMessage('');
      toast({
        title: "Yo! Message posted!",
        description: "Thanks for signing the guestbook, my dude!",
      });
    } else {
       toast({
        variant: "destructive",
        title: "Whoops!",
        description: "You gotta fill out the form, dawg!",
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="font-headline text-4xl text-accent animate-bounce-short">GUESTBOOK</h2>
      <p className="font-headline text-lime-300">Leave a message for the WebMaster!</p>
      
      <form onSubmit={handleSubmit} className="space-y-2 p-4 border-2 border-dashed" style={{borderColor: '#00FF00'}}>
        <Input 
          type="text" 
          placeholder="Your Name / Handle" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          className="bg-black text-lime-300 border-lime-300 placeholder:text-lime-500 font-mono"
        />
        <Textarea 
          placeholder="Your message..." 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          className="bg-black text-lime-300 border-lime-300 placeholder:text-lime-500 font-mono"
        />
        <Button 
          type="submit" 
          className="w-full font-headline bg-lime-500 hover:bg-lime-400 text-black border-2 border-lime-700 hover:border-lime-600 shadow-md"
        >
          Submit Message!
        </Button>
      </form>
      
      <div className="h-48 overflow-y-auto p-2 border-2 border-dashed" style={{borderColor: '#00FF00'}}>
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <div key={index} className="text-left font-mono text-sm text-lime-300">
              <p>
                <span className="text-yellow-300 font-bold">{entry.name}</span> 
                <span className="text-gray-400"> ({entry.timestamp}) wrote:</span>
              </p>
              <p className="pl-4">{entry.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guestbook;
