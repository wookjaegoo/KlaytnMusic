// SPDX-License-Identifier:MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

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

contract ArtGrowNFT is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    // struct tokenInfo{
    //     uint256 listenCount;
    //     uint256 tokenId; 
    //     address owner;

    // }
    // mapping(uint256=>tokenInfo) public _tokenInfoList;
    // tokenInfo[] public _tokenInfo;//구조체 배열 선언
    



    mapping(uint256=>PlayCounter.tokenInfo) public _tokenInfoList;
    PlayCounter.tokenInfo[] public _tokenInfo;//구조체 배열 선언
    


    constructor() ERC721("ArtGrow", "ARG") {}


    function safeMint(address to, string memory uri) public onlyOwner {
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

    function howmanyListen(uint256 _tokenId) public view returns(uint256){
        return _tokenInfoList[_tokenId].listenCount;
    }

    function owner(uint256 _tokenId)public view returns(address)
    {
        return _tokenInfoList[_tokenId].owner;
    }



    function _beforeTokenTransfer(address from, address to, uint256 tokenId,uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId,batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable,ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
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

    function sendTransaction(address to, uint256 value,address _counter,uint256 _tokenId) external {
        require(block.timestamp >= lockedUntil[msg.sender], "Transaction is locked.");

        // Lock the sender's account for 4 minutes
        lockedUntil[msg.sender] = block.timestamp + 240;
        // Send the transaction
        transfer(to,value);
        PlayCounter(_counter).listen(_tokenId);  
    }



}