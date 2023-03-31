import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="flex justify-center w-full p-10">
        <div className="flex gap-10">
          <Image src={""} alt="" />
          <button>Home</button>
          <button>Quem Somos</button>
          <button>Contato</button>
        </div>
      </header>
      <h1 className="text-3xl font-bold text-red-500 underline">
        Hello world!
      </h1>
    </div>
  );
}
