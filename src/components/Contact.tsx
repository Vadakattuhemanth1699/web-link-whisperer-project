import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        "service_yrljomr",
        "template_e6eps3p",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "uazng0ED83l48W7-6"
      )
      .then(() => {
        setLoading(false);
        setStatus({ success: true, message: "✅ Email sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setLoading(false);
        setStatus({ success: false, message: "❌ Failed to send email. Please try again later." });
      });
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
            <p className="text-lg italic max-w-2xl mx-auto" style={{ color: '#7bb3e0' }}>
              I'm always interested in new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p>Hemanth.kumar8357@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p>+1 (915) 308-1699</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p>Plano, Texas, USA</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-6">Connect with me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/Vadakattuhemanth1699" className="w-12 h-12 bg-card hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-glow">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://www.linkedin.com/in/hemanth-kumar-89821a31a/" className="w-12 h-12 bg-card hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-glow">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="mailto:hemanth.kumar8357@gmail.com" className="w-12 h-12 bg-card hover:bg-accent rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-elegant hover:shadow-glow">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
              <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button type="submit" disabled={loading} className="w-full bg-gradient-primary hover:shadow-glow">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
              {status && (
                <p className={`mt-4 text-center ${status.success ? "text-green-500" : "text-red-500"}`}>
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
