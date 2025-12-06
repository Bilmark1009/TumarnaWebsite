import { Heart, Users, Award, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import '@/styles/animations.css';

const About = () => {
  const navigate = useNavigate();
  const stats = [
    {
      icon: Users,
      number: '100',
      label: 'Active Users'
    },
    {
      icon: Heart,
      number: '100',
      label: 'Medications Tracked'
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'App Store Rating'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-foreground mb-6">
              About Tumarna
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground text-justify">
              <p>
                Tumarna is a user-friendly medication management and reminder app designed to help individuals 
                take control of their health. By providing timely notifications, personalized schedules, and 
                comprehensive medication tracking, Tumarna ensures that users never miss a dose. The app also 
                integrates reliable medical information, including side effects, safety data, and symptom-based 
                assessments through trusted APIs, empowering users to make informed decisions about their health. 
                Designed with simplicity, privacy, and convenience in mind, Tumarna is ideal for anyone seeking 
                to improve medication adherence and overall well-being.
              </p>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="group relative overflow-hidden px-6 py-3 rounded-full border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30"
                onClick={() => navigate('/vmgo')}
              >
                <span className="relative z-10 flex items-center gap-2 text-primary group-hover:text-primary-foreground transition-colors duration-300">
                  Learn about our Mission
                  <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                </span>
                <span className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-0 group-hover:scale-100 transform origin-center transition-transform duration-700"></span>
              </Button>
              
            </div>
          </div>

          {/* Stats */}
          <div className="relative mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
                  style={{
                    animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`,
                    opacity: 0,
                    transform: 'translateY(10px)'
                  }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                    <stat.icon size={28} className="text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1.5">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              "Healthcare technology should empower, not complicate."
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
              That's why we've built Tumarna to be the most intuitive and comprehensive 
              medication management solution available. Your health journey should be 
              supported by technology that truly understands your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;