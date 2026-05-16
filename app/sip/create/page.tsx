'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Shield, 
  Clock,
  Info,
  Check
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/navigation';
import Link from 'next/link';

const strategies = [
  {
    id: 'marinade-staking',
    name: 'Marinade Staking',
    description: 'Stake SOL with Marinade Finance for liquid staking rewards',
    apy: 7.2,
    risk: 'Low',
    token: 'SOL',
    minAmount: 0.1
  },
  {
    id: 'solend-lending',
    name: 'Solend Protocol',
    description: 'Lend USDC on Solend for stable yields',
    apy: 5.8,
    risk: 'Low',
    token: 'USDC',
    minAmount: 10
  },
  {
    id: 'msol-staking',
    name: 'mSOL Growth',
    description: 'Hold and compound mSOL rewards automatically',
    apy: 8.1,
    risk: 'Medium',
    token: 'mSOL',
    minAmount: 0.1
  },
  {
    id: 'jupiter-dca',
    name: 'Jupiter DCA',
    description: 'Dollar-cost average into various Solana tokens',
    apy: 12.4,
    risk: 'High',
    token: 'Various',
    minAmount: 5
  }
];

const frequencies = [
  { value: 'daily', label: 'Daily', description: 'Invest every day' },
  { value: 'weekly', label: 'Weekly', description: 'Invest every week' },
  { value: 'biweekly', label: 'Bi-weekly', description: 'Invest every 2 weeks' },
  { value: 'monthly', label: 'Monthly', description: 'Invest every month' }
];

