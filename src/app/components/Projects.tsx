import { ExternalLink, Github } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useInView } from "./hooks/useInView";

const projects = [
  {
    id: 2,
    title: "Pembuat Website Portfolio",
    description:
      "Website portofolio modern yang menampilkan profil, skill, dan proyek secara interaktif dan responsif. Dibangun menggunakan React + TypeScript untuk struktur aplikasi yang kuat, Next.js untuk performa dan routing, Tailwind CSS untuk desain UI yang rapi dan konsisten, serta Framer Motion untuk animasi halus. Website ini mendukung tampilan responsif dan pengalaman pengguna yang modern",
    image:
      "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzY2ODU1MDIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    link: "#",
    github: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Aplikasi Mobile Sistem Informasi Peternakan pada Dinas Pertanian Maluku Utara",
    description:
      "Aplikasi ini diharapkan dapat mempermudah klien dan bidang peternakan dalam memperoleh informasi secara cepat dan akurat. Melalui aplikasi ini, pengguna dapat mengakses jadwal pemeriksaan ternak, status kesehatan yang selalu diperbarui, ketersediaan gudang, data peternak yang memiliki klien tetap, serta struktur pegawai. ",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY2ODU2MzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["dark mode", "Flutter", "Firebase", "Cloudinary"],
    link: "#",
    github: "#",
    featured: false,
  },
];

export function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="projects" className="py-10 md:py-16 lg:py-28 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          
          <h2 className="text-2xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Proyek Unggulan
          </h2>
          <p className="text-slate-400 text-lg">
            Berikut adalah proyek saya dalam pengembangan web dan mobile/aplikasi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"
              />
              
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-slate-600 transition-all duration-300 h-full flex flex-col">
                {/* Project image */}
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-60" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-900" />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                    >
                      <Github className="w-5 h-5 text-slate-900" />
                    </motion.a>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600 text-slate-300 rounded-lg text-xs hover:bg-slate-700 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom gradient line */}
                <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
