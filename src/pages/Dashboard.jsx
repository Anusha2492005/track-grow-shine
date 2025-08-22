import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  BookOpen, 
  Award, 
  TrendingUp, 
  Users, 
  Plus, 
  Upload, 
  FileText, 
  BarChart3, 
  Bell, 
  Search,
  LogOut,
  User,
  Settings,
  Target,
  Calendar,
  Trophy,
  Briefcase,
  GraduationCap,
  Mail,
  Download,
  Eye
} from 'lucide-react';

const Dashboard = () => {
  const [userType, setUserType] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    const storedUserEmail = localStorage.getItem('userEmail');
    
    if (!storedUserType || !storedUserEmail) {
      navigate('/login');
      return;
    }
    
    setUserType(storedUserType);
    setUserEmail(storedUserEmail);
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

  // Student Dashboard Component
  const StudentDashboard = () => {
    const studentStats = [
      { title: "Skills Tracked", value: "24", icon: <BookOpen className="h-6 w-6" />, color: "text-blue-600" },
      { title: "Certifications", value: "8", icon: <Award className="h-6 w-6" />, color: "text-green-600" },
      { title: "Projects", value: "12", icon: <Briefcase className="h-6 w-6" />, color: "text-purple-600" },
      { title: "Readiness Score", value: "85%", icon: <Target className="h-6 w-6" />, color: "text-orange-600" },
    ];

    const recentActivities = [
      { action: "Added new skill: React.js", time: "2 hours ago", type: "skill" },
      { action: "Uploaded AWS Certification", time: "1 day ago", type: "certificate" },
      { action: "Updated project: E-commerce Website", time: "3 days ago", type: "project" },
      { action: "Generated new resume", time: "1 week ago", type: "resume" },
    ];

    const skills = [
      { name: "JavaScript", level: 90, category: "Programming" },
      { name: "React.js", level: 85, category: "Frontend" },
      { name: "Node.js", level: 75, category: "Backend" },
      { name: "Python", level: 80, category: "Programming" },
      { name: "Communication", level: 88, category: "Soft Skill" },
    ];

    return (
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Student!</h1>
          <p className="text-blue-100 text-lg">Continue building your skills and tracking your progress</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {studentStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Manage your skills and portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex-col space-y-2">
                <Plus className="h-6 w-6" />
                <span>Add Skill</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Upload className="h-6 w-6" />
                <span>Upload Certificate</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <FileText className="h-6 w-6" />
                <span>Generate Resume</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BarChart3 className="h-6 w-6" />
                <span>View Analytics</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Top Skills</CardTitle>
              <CardDescription>Your strongest technical and soft skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Your latest updates and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50">
                    <div className="flex-shrink-0">
                      {activity.type === 'skill' && <BookOpen className="h-5 w-5 text-blue-600" />}
                      {activity.type === 'certificate' && <Award className="h-5 w-5 text-green-600" />}
                      {activity.type === 'project' && <Briefcase className="h-5 w-5 text-purple-600" />}
                      {activity.type === 'resume' && <FileText className="h-5 w-5 text-orange-600" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };

  // Faculty Dashboard Component
  const FacultyDashboard = () => {
    const facultyStats = [
      { title: "Total Students", value: "1,247", icon: <Users className="h-6 w-6" />, color: "text-blue-600" },
      { title: "Placement Ready", value: "89", icon: <Trophy className="h-6 w-6" />, color: "text-green-600" },
      { title: "Pending Reviews", value: "23", icon: <Calendar className="h-6 w-6" />, color: "text-orange-600" },
      { title: "Avg Readiness", value: "78%", icon: <TrendingUp className="h-6 w-6" />, color: "text-purple-600" },
    ];

    const topStudents = [
      { name: "Alice Johnson", id: "CS2021001", score: 94, skills: 28, projects: 15 },
      { name: "Bob Smith", id: "IT2021045", score: 91, skills: 25, projects: 12 },
      { name: "Carol Davis", id: "CS2021078", score: 89, skills: 22, projects: 14 },
      { name: "David Wilson", id: "EC2021156", score: 87, skills: 20, projects: 11 },
    ];

    return (
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Faculty Dashboard</h1>
          <p className="text-green-100 text-lg">Monitor student progress and manage placements</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Faculty Tools</CardTitle>
            <CardDescription>Student management and placement tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button className="h-20 flex-col space-y-2">
                <Search className="h-6 w-6" />
                <span>Search Students</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <BarChart3 className="h-6 w-6" />
                <span>View Reports</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Bell className="h-6 w-6" />
                <span>Send Notifications</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Download className="h-6 w-6" />
                <span>Export Data</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Top Students */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Students</CardTitle>
            <CardDescription>Students with highest placement readiness scores</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topStudents.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      <span className="font-bold text-primary">#{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{student.name}</h4>
                      <p className="text-sm text-gray-600">ID: {student.id}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Score</p>
                      <p className="font-bold text-green-600">{student.score}%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Skills</p>
                      <p className="font-semibold">{student.skills}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-600">Projects</p>
                      <p className="font-semibold">{student.projects}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-2" />
                      View Profile
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  if (!userType) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-gray-900">Student Skill Tracker</h1>
              <Badge variant="secondary">
                {userType === 'student' ? 'Student' : 'Faculty'}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              {userType === 'student' && (
                <>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trophy className="h-4 w-4 mr-2" />
                    Skills
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Projects
                  </Button>
                </>
              )}
              
              {userType === 'faculty' && (
                <>
                  <Button variant="ghost" size="sm">
                    <Users className="h-4 w-4 mr-2" />
                    Students
                  </Button>
                  <Button variant="ghost" size="sm">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Analytics
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Button>
                </>
              )}
              
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
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