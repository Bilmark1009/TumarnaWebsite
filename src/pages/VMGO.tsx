import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const VMGO = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button 
          variant="ghost" 
          className="mb-8 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
        
        <div className="space-y-16">
          {/* Vision Section */}
          <section className="bg-card p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold text-primary mb-4">Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To empower individuals to take control of their health by providing a reliable, intuitive, and secure medication management platform that promotes adherence and overall well-being. We envision a future where managing medications is seamless, accurate, and stress-free, enabling users to lead healthier lives, prevent complications, and make informed decisions about their health every day.
            </p>
          </section>

          {/* Mission Section */}
          <section className="bg-card p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold text-primary mb-4">Mission</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-medium">•</span>
                <span>To provide a user-friendly app that helps users track, manage, and adhere to their medication schedules efficiently.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-medium">•</span>
                <span>To integrate advanced features like symptom checkers, medical assessment APIs, and pharmacy finders for a more holistic healthcare experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-medium">•</span>
                <span>To ensure the privacy and security of users' medical information through localized data storage.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-medium">•</span>
                <span>To support multi-user management, enabling families and caregivers to assist in medication adherence.</span>
              </li>
            </ul>
          </section>

          {/* Goals Section */}
          <section className="bg-card p-8 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold text-primary mb-6">Goals</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Reduce medication non-adherence by sending timely reminders and tracking intake.",
                "Enhance user knowledge on medications, side effects, and safety through integrated medical information.",
                "Provide convenience by offering local pharmacy locations and medication-related resources.",
                "Facilitate informed health decisions with symptom-based guidance and medical assessment tools.",
                "Promote long-term health outcomes by creating an engaging and reliable medication management experience."
              ].map((goal, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-muted-foreground">{goal}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VMGO;
