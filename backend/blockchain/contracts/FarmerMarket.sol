// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FarmerMarket {
    struct Farmer {
        string name;
        string email;
        address walletAddress;
        string location;
        uint256 reputation;
        bool isRegistered;
    }
    
    struct Product {
        uint256 id;
        string name;
        uint256 price;
        uint256 quantity;
        string category;
        address seller;
        bool isAvailable;
    }
    
    struct Order {
        uint256 id;
        uint256 productId;
        address buyer;
        address seller;
        uint256 quantity;
        uint256 totalAmount;
        string status;
        uint256 orderDate;
    }
    
    mapping(address => Farmer) public farmers;
    mapping(uint256 => Product) public products;
    mapping(uint256 => Order) public orders;
    
    uint256 private productCount;
    uint256 private orderCount;
    
    event FarmerRegistered(address indexed farmer, string name);
    event ProductListed(uint256 indexed productId, string name, uint256 price);
    event OrderCreated(uint256 indexed orderId, address buyer, address seller);
}