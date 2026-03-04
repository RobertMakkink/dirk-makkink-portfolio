import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";

const About = () => {
  const details = [
    { icon: MapPin, label: "Locatie", value: "Groesbeek, Nederland" },
    { icon: Phone, label: "Telefoon", value: "+31 6 17420814", href: "tel:+31617420814" },
    { icon: Mail, label: "Email", value: "dirkmakkink31@gmail.com", href: "mailto:dirkmakkink31@gmail.com" },
    { icon: Calendar, label: "Geboortedatum", value: "5 augustus 2004" },
  ];

  return (
    <section className="py-24 px-4" id="about">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-8"
        >
          Over <span className="text-gradient">mij</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl"
        >
          Veelzijdige en energieke allround medewerker met een hands-on mentaliteit.
          Ervaring in horeca, klantenservice en teamleiding.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-lg p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-foreground hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
