import Link from 'next/link'
import NlwSpacetimeLogo from './components/nlw-spacetime-logo'
import { User } from 'lucide-react'

export default function Home(): JSX.Element {
  return (
    <main className="grid min-h-screen bg-gray-700 md:grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col justify-between overflow-hidden border-l-2 border-gray-100/10 px-8 py-6 md:border-l-0 md:border-r-2 md:px-32 md:py-16">
        <div className="absolute left-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/75 blur-194 md:left-auto md:right-2 md:translate-x-1/2" />
        <div className="absolute bottom-0 left-2 top-0 w-2 bg-stripes md:left-auto md:right-2" />
        {/* Hero */}
        <div className="invisible md:visible">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center rounded-full bg-gray-400 p-3">
              <User />
            </span>
            <a href="" className="max-w-[160px]">
              <u>Crie sua conta</u> e salve suas memórias
            </a>
          </div>
        </div>

        {/* Main */}
        <div className="z-10 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-6 md:items-start">
            <NlwSpacetimeLogo />
            <div className="max-w-lg space-y-1 text-center md:text-left">
              <h1 className="text-2xl font-bold leading-tight text-zinc-50 md:text-5xl">
                Sua cápsula do tempo
              </h1>
              <p className="text-base leading-relaxed text-gray-200 md:text-lg">
                Colecione momentos marcantes da sua jornada e compartilhe (se
                quiser) com o mundo!
              </p>
            </div>
            <Link href="/memories">
              <span className="inline-block whitespace-nowrap rounded-full bg-green-500 px-5 py-3 font-baiJamJuree text-sm text-gray-900 transition-colors duration-300 hover:bg-green-700">
                COMEÇAR A CADASTRAR
              </span>
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left">
          <p className="leading-relaxed">Feito com 💜 no NLW da Rocketseat</p>
        </div>
      </div>
    </main>
  )
}
