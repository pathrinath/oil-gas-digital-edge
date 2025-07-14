
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, Network, BarChart3, Radio } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Network,
      title: t('services.iot.title'),
      description: t('services.iot.description'),
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: Cpu,
      title: t('services.edge.title'),
      description: t('services.edge.description'),
      gradient: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: t('services.dashboards.title'),
      description: t('services.dashboards.description'),
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: Radio,
      title: t('services.monitoring.title'),
      description: t('services.monitoring.description'),
      gradient: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
