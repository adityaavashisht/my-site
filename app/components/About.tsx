import Highlight from "./Hightlight";
import Image from "next/image";
import cover from "@/public/me.jpeg";

export default function About() {
  return (
    <section className="flex flex-col gap-y-8 text-sm">
      <div>
        <h1 className="text-saturated font-bold text-base">Aditya Vashisht</h1>
        <span className="text-xs font-light">Toronto, ON</span>
      </div>
      <p>
        I&apos;m a frontend developer - sometimes full-stack. I currently work
        at Accenture where I help craft meaningful web experiences with
        cutting-edge tech.
      </p>
      <p>
        These days, I&apos;ve been neck-deep in <Highlight>Next.js</Highlight>{" "}
        (so, of course, <Highlight>React</Highlight>), along with{" "}
        <Highlight>NestJS</Highlight> and <Highlight>TypeScript</Highlight>.
      </p>
      <div className="bg-card p-2 rounded-lg border border-decoration ">
        <div className="relative w-full aspect-video">
          <Image
            src={cover}
            alt="Aditya standing on a bridge"
            className="w-full shadow-md object-cover"
            sizes="(max-width: 512px) 100vw, 512px"
            fill
            priority
            placeholder="blur"
          />
        </div>
      </div>
      <p>
        {
          "When I'm not immersed in code, you can usually find me lifting weights, hiking or reading about rockets and space."
        }
      </p>
    </section>
  );
}
