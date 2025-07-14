
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Target, Users, Award, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: t('about.mission'),
      description: t('about.missionText'),
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: t('about.experience'),
      description: t('about.experienceText'),
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Committed to delivering the highest quality solutions with rigorous testing and continuous improvement.',
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Focus',
      description: 'Staying at the forefront of technology to provide cutting-edge solutions that drive industry transformation.',
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About S-AIS - Industry Leaders in Digital Innovation</title>
        <meta name="description" content="Learn about S-AIS, technology leaders specializing in IoT, Edge Computing, and Digital Solutions for Oil & Gas industry transformation." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#2E5F7F] to-[#4A90B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-md">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${value.gradient} flex items-center justify-center`}>
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#2E5F7F] mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2E5F7F] mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2E5F7F] mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
