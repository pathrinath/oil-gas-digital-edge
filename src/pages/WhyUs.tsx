
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { CheckCircle, Award, Clock, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: Award,
      title: t('whyUs.expertise.title'),
      description: t('whyUs.expertise.description'),
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Zap,
      title: t('whyUs.technology.title'),
      description: t('whyUs.technology.description'),
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: Clock,
      title: t('whyUs.support.title'),
      description: t('whyUs.support.description'),
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: CheckCircle,
      title: t('whyUs.proven.title'),
      description: t('whyUs.proven.description'),
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  const benefits = [
    'Reduced operational costs by up to 30%',
    'Improved safety compliance and monitoring',
    'Real-time data analytics and insights',
    'Predictive maintenance capabilities',
    'Scalable solutions for any operation size',
    'Regulatory compliance assurance',
    'Environmental impact reduction',
    'Enhanced operational efficiency',
  ];

  return (
    <>
      <Helmet>
        <title>Why Choose S-AIS - Your Trusted Technology Partner</title>
        <meta name="description" content="Discover why S-AIS is the preferred technology partner for Oil & Gas digital transformation. Industry expertise, cutting-edge technology, and proven results." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#2E5F7F] to-[#4A90B8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {t('whyUs.title')}
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t('whyUs.subtitle')}
            </p>
          </div>
        </section>

        {/* Main Advantages */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {advantages.map((advantage, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white shadow-md">
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${advantage.gradient} flex items-center justify-center`}>
                      <advantage.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Measurable Business Impact
                </h2>
                <p className="text-xl text-gray-600">
                  Our solutions deliver tangible results that transform your operations
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#2E5F7F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the companies already benefiting from our digital transformation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-[#2E5F7F] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#2E5F7F] transition-colors duration-200"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyUs;
