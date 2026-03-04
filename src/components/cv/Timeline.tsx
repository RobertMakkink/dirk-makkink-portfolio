import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { useState } from "react";

const jobs = [
  {
    title: "Klantenservice Medewerker",
    company: "Soleo Callcenter",
    period: "Januari 2025 – Juni 2025",
    description: "Telefonische klantenservice, problemen oplossen en klanten adviseren.",
  },
  {
    title: "Filiaalmanager",
    company: "Subway Arnhem",
    period: "Maart 2024 – November 2024",
    description: "Verantwoordelijk voor dagelijkse operatie, teamaansturing en kwaliteitscontrole.",
  },
  {
    title: "Freelancer & Seizoenswerk",
    company: "YoungOnes / Toverland / Walibi",
    period: "2021 – heden",
    description: "Diverse horeca- en evenementenwerk via flexibele platforms.",
  },
  {
    title: "Pizza Chef & Keukenhulp",
    company: "Rum Runners Bonaire",
    period: "September 2022 – December 2022",
    description: "Internationale ervaring in de keuken op Bonaire.",
  },
  {
    title: "Teamleider",
    company: "Subway Amersfoort",
    period: "April 2020 – Augustus 2022",
    description: "Leiding gegeven aan teams van 8+ medewerkers, planning en training.",
  },
  {
    title: "Allround Medewerker",
    company: "Monkey Town Amersfoort",
    period: "September 2021 – Juli 2022",
    description: "Diverse taken in het recreatiepark, van klantenservice tot facilitair.",
  },
];

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-12"
        >
          Werk<span className="text-gradient">ervaring</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 md:left-7 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-14 md:pl-20 cursor-pointer group"
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              >
                {/* Dot */}
                <div className="absolute left-3 md:left-5 top-5 w-4 h-4 rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />

                <div className="glass-card rounded-xl p-5 group-hover:glow-border transition-all">
                  <div className="flex items-start gap-3 mb-1">
                    <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-foreground">{job.title}</h3>
                      <p className="text-primary text-sm font-medium">{job.company}</p>
                      <p className="text-muted-foreground text-sm">{job.period}</p>
                    </div>
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ height: expandedIndex === i ? "auto" : 0, opacity: expandedIndex === i ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground text-sm mt-3 pl-8">{job.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
