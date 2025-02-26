import WorkItem from "./WorkItem";
import projects from "@/public/projects.json";

export default function WorkGrid() {
  return (
    <div className="bg-slate-600 bg-opacity-70 p-2 h-max w-full flex flex-col justify-start items-center">
      <div className="max-h-max min-h-64 w-full md:px-10 lg:px-20 grid grid-cols-1 auto-rows-max lg:grid-cols-2 gap-8 p-2 my-12">
        {projects.map((project, index) => (
          <WorkItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
