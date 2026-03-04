import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 px-4" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-heading font-bold mb-4"
        >
          Neem <span className="text-gradient">contact</span> op
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground mb-10"
        >
          Ik sta open voor nieuwe mogelijkheden. Neem gerust contact op!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="tel:+31617420814" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-heading font-semibold hover:opacity-90 transition-opacity">
            <Phone className="w-5 h-5" /> Bel mij
          </a>
          <a href="mailto:dirkmakkink31@gmail.com" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-heading font-semibold hover:bg-secondary transition-colors">
            <Mail className="w-5 h-5" /> Email
          </a>
          <a href="https://wa.me/31617420814" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border text-foreground font-heading font-semibold hover:bg-secondary transition-colors">
            <MessageCircle className="w-5 h-5" /> WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
