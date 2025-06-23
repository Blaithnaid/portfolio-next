import AboutBg from "@/public/about.jpg";
import type { Metadata } from "next";
import GradientTile from "@/components/GradientTile";

export const metadata: Metadata = {
  title: "about me ~ isb",
  description: "a little bit more info about me!",
};

export default function AboutPage() {
  return (
    <div
      className="min-h-screen overflow-y-scroll bg-fixed flex flex-col justify-center bg-cover bg-center  p-4 gap-4"
      style={{ backgroundImage: `url(${AboutBg.src})` }}
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full md:w-3/4 mx-auto">
        <GradientTile
          className="text-left text-md relative"
          bgcolor="bg-[#253956]"
        >
          <div className="flex flex-col gap-4 border-2 text-white border-white border-dashed relative z-10 p-4 h-full hover:cursor-default">
            <p className="font-extrabold text-xl">where did it start?</p>
            <p>
              i&apos;ve been fascinated by computers for as long as i can
              remember knowing they existed. my first experience programming was
              in scratch, followed shortly by some basic html and css. at around
              14 i tried learning c++ to program an{" "}
              <a
                href="https://docs.arduino.cc/hardware/uno-rev3/"
                className="underline font-bold text-silver hover:text-silver/80"
              >
                arduino
              </a>
              , but i didn&apos;t get very far.
            </p>
            <p>
              finally, when i was around 15 or 16, i started following a course
              on python 3. i loved how easily understandable the syntax was and
              that&apos;s when the coding bug really bit me.
            </p>
            <p>
              i&apos;ve hopped from one language to the next depending on what
              project caught me, and later, what i was learning in university.
            </p>
          </div>
        </GradientTile>

        <GradientTile
          className="text-left text-md relative"
          bgcolor="bg-[#253956]"
        >
          <div className="flex flex-col gap-4 border-2 text-white border-white border-dashed relative z-10 p-4 h-full hover:cursor-default">
            <p className="font-extrabold text-xl">and where to next?</p>
            <p>
              some stuff i&apos;d really like to learn more about/work on in
              future:
            </p>
            <ul className="text-pretty list-disc list-inside">
              <li>learn rust or zig or some other low-level language!</li>
              <li>
                improve my dexterity w/ vim (btw) motions and the editor as a
                whole. i&apos;ve been following{" "}
                <a
                  className="underline font-bold text-silver hover:text-silver/80"
                  href="https://lazyvim-ambitious-devs.phillips.codes"
                >
                  this excellent lazyvim course
                </a>{" "}
                for the past few weeks!
              </li>
              <li>train/customise an llm</li>
              <li>
                get more familiar with linux (i&apos;m writing this sentence on{" "}
                <a
                  className="underline font-bold text-silver hover:text-silver/80"
                  href="https://manjaro.org/"
                >
                  manjaro
                </a>
                !)
              </li>
              <li>
                finish out some of the projects listed on the other page :P
              </li>
              <li>
                get better at testing with breakpoints and using a integrated debugger!
              </li>
              <li>
                get better at managing my dotfiles. i&apos;m looking at using{" "}
                <a
                  className="underline font-bold text-silver hover:text-silver/80"
                  href="https://github.com/RaphGL/Tuckr"
                >
                  tuckr
                </a>{" "}
                to do this.
              </li>
            </ul>
          </div>
        </GradientTile>

        <GradientTile
          className="text-left text-md relative"
          bgcolor="bg-[#253956]"
        >
          <div className="flex flex-col gap-1 border-2 text-white border-white border-dashed relative z-10 p-4 h-full hover:cursor-default">
            <p className="font-extrabold text-xl">what else do i get up to?</p>
            <p>
              i also dabble in sound engineering (and occasionally producing!).
              i became interested after attending a number of youth music
              workshops when i was a teenager, and went on to study Studio &amp;
              Live Sound Production in a Level 6 QQI course when i was 18
            </p>
            <p>
              i worked part-time as a sound engineer for a while and really
              really enjoyed it. i&apos;d love an opportunity to get more
              experience!
            </p>
          </div>
        </GradientTile>

        <GradientTile
          className="text-left text-md relative"
          bgcolor="bg-[#253956]"
        >
          <div className="flex flex-col gap-1 border-2 text-white border-white border-dashed relative z-10 p-4 h-full hover:cursor-default">
            <p className="font-bold text-xl">etc. etc.</p>
            <p>
              and to get a bit encyclopedic, i have experience in/am fairly
              proficient with the following languages, tools, &amp; frameworks:
            </p>
            <ul className="text-pretty list-disc list-inside">
              <li>python</li>
              <li>typescript</li>
              <li>angular</li>
              <li>react &amp; react native</li>
              <li>ionic</li>
              <li>blender</li>
              <li>mysql</li>
              <li>adobe creative cloud</li>
              <li>wordpress</li>
              <li>unity</li>
            </ul>
          </div>
        </GradientTile>
      </div>
    </div>
  );
}