export default function CreateSIP() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    strategy: '',
    amount: '',
    frequency: '',
    startDate: '',
    endDate: '',
    insurance: false,
    name: ''
  });

  const steps = ['Strategy', 'Schedule', 'Insurance', 'Review'];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would integrate with your smart contract
    console.log('Creating SIP with data:', formData);
    router.push('/dashboard');
  };

  const selectedStrategy = strategies.find(s => s.id === formData.strategy);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Create New SIP</h1>
            <p className="text-muted-foreground">Set up your systematic investment plan</p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className={`flex items-center ${
                  index <= currentStep ? 'text-accent' : 'text-muted-foreground'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    index < currentStep
                      ? 'bg-accent text-black'
                      : index === currentStep
                      ? 'bg-accent text-black'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {index < currentStep ? <Check className="w-4 h-4" /> : index + 1}
                </div>
                <span className="ml-2 text-sm font-medium">{step}</span>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-0.5 ml-4 ${
                      index < currentStep ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="glass-card mb-8">
          <CardContent className="p-8">
            {currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">Choose Your Strategy</h2>
                  <p className="text-muted-foreground">Select the DeFi strategy for your SIP</p>
                </div>

                <div className="grid gap-4">
                  {strategies.map((strategy) => (
                    <div
                      key={strategy.id}
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        formData.strategy === strategy.id
                          ? 'border-accent bg-accent/5'
                          : 'border-border hover:border-accent/50'
                      }`}
                      onClick={() => setFormData({ ...formData, strategy: strategy.id })}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{strategy.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary">{strategy.apy}% APY</Badge>
                          <Badge 
                            variant={strategy.risk === 'Low' ? 'secondary' : strategy.risk === 'Medium' ? 'outline' : 'destructive'}
                          >
                            {strategy.risk} Risk
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{strategy.description}</p>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>Token: {strategy.token}</span>
                        <span className="mx-2">•</span>
                        <span>Min: {strategy.minAmount} {strategy.token}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">Set Your Schedule</h2>
                  <p className="text-muted-foreground">Configure your investment amount and frequency</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="sipName">SIP Name</Label>
                      <Input
                        id="sipName"
                        placeholder="My SOL Staking Plan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="amount">Investment Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="amount"
                          type="number"
                          placeholder="100"
                          className="pl-10"
                          value={formData.amount}
                          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        />
                      </div>
                      {selectedStrategy && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Minimum: {selectedStrategy.minAmount} {selectedStrategy.token}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="frequency">Frequency</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, frequency: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                        <SelectContent>
                          {frequencies.map((freq) => (
                            <SelectItem key={freq.value} value={freq.value}>
                              <div>
                                <div className="font-medium">{freq.label}</div>
                                <div className="text-xs text-muted-foreground">{freq.description}</div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="endDate">End Date (Optional)</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Leave empty for ongoing SIP
                      </p>
                    </div>

                    {selectedStrategy && formData.amount && formData.frequency && (
                      <Card className="p-4 bg-accent/5 border-accent/20">
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between">
                            <span>Projected Annual Investment:</span>
                            <span className="font-medium">
                              ${(parseFloat(formData.amount) * (
                                formData.frequency === 'daily' ? 365 :
                                formData.frequency === 'weekly' ? 52 :
                                formData.frequency === 'biweekly' ? 26 : 12
                              )).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Expected Annual Yield:</span>
                            <span className="font-medium text-green-400">
                              {selectedStrategy.apy}%
                            </span>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">Optional Insurance</h2>
                  <p className="text-muted-foreground">Protect your investment against protocol failures</p>
                </div>

                <Card className="p-6 border-accent/20">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-accent mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">SIP Insurance</h3>
                          <p className="text-sm text-muted-foreground">
                            1-2% premium per investment for protection against smart contract failures
                          </p>
                        </div>
                        <Switch
                          checked={formData.insurance}
                          onCheckedChange={(checked) => setFormData({ ...formData, insurance: checked })}
                        />
                      </div>

                      {formData.insurance && (
                        <div className="space-y-3 p-4 bg-accent/5 rounded-lg">
                          <div className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            Protection against smart contract exploits
                          </div>
                          <div className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            Failed transaction compensation
                          </div>
                          <div className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-green-400 mr-2" />
                            DAO-governed claims process
                          </div>
                          {formData.amount && (
                            <div className="mt-3 pt-3 border-t border-border">
                              <div className="flex justify-between text-sm">
                                <span>Insurance Premium:</span>
                                <span className="font-medium">
                                  ${(parseFloat(formData.amount) * 0.015).toFixed(2)} per investment
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-400 mb-1">How Insurance Works</p>
                      <p className="text-muted-foreground">
                        Insurance premiums are pooled in a community-governed vault. Claims are reviewed and approved 
                        by token holders through our DAO governance system. Coverage applies to protocol failures, 
                        not market volatility.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2">Review Your SIP</h2>
                  <p className="text-muted-foreground">Confirm your systematic investment plan details</p>
                </div>

                {selectedStrategy && (
                  <div className="space-y-4">
                    <Card className="p-4">
                      <h3 className="font-semibold mb-3">Strategy Details</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Strategy:</span>
                          <span className="ml-2 font-medium">{selectedStrategy.name}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Expected APY:</span>
                          <span className="ml-2 font-medium text-green-400">{selectedStrategy.apy}%</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Risk Level:</span>
                          <span className="ml-2 font-medium">{selectedStrategy.risk}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Token:</span>
                          <span className="ml-2 font-medium">{selectedStrategy.token}</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <h3 className="font-semibold mb-3">Investment Schedule</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">SIP Name:</span>
                          <span className="ml-2 font-medium">{formData.name || 'Unnamed SIP'}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Amount:</span>
                          <span className="ml-2 font-medium">${formData.amount}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Frequency:</span>
                          <span className="ml-2 font-medium capitalize">{formData.frequency}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Start Date:</span>
                          <span className="ml-2 font-medium">{formData.startDate}</span>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <h3 className="font-semibold mb-3">Insurance & Fees</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Insurance Coverage:</span>
                          <span className="font-medium">
                            {formData.insurance ? 'Enabled' : 'Disabled'}
                          </span>
                        </div>
                        {formData.insurance && formData.amount && (
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Insurance Premium:</span>
                            <span className="font-medium">
                              ${(parseFloat(formData.amount) * 0.015).toFixed(2)} per investment
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Network Fees:</span>
                          <span className="font-medium">~$0.01 per transaction</span>
                        </div>
                      </div>
                    </Card>
                  </div>
                )}
              </motion.div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between pb-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          {currentStep < steps.length - 1 ? (
            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 0 && !formData.strategy) ||
                (currentStep === 1 && (!formData.amount || !formData.frequency || !formData.name))
              }
              className="bg-accent hover:bg-accent/90 text-black font-medium"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-accent hover:bg-accent/90 text-black font-medium"
            >
              Create SIP
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}