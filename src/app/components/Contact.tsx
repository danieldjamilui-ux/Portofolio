import { useState } from "react";
import { Mail, Github, Linkedin, MapPin, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "./hooks/useInView";

export function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "danieldjamilui@gmail.com",
      href: "mailto:danieldjamilui@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/daniel",
      href: "https://github.com",
      color: "from-gray-600 to-gray-400",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/daniel",
      href: "https://linkedin.com",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Tobelo, Halmahera Utara",
      href: "#",
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section id="contact" className="py-10 md:py-16 lg:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
      
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-full mb-6"
          >
            <span className="text-sm text-pink-300">Mari Terhubung</span>
          </motion.div>
          
          <h2 className="text-5xl mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Mari Bekerja Sama
          </h2>
          <p className="text-slate-400 text-lg">
            Punya proyek yang ingin Anda wujudkan atau ingin ngobrol? Jangan ragu untuk menghubungi!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl mb-6 text-white">Mari Terhubung</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Saya selalu tertarik untuk mendengar tentang proyek dan peluang baru. 
              Apakah Anda memiliki pertanyaan atau hanya ingin menyapa, saya akan 
              berusaha sebaik mungkin untuk merespons Anda!
            </p>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-all group"
                >
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-slate-500 mb-1">{info.title}</div>
                    <div className="text-slate-300 truncate group-hover:text-white transition-colors">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4"
            >
              <p className="text-slate-400">Ikuti saya:</p>
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Linkedin, href: "https://linkedin.com" },
                { icon: Mail, href: "mailto:danieldjamilui@gmail.com" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800/50 border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <Icon className="w-5 h-5 text-slate-400" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 transition-all"
                  placeholder="email@anda.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-500 resize-none transition-all"
                  placeholder="Pesan Anda..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={!isSubmitting && !isSubmitted ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && !isSubmitted ? { scale: 0.98 } : {}}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.span
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Mengirim...
                      </motion.span>
                    ) : isSubmitted ? (
                      <motion.span
                        key="submitted"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="w-5 h-5" />
                        Berhasil Terkirim!
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Kirim Pesan
                        <Send className="w-5 h-5" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
