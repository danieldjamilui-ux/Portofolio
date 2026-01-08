import { Code, Briefcase, CircleUser, Award, Zap, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "./hooks/useInView";

const features = [
  {
    icon: Code,
    title: "Kode Bersih",
    description:
      "Menulis kode yang mudah dipelihara, terukur, dan terdokumentasi dengan baik adalah prioritas saya. Saya percaya pada praktik terbaik dan peningkatan berkelanjutan.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Performa Cepat",
    description:
      "Aplikasi yang dioptimalkan dengan loading super cepat dan memberikan pengalaman pengguna yang mulus di semua perangkat.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Briefcase,
    title: "Profesional",
    description:
      "5+ tahun pengalaman bekerja dengan startup dan perusahaan mapan, menghasilkan solusi berkualitas tinggi tepat waktu.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: CircleUser,
    title: "Fokus Pengguna",
    description:
      "Saya menempatkan pengguna di pusat setiap proyek, memastikan pengalaman yang intuitif dan dapat diakses untuk semua orang.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Terminal,
    title: "Teknologi Modern",
    description:
      "Keahlian dalam teknologi dan framework terkini untuk membangun aplikasi yang siap menghadapi masa depan.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Award,
    title: "Berorientasi Kualitas",
    description:
      "Berkomitmen untuk memberikan keunggulan dengan pengujian yang ketat dan perhatian terhadap detail di setiap proyek.",
    color: "from-rose-500 to-red-500",
  },
];

export function About() {
  const { ref, inView } = useInView({ threshold: 0.1 });

}
