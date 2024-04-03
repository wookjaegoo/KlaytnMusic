
Klaytn Music
:books: Table of Contents
:book: Project Introduction

Project Overview
Project Summary
Project Flowchart
:wrench: Technique Used

:hammer: Technology Stack
FrontEnd
BackEnd
Smart Contract
:computer: Provided Services

:project_review: Project Review

:book: Project Introduction
Project Overview
The existing music streaming service's settlement system is slower than settling with cryptocurrencies.

※ Although the method of calculating revenue based on music downloads or streaming is specified, users cannot know when the revenue will be settled.

In the case of music charts, since a specific platform monopolizes user music playback information, users cannot access detailed information.
This project was created to address these disadvantages.


Project Summary
Creating a reliable music chart feature using blockchain smart contracts instead of traditional music streaming services

Issuing ERC-20 standard virtual currencies through smart contracts applicable to music streaming

Establishing a fast music streaming cost settlement system using smart contract virtual currencies instead of traditional music streaming services

Project Flowchart


:wrench: Technique Used (Technique)
FrontEnd
Icon	Stack	Description
<img src = "/Doc/stackIcon/react.png" height = 25px>	REACT	Frontend setup
BackEnd
Icon	Stack	Description
<img src = "/Doc/stackIcon/nodejs.png" height = 25px>	NODEJS	API server creation
<img src = "/Doc/stackIcon/mongoDB.png" height = 25px>	MONGODB	Using MongoDB Atlas
<img src = "/Doc/stackIcon/nginx.png" height = 27px>	NGINX	Used as a web server
Smart Contract
Icon	Stack	Description
<img src = "/Doc/stackIcon/Solidity.png" height = 25px>	SOLIDITY	Writing smart contracts
<img src = "/Doc/stackIcon/Truffle.png" height = 25px>	TRUFFLE	Deploying smart contracts
<img src = "/Doc/stackIcon/klaytn.png" height = 25px>	KLAYTN	Blockchain network
<img src = "/Doc/stackIcon/ganache.png" height = 25px>	GANACHE	Testing locally
:computer: Provided Services (Service)
<div>
<!-- Home Screen Image -->
<img src="/Doc/img/homelogo.png" alt="Home Screen" width="324" height="707">
<!-- Music Upload Image -->
<img src="/Doc/img/downloadtab.png" alt="Music Upload" width="324" height="707">
</div>
<div>
<!-- My Page Image -->
<img src="/Doc/img/mypagelogo.png" alt="My Page" width="324" height="707">
<!-- Music List Image -->
<img src="/Doc/img/songlistlogo.png" alt="Music List" width="324" height="707">
</div>
Music Playback Smart Contract

// Example Solidity code
pragma solidity ^0.8.0;

interface PlayCounter{

struct tokenInfo{
        uint256 listenCount;
        uint256 tokenId;
        address owner;

    }

    function listen(uint256 _tokenId) external ;
}

//ArtGrowNFT.sol for issuing ERC721 NFTs
//Amaranthus.sol is the interface for issuing ERC20 tokens for music settlement.

    function safeMint(address to, string memory uri) public  {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);

        PlayCounter.tokenInfo memory newtokenInfo = PlayCounter.tokenInfo({
            listenCount:0,
            tokenId:tokenId,
            owner:msg.sender
        });
     _tokenInfoList[tokenId]= newtokenInfo;
    }

    // The following functions are overrides required by Solidity.

    function listen(uint256 _tokenId) external{
        _tokenInfoList[_tokenId].listenCount+=1;
    }

//Part of Amaranthus.sol used for sending ERC20 tokens to music creators when users play music. Preventing indiscriminate transactions, a 4-minute transaction lock is set.


// Example Solidity code
pragma solidity ^0.8.0;


contract Amaranthus is ERC20{
        using Counters for Counters.Counter;

    Counters.Counter private _playerCounter;

   using SafeMath for uint256;
   using SafeERC20 for IERC20;

    uint256 private MAX_TOKEN_COUNT = 20000000000;   // Total number of tokens
    constructor() ERC20("Amaranthus", "AAS")

