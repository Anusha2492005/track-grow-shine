import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/enhanced-card';
import { 
  GraduationCap, 
  Award, 
  BarChart3, 
  FileText, 
  Users, 
  Target,
  TrendingUp,
  Shield,
  ArrowRight
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <GraduationCap className="h-16 w-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Student Skill Tracker
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empower your academic journey with comprehensive skill tracking, 
              portfolio management, and placement readiness assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                  Get Started as Student
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                  Faculty Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Everything You Need for Success
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools to track skills, showcase projects, and prepare for your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Skill Management</CardTitle>
                <CardDescription>
                  Track and rate your technical and non-technical skills with detailed progress analytics
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Portfolio & Resume</CardTitle>
                <CardDescription>
                  Showcase projects and generate professional resumes automatically from your profile
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Analytics & Reports</CardTitle>
                <CardDescription>
                  Get insights into your progress with detailed charts and placement readiness scores
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Faculty Dashboard</CardTitle>
                <CardDescription>
                  Advanced tools for faculty to search, filter, and assess student readiness
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Placement Ready</CardTitle>
                <CardDescription>
                  Calculate placement readiness scores and track progress towards career goals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated" className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-gradient-primary rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Secure & Reliable</CardTitle>
                <CardDescription>
                  Your data is safe with secure authentication and reliable cloud storage
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Track Your Skills?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students who are already tracking their progress and preparing for successful careers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                Create Student Account
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-primary">
                Faculty Access
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">Student Skill Tracker</span>
            </div>
            <p className="text-background/70">
              Empowering students to showcase their skills and achieve career success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
