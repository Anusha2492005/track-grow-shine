import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/enhanced-card';
import { useToast } from '@/hooks/use-toast';
import { 
  GraduationCap, 
  User, 
  Award, 
  BookOpen, 
  FileText, 
  Bell, 
  LogOut,
  BarChart3,
  Users,
  Search,
  Plus,
  Download,
  Upload,
  Target,
  TrendingUp,
  Calendar,
  Settings
} from 'lucide-react';

const Dashboard = () => {
  const [userType, setUserType] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    const storedEmail = localStorage.getItem('userEmail');
    
    if (!storedUserType || !storedEmail) {
      navigate('/login');
      return;
    }
    
    setUserType(storedUserType);
    setUserEmail(storedEmail);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userType');
    localStorage.removeItem('userEmail');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate('/login');
  };

  const StudentDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Welcome back, {userEmail.split('@')[0]}!</h1>
        <p className="text-white/90">Track your skills, showcase your projects, and prepare for your career.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-sm text-muted-foreground">Total Skills</p>
              </div>
              <Award className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-accent">5</p>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
              <FileText className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">8</p>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-accent">85%</p>
                <p className="text-sm text-muted-foreground">Readiness Score</p>
              </div>
              <Target className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card variant="academic">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>
            Add new content to your profile
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="academic" className="h-20 flex-col gap-2">
              <Award className="h-6 w-6" />
              Add Skill
            </Button>
            <Button variant="success" className="h-20 flex-col gap-2">
              <Upload className="h-6 w-6" />
              Upload Certificate
            </Button>
            <Button variant="hero" className="h-20 flex-col gap-2">
              <Download className="h-6 w-6" />
              Generate Resume
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <Award className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Added React.js skill</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <FileText className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Uploaded AWS Certification</p>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
              <BookOpen className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Updated E-commerce Project</p>
                <p className="text-sm text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const FacultyDashboard = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-hero rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Faculty Dashboard</h1>
        <p className="text-white/90">Manage students, track progress, and support placement activities.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">156</p>
                <p className="text-sm text-muted-foreground">Total Students</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-accent">89</p>
                <p className="text-sm text-muted-foreground">Ready for Placement</p>
              </div>
              <Target className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">23</p>
                <p className="text-sm text-muted-foreground">Pending Reviews</p>
              </div>
              <FileText className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-accent">94%</p>
                <p className="text-sm text-muted-foreground">Avg. Readiness</p>
              </div>
              <BarChart3 className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card variant="academic">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Quick Actions
          </CardTitle>
          <CardDescription>
            Manage students and placement activities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="academic" className="h-20 flex-col gap-2">
              <Search className="h-6 w-6" />
              Search Students
            </Button>
            <Button variant="success" className="h-20 flex-col gap-2">
              <BarChart3 className="h-6 w-6" />
              View Reports
            </Button>
            <Button variant="hero" className="h-20 flex-col gap-2">
              <Bell className="h-6 w-6" />
              Send Notification
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Students */}
      <Card variant="elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Recently Active Students
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Added new certification • 2h ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-accent">Ready: 92%</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  AS
                </div>
                <div>
                  <p className="font-medium">Alice Smith</p>
                  <p className="text-sm text-muted-foreground">Updated project portfolio • 4h ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-accent">Ready: 88%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-card border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Student Skill Tracker
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                {userType === 'student' ? (
                  <>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Profile
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Skills
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Projects
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Resume
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Students
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <BarChart3 className="h-4 w-4" />
                      Reports
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Placements
                    </Button>
                  </>
                )}
                <Button variant="ghost" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {userType === 'student' ? <StudentDashboard /> : <FacultyDashboard />}
      </main>
    </div>
  );
};

export default Dashboard;