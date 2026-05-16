"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  DollarSign,
  Shield,
  Settings,
  TrendingUp,
  Users,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle, count: 24 },
    {
      id: "getting-started",
      name: "Getting Started",
      icon: Settings,
      count: 6,
    },
    { id: "sip-setup", name: "SIP Setup", icon: DollarSign, count: 5 },
    { id: "security", name: "Security", icon: Shield, count: 4 },
    { id: "returns", name: "Returns & Yields", icon: TrendingUp, count: 4 },
    { id: "insurance", name: "Insurance", icon: FileText, count: 3 },
    { id: "governance", name: "Governance", icon: Users, count: 2 },
  ];

  const faqs = [
    {
      category: "getting-started",
      question: "What is a Crypto SIP?",
      answer:
        "A Crypto SIP (Systematic Investment Plan) is an automated investment strategy where you invest a fixed amount at regular intervals into cryptocurrency assets. This approach helps reduce the impact of market volatility through dollar-cost averaging, making it easier to build wealth over time without trying to time the market.",
    },
    {
      category: "getting-started",
      question: "How do I get started with Siphere?",
      answer:
        "Getting started is simple: 1) Connect your Solana wallet (like Phantom), 2) Choose your investment token (USDC, USDT, or SOL), 3) Set your investment amount and frequency, 4) Select your DeFi strategy (staking, lending, or hybrid), 5) Optionally enable insurance protection, and 6) Confirm your SIP creation. Your first investment will execute according to your schedule.",
    },
    {
      category: "getting-started",
      question: "What wallets are supported?",
      answer:
        "We support all major Solana wallets including Phantom, Solflare, Slope, and any wallet compatible with the Solana wallet adapter. We recommend Phantom for the best user experience, especially for beginners.",
    },
    {
      category: "getting-started",
      question: "What are the minimum investment amounts?",
      answer:
        "Minimum investment amounts vary by token and strategy: USDC/USDT: $10 minimum per investment, SOL: 0.1 SOL minimum per investment. These minimums ensure efficient execution while keeping costs low relative to investment amounts.",
    },
    {
      category: "getting-started",
      question: "Which blockchains do you support?",
      answer:
        "Currently, we operate exclusively on Solana blockchain due to its low transaction costs and fast execution times. We chose Solana because it allows for frequent, small investments without prohibitive gas fees. Multi-chain support is planned for 2025.",
    },
    {
      category: "getting-started",
      question: "Is there a mobile app?",
      answer:
        "Our web platform is fully mobile-responsive and works seamlessly on all devices. A dedicated mobile app is in development and planned for release in Q2 2025, which will include push notifications for SIP executions and portfolio updates.",
    },

    {
      category: "sip-setup",
      question: "How often can I invest?",
      answer:
        "You can set your SIP to invest daily, weekly, bi-weekly, or monthly. Weekly and bi-weekly are the most popular options as they provide good dollar-cost averaging benefits while keeping transaction costs reasonable.",
    },
    {
      category: "sip-setup",
      question: "Can I change my SIP settings after creation?",
      answer:
        "Yes, you have full control over your SIP. You can modify the investment amount, change frequency, switch strategies, pause temporarily, or cancel entirely at any time. Changes take effect from the next scheduled investment.",
    },
    {
      category: "sip-setup",
      question: "What investment strategies are available?",
      answer:
        "We offer three main strategies: 1) Staking Only - Stake SOL with Marinade Finance for 7-9% APY, 2) Lending Only - Lend stablecoins on Solend for 5-8% APY, 3) Hybrid Strategy - Split between staking and lending for balanced 6-10% APY with auto-rebalancing.",
    },
    {
      category: "sip-setup",
      question: "Can I have multiple SIPs?",
      answer:
        "Absolutely! You can create multiple SIPs with different parameters. For example, you might have a conservative USDC lending SIP and an aggressive SOL staking SIP. Each SIP operates independently with its own schedule and strategy.",
    },
    {
      category: "sip-setup",
      question: "What happens if I don't have enough balance?",
      answer:
        "If your wallet doesn't have sufficient balance for a scheduled investment, the system will skip that execution and try again at the next scheduled time. You'll receive a notification about the missed investment. No penalties are applied for insufficient balance.",
    },

    {
      category: "security",
      question: "How secure are my funds?",
      answer:
        "Security is our top priority. Your funds are protected through: audited smart contracts by leading security firms, non-custodial architecture (you always control your keys), integration only with established, audited DeFi protocols, and optional insurance coverage for additional protection.",
    },
    {
      category: "security",
      question: "Are the smart contracts audited?",
      answer:
        "Yes, all our smart contracts have been audited by reputable security firms including Certik and Halborn. Audit reports are publicly available on our website. We also maintain a bug bounty program and conduct regular security reviews.",
    },
    {
      category: "security",
      question: "What if a DeFi protocol gets hacked?",
      answer:
        "While we only integrate with well-established, audited protocols, DeFi carries inherent risks. This is why we offer optional insurance coverage that protects against protocol exploits, smart contract failures, and execution errors. Insurance claims are processed through our DAO governance system.",
    },
    {
      category: "security",
      question: "Do you have access to my private keys?",
      answer:
        "No, we never have access to your private keys. Siphere is non-custodial, meaning you maintain full control of your funds at all times. We only interact with your wallet when you explicitly approve transactions.",
    },

    {
      category: "returns",
      question: "What returns can I expect?",
      answer:
        "Returns vary by strategy and market conditions: Staking strategies typically yield 7-9% APY, Lending strategies typically yield 5-8% APY, Hybrid strategies typically yield 6-10% APY. These are historical averages and not guaranteed. Actual returns depend on protocol performance and market conditions.",
    },
    {
      category: "returns",
      question: "How are yields calculated and distributed?",
      answer:
        "Yields are calculated based on the underlying DeFi protocol rates and are automatically compounded. Staking rewards are distributed continuously, lending interest accrues daily, and all yields are automatically reinvested unless you choose to withdraw.",
    },
    {
      category: "returns",
      question: "Can I withdraw my investments anytime?",
      answer:
        "Yes, you can withdraw your investments at any time. Withdrawals are processed immediately for lending positions and within 1-2 epochs (2-4 days) for staking positions due to Solana's unstaking period. There are no withdrawal penalties from Siphere.",
    },
    {
      category: "returns",
      question: "How do you optimize yields?",
      answer:
        "Our system continuously monitors yield rates across integrated protocols and automatically routes new investments to the highest-yielding opportunities within your chosen strategy. We also provide auto-rebalancing for hybrid strategies to maintain optimal allocation.",
    },

    {
      category: "insurance",
      question: "How does insurance work?",
      answer:
        "Insurance is optional and costs 1-2% of each investment. Premiums go into a community-managed vault. If you experience losses due to protocol failures, execution errors, or smart contract exploits, you can file a claim. Claims are reviewed and approved by our DAO governance system.",
    },
    {
      category: "insurance",
      question: "What does insurance cover?",
      answer:
        "Insurance covers: smart contract exploits and bugs, failed transactions due to protocol issues, execution bot failures, temporary protocol suspensions, and oracle manipulation attacks. It does NOT cover market volatility, user errors, regulatory changes, or planned protocol upgrades.",
    },
    {
      category: "insurance",
      question: "How do I file an insurance claim?",
      answer:
        "To file a claim: 1) Go to the Claims section in your dashboard, 2) Select the type of issue and affected SIP, 3) Provide detailed description and evidence, 4) Submit supporting documentation, 5) Wait for DAO review (typically 3-7 days). You'll receive updates throughout the process.",
    },

    {
      category: "governance",
      question: "How does DAO governance work?",
      answer:
        "Siphere is governed by token holders who vote on important decisions including insurance claim approvals, protocol parameter changes, new feature development, and treasury management. Voting power is proportional to token holdings, and all proposals require community consensus.",
    },
    {
      category: "governance",
      question: "How can I participate in governance?",
      answer:
        "To participate in governance, you need to hold Siphere governance tokens (launching Q3 2025). Token holders can create proposals, vote on existing proposals, and participate in community discussions. Active participation is rewarded with additional tokens and platform benefits.",
    },
  ];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                <HelpCircle className="w-4 h-4 mr-2" />
                Help Center
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Frequently Asked
                <span className="gradient-text block">Questions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about Siphere, automated
                investing, and DeFi strategies. Can't find what you're looking
                for? Contact our support team.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search for answers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg bg-card/50 backdrop-blur-sm border-2 border-border/50 focus:border-primary/50"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Categories Sidebar */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="glass-card sticky top-24">
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                    <CardDescription>Browse by topic</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <motion.button
                          key={category.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors ${
                            activeCategory === category.id
                              ? "bg-primary/10 text-primary border border-primary/20"
                              : "hover:bg-muted/50"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <category.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">
                              {category.name}
                            </span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </motion.button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* FAQ Content */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {searchTerm && (
                    <div className="mb-6">
                      <p className="text-muted-foreground">
                        Found {filteredFAQs.length} result
                        {filteredFAQs.length !== 1 ? "s" : ""} for "{searchTerm}
                        "
                      </p>
                    </div>
                  )}

                  <Accordion type="single" collapsible className="space-y-4">
                    {filteredFAQs.map((faq, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <AccordionItem
                          value={`item-${index}`}
                          className="glass-card px-6 border-2 hover:border-primary/30 transition-colors"
                        >
                          <AccordionTrigger className="text-left hover:text-primary transition-colors py-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <HelpCircle className="w-4 h-4 text-primary" />
                              </div>
                              <span className="font-medium">
                                {faq.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground pb-6 pl-12">
                            <div className="prose prose-sm max-w-none">
                              {faq.answer
                                .split("\n")
                                .map((paragraph, pIndex) => (
                                  <p
                                    key={pIndex}
                                    className="mb-3 last:mb-0 leading-relaxed"
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>

                  {filteredFAQs.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Card className="glass-card text-center py-12">
                        <CardContent>
                          <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                          <h3 className="text-lg font-semibold mb-2">
                            No results found
                          </h3>
                          <p className="text-muted-foreground mb-6">
                            Try adjusting your search terms or browse by
                            category.
                          </p>
                          <Button onClick={() => setSearchTerm("")}>
                            Clear Search
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="py-24 bg-muted/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Still Need Help?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Can't find the answer you're looking for? Our support team is
                here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/about" className="flex items-center">
                    Learn More About Us
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
