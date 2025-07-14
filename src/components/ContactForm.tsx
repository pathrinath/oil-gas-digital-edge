
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { Send, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  meetingRequest: boolean;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>();

  const meetingRequest = watch('meetingRequest');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', data);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookMeeting = () => {
    // In a real app, this would open a calendar booking widget like Calendly
    window.open('https://calendly.com/s-ais-demo', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder={t('contact.form.name')}
                      {...register('name', { required: 'Name is required' })}
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder={t('contact.form.email')}
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      placeholder={t('contact.form.company')}
                      {...register('company', { required: 'Company is required' })}
                      className={errors.company ? 'border-red-500' : ''}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      placeholder={t('contact.form.phone')}
                      {...register('phone')}
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    placeholder={t('contact.form.message')}
                    rows={4}
                    {...register('message', { required: 'Message is required' })}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="meetingRequest"
                    {...register('meetingRequest')}
                  />
                  <label htmlFor="meetingRequest" className="text-sm text-gray-700">
                    {t('contact.form.meetingRequest')}
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-[#2E5F7F] hover:bg-[#1a365d] text-white"
                  >
                    {isSubmitting ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    ) : (
                      <Send className="w-4 h-4 mr-2" />
                    )}
                    {t('contact.form.submit')}
                  </Button>

                  {meetingRequest && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleBookMeeting}
                      className="flex-1 border-[#2E5F7F] text-[#2E5F7F] hover:bg-[#2E5F7F] hover:text-white"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      {t('contact.form.bookMeeting')}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  {t('contact.info.address')}
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-[#2E5F7F] mr-3" />
                    <span className="text-gray-700">{t('contact.info.email')}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-[#2E5F7F] mr-3" />
                    <span className="text-gray-700">{t('contact.info.phone')}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-[#2E5F7F] mr-3" />
                    <span className="text-gray-700">{t('contact.info.hours')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendly Embed Placeholder */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Schedule a Meeting
                </h3>
                <p className="text-gray-600 mb-6">
                  Book a consultation to discuss your digital transformation needs.
                </p>
                <Button 
                  onClick={handleBookMeeting}
                  className="w-full bg-[#2E5F7F] hover:bg-[#1a365d] text-white"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Open Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
