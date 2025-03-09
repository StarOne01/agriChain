# 🌾 AgriChain – Decentralized Marketplace for Farmers & Consumers

## Project Overview

AgriChain is a blockchain-powered platform connecting farmers directly with consumers, eliminating intermediaries and ensuring transparency in the agricultural supply chain. The platform leverages blockchain technology to create a trustless environment for agricultural trade.

## Features

- **Direct Farmer-to-Consumer Marketplace**: Eliminates middlemen to improve farmer earnings and consumer prices
- **Blockchain-Verified Transactions**: Ensures transparency and traceability
- **Farmer Profiles**: Allows farmers to showcase their products and practices
- **Order Management**: Comprehensive system for tracking purchases
- **Product Listings**: Detailed product information including origin and farming methods
- **User Authentication**: Secure login system for farmers and consumers

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- Blockchain integration (likely Ethereum/Solidity)
- RESTful API architecture

### Frontend
- Next.js
- TypeScript
- Tailwind CSS
- Axios for API requests

## Project Structure

```
├── backend/                 # Server-side code
│   ├── blockchain/          # Blockchain integration components
│   ├── controller/          # API controllers
│   ├── model/               # Database models
│   ├── routes/              # API endpoints
│   ├── util/                # Helper functions
│   └── server.js            # Main server file
├── frontend/                # Client-side code
│   ├── component/           # React components
│   ├── public/              # Static assets
│   └── src/                 # Source code
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB
- Ethereum wallet (MetaMask recommended)
- Git

### Backend Setup
```bash
# Clone the repository
git clone <repository-url>

# Navigate to backend directory
cd agriChain/backend

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Blockchain Configuration

The blockchain component requires proper configuration before use:

1. Set up an Ethereum wallet
2. Configure blockchain settings in config
3. Deploy smart contracts using migration scripts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to all contributors who have helped build AgriChain
- Special thanks to the blockchain and agricultural communities for inspiration
