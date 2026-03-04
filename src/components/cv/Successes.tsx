import { motion } from "framer-motion";
import { Star, Users, Globe } from "lucide-react";

const successes = [
  {
    icon: Star,
    title: "YoungOnes",
    stat: "127+",
    desc: "beoordelingen — gemiddeld 4.5 sterren",
  },
  {
    icon: Users,
    title: "Leiderschap",
    stat: "8+",
    desc: "medewerkers aangestuurd bij Subway",
  },
  {
    icon: Globe,
    title: "Internationaal",
    stat: "Bonaire",
    desc: "werkervaring opgedaan in het buitenland",
  },
];

const Successes = () => {
  return (
    <section className="py-24 px-4" id="successes">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-12"
        >
          Successen
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {successes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card glow-border rounded-xl p-6 text-center group hover:scale-[1.02] transition-transform"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-heading font-bold text-gradient mb-1">{item.stat}</p>
              <p className="font-heading font-semibold text-foreground mb-2">{item.title}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Successes;
