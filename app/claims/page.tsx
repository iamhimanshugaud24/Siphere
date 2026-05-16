"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Upload,
  Calendar,
  DollarSign,
  Shield,
  Plus,
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/navigation";

const recentClaims = [
  {
    id: "CLM-001",
    sipName: "USDC Staking SIP",
    claimType: "Failed Transaction",
    amount: 500,
    status: "Approved",
    submittedDate: "2025-01-02",
    resolvedDate: "2025-01-04",
    reason: "Transaction failed due to network congestion during execution",
    evidence: "Transaction hash: 5KJp7z...",
    payout: 500,
  },
  {
    id: "CLM-002",
    sipName: "SOL DCA Plan",
    claimType: "Smart Contract Issue",
    amount: 200,
    status: "Under Review",
    submittedDate: "2025-01-01",
    reason: "Temporary protocol suspension during scheduled investment",
    evidence: "Protocol announcement, execution logs",
    reviewDeadline: "2025-01-08",
  },
  {
    id: "CLM-003",
    sipName: "Mixed Strategy SIP",
    claimType: "Execution Bot Failure",
    amount: 150,
    status: "Rejected",
    submittedDate: "2025-12-28",
    resolvedDate: "2025-12-31",
    reason: "Bot failed to execute scheduled investment",
    evidence: "Execution logs, bot status",
    rejectionReason:
      "Insufficient evidence of bot failure - user had insufficient balance",
  },
  {
    id: "CLM-004",
    sipName: "Conservative USDT",
    claimType: "Protocol Exploit",
    amount: 300,
    status: "Pending Investigation",
    submittedDate: "2025-12-30",
    reason: "Funds lost due to protocol exploit",
    evidence: "Exploit report, transaction hashes",
    investigationNote: "Waiting for protocol team response",
  },
];

