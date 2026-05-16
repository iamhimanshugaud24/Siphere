"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  DollarSign,
  Users,
  TrendingUp,
  Info,
  Plus,
  Award,
  Lock,
  Zap,
  BarChart3,
  Target,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

const insuranceStats = {
  totalCoverage: 2400000,
  totalPremiums: 45200,
  activePolices: 892,
  claimsPaid: 12,
  successRate: 94.2,
};

const coverageOptions = [
  {
    id: "basic",
    name: "Basic Coverage",
    premium: "1.0%",
    coverage: "Up to $10,000",
    features: [
      "Smart contract failures",
      "Failed transactions",
      "24h claim review",
      "Basic support",
    ],
  },
  {
    id: "premium",
    name: "Premium Coverage",
    premium: "1.5%",
    coverage: "Up to $50,000",
    features: [
      "All Basic features",
      "Protocol exploits",
      "12h claim review",
      "Priority support",
      "Advanced analytics",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise Coverage",
    premium: "2.0%",
    coverage: "Up to $250,000",
    features: [
      "All Premium features",
      "Custom coverage terms",
      "Dedicated support",
      "6h claim review",
      "Multi-protocol coverage",
    ],
  },
];

const recentClaims = [
  {
    id: "CLM-2024-089",
    user: "0x742d...8f42",
    amount: "$12,500",
    reason: "Smart contract exploit",
    status: "Approved",
    date: "Nov 10, 2025",
    payout: "48 hours",
  },
  {
    id: "CLM-2024-087",
    user: "0x8a3c...2d91",
    amount: "$8,200",
    reason: "Failed transaction",
    status: "Under Review",
    date: "Nov 12, 2025",
    payout: "Pending",
  },
  {
    id: "CLM-2024-086",
    user: "0x1f5e...9c34",
    amount: "$45,000",
    reason: "Protocol suspension",
    status: "Approved",
    date: "Nov 8, 2025",
    payout: "Completed",
  },
  {
    id: "CLM-2024-085",
    user: "0x6d2a...5b78",
    amount: "$3,800",
    reason: "Oracle manipulation",
    status: "Rejected",
    date: "Nov 7, 2025",
    payout: "N/A",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "DeFi Investor",
    avatar: "0x742d...8f42",
    rating: 5,
    comment:
      "The insurance coverage saved my investment when a protocol I was using got exploited. Claim was processed within 36 hours!",
  },
  {
    name: "Michael Torres",
    role: "Crypto Trader",
    avatar: "0x8a3c...2d91",
    rating: 5,
    comment:
      "Peace of mind knowing my SIP investments are protected. The premium plan is worth every penny for the coverage it provides.",
  },
  {
    name: "Emily Watson",
    role: "Institutional Investor",
    avatar: "0x1f5e...9c34",
    rating: 4,
    comment:
      "Enterprise coverage with custom terms made it possible for our firm to invest confidently in DeFi strategies.",
  },
];

const faqItems = [
  {
    question: "How quickly are claims processed?",
    answer:
      "Basic coverage claims are reviewed within 24 hours, Premium within 12 hours, and Enterprise within 6 hours. Once approved, payouts are typically completed within 48-72 hours.",
  },
  {
    question: "What evidence do I need to file a claim?",
    answer:
      "You need transaction hashes, timestamps, wallet addresses, and documentation of the incident (screenshots, error messages, protocol announcements). Our team will guide you through the process.",
  },
  {
    question: "Can I upgrade my coverage plan?",
    answer:
      "Yes, you can upgrade your coverage at any time. The new premium will apply to future investments, and existing coverage will be adjusted accordingly.",
  },
  {
    question: "Is there a waiting period for coverage?",
    answer:
      "Coverage begins immediately upon payment of the premium for new SIP investments. There is no waiting period for standard risks.",
  },
  {
    question: "What happens if the insurance fund is depleted?",
    answer:
      "The insurance fund maintains a minimum reserve ratio of 200%. In the unlikely event of depletion, claims are prioritized and additional capital is raised through the DAO.",
  },
  {
    question: "Can I cancel my insurance coverage?",
    answer:
      "Yes, you can cancel anytime. Unused premiums for future periods will be refunded, but coverage for active investments must remain until those investments are withdrawn.",
  },
];

export default function Insurance() {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Insurance Coverage</h1>
            <p className="text-muted-foreground">
              Protect your investments with comprehensive coverage
            </p>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium mt-4 sm:mt-0">
            <Link href="/claims" className="flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              File New Claim
            </Link>
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Coverage
                </CardTitle>
                <Shield className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${(insuranceStats.totalCoverage / 1000000).toFixed(1)}M
                </div>
                <p className="text-xs text-muted-foreground">Active policies</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Premiums Collected
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  ${insuranceStats.totalPremiums.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Protected Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {insuranceStats.activePolices}
                </div>
                <p className="text-xs text-muted-foreground">Active policies</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Claims Paid
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {insuranceStats.claimsPaid}
                </div>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Success Rate
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">
                  {insuranceStats.successRate}%
                </div>
                <p className="text-xs text-muted-foreground">Claim approval</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="plans" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="plans">Coverage Plans</TabsTrigger>
            <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            <TabsTrigger value="governance">Governance</TabsTrigger>
          </TabsList>

          <TabsContent value="plans" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {coverageOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`glass-card hover:bg-card/70 transition-colors h-full ${
                      option.id === "premium" ? "border-primary/50" : ""
                    }`}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{option.name}</CardTitle>
                        <Badge
                          variant={
                            option.id === "premium" ? "default" : "secondary"
                          }
                        >
                          {option.premium} fee
                        </Badge>
                      </div>
                      <CardDescription className="text-xl font-semibold text-primary">
                        {option.coverage}
                      </CardDescription>
                      {option.id === "premium" && (
                        <Badge className="w-fit bg-primary/10 text-primary border-primary/20">
                          Most Popular
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {option.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="w-full"
                        variant={
                          option.id === "premium" ? "default" : "outline"
                        }
                        onClick={() => setSelectedPlan(option.id)}
                      >
                        {option.id === selectedPlan
                          ? "Selected"
                          : "Select Plan"}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="how-it-works" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="w-5 h-5 mr-2 text-blue-400" />
                  How Insurance Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-green-400">
                      Coverage Includes:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Smart contract exploits and bugs
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Failed transactions due to protocol issues
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Temporary protocol suspensions
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Oracle manipulation attacks
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        Execution bot failures
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-red-400">
                      Coverage Excludes:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        Market volatility and price fluctuations
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        User errors (wrong addresses, insufficient gas)
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        Regulatory changes affecting protocols
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        Planned protocol upgrades with advance notice
                      </li>
                      <li className="flex items-start">
                        <XCircle className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        Losses due to personal key compromise
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-4">Claims Process</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <h5 className="font-medium mb-1">1. Submit Claim</h5>
                      <p className="text-xs text-muted-foreground">
                        File your claim with evidence
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <h5 className="font-medium mb-1">2. Review Period</h5>
                      <p className="text-xs text-muted-foreground">
                        DAO members review claim
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h5 className="font-medium mb-1">3. Governance Vote</h5>
                      <p className="text-xs text-muted-foreground">
                        Community votes on approval
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <DollarSign className="w-6 h-6 text-primary" />
                      </div>
                      <h5 className="font-medium mb-1">4. Payout</h5>
                      <p className="text-xs text-muted-foreground">
                        Approved claims are paid
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="governance" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>DAO Governance</CardTitle>
                <CardDescription>
                  Participate in insurance fund governance and claim reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    Governance Coming Soon
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Token holders will be able to vote on claim approvals,
                    insurance policies, and fund management.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Claim Reviews</h4>
                      <p className="text-sm text-muted-foreground">
                        Vote on insurance claim approvals with transparent
                        evidence review
                      </p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Policy Updates</h4>
                      <p className="text-sm text-muted-foreground">
                        Propose and vote on coverage terms and premium
                        adjustments
                      </p>
                    </div>
                    <div className="p-4 bg-muted/20 rounded-lg">
                      <h4 className="font-semibold mb-2">Fund Management</h4>
                      <p className="text-sm text-muted-foreground">
                        Oversee insurance vault investments and reserve
                        requirements
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Why Choose Our Insurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Shield className="w-6 h-6 mr-2 text-primary" />
                Why Choose Siphere Insurance?
              </CardTitle>
              <CardDescription>
                Industry-leading protection for your DeFi investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    Fully Collateralized
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Insurance fund maintains 200%+ collateralization ratio,
                    ensuring all claims can be paid even in worst-case
                    scenarios.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    Fast Claims Processing
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Automated claim verification and DAO governance ensure quick
                    turnaround times without compromising security.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-lg">
                    Transparent & Auditable
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    All insurance transactions are on-chain and fully auditable.
                    Track fund performance and claim history in real-time.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Claims */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Recent Claims Activity
                  </CardTitle>
                  <CardDescription>
                    Latest insurance claims and their status
                  </CardDescription>
                </div>
                <Button variant="outline" asChild>
                  <Link href="/claims">View All Claims</Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentClaims.map((claim, index) => (
                  <motion.div
                    key={claim.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-sm font-semibold">
                          {claim.id}
                        </span>
                        <Badge
                          variant={
                            claim.status === "Approved"
                              ? "default"
                              : claim.status === "Under Review"
                              ? "secondary"
                              : "destructive"
                          }
                        >
                          {claim.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>User: {claim.user}</span>
                        <span>•</span>
                        <span>{claim.reason}</span>
                        <span>•</span>
                        <span>{claim.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">
                        {claim.amount}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {claim.payout}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Risk Assessment Tool */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="w-5 h-5 mr-2 text-orange-400" />
                Insurance Coverage Calculator
              </CardTitle>
              <CardDescription>
                Estimate your recommended coverage based on investment profile
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        Total SIP Investment
                      </span>
                      <span className="text-sm text-primary">$25,000</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        Risk Exposure Level
                      </span>
                      <span className="text-sm text-orange-400">
                        Medium-High
                      </span>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">
                        Protocol Diversity
                      </span>
                      <span className="text-sm text-green-400">Good</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                    Recommended Coverage
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-1">
                        Premium Plan
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Up to $50,000 coverage
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Monthly Premium:</span>
                        <span className="font-semibold">$375 (1.5%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Coverage Amount:</span>
                        <span className="font-semibold">$50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Claim Review Time:</span>
                        <span className="font-semibold">12 hours</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4">
                      Get Premium Coverage
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-yellow-400" />
                What Our Users Say
              </CardTitle>
              <CardDescription>
                Real experiences from protected investors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 bg-muted/20 rounded-lg"
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 fill-yellow-400"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm mb-4 text-muted-foreground italic">
                      "{testimonial.comment}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 mb-12"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-400" />
                Frequently Asked Questions
              </CardTitle>
              <CardDescription>
                Everything you need to know about our insurance coverage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 mb-12"
        >
          <Card className="glass-card bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-primary/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Protect Your Investments?
                  </h3>
                  <p className="text-muted-foreground">
                    Join 892 protected users and invest with confidence. Get
                    started with insurance coverage today.
                  </p>
                </div>
                <div className="flex gap-4 flex-shrink-0">
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/how-it-works">Learn More</Link>
                  </Button>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/create-sip">
                      Start Protected SIP
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
