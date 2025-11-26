import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setStatus({ success: true, message: "✅ Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus({ success: false, message: "❌ Failed to send message. Try again." });
      })
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#22c55e" }}>
              Get In Touch
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ backgroundColor: "#22c55e" }}></div>
            <p className="text-lg italic max-w-2xl mx-auto" style={{ color: "#22c55e" }}>
              I'm always interested in new opportunities and interesting projects.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side: Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110" style={{ backgroundImage: "linear-gradient(135deg, #22c55e 0%, #001f3f 100%)" }}>
                  <Mail className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p>Hemanth.kumar8357@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110" style={{ backgroundImage: "linear-gradient(135deg, #001f3f 0%, #22c55e 100%)" }}>
                  <Phone className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p>+1 (915) 308-1699</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110" style={{ backgroundImage: "linear-gradient(135deg, #22c55e 0%, #001f3f 100%)" }}>
                  <MapPin className="h-6 w-6 text-white drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Location</h3>
                  <p>Plano, Texas, USA</p>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-6">Connect with me</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Vadakattuhemanth1699"
                    className="w-12 h-12 bg-card hover:bg-green-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-125 shadow-md hover:shadow-xl"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hemanth-kumar-89821a31a/"
                    className="w-12 h-12 bg-card hover:bg-green-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-125 shadow-md hover:shadow-xl"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:hemanth.kumar8357@gmail.com"
                    className="w-12 h-12 bg-card hover:bg-green-100 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-125 shadow-md hover:shadow-xl"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#001f3f' }}>Send me a message</h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Contact form"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 resize-none"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full text-white transition-all duration-300 hover:scale-105"
                  style={{ backgroundImage: "linear-gradient(135deg, #22c55e 0%, #001f3f 100%)" }}
                  aria-busy={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>

              {/* Status message below the form */}
              {status && (
                <p
                  className={`mt-4 p-4 rounded-xl ${
                    status.success ? "bg-green-50 text-green-900 border border-green-200" : "bg-green-50 text-green-900 border border-green-200"
                  }`}
                  role="alert"
                  aria-live="assertive"
                >
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
