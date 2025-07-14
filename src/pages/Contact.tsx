
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ContactForm from '@/components/ContactForm';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Contact S-AIS - Digital Transformation Consultation</title>
        <meta name="description" content="Contact S-AIS for Oil & Gas digital transformation consultation. Request a meeting, get a quote, or discuss your IoT and Edge Computing needs." />
      </Helmet>

      <div className="pt-16">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
