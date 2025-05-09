
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Truck } from "lucide-react";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Cotação enviada com sucesso!",
        description: "Entraremos em contato em breve com os melhores preços.",
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Truck className="h-6 w-6 text-freight-600" />
        <h3 className="text-xl font-semibold text-gray-800">Solicite sua cotação agora</h3>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="origin" className="block text-sm font-medium text-gray-700 mb-1">
                Origem
              </label>
              <Input 
                id="origin" 
                placeholder="Cidade de origem" 
                required 
              />
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                Destino
              </label>
              <Input 
                id="destination" 
                placeholder="Cidade de destino" 
                required 
              />
            </div>
          </div>

          <div>
            <label htmlFor="freight-type" className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de Frete
            </label>
            <Select defaultValue="road">
              <SelectTrigger id="freight-type">
                <SelectValue placeholder="Selecione o tipo de frete" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="road">Rodoviário</SelectItem>
                <SelectItem value="air">Aéreo</SelectItem>
                <SelectItem value="sea">Marítimo</SelectItem>
                <SelectItem value="multimodal">Multimodal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                Peso (kg)
              </label>
              <Input 
                id="weight" 
                type="number" 
                placeholder="Ex: 500" 
                min="0" 
                required 
              />
            </div>
            <div>
              <label htmlFor="packageType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Carga
              </label>
              <Select defaultValue="general">
                <SelectTrigger id="packageType">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Carga Geral</SelectItem>
                  <SelectItem value="fragile">Frágil</SelectItem>
                  <SelectItem value="refrigerated">Refrigerada</SelectItem>
                  <SelectItem value="dangerous">Perigosa</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
              Email ou Telefone
            </label>
            <Input 
              id="contact" 
              placeholder="Seu contato para retorno" 
              required 
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-freight-600 hover:bg-freight-700"
            disabled={isLoading}
          >
            {isLoading ? "Processando..." : "Solicitar Cotação"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
