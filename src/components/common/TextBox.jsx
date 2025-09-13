'use client'
import React, { useRef, useState } from 'react'
import { Button } from '../ui/button'
import { ChevronDown, Download,  Play } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'



const TextBox = () => {
   const [open, setOpen] = useState(false);
const [selected, setSelected] = useState({
    code: "en",
    label: "English",
    flag: "/us1.png",
  });

  const audioRef = useRef(null);

  const audioMap = {
    en: "/en.mp3",
    ar: "/ar.mp3",
    fr: "/fr.mp3",
  };

  const handleSelect = (lang) => {
    setSelected(lang);
    setOpen(false);
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    const audio = new Audio(audioMap[selected.code]);
    audioRef.current = audio;
    audio.play();
  };

  const languages = [
    { code: "en", label: "English", flag: "/us1.png" },
    { code: "ar", label: "Arabic", flag: "/arbic.png" },
    { code: "fr", label: "French", flag: "/french.png" },
  ];
   const handleDownload = () => {
    const link = document.createElement("a");
    link.href = audioMap[selected.code];  // file path
    link.download = `${selected.label}.mp3`; // filename
    link.click();
  };
  return (
    <div className='w-full h-[48vh] flex flex-col items-center justify-center gap-4 text-center px-4 my-40 pb-24 '>
        <div className='flex flex-wrap gap-2'>
             <Button className={cn('px-2 py-2 rounded-lg font-bold cursor-pointer text-sm')} variant={'outline'}><Image src={'https://eleven-public-cdn.elevenlabs.io/payloadcms/tx81xzsxtmf-text-to-speech.svg'} alt='text to speech' width={18} height={18}/> TEXT TO SPEECH</Button>
             <Button className={cn('px-2 py-2 rounded-lg font-bold cursor-pointer text-sm')} variant={'outline'}><Image src={'/agents.png'} alt='agents' width={18} height={18}/>AGENTS</Button>
             <Button className={cn('px-2 py-2 rounded-lg font-bold cursor-pointer text-sm')} variant={'outline'}><Image src={'/music.png'} alt='music' width={18} height={18}/>MUSIC</Button> 
             <Button className={cn('px-2 py-2 rounded-lg font-bold cursor-pointer text-sm')} variant={'outline'}><Image src={'https://eleven-public-cdn.elevenlabs.io/payloadcms/2lq1u54fl4s-asr-icon.svg'} alt='speech to text' width={18} height={18}/>SPEECH TO TEXT</Button> 
             <Button className={cn('px-2 py-2 rounded-lg font-bold cursor-pointer text-sm')} variant={'outline'}><Image src={'https://eleven-public-cdn.elevenlabs.io/payloadcms/rhsikpjmvt-dubbing.svg'} alt='dubbing' width={18} height={18}/>DUBBING</Button> 
             <Button className={cn('px-2 py-2 rounded-lg font-bold cursor-pointer text-sm')} variant={'outline'}><Image src={'https://eleven-public-cdn.elevenlabs.io/payloadcms/an6vymi1kyt-voice-cloning.svg'} alt='voice cloning' width={18} height={18}/>VOICE CLONNING</Button> 
             <Button className={cn('px-2 py-2 rounded-lg font-bold cursor-pointer text-sm')} variant={'outline'}><Image src={'/elevenreader.png'} width={18} height={18} alt='elevenreader'/>ELEVENREADER</Button> 
        </div>
          <div className="w-full flex justify-center relative">
<div className="absolute bottom-[-12]  h-[52px] rounded-b-2xl bg-[linear-gradient(to_right,#f3f4f6,#a5f3fc,#d8b4fe,#fdba74)] z-10 w-5xl mx-auto"></div>

      <div className="relative w-full max-w-5xl rounded-2xl  border-gray-150 bg-white shadow-md border-b-36  border-4 ">
        <div className="p-4">
          <p className="text-gray-800 text-md font-semibold text-left px-4 py-2 pb-32">
            In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named
             Zephyros.<br/> <span className='text-[#b943c6]'>[sarcastically]</span> Not the “burn it all down” kind... <span className='text-[#b943c6]'>[giggles]</span> but he was gentle, wise, with eyes like old stars. 
            <span className='text-[#b943c6]'>[whispers]</span> Even the birds<br/> fell silent when he passed.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 px-4 mt-2 mb-2">
          <Button variant={'outline'} className='flex items-center gap-2 justify-center rounded-xl'>
          <Image src={'/gray.webp'} alt="Gray" width={15} height={15} className="inline-block rounded-4xl " />
          <span>Samara | Narate a Story</span>
         </Button>

          <Button variant={'outline'} className='flex items-center gap-2 justify-center rounded-xl'>
<div className="flex -space-x-[5px]">
        <Image
          src="/jessica.webp"
          alt="Avatar 1"
          width={15}
          height={15}
          className="rounded-full z-10 "
        />
        <Image
          src="/purple.webp"
          alt="Avatar 2"
          width={15}
          height={15}
          className="rounded-full"
        />
      </div>          <span>2 Speakers | Create a dialogue</span>
         </Button>

          <Button variant={'outline'} className='flex items-center gap-2 justify-center rounded-xl'>
          <Image src={'/green.webp'} alt="Gray" width={15} height={15} className="inline-block rounded-4xl " />
          <span>Announcer | Voiceover a game</span>
         </Button>
         <Button variant={'outline'} className='flex items-center gap-2 justify-center rounded-xl'>
          <Image src={'/purple.webp'} alt="Gray" width={15} height={15} className="inline-block rounded-4xl " />
          <span>Sergeant | Play a drill sergant</span>
         </Button>
         <Button variant={'outline'} className='flex items-center gap-2 justify-center rounded-xl'>
          <Image src={'/gray.webp'} alt="Gray" width={15} height={15} className="inline-block rounded-4xl " />
          <span>Spuds | Recount an old story</span>
         </Button>
         <Button variant={'outline'} className='flex items-center gap-2 justify-center rounded-xl'>
          <Image src={'/jessica.webp'} alt="Gray" width={15} height={15} className="inline-block rounded-4xl " />
          <span>Jessica | Provide Customer Support</span>
         </Button>
        </div>

        <div className="flex items-center justify-between border-t px-6 py-4">
         <div className="relative">
      {/* Dropdown button */}
      <div
        className="flex items-center gap-1 border rounded-full px-2 py-1 cursor-pointer bg-white"
        onClick={() => setOpen(!open)}
      >
        <Image
          src={selected.flag}
          alt={selected.label}
          width={18}
          height={15}
          className="inline-block rounded"
        />
        <span className="text-sm text-black font-bold">{selected.label}</span>
        <ChevronDown
          size={16}
          className={`text-black transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Dropdown options */}
      {open && (
        <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => handleSelect(lang)}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <Image
                src={lang.flag}
                alt={lang.label}
                width={18}
                height={15}
                className="inline-block rounded"
              />
              <span className="text-sm">{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>

          <div className="flex items-center gap-3">
            <Button className="flex items-center gap-2 cursor-pointer rounded-full bg-black px-5 py-2 text-white text-sm font-medium"
             onClick={handlePlay}
             >
              <Play size={16} /> PLAY
            </Button>
            <Button variant={'outline'} className="rounded-full cursor-pointer border px-2 py-2 text-gray-500 hover:bg-gray-50"
                      onClick={handleDownload}
>
              <Download size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
    <div className='font-semibold text-sm translate-y-[-44px] z-30'>Powered By Eleven V3 (alpha)</div>
    <div className='flex justify-center items-center gap-5'>
      <span className='font-bold text-sm'>EXPERIENCE THE FULL AI AUDIO PLATFORM</span>
      <Button className={cn('rounded-4xl text-xs px-4')}>SIGN UP</Button>

    </div>
    </div>
  )
}

export default TextBox