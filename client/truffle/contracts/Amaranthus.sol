// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Counters.sol";



interface PlayCounter{

struct tokenInfo{
        uint256 listenCount;
        uint256 tokenId; 
        address owner;

    }

    function listen(uint256 _tokenId) external ;
}

contract Amaranthus is ERC20{
        using Counters for Counters.Counter;

    Counters.Counter private _playerCounter;

   using SafeMath for uint256;
   using SafeERC20 for IERC20;

    uint256 private MAX_TOKEN_COUNT = 20000000000;   // 총 코인 개수
    constructor() ERC20("Amaranthus", "AAS") {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, MAX_TOKEN_COUNT * 10**uint(decimals()));
    }

    mapping(address => uint256) private lockedUntil;

    function getLockedUntil(address account) external view returns (uint256) {
        return lockedUntil[account];
    }

    function sendTransaction(address to, uint256 value,address _counter,uint256 _tokenId) external {
        require(block.timestamp >= lockedUntil[msg.sender], "Transaction is locked.");
        // Lock the sender's account for 4 minutes
        lockedUntil[msg.sender] = block.timestamp + 240;
        // Send the transaction
        transfer(to,value);
        PlayCounter(_counter).listen(_tokenId);  
    }



}