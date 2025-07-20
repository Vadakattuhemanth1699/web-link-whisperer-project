const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                <strong>Replace this section with your personal story.</strong> Describe your journey into 
                software engineering, your background, and what motivates you. This is where you can 
                share your unique perspective and experiences.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Talk about your technical interests, any specializations you have, and your approach 
                to problem-solving. Mention your educational background and any significant achievements 
                that shaped your career.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Share your vision for the future, what types of projects excite you, and how you 
                contribute to teams and the broader tech community.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Location</span>
                  <span className="font-medium">Your City, Country</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">X+ Years</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium">Your Degree</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Interests</span>
                  <span className="font-medium">Your Interests</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-medium">Your Languages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;