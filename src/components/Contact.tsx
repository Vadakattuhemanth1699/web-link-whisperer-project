"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_yrljomr",
        "template_e6eps3p",
        form.current,
        "uazng0ED83l48W7-6"
      )
      .then(
        () => {
          setSent(true);
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
            <p
              className="text-lg italic max-w-2xl mx-auto"
              style={{ color: "#7bb3e0" }}
            >
              I'm always interested in new opportunities and interesting
              projects. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Email
                  </h3>
                  <p className="text-foreground/80">hemanth.kumar8357@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Phone
                  </h3>
                  <p className="text-foreground/80">+1 (915) 308-1699</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Location
                  </h3>
                  <p className="text-foreground/80">Plano, Texas, USA</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">
                  Connect with me
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Vadakattuhemanth1699"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-glow"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hemanth-kumar-89821a31a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-card hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-glow"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:hemanth.kumar8357@gmail.com"
                    className="w-12 h-12 bg-card hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-glow"
                    aria-label="Email Contact"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send me a message
              </h3>
              {sent && (
                <p className="text-green-500 mb-4">Message sent successfully!</p>
              )}
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