export default function Claims() {
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [claimForm, setClaimForm] = useState({
    sipPlan: "",
    claimType: "",
    amount: "",
    incidentDate: "",
    description: "",
    transactionHash: "",
    evidence: "",
  });

  const handleSubmitClaim = () => {
    console.log("Submitting claim:", claimForm);
    // This would integrate with smart contracts and backend
    setShowClaimForm(false);
    setClaimForm({
      sipPlan: "",
      claimType: "",
      amount: "",
      incidentDate: "",
      description: "",
      transactionHash: "",
      evidence: "",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-500/10 text-green-400";
      case "Under Review":
        return "bg-yellow-500/10 text-yellow-400";
      case "Rejected":
        return "bg-red-500/10 text-red-400";
      case "Pending Investigation":
        return "bg-blue-500/10 text-blue-400";
      default:
        return "bg-gray-500/10 text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "Under Review":
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case "Rejected":
        return <XCircle className="w-5 h-5 text-red-400" />;
      case "Pending Investigation":
        return <AlertTriangle className="w-5 h-5 text-blue-400" />;
      default:
        return <FileText className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Insurance Claims</h1>
            <p className="text-muted-foreground">
              Submit and track your insurance claims
            </p>
          </div>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium mt-4 sm:mt-0"
            onClick={() => setShowClaimForm(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            File New Claim
          </Button>
        </div>

        {/* Claims Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Claims
                </CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{recentClaims.length}</div>
                <p className="text-xs text-muted-foreground">All time</p>
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
                  Approved Claims
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-400">
                  {recentClaims.filter((c) => c.status === "Approved").length}
                </div>
                <p className="text-xs text-muted-foreground">
                  Successfully paid
                </p>
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
                  Under Review
                </CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-400">
                  {
                    recentClaims.filter(
                      (c) =>
                        c.status === "Under Review" ||
                        c.status === "Pending Investigation"
                    ).length
                  }
                </div>
                <p className="text-xs text-muted-foreground">Being processed</p>
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
                  Total Payouts
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  $
                  {recentClaims
                    .filter((c) => c.payout)
                    .reduce((sum, c) => sum + (c.payout || 0), 0)
                    .toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">Received</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="claims" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:w-[300px]">
            <TabsTrigger value="claims">My Claims</TabsTrigger>
            <TabsTrigger value="process">Claims Process</TabsTrigger>
          </TabsList>

          <TabsContent value="claims" className="space-y-6">
            <div className="space-y-4">
              {recentClaims.map((claim, index) => (
                <motion.div
                  key={claim.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card hover:bg-card/70 transition-colors">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            {getStatusIcon(claim.status)}
                          </div>
                          <div>
                            <CardTitle className="text-lg">
                              Claim {claim.id}
                            </CardTitle>
                            <CardDescription>
                              {claim.sipName} • {claim.claimType}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-bold">
                            ${claim.amount}
                          </div>
                          <Badge className={getStatusColor(claim.status)}>
                            {claim.status}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Reason
                          </p>
                          <p className="text-sm">{claim.reason}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Evidence
                          </p>
                          <p className="text-sm">{claim.evidence}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Submitted
                          </p>
                          <p className="text-sm">
                            {new Date(claim.submittedDate).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {claim.status === "Approved" ||
                            claim.status === "Rejected"
                              ? "Resolved"
                              : claim.status === "Under Review"
                              ? "Review Deadline"
                              : "Status"}
                          </p>
                          <p className="text-sm">
                            {claim.resolvedDate
                              ? new Date(
                                  claim.resolvedDate
                                ).toLocaleDateString()
                              : claim.reviewDeadline
                              ? new Date(
                                  claim.reviewDeadline
                                ).toLocaleDateString()
                              : claim.investigationNote || "In progress"}
                          </p>
                        </div>
                      </div>

                      {claim.status === "Approved" && claim.payout && (
                        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                          <p className="text-sm text-green-400 font-medium">
                            ✓ Claim approved - ${claim.payout} paid to your
                            wallet
                          </p>
                        </div>
                      )}

                      {claim.status === "Rejected" && claim.rejectionReason && (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                          <p className="text-sm text-red-400 font-medium">
                            ✗ Claim rejected: {claim.rejectionReason}
                          </p>
                        </div>
                      )}

                      {claim.status === "Under Review" && (
                        <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                          <p className="text-sm text-yellow-400 font-medium">
                            ⏳ Under DAO review - Decision expected by{" "}
                            {claim.reviewDeadline}
                          </p>
                        </div>
                      )}

                      {claim.status === "Pending Investigation" && (
                        <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-sm text-blue-400 font-medium">
                            🔍 {claim.investigationNote}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Claims Process</CardTitle>
                <CardDescription>
                  How insurance claims are reviewed and processed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">1. Submit Claim</h3>
                    <p className="text-sm text-muted-foreground">
                      File your claim with detailed information and supporting
                      evidence
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <AlertTriangle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">2. Initial Review</h3>
                    <p className="text-sm text-muted-foreground">
                      Automated checks and initial validation of claim details
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">3. DAO Review</h3>
                    <p className="text-sm text-muted-foreground">
                      Community governance review and voting on claim approval
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">4. Resolution</h3>
                    <p className="text-sm text-muted-foreground">
                      Approved claims are paid automatically to your wallet
                    </p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold mb-4">Required Documentation</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2 text-green-400">
                        Always Required:
                      </h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Detailed description of the incident</li>
                        <li>• Date and time of occurrence</li>
                        <li>• SIP plan affected</li>
                        <li>• Expected vs actual behavior</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-blue-400">
                        When Applicable:
                      </h5>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Transaction hashes</li>
                        <li>• Error messages or logs</li>
                        <li>• Protocol announcements</li>
                        <li>• Screenshots or additional evidence</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">
                    Review Timeline
                  </h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Initial validation: 24-48 hours</li>
                    <li>• DAO review period: 3-7 days</li>
                    <li>• Complex cases: Up to 14 days</li>
                    <li>• Payout processing: 1-2 days after approval</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Claim Form Modal */}
        {showClaimForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>File Insurance Claim</CardTitle>
                  <CardDescription>
                    Submit a claim for your SIP investment loss
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sipPlan">Affected SIP Plan</Label>
                      <Select
                        onValueChange={(value) =>
                          setClaimForm({ ...claimForm, sipPlan: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select SIP plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usdc-staking">
                            USDC Staking SIP
                          </SelectItem>
                          <SelectItem value="sol-dca">SOL DCA Plan</SelectItem>
                          <SelectItem value="mixed-strategy">
                            Mixed Strategy SIP
                          </SelectItem>
                          <SelectItem value="conservative-usdt">
                            Conservative USDT
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="claimType">Type of Issue</Label>
                      <Select
                        onValueChange={(value) =>
                          setClaimForm({ ...claimForm, claimType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select issue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="failed-execution">
                            Failed Execution
                          </SelectItem>
                          <SelectItem value="smart-contract">
                            Smart Contract Issue
                          </SelectItem>
                          <SelectItem value="protocol-exploit">
                            Protocol Exploit
                          </SelectItem>
                          <SelectItem value="bot-failure">
                            Execution Bot Failure
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="amount">Claim Amount ($)</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="500"
                        value={claimForm.amount}
                        onChange={(e) =>
                          setClaimForm({ ...claimForm, amount: e.target.value })
                        }
                      />
                    </div>

                    <div>
                      <Label htmlFor="incidentDate">Date of Incident</Label>
                      <Input
                        id="incidentDate"
                        type="date"
                        value={claimForm.incidentDate}
                        onChange={(e) =>
                          setClaimForm({
                            ...claimForm,
                            incidentDate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="transactionHash">
                      Transaction Hash (if applicable)
                    </Label>
                    <Input
                      id="transactionHash"
                      placeholder="5KJp7z..."
                      value={claimForm.transactionHash}
                      onChange={(e) =>
                        setClaimForm({
                          ...claimForm,
                          transactionHash: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Detailed Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe what happened, what you expected to happen, and any relevant details..."
                      rows={4}
                      value={claimForm.description}
                      onChange={(e) =>
                        setClaimForm({
                          ...claimForm,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div>
                    <Label htmlFor="evidence">Supporting Evidence</Label>
                    <Textarea
                      id="evidence"
                      placeholder="List any supporting evidence: error messages, screenshots, protocol announcements, etc."
                      rows={3}
                      value={claimForm.evidence}
                      onChange={(e) =>
                        setClaimForm({ ...claimForm, evidence: e.target.value })
                      }
                    />
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-blue-400 mb-1">
                          Claim Review Process
                        </p>
                        <p className="text-muted-foreground">
                          Your claim will be reviewed by our DAO governance
                          system. Initial validation takes 24-48 hours, followed
                          by community review. You'll receive updates via email
                          and can track progress in your dashboard.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-4">
                    <Button
                      variant="outline"
                      onClick={() => setShowClaimForm(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleSubmitClaim}
                      className="flex-1 bg-primary hover:bg-primary/90"
                      disabled={
                        !claimForm.sipPlan ||
                        !claimForm.claimType ||
                        !claimForm.amount ||
                        !claimForm.description
                      }
                    >
                      Submit Claim
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
