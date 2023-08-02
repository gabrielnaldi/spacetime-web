import Link from 'next/link'
import NlwSpacetimeLogo from './components/nlw-spacetime-logo'

export default function Home(): JSX.Element {
  return (
    <div className="relative grid min-h-screen items-end overflow-hidden bg-gray-700 px-8 py-10">
      <div className="absolute left-0 top-1/2 h-[288px] w-[526px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-700/75 blur-194" />
      <div className="absolute bottom-0 left-2 top-0 w-2 bg-stripes" />
      <div className="z-10 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <NlwSpacetimeLogo />
          <div className="space-y-1 text-center">
            <h1 className="text-2xl font-bold leading-tight text-zinc-50">
              Sua cápsula do tempo
            </h1>
            <p className="leading-relaxed">
              Colecione momentos marcantes da sua jornada e compartilhe (se
              quiser) com o mundo!
            </p>
          </div>
          <Link href="/memories">
            <span className="inline-block rounded-full bg-green-500 px-5 py-3 font-baiJamJuree text-gray-900 transition-colors duration-300 hover:bg-green-700">
              COMEÇAR A CADASTRAR
            </span>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <p className="leading-relaxed">Feito com 💜 no NLW da Rocketseat</p>
      </div>
    </div>
  )
}
