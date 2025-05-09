
import React, { useState, useRef, ChangeEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Truck } from "lucide-react";

// Lista das principais cidades brasileiras em ordem alfabética
const principalCities = [
  "Belém",
  "Belo Horizonte",
  "Brasília",
  "Campo Grande",
  "Campinas",
  "Curitiba",
  "Duque de Caxias",
  "Fortaleza",
  "Goiânia",
  "Guarulhos",
  "Maceió",
  "Manaus",
  "Natal",
  "Porto Alegre",
  "Recife",
  "Rio de Janeiro",
  "Salvador",
  "São Gonçalo",
  "São Luís",
  "São Paulo"
];

// Função para formatar telefone
const formatPhoneNumber = (value: string): string => {
  // Remove todos os caracteres não numéricos
  const numbers = value.replace(/\D/g, '');
  
  // Verifica se parece ser um número de telefone (tem só números)
  if (/^\d+$/.test(value)) {
    // Formato para celular: (XX) XXXXX-XXXX
    if (numbers.length <= 11) {
      let formatted = '';
      
      if (numbers.length > 0) {
        formatted += `(${numbers.substring(0, 2)}`;
      }
      if (numbers.length > 2) {
        formatted += `) ${numbers.substring(2, 7)}`;
      }
      if (numbers.length > 7) {
        formatted += `-${numbers.substring(7, 11)}`;
      }
      
      return formatted;
    }
  }
  
  // Se não for um número de telefone ou tiver mais de 11 dígitos, retorna o valor original
  return value;
};

// Função para verificar se é um email
const isEmail = (value: string): boolean => {
  return value.includes('@') && value.includes('.');
};

const QuoteForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [contact, setContact] = useState("");
  const lastContactValue = useRef("");
  
  const handleContactChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    // Se for um email (contém @ e .), mantém o valor sem formatar
    if (isEmail(value)) {
      setContact(value);
      lastContactValue.current = value;
    } else {
      // Se for um número de telefone (contém apenas dígitos), formata
      const formattedValue = formatPhoneNumber(value);
      setContact(formattedValue);
      lastContactValue.current = formattedValue;
    }
  };
  
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
              <Select value={origin} onValueChange={setOrigin} required>
                <SelectTrigger id="origin">
                  <SelectValue placeholder="Selecione a cidade de origem" />
                </SelectTrigger>
                <SelectContent>
                  {principalCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                Destino
              </label>
              <Select value={destination} onValueChange={setDestination} required>
                <SelectTrigger id="destination">
                  <SelectValue placeholder="Selecione a cidade de destino" />
                </SelectTrigger>
                <SelectContent>
                  {principalCities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
              value={contact}
              onChange={handleContactChange}
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
