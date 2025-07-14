
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Network, Cpu, BarChart3, Radio, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Network,
      title: t('services.iot.title'),
      description: t('services.iot.description'),
      features: [
        'Smart Sensor Networks',
        'Real-time Data Collection',
        'Wireless Communication',
        'Equipment Health Monitoring',
        'Environmental Sensing',
      ],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cpu,
      title: t('services.edge.title'),
      description: t('services.edge.description'),
      features: [
        'Local Data Processing',
        'Real-time Analytics',
        'Reduced Latency',
        'Offline Capabilities',
        'Edge AI Integration',
      ],
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: t('services.dashboards.title'),
      description: t('services.dashboards.description'),
      features: [
        'Custom Dashboard Design',
        'Real-time Visualization',
        'KPI Monitoring',
        'Alert Management',
        'Mobile Responsive',
      ],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Radio,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.description'),
      features: [
        '24/7 Asset Monitoring',
        'Predictive Maintenance',
        'Alarm Management',
        'Historical Data Analysis',
        'Compliance Reporting',
      ],
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - IoT, Edge Computing & Digital Solutions | S-AIS</title>
        <meta name="description" content="Comprehensive technology services for Oil & Gas: IoT solutions, Edge Analytics, Digital Dashboards, and Remote Monitoring systems." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#2E5F7F] to-[#4A90B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-[#2E5F7F] rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className="w-full bg-[#2E5F7F] hover:bg-[#1a365d] text-white group-hover:bg-gradient-to-r group-hover:from-[#2E5F7F] group-hover:to-[#4A90B8]"
                    >
                      {t('common.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Implementation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology to ensure successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Assessment', description: 'Analyze current systems and identify opportunities' },
                { step: '02', title: 'Design', description: 'Create customized solution architecture' },
                { step: '03', title: 'Implementation', description: 'Deploy and integrate solutions seamlessly' },
                { step: '04', title: 'Support', description: 'Ongoing monitoring and optimization' },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#2E5F7F] to-[#4A90B8] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#2E5F7F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your specific requirements and learn how our solutions can transform your operations.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-white text-[#2E5F7F] hover:bg-gray-100 font-semibold px-8 py-3 rounded-full"
            >
              <a href="/contact">
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
