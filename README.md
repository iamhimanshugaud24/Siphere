# Siphere

**Live Website:** [https://siphere.vercel.app/](https://siphere.vercel.app/)

Siphere is a decentralized platform built on the Solana blockchain that enables users to automate long-term crypto investing through Systematic Investment Plans (SIPs), integrating staking, lending, and optional insurance for enhanced risk protection.

---

## Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [How It Works](#how-it-works)
- [Investment Strategies](#investment-strategies)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Pages](#available-pages)
- [Installation](#installation)
- [Development](#development)
- [Build for Production](#build-for-production)
- [Smart Contract Integration](#smart-contract-integration)
- [Configuration](#configuration)
- [Wallet Integration](#wallet-integration)
- [Supported Tokens](#supported-tokens)
- [Security Features](#security-features)
- [Future Roadmap](#future-roadmap)
- [Team](#team)
- [Contributing](#contributing)
- [License](#license)

---

## Problem Statement

Traditional cryptocurrency investing faces several critical challenges:

1. **Market Timing Anxiety**: Investors struggle with determining the "right" time to enter the market, often leading to poor investment decisions driven by FOMO or panic.

2. **Lack of Automation**: Manual investment execution is time-consuming and requires constant monitoring, making it difficult to maintain investment discipline.

3. **Limited Risk Protection**: Most DeFi platforms lack insurance mechanisms, leaving investors vulnerable to protocol failures, smart contract bugs, and execution errors.

4. **Low Yield Utilization**: Many crypto holders keep assets idle without leveraging staking or lending opportunities to generate passive income.

5. **Complexity Barrier**: Setting up automated investment strategies across multiple DeFi protocols requires technical knowledge that most users lack.

**Siphere's Solution**: We address these challenges by combining dollar-cost averaging (DCA) automation, integrated yield generation through staking and lending, optional insurance coverage, and a user-friendly interface that makes sophisticated DeFi strategies accessible to everyone.

---

## Overview

Siphere brings the discipline of traditional Systematic Investment Plan (SIP) investing into the cryptocurrency ecosystem. The platform allows users to invest stablecoins or SOL at regular intervals into on-chain strategies like staking and lending protocols, helping them build wealth over time without the stress of market timing.

The platform is fully non-custodial, transparent, and integrates insurance logic to provide a safety net against protocol risks and execution failures. Users maintain complete control over their funds while benefiting from automated investment strategies.

---

## Key Features

### Core Functionality

- **Automated SIP Creation**: Set up recurring investments with stablecoins or SOL on weekly or monthly schedules
- **Yield Generation**: Earn returns through integrated staking protocols (Marinade, Jito) and DeFi lending
- **Multiple Investment Strategies**: Choose from various strategies including staking, lending, and custom approaches
- **Non-Custodial Architecture**: Full wallet-based control with no platform custody of user funds

### Insurance & Protection

- **Optional Insurance Coverage**: Protect investments against protocol failures and missed executions
- **Multiple Coverage Tiers**: Basic, Premium, and Enterprise insurance options
- **Claims Management**: Streamlined process for filing and tracking insurance claims
- **Risk Mitigation**: Safety net for smart contract vulnerabilities and execution errors

### Analytics & Management

- **Real-Time Dashboard**: Comprehensive view of all active SIPs and portfolio performance
- **Investment Tracking**: Monitor returns, yields, and investment history
- **Performance Metrics**: Track total invested amounts, returns, and insurance statistics
- **Activity Logs**: Complete transaction history and execution records

### User Experience

- **Modern UI/UX**: Built with Next.js and Tailwind CSS for responsive design
- **Wallet Integration**: Seamless connection with Solana wallets (Phantom, Solflare, etc.)
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Theme Support**: Dark mode and light mode compatibility

---

## Screenshots

### Homepage

![Homepage](attached%20assets/HomePage.png)
_Landing page showcasing platform features and value proposition_

### Portfolio Dashboard

![Dashboard](attached%20assets/Portfolio%20Dashboard.png)
_Comprehensive dashboard with portfolio overview, active SIPs, and performance metrics_

### Create SIP

![Create SIP](attached%20assets/Create-SIP.png)
_User-friendly SIP creation interface with strategy selection_

### Investment Tracking

![Investment](attached%20assets/Investment.png)
_Real-time investment tracking with detailed analytics_

### How It Works

![How It Works](attached%20assets/How-It-Works.png)
_Step-by-step guide explaining the investment process_

### Insurance Coverage

![Insurance](attached%20assets/Insurance-Coverage.png)
_Insurance coverage tiers with comprehensive protection options_

### Powerful Features

![Features](attached%20assets/Powerful-Features.png)
_Feature showcase highlighting platform capabilities_

---

## How It Works

1. **Connect Wallet**: Link your Solana wallet (Phantom, Solflare, or other supported wallets)
2. **Create SIP**: Configure your investment parameters:
   - Select token (SOL, USDC, or other supported tokens)
   - Set investment amount
   - Choose frequency (weekly or monthly)
   - Select investment strategy (staking or lending)
   - Optionally add insurance coverage
3. **Automated Execution**: Platform automatically executes investments based on your schedule
4. **Yield Generation**: Funds are deployed to whitelisted protocols for staking or lending
5. **Track Performance**: Monitor your investments and returns through the dashboard
6. **Manage & Adjust**: Pause, modify, or cancel SIPs as needed

---

## Investment Strategies

Siphere offers multiple investment strategies to match different risk appetites and return expectations:

### 1. Staking Strategy

- **APY Range**: 7-9%
- **Risk Level**: Low
- **Protocols**: Marinade Finance, Lido, Jito
- **Best For**: Conservative investors seeking stable returns with liquid staking
- **Features**:
  - Liquid staking tokens (mSOL)
  - Unstake anytime without lock periods
  - MEV rewards through Jito integration

### 2. Lending Strategy

- **APY Range**: 5-8%
- **Risk Level**: Low to Medium
- **Protocols**: Solend, Mango Markets, Tulip Protocol
- **Best For**: Stablecoin holders seeking predictable yields
- **Features**:
  - Supply lending pools with USDC/USDT
  - Stable interest rates
  - Instant liquidity withdrawal

### 3. Hybrid Strategy

- **APY Range**: 6-10%
- **Risk Level**: Medium
- **Protocols**: Mixed allocation across staking and lending
- **Best For**: Balanced investors seeking optimized returns
- **Features**:
  - Automatic rebalancing
  - Diversified risk exposure
  - Combined benefits of staking and lending

### 4. Custom Strategy

- **APY Range**: Variable
- **Risk Level**: Customizable
- **Protocols**: User-defined allocation
- **Best For**: Advanced users with specific preferences
- **Features**:
  - Manual protocol selection
  - Custom allocation percentages
  - Advanced risk management

---

## Technology Stack

### Frontend

- **Next.js 13.5.11**: React framework with App Router for server-side rendering
- **React 18.2.0**: UI component library
- **TypeScript 5.2.2**: Type-safe development
- **Tailwind CSS 3.3.3**: Utility-first CSS framework
- **Framer Motion 11.0.0**: Animation library for smooth interactions

### UI Components

- **Radix UI**: Comprehensive set of accessible UI primitives
- **Shadcn/ui**: Re-usable components built with Radix UI and Tailwind CSS
- **Lucide React**: Icon library
- **Recharts**: Data visualization and charting
- **React Hook Form**: Form state management with validation

### Blockchain Integration

- **Solana Web3.js 1.95.3**: Solana blockchain interaction
- **Solana Wallet Adapter**: Multi-wallet support for Solana
  - @solana/wallet-adapter-react
  - @solana/wallet-adapter-react-ui
  - @solana/wallet-adapter-wallets
  - @solana/wallet-adapter-phantom

### Additional Libraries

- **Zod**: Schema validation
- **date-fns**: Date manipulation and formatting
- **next-themes**: Dark mode support
- **cmdk**: Command palette interface

---

## Architecture

### System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Frontend (Next.js)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Dashboard  │  │   SIP Setup  │  │   Insurance  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Wallet Adapter Layer                         │
│          (Phantom, Solflare, Multi-wallet Support)              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      Solana Blockchain                          │
│  ┌────────────────────────────────────────────────────────┐    │
│  │              Smart Contracts (Anchor)                  │    │
│  │  • SIP Management  • Insurance  • Fund Allocation      │    │
│  └────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    DeFi Protocol Integration                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Marinade   │  │    Solend    │  │     Jito     │         │
│  │   (Staking)  │  │   (Lending)  │  │   (Staking)  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
└─────────────────────────────────────────────────────────────────┘
```

### Data Flow

1. **User Input**: User configures SIP parameters through the frontend
2. **Wallet Connection**: Transaction signed via Solana wallet adapter
3. **Smart Contract**: On-chain program executes investment logic
4. **Protocol Integration**: Funds deployed to selected DeFi protocols
5. **Yield Generation**: Protocols generate returns automatically
6. **Dashboard Update**: Real-time data reflected in user interface

### Key Components

- **Frontend Layer**: Next.js application with React components
- **Wallet Integration**: Multi-wallet support via Solana Wallet Adapter
- **Smart Contracts**: Anchor-based programs for SIP and insurance logic
- **Protocol Connectors**: Integration modules for DeFi platforms
- **State Management**: React hooks and context for application state
- **UI Components**: Shadcn/ui with Radix UI primitives

---

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- A Solana wallet (Phantom, Solflare, etc.)
- Basic understanding of cryptocurrency and DeFi concepts

---

## Project Structure

```
Siphere/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── claims/              # Insurance claims management
│   ├── create-sip/          # SIP creation interface
│   ├── dashboard/           # User dashboard
│   ├── faq/                 # Frequently asked questions
│   ├── features/            # Feature showcase
│   ├── how-it-works/        # Platform explanation
│   ├── insurance/           # Insurance management
│   ├── sip/                 # SIP management
│   │   └── create/          # Alternative SIP creation
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ui/                  # Reusable UI components (Shadcn)
│   ├── navigation.tsx       # Navigation component
│   ├── theme-provider.tsx   # Theme context provider
│   └── wallet-provider.tsx  # Wallet context provider
├── hooks/                   # Custom React hooks
│   └── use-toast.ts         # Toast notification hook
├── lib/                     # Utility functions
│   └── utils.ts             # Helper utilities
├── public/                  # Static assets
├── components.json          # Shadcn UI configuration
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

---

## Available Pages

- **/**: Landing page with platform overview and features
- **/dashboard**: User portfolio and SIP management dashboard
- **/sip**: View and manage all active SIPs
- **/create-sip**: Create new SIP investments
- **/insurance**: Browse and purchase insurance coverage
- **/claims**: File and track insurance claims
- **/features**: Detailed feature descriptions
- **/how-it-works**: Step-by-step platform guide
- **/about**: About the Siphere platform
- **/faq**: Frequently asked questions

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/aniketsahu115/Siphere.git
cd Siphere
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables (if needed):
   Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=your_rpc_endpoint
```

---

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The application will automatically reload when you make changes to the source code.

---

## Build for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Solana Network Configuration
NEXT_PUBLIC_SOLANA_NETWORK=devnet
# Options: devnet, testnet, mainnet-beta

# RPC Endpoint (Optional - defaults to public endpoints)
NEXT_PUBLIC_RPC_ENDPOINT=https://api.devnet.solana.com

# Program IDs (Update with your deployed program addresses)
NEXT_PUBLIC_SIP_PROGRAM_ID=your_program_id
NEXT_PUBLIC_INSURANCE_PROGRAM_ID=your_insurance_program_id

# Feature Flags (Optional)
NEXT_PUBLIC_ENABLE_INSURANCE=true
NEXT_PUBLIC_ENABLE_ANALYTICS=true
```

### Wallet Configuration

The application is configured to use Solana Devnet by default. To switch networks:

1. Open `components/wallet-provider.tsx`
2. Change `WalletAdapterNetwork.Devnet` to desired network
3. Update the RPC endpoint accordingly

Supported networks:

- **Devnet**: For testing and development
- **Testnet**: For pre-production testing
- **Mainnet-beta**: For production deployment

---

## Wallet Integration

### Supported Wallets

Siphere supports multiple Solana wallets through the Solana Wallet Adapter:

- **Phantom**: Most popular Solana wallet
- **Solflare**: Feature-rich wallet with staking
- **Backpack**: Modern wallet with built-in swap
- **Glow**: Security-focused wallet
- **Slope**: Mobile-first wallet experience

### Wallet Setup

1. **Install a Wallet**: Download and install a supported Solana wallet extension
2. **Create/Import Account**: Set up your wallet with a new account or import existing
3. **Add SOL**: Get SOL from faucet (devnet) or purchase (mainnet)
4. **Connect**: Click "Connect Wallet" button on Siphere platform
5. **Approve Connection**: Approve the connection request in your wallet

### Security Best Practices

- Never share your seed phrase or private keys
- Always verify transaction details before signing
- Use hardware wallets for large amounts
- Enable wallet security features (PIN, biometrics)
- Keep wallet software updated

---

## Supported Tokens

### Investment Tokens

| Token               | Symbol | Network   | Use Case                    |
| ------------------- | ------ | --------- | --------------------------- |
| Solana              | SOL    | Native    | Staking, DeFi strategies    |
| USD Coin            | USDC   | SPL Token | Stable investments, lending |
| Tether              | USDT   | SPL Token | Stable investments, lending |
| Wrapped SOL         | wSOL   | SPL Token | DeFi protocols              |
| Marinade Staked SOL | mSOL   | SPL Token | Liquid staking receipt      |

### Adding Custom Tokens

Future updates will support additional SPL tokens. To request token addition:

1. Create an issue on GitHub
2. Provide token mint address and metadata
3. Include use case and liquidity information

---

## Security Features

### Platform Security

1. **Non-Custodial**: Users maintain full control of private keys and funds
2. **Smart Contract Audits**: All contracts undergo security reviews (planned)
3. **Open Source**: Transparent codebase for community verification
4. **Secure Connections**: HTTPS/TLS encryption for all communications

### Investment Protection

1. **Insurance Options**: Optional coverage against protocol failures

   - Basic: Up to $10,000 coverage (1.0% premium)
   - Premium: Up to $50,000 coverage (1.5% premium)
   - Enterprise: Custom coverage (negotiated premium)

2. **Risk Mitigation**:

   - Whitelisted protocols only
   - Diversification across multiple strategies
   - Automatic risk assessment
   - Real-time monitoring

3. **Transaction Security**:
   - All transactions require wallet signature
   - Transaction simulation before execution
   - Slippage protection on swaps
   - Failed transaction handling

### User Security Features

- **Two-Factor Authentication**: Wallet-level security (coming soon)
- **Activity Monitoring**: Track all account activities
- **Withdrawal Limits**: Optional daily/weekly limits (planned)
- **Emergency Stop**: Pause all SIPs instantly

---

## Future Roadmap

### Phase 1 (Q1 2025) - Current

- Launch on Solana Devnet
- Core SIP functionality
- Basic staking integration
- Insurance framework

### Phase 2 (Q2 2025)

- Mainnet deployment
- Additional protocol integrations (Solend, Mango Markets)
- Advanced analytics dashboard
- Mobile responsive optimizations
- Smart contract audits

### Phase 3 (Q3 2025)

- Mobile app (iOS/Android)
- Social trading features
- Portfolio rebalancing automation
- Tax reporting tools
- Cross-chain expansion (Ethereum, Polygon)

### Phase 4 (Q4 2025)

- AI-powered investment recommendations
- Custom strategy builder
- NFT-based membership tiers
- Governance token launch
- DAO formation

### Future Considerations

- Integration with traditional finance (bank accounts)
- Fiat on-ramp/off-ramp
- Institutional investment tools
- White-label solutions for partners
- Advanced risk management tools

---

## Team

### Core Team

**Abhinav Gupta**
**Himanshu Gaud**
**Shraddha Yadav**
**Zeba Mussharrat**


### Advisors & Contributors

We're actively looking for advisors in:

- DeFi protocol design
- Smart contract security
- Regulatory compliance
- Business development

---

## Smart Contract Integration

Siphere integrates with various Solana protocols for investment strategies:

### Staking Protocols

- **Marinade Finance**: Liquid staking for SOL
- **Jito**: MEV-enabled staking

### Lending Protocols

- DeFi lending integrations for yield generation
- Automated fund deployment to whitelisted protocols

### Insurance Logic

- Smart contract-based insurance coverage
- Automated claim processing and verification

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a Pull Request

Please ensure your code follows the existing style conventions and includes appropriate tests.

---

## License

This project is open source and available under the MIT License.

---

## Contact & Support

For questions, suggestions, or support:

- GitHub: [aniketsahu115](https://github.com/aniketsahu115)
- Website: [https://siphere.vercel.app/](https://siphere.vercel.app/)

---

## Disclaimer

Cryptocurrency investments carry inherent risks. This platform is provided as-is without warranties. Users should conduct their own research and understand the risks before investing. Insurance coverage is subject to terms and conditions and does not guarantee against all possible losses.

---

## Acknowledgments

Special thanks to:

- Solana Foundation for the robust blockchain infrastructure
- Marinade Finance for liquid staking solutions
- Solend for lending protocol integration
- Shadcn for the amazing UI component library
- The Solana developer community

---

## Version History

### v0.1.0 (Current)

- Initial release on Devnet
- Core SIP functionality
- Basic insurance framework
- Dashboard and portfolio management
- Wallet integration

---

## FAQ

**Q: Is Siphere live on mainnet?**
A: Currently, Siphere is deployed on Solana Devnet for testing. Mainnet launch is planned for Q2 2025.

**Q: What are the fees?**
A: Platform fees are minimal and cover transaction costs. Insurance premiums range from 1.0% to 1.5% based on coverage tier.

**Q: Can I withdraw my funds anytime?**
A: Yes, you can pause your SIP and withdraw funds at any time, subject to protocol-specific lock periods if applicable.

**Q: Is my investment insured?**
A: Insurance is optional. You can choose from three coverage tiers: Basic ($10K), Premium ($50K), or Enterprise (custom).

**Q: Which wallets are supported?**
A: Phantom, Solflare, Backpack, Glow, and other Solana-compatible wallets.

For more questions, visit our [FAQ page](https://siphere.vercel.app/faq).

---
