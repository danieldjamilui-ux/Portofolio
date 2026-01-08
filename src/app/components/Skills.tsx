import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "./hooks/useInView";
import { useState } from "react";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 70, color: "from-blue-500 to-cyan-500" },
      { name: "TypeScript", level: 65, color: "from-blue-600 to-blue-400" },
      { name: "CSS", level: 95, color: "from-cyan-500 to-teal-500" },
      { name: "Next.js", level: 60, color: "from-slate-600 to-slate-400" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
      { name: "SQL", level: 95, color: "from-blue-600 to-indigo-600" },
      { name: "MongoDB", level: 70, color: "from-green-600 to-green-400" },
    ],
  },
  {
    category: "Tools & Lainnya",
    skills: [
      { name: "Git", level: 80, color: "from-orange-600 to-red-600" },
      { name: "Figma", level: 70, color: "from-purple-500 to-pink-500" },
    ],
  },
];

export function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-10 md:py-16 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full mb-6"
          >
            <span className="text-sm text-green-300">Keahlian Teknis</span>
          </motion.div>
          
          <h2 className="text-2xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Keahlian & Keunggulan
          </h2>
          <p className="text-slate-400 text-lg">
            Gambaran komprehensif dari keahlian teknis saya dan tingkat kemahiran 
            di berbagai teknologi dan tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
              className="relative"
            >
              <div className="mb-8">
                <h3 className="text-2xl mb-2 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  {skillGroup.category}
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </div>

              <div className="space-y-8">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: groupIndex * 0.2 + skillIndex * 0.1,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between mb-3">
                      <span className="text-slate-300 font-medium">
                        {skill.name}
                      </span>
                      <motion.span
                        className="text-slate-400 tabular-nums"
                        animate={{
                          scale: hoveredSkill === skill.name ? 1.1 : 1,
                        }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    
                    <div className="relative w-full h-3 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: groupIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                      >
                        {/* Shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        />
                      </motion.div>
                      
                      {/* Glow effect on hover */}
                      {hoveredSkill === skill.name && (
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-md opacity-50`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.5 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 max-w-4xl mx-auto"
        >
        </motion.div>
      </div>
    </section>
  );
}
