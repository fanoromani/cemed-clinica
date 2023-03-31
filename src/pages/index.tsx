import { Aperture } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="flex justify-center w-full p-12">
        <div className="flex items-center gap-8">
          <Aperture size={64} color="#7aba3b" weight="fill" />
          <button className="hover:bg-orange-900 hover:text-white transition-all duration-300 py-4 px-8 uppercase text-orange-900 text-xl tracking-[.25rem] ml-40">
            inicio
          </button>
          <button className="hover:bg-orange-900 hover:text-white transition-all duration-300 py-4 px-8 uppercase text-orange-900 text-xl tracking-[.25rem]">
            quem somos
          </button>
          <button className="hover:bg-orange-900 hover:text-white transition-all duration-300 py-4 px-8 uppercase text-orange-900 text-xl tracking-[.25rem]">
            contato
          </button>
        </div>
      </header>
      <main>
        <section className="w-full flex justify-end gap-80 items-center">
          <div className="flex flex-col gap-10 w-1/4">
            <h1 className="text-4xl font-extrabold text-orange-950 uppercase">
              face, mama, contorno corporal
            </h1>
            <p className="text-3xl font-extralight text-orange-900">
              De procedimentos complexos a minimamente invasivos.
            </p>
            <button className="bg-orange-950 text-white py-2 px-4 font-bold rounded-lg uppercase transition-all hover:bg-orange-900">
              agendar consulta
            </button>
          </div>
          <Image src="/faixada.jpg" alt="" width={800} height={800} />
        </section>
        <section className="text-center mt-12">
          <div className="flex flex-col items-center">
            <h1 className="uppercase font-extrabold text-orange-950 text-6xl">
              cemed - vg
            </h1>
            <h2 className="font-extralight text-2xl text-orange-900 mt-4">
              Centro de Especialidades Médicas de Várzea Grande
            </h2>
            <div className="h-[1px] w-1/3 bg-orange-700 mt-4"></div>
          </div>
          <div className="w-full flex justify-center gap-40 items-center mt-16">
            <div className="flex flex-col gap-10 w-1/4">
              <h1 className="text-4xl text-orange-950 uppercase">
                corpo clinico
              </h1>
              <p className="text-2xl font-light text-start text-orange-900">
                Canavarros Serra vem de uma tradição familiar de Cirurgiões
                mato-grossenses, desde 1960 com Dr benedito Canavarros, que
                estudou no Rio de janeiro e inspirou seus sucessores a manter a
                tradição Médica.
              </p>
              <button className="bg-orange-950 transition-all text-white uppercase font-bold py-2 px-4 rounded-lg hover:bg-orange-900">
                fale conosco
              </button>
            </div>
            <Image src="/recepcao.jpg" alt="" width={400} height={600} />
          </div>
          <div className="w-full flex justify-center gap-40 items-center mt-16">
            <Image src="/espera1.jpg" alt="" width={400} height={600} />
            <div className="flex flex-col gap-10 w-1/4">
              <h1 className="text-4xl text-orange-950 uppercase">
                o que fazemos
              </h1>
              <p className="text-2xl font-light text-start text-orange-900">
                <strong>SEGURANÇA:</strong> Buscamos o que há de melhor
                qualidade em materiais e produtos hospitalares.
              </p>
              <p className="text-2xl font-light text-start text-orange-900">
                <strong>INTEGRIDADE:</strong> Prezamos pelo bem estar e
                segurança do paciente, que é nosso maior valor.
              </p>
              <p className="text-2xl font-light text-start text-orange-900">
                <strong>ELEGÂNCIA:</strong> Realçamos a beleza que há dentro de
                você.
              </p>
              <button className="bg-orange-950 transition-all text-white uppercase font-bold py-2 px-4 rounded-lg hover:bg-orange-900">
                fale conosco
              </button>
            </div>
          </div>
        </section>
        <section className="mt-16 flex flex-col items-center">
          <h1 className="uppercase font-bold text-orange-950 text-4xl mb-12">
            como chegar
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.859982503868!2d-56.14400028480167!3d-15.652442789139508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939dad932659ad21%3A0x7a7e4c4a5397d103!2sCEMED-VG!5e0!3m2!1spt-PT!2sbr!4v1680238870770!5m2!1spt-PT!2sbr"
            width="1000"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </section>
        <footer className="flex justify-center w-full p-20 bg-orange-950 mt-16">
          <div className="flex items-center">
            <button className="hover:bg-orange-900 hover:text-white ease-in-out py-4 px-8 uppercase text-orange-800 text-xl">
              home
            </button>
            <button className="hover:bg-orange-900 hover:text-white ease-in-out py-4 px-8 uppercase text-orange-800 text-xl">
              quem somos
            </button>
            <button className="hover:bg-orange-900 hover:text-white ease-in-out py-4 px-8 uppercase text-orange-800 text-xl mr-20">
              contato
            </button>
            <Aperture size={64} color="#7aba3b" weight="fill" />
          </div>
        </footer>
      </main>
    </>
  );
}
