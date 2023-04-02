import SkillItem from "./SkillItem";
import { skillData } from "@/app/data";

const Skills = () => {
  return (
    <div className="py-4 bg-white shadow rounded md:m-4">
      <div className="flex flex-wrap px-2">
        <div className="w-full">
          <div className="md:mx-4 ">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
