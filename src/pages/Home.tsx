
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>S-AIS - Digital Transformation for Oil & Gas Industry</title>
        <meta name="description" content="Leading IoT, Edge Computing, and Remote Monitoring Solutions for Oil & Gas digital transformation. Smart oilfields, real-time dashboards, and industrial-grade technology." />
        <meta name="keywords" content="IoT Oil Gas, Digital Transformation, Edge Computing, Industrial Dashboards, Smart Oilfields, Remote Asset Monitoring" />
      </Helmet>
      
      <Hero />
      <Services />
    </>
  );
};

export default Home;
