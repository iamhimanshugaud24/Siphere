"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Shield,
  FileText,
  Users,
  Coins,
  BarChart3,
  Clock,
  Zap,
  Lock,
  Globe,
  Target,
  CheckCircle,
  ArrowRight,
  Layers,
  Activity,
  Settings,
  Repeat,
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

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const mainFeatures = [
    {
      icon: TrendingUp,
      title: "Auto DCA",
      description:
        "Dollar Cost Averaging reduces volatility impact through systematic investing",
      color: "text-blue-400",
      gradient: "from-blue-400/20 to-blue-600/20",
      details: [
        "Automated investment execution at regular intervals",
        "Reduces impact of market volatility",
        "Eliminates emotional trading decisions",
        "Proven strategy for long-term wealth building",
      ],
      benefits: [
        "Lower average cost per token over time",
        "Reduced risk from market timing",
        "Consistent investment discipline",
        "Better long-term returns",
      ],
    },
    {
      icon: Coins,
      title: "Stake & Lend",
      description:
        "Earn passive yield through automated staking and DeFi lending protocols",
      color: "text-primary",
      gradient: "from-primary/20 to-green-600/20",
      details: [
        "Automatic deployment to highest-yield protocols",
        "Liquid staking with Marinade Finance",
        "Lending on Solend and other platforms",
        "Real-time yield optimization",
      ],
      benefits: [
        "Earn 5-12% APY on your investments",
        "Compound growth through reinvestment",
        "Diversified yield sources",
        "Minimal manual intervention",
      ],
    },
    {
      icon: DollarSign,
      title: "Stablecoin Support",
      description:
        "Invest with USDC, USDT, or SOL with automatic token conversion",
      color: "text-green-400",
      gradient: "from-green-400/20 to-green-600/20",
      details: [
        "Support for major stablecoins (USDC, USDT)",
        "Native SOL investment options",
        "Automatic token swaps via Jupiter",
        "Optimal routing for best prices",
      ],
      benefits: [
        "Flexibility in deposit tokens",
        "Reduced price slippage",
        "Access to all Solana DeFi",
        "Seamless user experience",
      ],
    },
    {
      icon: Shield,
      title: "Insurance Protection",
      description:
        "Optional coverage against execution failures and DeFi protocol risks",
      color: "text-purple-400",
      gradient: "from-purple-400/20 to-purple-600/20",
      details: [
        "Protection against smart contract failures",
        "Coverage for execution bot failures",
        "Protocol exploit insurance",
        "DAO-governed claims process",
      ],
      benefits: [
        "Peace of mind for investors",
        "Protection against technical risks",
        "Community-driven governance",
        "Transparent claims process",
      ],
    },
    {
      icon: FileText,
      title: "Transparent Logs",
      description:
        "Complete execution history with on-chain transaction verification",
      color: "text-yellow-400",
      gradient: "from-yellow-400/20 to-yellow-600/20",
      details: [
        "All transactions recorded on-chain",
        "Real-time execution tracking",
        "Detailed performance analytics",
        "Audit trail for all activities",
      ],
      benefits: [
        "Full transparency and accountability",
        "Easy performance tracking",
        "Compliance and reporting",
        "Trust through verification",
      ],
    },
    {
      icon: Users,
      title: "DAO Governance",
      description:
        "Community-governed claims system with oracle-based verification",
      color: "text-red-400",
      gradient: "from-red-400/20 to-red-600/20",
      details: [
        "Token-holder voting on claims",
        "Decentralized decision making",
        "Oracle-based verification",
        "Community-driven development",
      ],
      benefits: [
        "Democratic governance model",
        "Aligned incentives",
        "Reduced centralization risk",
        "Community ownership",
      ],
    },
  ];

  const technicalFeatures = [
    {
      category: "Automation",
      icon: Zap,
      features: [
        {
          name: "Scheduled Execution",
          description: "Precise timing based on user preferences",
        },
        {
          name: "Gas Optimization",
          description: "Minimal transaction costs on Solana",
        },
        { name: "Failure Recovery", description: "Automatic retry mechanisms" },
        {
          name: "Multi-Protocol Support",
          description: "Integration with top DeFi protocols",
        },
      ],
    },
    {
      category: "Security",
      icon: Lock,
      features: [
        {
          name: "Audited Smart Contracts",
          description: "Third-party security audits",
        },
        {
          name: "Multi-sig Controls",
          description: "Distributed key management",
        },
        { name: "Upgrade Mechanisms", description: "Secure protocol updates" },
        {
          name: "Insurance Coverage",
          description: "Optional protection against risks",
        },
      ],
    },
    {
      category: "Analytics",
      icon: BarChart3,
      features: [
        {
          name: "Real-time Tracking",
          description: "Live portfolio performance",
        },
        { name: "Yield Analytics", description: "Detailed return breakdowns" },
        { name: "Risk Metrics", description: "Portfolio risk assessment" },
        { name: "Historical Data", description: "Complete investment history" },
      ],
    },
    {
      category: "Integration",
      icon: Globe,
      features: [
        { name: "Wallet Support", description: "All major Solana wallets" },
        { name: "Mobile Responsive", description: "Works on all devices" },
        { name: "API Access", description: "Programmatic integration" },
        { name: "Third-party Tools", description: "Portfolio tracking apps" },
      ],
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
                <Layers className="w-4 h-4 mr-2" />
                Complete Feature Set
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Powerful Features for
                <span className="gradient-text block">DeFi Investing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for automated cryptocurrency investing with
                institutional-grade security, transparency, and yield
                optimization.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Features Grid */}
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
                Core Features
              </h2>
              <p className="text-xl text-muted-foreground">
                The building blocks of automated DeFi investing
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  onClick={() => setActiveFeature(index)}
                  className="cursor-pointer"
                >
                  <Card
                    className={`glass-card hover:bg-card/70 transition-all duration-300 h-full border-2 ${
                      activeFeature === index
                        ? "border-primary/50 bg-primary/5"
                        : "hover:border-primary/30"
                    }`}
                  >
                    <CardHeader>
                      <motion.div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      </motion.div>
                      <CardTitle className="text-xl mb-3">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" size="sm" className="w-full">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
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
                Feature Deep Dive
              </h2>
              <p className="text-xl text-muted-foreground">
                Explore the details of our most powerful features
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Feature Selection */}
              <div className="space-y-4">
                {mainFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className={`glass-card cursor-pointer transition-all duration-300 ${
                        activeFeature === index
                          ? "border-primary/50 bg-primary/5"
                          : "hover:border-primary/30"
                      }`}
                      onClick={() => setActiveFeature(index)}
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} flex items-center justify-center`}
                          >
                            <feature.icon
                              className={`w-6 h-6 ${feature.color}`}
                            />
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              {feature.title}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {feature.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Feature Details */}
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-24"
              >
                <Card className="glass-card border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${mainFeatures[activeFeature].gradient} flex items-center justify-center`}
                      >
                        {React.createElement(mainFeatures[activeFeature].icon, {
                          className: `w-8 h-8 ${mainFeatures[activeFeature].color}`,
                        })}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">
                          {mainFeatures[activeFeature].title}
                        </CardTitle>
                        <CardDescription className="text-lg">
                          {mainFeatures[activeFeature].description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-4 text-primary">
                        How It Works
                      </h4>
                      <ul className="space-y-3">
                        {mainFeatures[activeFeature].details.map(
                          (detail, index) => (
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
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-4 text-green-400">
                        Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {mainFeatures[activeFeature].benefits.map(
                          (benefit, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.4,
                                delay: 0.4 + index * 0.1,
                              }}
                              className="flex items-start space-x-3"
                            >
                              <TrendingUp className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">
                                {benefit}
                              </span>
                            </motion.li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
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
                Technical Excellence
              </h2>
              <p className="text-xl text-muted-foreground">
                Built with cutting-edge technology for reliability and
                performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technicalFeatures.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card hover:bg-card/70 transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl mb-4">
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="space-y-1">
                            <div className="font-medium text-sm">
                              {feature.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {feature.description}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
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
                Platform Performance
              </h2>
              <p className="text-xl text-muted-foreground">
                Real metrics from our live platform
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  label: "Execution Success Rate",
                  value: "99.8%",
                  icon: Target,
                },
                {
                  label: "Average Transaction Cost",
                  value: "$0.01",
                  icon: DollarSign,
                },
                { label: "Average APY", value: "8.2%", icon: TrendingUp },
                { label: "Total Value Locked", value: "$2.4M", icon: Lock },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="glass-card hover:bg-card/70 transition-colors">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <metric.icon className="w-6 h-6 text-primary" />
                      </div>
                      <motion.div
                        className="text-3xl font-bold mb-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {metric.value}
                      </motion.div>
                      <div className="text-sm text-muted-foreground">
                        {metric.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                Experience All Features
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start your automated DeFi investment journey today with all
                these powerful features
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/create-sip" className="flex items-center">
                    Create Your SIP
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/how-it-works" className="flex items-center">
                    Learn How It Works
                    <Settings className="ml-2 h-5 w-5" />
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
