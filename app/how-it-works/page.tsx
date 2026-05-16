"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  DollarSign,
  TrendingUp,
  Shield,
  Settings,
  Repeat,
  PiggyBank,
  CheckCircle,
  ArrowDown,
  Zap,
  Target,
  BarChart3,
  Layers,
  Globe,
  Lock,
  Users,
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
import { Navigation } from "@/components/navigation";
import Link from "next/link";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Set Your SIP",
      description: "Configure your investment parameters",
      icon: Settings,
      color: "text-blue-400",
      details: [
        "Choose your preferred token (USDC, USDT, SOL)",
        "Set investment amount per interval",
        "Select frequency (daily, weekly, bi-weekly, monthly)",
        "Pick your DeFi strategy (staking, lending, or hybrid)",
      ],
    },
    {
      title: "Auto Invest",
      description: "Automated execution at scheduled intervals",
      icon: Repeat,
      color: "text-primary",
      details: [
        "Smart contracts automatically execute investments",
        "Funds are deployed to selected DeFi protocols",
        "Dollar-cost averaging reduces volatility impact",
        "No manual intervention required",
      ],
    },
    {
      title: "Earn + Insure",
      description: "Generate yield with optional protection",
      icon: PiggyBank,
      color: "text-green-400",
      details: [
        "Earn passive yield from staking and lending",
        "Optional insurance protects against protocol failures",
        "Transparent tracking of all transactions",
        "Withdraw or compound earnings anytime",
      ],
    },
  ];

  const strategies = [
    {
      name: "Staking Strategy",
      description: "Stake SOL with Marinade Finance for liquid staking rewards",
      apy: "7-9%",
      risk: "Low",
      protocols: ["Marinade Finance", "Lido", "Jito"],
      icon: Lock,
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      name: "Lending Strategy",
      description: "Lend stablecoins on Solend for stable yields",
      apy: "5-8%",
      risk: "Low",
      protocols: ["Solend", "Mango Markets", "Tulip Protocol"],
      icon: DollarSign,
      color: "from-green-500/20 to-green-600/20",
    },
    {
      name: "Hybrid Strategy",
      description: "Split between staking and lending for balanced returns",
      apy: "6-10%",
      risk: "Medium",
      protocols: ["Multiple Protocols", "Auto-Rebalancing"],
      icon: BarChart3,
      color: "from-purple-500/20 to-purple-600/20",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/10 text-primary border-primary/20"
              >
                <Target className="w-4 h-4 mr-2" />
                Complete Guide
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                How Siphere
                <span className="gradient-text block">Works</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the complete process of automated DeFi investing with
                systematic investment plans, from setup to yield generation with
                optional insurance protection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Interactive Steps Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Three Simple Steps
              </h2>
              <p className="text-xl text-muted-foreground">
                Your journey to automated crypto investing
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Step Navigation */}
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`glass-card cursor-pointer transition-all duration-300 ${
                        activeStep === index
                          ? "border-primary/50 bg-primary/5"
                          : "hover:border-primary/30"
                      }`}
                      onClick={() => setActiveStep(index)}
                    >
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${
                              activeStep === index
                                ? "from-primary/30 to-primary/50"
                                : "from-muted/30 to-muted/50"
                            } flex items-center justify-center`}
                          >
                            <step.icon
                              className={`w-6 h-6 ${
                                activeStep === index
                                  ? "text-primary"
                                  : step.color
                              }`}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-xl">
                              {step.title}
                            </CardTitle>
                            <CardDescription>
                              {step.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Step Details */}
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24"
              >
                <Card className="glass-card border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/50 flex items-center justify-center">
                        {React.createElement(steps[activeStep].icon, {
                          className: `w-8 h-8 text-primary`,
                        })}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          {steps[activeStep].title}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {steps[activeStep].description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {steps[activeStep].details.map((detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Investment Strategies Section */}
        <section className="py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Investment Strategies
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the strategy that fits your risk tolerance and goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {strategies.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass-card hover:bg-card/70 transition-all duration-300 h-full border-2 hover:border-primary/30">
                    <CardHeader>
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${strategy.color} flex items-center justify-center mb-4`}
                      >
                        <strategy.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-2">
                        {strategy.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {strategy.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            Expected APY:
                          </span>
                          <Badge
                            variant="secondary"
                            className="bg-green-500/10 text-green-400"
                          >
                            {strategy.apy}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            Risk Level:
                          </span>
                          <Badge
                            variant={
                              strategy.risk === "Low" ? "secondary" : "outline"
                            }
                          >
                            {strategy.risk}
                          </Badge>
                        </div>
                        <div>
                          <span className="text-muted-foreground text-sm">
                            Protocols:
                          </span>
                          <div className="mt-2 space-y-1">
                            {strategy.protocols.map(
                              (protocol, protocolIndex) => (
                                <div
                                  key={protocolIndex}
                                  className="text-sm bg-muted/20 px-2 py-1 rounded"
                                >
                                  {protocol}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SIP Lifecycle Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                SIP Lifecycle
              </h2>
              <p className="text-xl text-muted-foreground">
                From creation to yield generation - the complete journey
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-green-400 to-blue-400 rounded-full hidden lg:block" />

              <div className="space-y-16">
                {[
                  {
                    title: "SIP Creation",
                    description:
                      "Set up your investment parameters and preferences",
                    icon: Settings,
                    color: "text-blue-400",
                    details: [
                      "Choose token and amount",
                      "Set frequency",
                      "Select strategy",
                      "Enable insurance (optional)",
                    ],
                    position: "left",
                  },
                  {
                    title: "Smart Contract Deployment",
                    description: "Your SIP is deployed to the blockchain",
                    icon: Layers,
                    color: "text-purple-400",
                    details: [
                      "Contract verification",
                      "Initial deposit",
                      "Schedule activation",
                      "Security checks",
                    ],
                    position: "right",
                  },
                  {
                    title: "Automated Execution",
                    description: "Regular investments happen automatically",
                    icon: Repeat,
                    color: "text-primary",
                    details: [
                      "Scheduled investments",
                      "Protocol integration",
                      "Transaction logging",
                      "Yield accumulation",
                    ],
                    position: "left",
                  },
                  {
                    title: "Yield Generation",
                    description: "Your investments start earning returns",
                    icon: TrendingUp,
                    color: "text-green-400",
                    details: [
                      "Staking rewards",
                      "Lending interest",
                      "Compound growth",
                      "Real-time tracking",
                    ],
                    position: "right",
                  },
                  {
                    title: "Insurance Protection",
                    description: "Optional coverage against protocol risks",
                    icon: Shield,
                    color: "text-yellow-400",
                    details: [
                      "Premium collection",
                      "Risk monitoring",
                      "Claim processing",
                      "DAO governance",
                    ],
                    position: "left",
                  },
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      x: phase.position === "left" ? -50 : 50,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${
                      phase.position === "right" ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`lg:w-1/2 ${
                        phase.position === "right" ? "lg:pl-16" : "lg:pr-16"
                      }`}
                    >
                      <Card className="glass-card border-2 hover:border-primary/30 transition-colors">
                        <CardHeader>
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                              <phase.icon
                                className={`w-6 h-6 ${phase.color}`}
                              />
                            </div>
                            <div>
                              <CardTitle className="text-xl">
                                {phase.title}
                              </CardTitle>
                              <CardDescription>
                                {phase.description}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {phase.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-center space-x-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle className="w-4 h-4 text-green-400" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden lg:block relative">
                      <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                    </div>

                    <div className="lg:w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section className="py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Technical Architecture
              </h2>
              <p className="text-xl text-muted-foreground">
                Built on Solana for speed, security, and low costs
              </p>
            </motion.div>

            <Tabs defaultValue="smart-contracts" className="space-y-8">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 lg:w-[600px] mx-auto">
                <TabsTrigger value="smart-contracts">
                  Smart Contracts
                </TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="smart-contracts" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Layers className="w-6 h-6 mr-3 text-primary" />
                        Smart Contract Architecture
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-primary">
                            Core Contracts
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">SIP Manager</div>
                                <div className="text-sm text-muted-foreground">
                                  Handles SIP creation, execution, and
                                  management
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Strategy Router
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Routes funds to appropriate DeFi protocols
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Insurance Vault
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Manages insurance premiums and claims
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4 text-green-400">
                            Protocol Integrations
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Marinade Finance
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Liquid staking for SOL
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Solend Protocol
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Lending and borrowing
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Jupiter Exchange
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Token swaps and routing
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="automation" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Zap className="w-6 h-6 mr-3 text-primary" />
                        Automation Engine
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-primary">
                            Execution System
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Scheduled Execution
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Precise timing based on user preferences
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <Globe className="w-5 h-5 text-blue-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Decentralized Keepers
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Multiple nodes ensure reliability
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <Target className="w-5 h-5 text-blue-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Gas Optimization
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Minimal transaction costs
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4 text-green-400">
                            Monitoring & Alerts
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <BarChart3 className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Real-time Monitoring
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  24/7 system health checks
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <Shield className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Failure Detection
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Automatic retry mechanisms
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Success Notifications
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Instant execution confirmations
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="w-6 h-6 mr-3 text-primary" />
                        Security Measures
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold mb-4 text-primary">
                            Smart Contract Security
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">Audited Code</div>
                                <div className="text-sm text-muted-foreground">
                                  Third-party security audits
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Multi-sig Controls
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Distributed key management
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Upgrade Mechanisms
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Secure protocol updates
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-4 text-yellow-400">
                            Insurance Coverage
                          </h4>
                          <ul className="space-y-3">
                            <li className="flex items-start space-x-3">
                              <Shield className="w-5 h-5 text-yellow-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Protocol Failures
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Smart contract exploits
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <Shield className="w-5 h-5 text-yellow-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  Execution Failures
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Missed investments
                                </div>
                              </div>
                            </li>
                            <li className="flex items-start space-x-3">
                              <Shield className="w-5 h-5 text-yellow-400 mt-0.5" />
                              <div>
                                <div className="font-medium">
                                  DAO Governance
                                </div>
                                <div className="text-sm text-muted-foreground">
                                  Community-driven claims
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Visual Architecture Diagrams Section */}
        <section className="py-24 bg-muted/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-primary/10 text-primary border-primary/20"
              >
                <Layers className="w-4 h-4 mr-2" />
                Visual Guides
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                System Architecture & Flow
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Detailed visual representations of how Siphere works under the
                hood
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Technical Architecture Diagram */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center text-2xl">
                          <Layers className="w-6 h-6 mr-3 text-primary" />
                          Technical Architecture
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          Complete system architecture showing smart contracts,
                          protocols, and integrations
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="hidden sm:block">
                        System Design
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full bg-muted/30 rounded-lg overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-colors">
                      <img
                        src="/attached assets/technical architecture.JPG"
                        alt="Siphere Technical Architecture Diagram"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Architecture Overview:
                        </span>{" "}
                        This diagram illustrates the complete technical stack
                        including smart contract layers, blockchain integration
                        with Solana, protocol connections (Marinade Finance,
                        Solend, Jupiter), and the user interface layer.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SIP Logic Diagram */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center text-2xl">
                          <Settings className="w-6 h-6 mr-3 text-green-400" />
                          SIP Logic Flow
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          Step-by-step logic flow of how SIP investments are
                          processed and executed
                        </CardDescription>
                      </div>
                      <Badge
                        variant="secondary"
                        className="hidden sm:block bg-green-500/10 text-green-400"
                      >
                        Core Logic
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full bg-muted/30 rounded-lg overflow-hidden border-2 border-green-500/10 hover:border-green-500/30 transition-colors">
                      <img
                        src="/attached assets/SIP Logic.JPG"
                        alt="SIP Logic Flow Diagram"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-6 p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          Logic Flow:
                        </span>{" "}
                        This flowchart demonstrates the decision-making process
                        from SIP creation, through automated execution, strategy
                        selection, fund deployment, and yield generation with
                        comprehensive error handling.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* User Flow Diagram */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card overflow-hidden">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center text-2xl">
                          <Users className="w-6 h-6 mr-3 text-blue-400" />
                          User Flow Journey
                        </CardTitle>
                        <CardDescription className="text-base mt-2">
                          Complete user journey from wallet connection to
                          investment tracking
                        </CardDescription>
                      </div>
                      <Badge
                        variant="secondary"
                        className="hidden sm:block bg-blue-500/10 text-blue-400"
                      >
                        User Experience
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="relative w-full bg-muted/30 rounded-lg overflow-hidden border-2 border-blue-500/10 hover:border-blue-500/30 transition-colors">
                      <img
                        src="/attached assets/user flow.JPG"
                        alt="User Flow Journey Diagram"
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-6 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">
                          User Journey:
                        </span>{" "}
                        This diagram maps the complete user experience including
                        wallet connection, SIP configuration, strategy
                        selection, insurance options, transaction confirmations,
                        and ongoing portfolio management.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card bg-gradient-to-r from-primary/5 via-transparent to-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-center text-2xl">
                      Key Architecture Highlights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-muted/20 rounded-lg">
                        <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="font-semibold mb-2">Secure & Audited</h4>
                        <p className="text-sm text-muted-foreground">
                          All smart contracts are thoroughly audited and follow
                          best security practices
                        </p>
                      </div>
                      <div className="text-center p-6 bg-muted/20 rounded-lg">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Zap className="w-6 h-6 text-green-400" />
                        </div>
                        <h4 className="font-semibold mb-2">Lightning Fast</h4>
                        <p className="text-sm text-muted-foreground">
                          Built on Solana for sub-second transaction finality
                          and low fees
                        </p>
                      </div>
                      <div className="text-center p-6 bg-muted/20 rounded-lg">
                        <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Target className="w-6 h-6 text-blue-400" />
                        </div>
                        <h4 className="font-semibold mb-2">
                          User-Centric Design
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Intuitive interface designed for both beginners and
                          experienced DeFi users
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Start Your SIP?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of investors already using Siphere for automated
                DeFi investing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/create-sip" className="flex items-center">
                    Create Your First SIP
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/dashboard" className="flex items-center">
                    View Dashboard
                    <BarChart3 className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
