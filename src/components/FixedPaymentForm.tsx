import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';

interface FixedPaymentFormProps {
  paintingId?: number;
  amount: number;
  description: string;
  title: string;
}

const FixedPaymentForm: React.FC<FixedPaymentFormProps> = ({ 
  paintingId, 
  amount, 
  description,
  title
}) => {
  const [orderId, setOrderId] = useState<string>(Date.now().toString());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/payment/init', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          orderId,
          description: description,
          isTest: 1 // Тестовый режим
        }),
      });

      const data = await response.json();

      if (response.ok && data.redirectUrl) {
        
        window.location.href = data.redirectUrl;
      } else {
        setError(data.error || 'Ошибка инициации платежа');
      }
    } catch (err) {
      setError('Ошибка сети при инициации платежа');
      console.error('Payment error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Оплата заказа</h2>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="title" className="block mb-2">Название картины</Label>
          <Input
            id="title"
            type="text"
            value={title}
            readOnly
            className="w-full bg-gray-100 font-medium"
          />
        </div>
        
        <div>
          <Label htmlFor="orderId" className="block mb-2">Номер заказа</Label>
          <Input
            id="orderId"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
            className="w-full"
          />
        </div>
        
        <div>
          <Label htmlFor="amount" className="block mb-2">Сумма (руб.)</Label>
          <Input
            id="amount"
            type="text"
            value={`${amount.toLocaleString('ru-RU')} ₽`}
            readOnly
            className="w-full bg-luxury-gold/10 text-luxury-gold font-bold text-lg"
          />
        </div>
        
        <div>
          <Label htmlFor="description" className="block mb-2">Описание</Label>
          <Input
            id="description"
            type="text"
            value={description}
            readOnly
            className="w-full bg-gray-100"
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-dark"
        >
          {isLoading ? 'Обработка...' : 'Оплатить через Robokassa'}
        </Button>
      </form>
      
      <div className="mt-6 text-center text-sm text-muted-foreground">
        <p>Тестовый режим: средства не будут списаны</p>
      </div>
    </Card>
  );
};

export default FixedPaymentForm;