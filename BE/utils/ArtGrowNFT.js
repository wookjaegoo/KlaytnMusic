module.exports=[
  {
    "contractName": "ArtGrowNFT",
    "abi": [
      {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_fromTokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_toTokenId",
            "type": "uint256"
          }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "MetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "_tokenInfo",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "listenCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "_tokenInfoList",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "listenCount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "burn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "index",
            "type": "uint256"
          }
        ],
        "name": "tokenOfOwnerByIndex",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "uri",
            "type": "string"
          }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "listen",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "howmanyListen",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.8.14+commit.80d49f37\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_fromTokenId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_toTokenId\",\"type\":\"uint256\"}],\"name\":\"BatchMetadataUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"MetadataUpdate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_tokenInfo\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"listenCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_tokenInfoList\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"listenCount\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"howmanyListen\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"listen\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"uri\",\"type\":\"string\"}],\"name\":\"safeMint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"burn(uint256)\":{\"details\":\"Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/RoyalClub.sol\":\"ArtGrowNFT\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"@openzeppelin/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xd04b0f06e0666f29cf7cccc82894de541e19bb30a765b107b1e40bb7fe5f7d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7b652499d098e88d8d878374616bb58434301061cae2253298b3f374044e0ddb\",\"dweb:/ipfs/QmbhAzctqo5jrSKU6idHdVyqfmzCcDbNUPvmx4GiXxfA6q\"]},\"@openzeppelin/contracts/interfaces/IERC4906.sol\":{\"keccak256\":\"0x2a9dadb806be80dd451821f1f1190eb9aa6f6edae85b185db29d60767cc0c5f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5c25cac8dbe5bd96320053d23c3dacdb875e629d7c53ac00892eb7aa8500bde6\",\"dweb:/ipfs/Qmaf2oqbxxdJA9DphAoH4UCb8aXEAVM8fnu6qMxHJ5ta4A\"]},\"@openzeppelin/contracts/interfaces/IERC721.sol\":{\"keccak256\":\"0xaf297d12d8d4a57fe01a70f0ef38908f208e3faedc577056d0b728fa2f3ccf0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fbfaf37123958822a2720a4ea29651be00edab787540b770f73d3e025d286ff8\",\"dweb:/ipfs/QmbzgWeTm8hJVUqWrNAwFjshqbYVyeGpQA8D1huzxQdmw6\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xa56ca923f70c1748830700250b19c61b70db9a683516dc5e216694a50445d99c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cac938788bc4be12101e59d45588b4e059579f4e61062e1cda8d6b06c0191b15\",\"dweb:/ipfs/QmV2JKCyjTVH3rkWNrfdJRhAT7tZ3usAN2XcnD4h53Mvih\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd39944e8fc06be6dbe2dd1d8449b5336e23c6a7ba3e8e9ae5ae0f37f35283f5\",\"dweb:/ipfs/QmPV3FGYjVwvKSgAXKUN3r9T9GwniZz83CxBpM7vyj2G53\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0xec63854014a5b4f2b3290ab9103a21bdf902a508d0f41a8573fea49e98bf571a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bc5b5dc12fbc4002f282eaa7a5f06d8310ed62c1c77c5770f6283e058454c39a\",\"dweb:/ipfs/Qme9rE2wS3yBuyJq9GgbmzbsBQsW2M2sVFqYYLw7bosGrv\"]},\"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x909d608c2db6eb165ca178c81289a07ed2e118e444d0025b2a85c97d0b44a4fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://656cda26512ddd7373c2d5551c8fae759fc30f05b10f0fc2e738e9274199dbd4\",\"dweb:/ipfs/QmTSArSzQRFbQmHgq7U1PZXnsDFhvDZhKVu9CzMG4yo6Lx\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x2c309e7df9e05e6ce15bedfe74f3c61b467fc37e0fae9eab496acf5ea0bbd7ff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7063b5c98711a98018ba4635ac74cee1c1cfa2ea01099498e062699ed9530005\",\"dweb:/ipfs/QmeJ8rGXkcv7RrqLdAW8PCXPAykxVsddfYY6g5NaTwmRFE\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7e66dfde185df46104c11bc89d08fa0760737aa59a2b8546a656473d810a8ea4\",\"dweb:/ipfs/QmXvyqtXPaPss2PD7eqPoSao5Szm2n6UMoiG8TZZDjmChR\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol\":{\"keccak256\":\"0x52da94e59d870f54ca0eb4f485c3d9602011f668ba34d72c88124a1496ebaab1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://09656a37963a61e79df0b718ad0ec323cd29d409d6ead33dbb91d0770ff87fa4\",\"dweb:/ipfs/QmXLWCYoMpZ4SecK4kVaL53LZWXZNbQG8gUzACmZ6A64rE\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0xa8796bd16014cefb8c26449413981a49c510f92a98d6828494f5fd046223ced3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://63a5e0bb5a7d182e0d0eef87033f78115eab791de3626a929bc98c157087880a\",\"dweb:/ipfs/QmetkXAu2CJKS4qrZtEQPU8okAPwUwa6HL4XYwk8vrYMk8\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\":{\"keccak256\":\"0x7942989e3525aec1672469e4c65fb33fbd19c785c9cadbcb70fcbe1fe8bfdd37\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c9f260258c2be0e3b75f8ca285872c4bfa3a8fc97fdc2e62366c78abf22b54f\",\"dweb:/ipfs/QmTg1DMNwCDj8NVi6i1noqx7cxuRdPP4VyW4fzDkKAKmH2\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34\",\"dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2455248c8ddd9cc6a7af76a13973cddf222072427e7b0e2a7d1aff345145e931\",\"dweb:/ipfs/QmfYjnjRbWqYpuxurqveE6HtzsY1Xx323J428AKQgtBJZm\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f\",\"dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c\",\"dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS\"]},\"@openzeppelin/contracts/utils/math/SafeMath.sol\":{\"keccak256\":\"0x58b21219689909c4f8339af00813760337f7e2e7f169a97fe49e2896dcfb3b9a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ef8e012e946dec20e59f2d4446f4b44bb098f3fa8bac103b1b5112fff777447b\",\"dweb:/ipfs/QmVTooKWcLkJ9W68yNX4MgdrbAKiAXwuRN9A7f4NkdcdtQ\"]},\"@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"project:/contracts/RoyalClub.sol\":{\"keccak256\":\"0xcb45bfcf0c22061e8e74cb2def287ff82843904f9ce728e0b66c8e08bb021934\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f947d7ddb42726e6a05f6da50e093584350654d1918b56889446b836b24cc06a\",\"dweb:/ipfs/QmRjqtPGaWfThNrnZD1kP3hccFZCWyTRzWLt3NqJFAK9Cm\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600781526020017f41727447726f77000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4152470000000000000000000000000000000000000000000000000000000000815250816000908051906020019062000096929190620001a6565b508060019080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002ba565b600033905090565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000285565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200029e57607f821691505b602082108103620002b457620002b362000256565b5b50919050565b613c4280620002ca6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806370a08231116100de578063a22cb46511610097578063d204c45e11610071578063d204c45e146104bd578063df738ee2146104d9578063e985e9c514610509578063f2fde38b146105395761018e565b8063a22cb46514610455578063b88d4fde14610471578063c87b56dd1461048d5761018e565b806370a082311461037d578063715018a6146103ad5780638da5cb5b146103b75780638e29c1a7146103d557806395d89b4114610407578063a123c33e146104255761018e565b806323b872dd1161014b57806342966c681161012557806342966c68146102cf5780634bb8456c146102eb5780634f6ccce71461031d5780636352211e1461034d5761018e565b806323b872dd146102675780632f745c591461028357806342842e0e146102b35761018e565b806301ffc9a71461019357806306fdde03146101c3578063081812fc146101e1578063095ea7b31461021157806318160ddd1461022d5780631e5f7e721461024b575b600080fd5b6101ad60048036038101906101a891906129a4565b610555565b6040516101ba91906129ec565b60405180910390f35b6101cb610567565b6040516101d89190612aa0565b60405180910390f35b6101fb60048036038101906101f69190612af8565b6105f9565b6040516102089190612b66565b60405180910390f35b61022b60048036038101906102269190612bad565b61063f565b005b610235610756565b6040516102429190612bfc565b60405180910390f35b61026560048036038101906102609190612af8565b610763565b005b610281600480360381019061027c9190612c17565b610794565b005b61029d60048036038101906102989190612bad565b6107f4565b6040516102aa9190612bfc565b60405180910390f35b6102cd60048036038101906102c89190612c17565b610899565b005b6102e960048036038101906102e49190612af8565b6108b9565b005b61030560048036038101906103009190612af8565b610915565b60405161031493929190612c6a565b60405180910390f35b61033760048036038101906103329190612af8565b61096f565b6040516103449190612bfc565b60405180910390f35b61036760048036038101906103629190612af8565b6109e0565b6040516103749190612b66565b60405180910390f35b61039760048036038101906103929190612ca1565b610a66565b6040516103a49190612bfc565b60405180910390f35b6103b5610b1d565b005b6103bf610b31565b6040516103cc9190612b66565b60405180910390f35b6103ef60048036038101906103ea9190612af8565b610b5b565b6040516103fe93929190612c6a565b60405180910390f35b61040f610ba5565b60405161041c9190612aa0565b60405180910390f35b61043f600480360381019061043a9190612af8565b610c37565b60405161044c9190612b66565b60405180910390f35b61046f600480360381019061046a9190612cfa565b610c77565b005b61048b60048036038101906104869190612e6f565b610c8d565b005b6104a760048036038101906104a29190612af8565b610cef565b6040516104b49190612aa0565b60405180910390f35b6104d760048036038101906104d29190612f93565b610d01565b005b6104f360048036038101906104ee9190612af8565b610de3565b6040516105009190612bfc565b60405180910390f35b610523600480360381019061051e9190612fef565b610e03565b60405161053091906129ec565b60405180910390f35b610553600480360381019061054e9190612ca1565b610e97565b005b600061056082610f1a565b9050919050565b6060600080546105769061305e565b80601f01602080910402602001604051908101604052809291908181526020018280546105a29061305e565b80156105ef5780601f106105c4576101008083540402835291602001916105ef565b820191906000526020600020905b8154815290600101906020018083116105d257829003601f168201915b5050505050905090565b600061060482610f7b565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061064a826109e0565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b190613101565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106d9610fc6565b73ffffffffffffffffffffffffffffffffffffffff161480610708575061070781610702610fc6565b610e03565b5b610747576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073e90613193565b60405180910390fd5b6107518383610fce565b505050565b6000600880549050905090565b6001600d6000838152602001908152602001600020600001600082825461078a91906131e2565b9250508190555050565b6107a561079f610fc6565b82611087565b6107e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107db906132aa565b60405180910390fd5b6107ef83838361111c565b505050565b60006107ff83610a66565b8210610840576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108379061333c565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b6108b483838360405180602001604052806000815250610c8d565b505050565b6108ca6108c4610fc6565b82611087565b610909576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610900906132aa565b60405180910390fd5b61091281611415565b50565b600e818154811061092557600080fd5b90600052602060002090600302016000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b6000610979610756565b82106109ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b1906133ce565b60405180910390fd5b600882815481106109ce576109cd6133ee565b5b90600052602060002001549050919050565b6000806109ec83611421565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5490613469565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ad6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acd906134fb565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610b2561145e565b610b2f60006114dc565b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600d6020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b606060018054610bb49061305e565b80601f0160208091040260200160405190810160405280929190818152602001828054610be09061305e565b8015610c2d5780601f10610c0257610100808354040283529160200191610c2d565b820191906000526020600020905b815481529060010190602001808311610c1057829003601f168201915b5050505050905090565b6000600d600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610c89610c82610fc6565b83836115a2565b5050565b610c9e610c98610fc6565b83611087565b610cdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd4906132aa565b60405180910390fd5b610ce98484848461170e565b50505050565b6060610cfa8261176a565b9050919050565b610d0961145e565b6000610d15600c61187c565b9050610d21600c61188a565b610d2b83826118a0565b610d3581836118be565b60006040518060600160405280600081526020018381526020013373ffffffffffffffffffffffffffffffffffffffff16815250905080600d6000848152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505050505050565b6000600d6000838152602001908152602001600020600001549050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610e9f61145e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f059061358d565b60405180910390fd5b610f17816114dc565b50565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610f745750610f7382611969565b5b9050919050565b610f84816119e3565b610fc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fba90613469565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611041836109e0565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080611093836109e0565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110d557506110d48185610e03565b5b8061111357508373ffffffffffffffffffffffffffffffffffffffff166110fb846105f9565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661113c826109e0565b73ffffffffffffffffffffffffffffffffffffffff1614611192576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111899061361f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611201576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f8906136b1565b60405180910390fd5b61120e8383836001611a24565b8273ffffffffffffffffffffffffffffffffffffffff1661122e826109e0565b73ffffffffffffffffffffffffffffffffffffffff1614611284576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127b9061361f565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114108383836001611a36565b505050565b61141e81611a3c565b50565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b611466610fc6565b73ffffffffffffffffffffffffffffffffffffffff16611484610b31565b73ffffffffffffffffffffffffffffffffffffffff16146114da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d19061371d565b60405180910390fd5b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611610576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160790613789565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161170191906129ec565b60405180910390a3505050565b61171984848461111c565b61172584848484611a8f565b611764576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175b9061381b565b60405180910390fd5b50505050565b606061177582610f7b565b6000600a600084815260200190815260200160002080546117959061305e565b80601f01602080910402602001604051908101604052809291908181526020018280546117c19061305e565b801561180e5780601f106117e35761010080835404028352916020019161180e565b820191906000526020600020905b8154815290600101906020018083116117f157829003601f168201915b50505050509050600061181f611c16565b90506000815103611834578192505050611877565b600082511115611869578082604051602001611851929190613877565b60405160208183030381529060405292505050611877565b61187284611c2d565b925050505b919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6118ba828260405180602001604052806000815250611c95565b5050565b6118c7826119e3565b611906576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118fd9061390d565b60405180910390fd5b80600a6000848152602001908152602001600020908051906020019061192d929190612855565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce78260405161195d9190612bfc565b60405180910390a15050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806119dc57506119db82611cf0565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611a0583611421565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611a3084848484611dd2565b50505050565b50505050565b611a4581611f30565b6000600a60008381526020019081526020016000208054611a659061305e565b905014611a8c57600a60008281526020019081526020016000206000611a8b91906128db565b5b50565b6000611ab08473ffffffffffffffffffffffffffffffffffffffff1661207e565b15611c09578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ad9610fc6565b8786866040518563ffffffff1660e01b8152600401611afb9493929190613982565b6020604051808303816000875af1925050508015611b3757506040513d601f19601f82011682018060405250810190611b3491906139e3565b60015b611bb9573d8060008114611b67576040519150601f19603f3d011682016040523d82523d6000602084013e611b6c565b606091505b506000815103611bb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba89061381b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611c0e565b600190505b949350505050565b606060405180602001604052806000815250905090565b6060611c3882610f7b565b6000611c42611c16565b90506000815111611c625760405180602001604052806000815250611c8d565b80611c6c846120a1565b604051602001611c7d929190613877565b6040516020818303038152906040525b915050919050565b611c9f838361216f565b611cac6000848484611a8f565b611ceb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce29061381b565b60405180910390fd5b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611dbb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611dcb5750611dca8261238c565b5b9050919050565b611dde848484846123f6565b6001811115611e22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e1990613a82565b60405180910390fd5b6000829050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603611e6957611e64816123fc565b611ea8565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611ea757611ea68582612445565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611eea57611ee5816125b2565b611f29565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614611f2857611f278482612683565b5b5b5050505050565b6000611f3b826109e0565b9050611f4b816000846001611a24565b611f54826109e0565b90506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461207a816000846001611a36565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060600060016120b084612702565b01905060008167ffffffffffffffff8111156120cf576120ce612d44565b5b6040519080825280601f01601f1916602001820160405280156121015781602001600182028036833780820191505090505b509050600082602001820190505b600115612164578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161215857612157613aa2565b5b0494506000850361210f575b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036121de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121d590613b1d565b60405180910390fd5b6121e7816119e3565b15612227576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161221e90613b89565b60405180910390fd5b612235600083836001611a24565b61223e816119e3565b1561227e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161227590613b89565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612388600083836001611a36565b5050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b50505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b6000600161245284610a66565b61245c9190613ba9565b9050600060076000848152602001908152602001600020549050818114612541576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b600060016008805490506125c69190613ba9565b90506000600960008481526020019081526020016000205490506000600883815481106125f6576125f56133ee565b5b906000526020600020015490508060088381548110612618576126176133ee565b5b90600052602060002001819055508160096000838152602001908152602001600020819055506009600085815260200190815260200160002060009055600880548061266757612666613bdd565b5b6001900381819060005260206000200160009055905550505050565b600061268e83610a66565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612760577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161275657612755613aa2565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061279d576d04ee2d6d415b85acef8100000000838161279357612792613aa2565b5b0492506020810190505b662386f26fc1000083106127cc57662386f26fc1000083816127c2576127c1613aa2565b5b0492506010810190505b6305f5e10083106127f5576305f5e10083816127eb576127ea613aa2565b5b0492506008810190505b612710831061281a5761271083816128105761280f613aa2565b5b0492506004810190505b6064831061283d576064838161283357612832613aa2565b5b0492506002810190505b600a831061284c576001810190505b80915050919050565b8280546128619061305e565b90600052602060002090601f01602090048101928261288357600085556128ca565b82601f1061289c57805160ff19168380011785556128ca565b828001600101855582156128ca579182015b828111156128c95782518255916020019190600101906128ae565b5b5090506128d7919061291b565b5090565b5080546128e79061305e565b6000825580601f106128f95750612918565b601f016020900490600052602060002090810190612917919061291b565b5b50565b5b8082111561293457600081600090555060010161291c565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6129818161294c565b811461298c57600080fd5b50565b60008135905061299e81612978565b92915050565b6000602082840312156129ba576129b9612942565b5b60006129c88482850161298f565b91505092915050565b60008115159050919050565b6129e6816129d1565b82525050565b6000602082019050612a0160008301846129dd565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612a41578082015181840152602081019050612a26565b83811115612a50576000848401525b50505050565b6000601f19601f8301169050919050565b6000612a7282612a07565b612a7c8185612a12565b9350612a8c818560208601612a23565b612a9581612a56565b840191505092915050565b60006020820190508181036000830152612aba8184612a67565b905092915050565b6000819050919050565b612ad581612ac2565b8114612ae057600080fd5b50565b600081359050612af281612acc565b92915050565b600060208284031215612b0e57612b0d612942565b5b6000612b1c84828501612ae3565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612b5082612b25565b9050919050565b612b6081612b45565b82525050565b6000602082019050612b7b6000830184612b57565b92915050565b612b8a81612b45565b8114612b9557600080fd5b50565b600081359050612ba781612b81565b92915050565b60008060408385031215612bc457612bc3612942565b5b6000612bd285828601612b98565b9250506020612be385828601612ae3565b9150509250929050565b612bf681612ac2565b82525050565b6000602082019050612c116000830184612bed565b92915050565b600080600060608486031215612c3057612c2f612942565b5b6000612c3e86828701612b98565b9350506020612c4f86828701612b98565b9250506040612c6086828701612ae3565b9150509250925092565b6000606082019050612c7f6000830186612bed565b612c8c6020830185612bed565b612c996040830184612b57565b949350505050565b600060208284031215612cb757612cb6612942565b5b6000612cc584828501612b98565b91505092915050565b612cd7816129d1565b8114612ce257600080fd5b50565b600081359050612cf481612cce565b92915050565b60008060408385031215612d1157612d10612942565b5b6000612d1f85828601612b98565b9250506020612d3085828601612ce5565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612d7c82612a56565b810181811067ffffffffffffffff82111715612d9b57612d9a612d44565b5b80604052505050565b6000612dae612938565b9050612dba8282612d73565b919050565b600067ffffffffffffffff821115612dda57612dd9612d44565b5b612de382612a56565b9050602081019050919050565b82818337600083830152505050565b6000612e12612e0d84612dbf565b612da4565b905082815260208101848484011115612e2e57612e2d612d3f565b5b612e39848285612df0565b509392505050565b600082601f830112612e5657612e55612d3a565b5b8135612e66848260208601612dff565b91505092915050565b60008060008060808587031215612e8957612e88612942565b5b6000612e9787828801612b98565b9450506020612ea887828801612b98565b9350506040612eb987828801612ae3565b925050606085013567ffffffffffffffff811115612eda57612ed9612947565b5b612ee687828801612e41565b91505092959194509250565b600067ffffffffffffffff821115612f0d57612f0c612d44565b5b612f1682612a56565b9050602081019050919050565b6000612f36612f3184612ef2565b612da4565b905082815260208101848484011115612f5257612f51612d3f565b5b612f5d848285612df0565b509392505050565b600082601f830112612f7a57612f79612d3a565b5b8135612f8a848260208601612f23565b91505092915050565b60008060408385031215612faa57612fa9612942565b5b6000612fb885828601612b98565b925050602083013567ffffffffffffffff811115612fd957612fd8612947565b5b612fe585828601612f65565b9150509250929050565b6000806040838503121561300657613005612942565b5b600061301485828601612b98565b925050602061302585828601612b98565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061307657607f821691505b6020821081036130895761308861302f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006130eb602183612a12565b91506130f68261308f565b604082019050919050565b6000602082019050818103600083015261311a816130de565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061317d603d83612a12565b915061318882613121565b604082019050919050565b600060208201905081810360008301526131ac81613170565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006131ed82612ac2565b91506131f883612ac2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561322d5761322c6131b3565b5b828201905092915050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613294602d83612a12565b915061329f82613238565b604082019050919050565b600060208201905081810360008301526132c381613287565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b6000613326602b83612a12565b9150613331826132ca565b604082019050919050565b6000602082019050818103600083015261335581613319565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b60006133b8602c83612a12565b91506133c38261335c565b604082019050919050565b600060208201905081810360008301526133e7816133ab565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000613453601883612a12565b915061345e8261341d565b602082019050919050565b6000602082019050818103600083015261348281613446565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006134e5602983612a12565b91506134f082613489565b604082019050919050565b60006020820190508181036000830152613514816134d8565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613577602683612a12565b91506135828261351b565b604082019050919050565b600060208201905081810360008301526135a68161356a565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613609602583612a12565b9150613614826135ad565b604082019050919050565b60006020820190508181036000830152613638816135fc565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061369b602483612a12565b91506136a68261363f565b604082019050919050565b600060208201905081810360008301526136ca8161368e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613707602083612a12565b9150613712826136d1565b602082019050919050565b60006020820190508181036000830152613736816136fa565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613773601983612a12565b915061377e8261373d565b602082019050919050565b600060208201905081810360008301526137a281613766565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613805603283612a12565b9150613810826137a9565b604082019050919050565b60006020820190508181036000830152613834816137f8565b9050919050565b600081905092915050565b600061385182612a07565b61385b818561383b565b935061386b818560208601612a23565b80840191505092915050565b60006138838285613846565b915061388f8284613846565b91508190509392505050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006138f7602e83612a12565b91506139028261389b565b604082019050919050565b60006020820190508181036000830152613926816138ea565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006139548261392d565b61395e8185613938565b935061396e818560208601612a23565b61397781612a56565b840191505092915050565b60006080820190506139976000830187612b57565b6139a46020830186612b57565b6139b16040830185612bed565b81810360608301526139c38184613949565b905095945050505050565b6000815190506139dd81612978565b92915050565b6000602082840312156139f9576139f8612942565b5b6000613a07848285016139ce565b91505092915050565b7f455243373231456e756d657261626c653a20636f6e736563757469766520747260008201527f616e7366657273206e6f7420737570706f727465640000000000000000000000602082015250565b6000613a6c603583612a12565b9150613a7782613a10565b604082019050919050565b60006020820190508181036000830152613a9b81613a5f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613b07602083612a12565b9150613b1282613ad1565b602082019050919050565b60006020820190508181036000830152613b3681613afa565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613b73601c83612a12565b9150613b7e82613b3d565b602082019050919050565b60006020820190508181036000830152613ba281613b66565b9050919050565b6000613bb482612ac2565b9150613bbf83612ac2565b925082821015613bd257613bd16131b3565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212201ab805ccc5a7f267ab2a68ab30cd6a08f0b8692367e91097554f106f72d36eb564736f6c634300080e0033",
    "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061018e5760003560e01c806370a08231116100de578063a22cb46511610097578063d204c45e11610071578063d204c45e146104bd578063df738ee2146104d9578063e985e9c514610509578063f2fde38b146105395761018e565b8063a22cb46514610455578063b88d4fde14610471578063c87b56dd1461048d5761018e565b806370a082311461037d578063715018a6146103ad5780638da5cb5b146103b75780638e29c1a7146103d557806395d89b4114610407578063a123c33e146104255761018e565b806323b872dd1161014b57806342966c681161012557806342966c68146102cf5780634bb8456c146102eb5780634f6ccce71461031d5780636352211e1461034d5761018e565b806323b872dd146102675780632f745c591461028357806342842e0e146102b35761018e565b806301ffc9a71461019357806306fdde03146101c3578063081812fc146101e1578063095ea7b31461021157806318160ddd1461022d5780631e5f7e721461024b575b600080fd5b6101ad60048036038101906101a891906129a4565b610555565b6040516101ba91906129ec565b60405180910390f35b6101cb610567565b6040516101d89190612aa0565b60405180910390f35b6101fb60048036038101906101f69190612af8565b6105f9565b6040516102089190612b66565b60405180910390f35b61022b60048036038101906102269190612bad565b61063f565b005b610235610756565b6040516102429190612bfc565b60405180910390f35b61026560048036038101906102609190612af8565b610763565b005b610281600480360381019061027c9190612c17565b610794565b005b61029d60048036038101906102989190612bad565b6107f4565b6040516102aa9190612bfc565b60405180910390f35b6102cd60048036038101906102c89190612c17565b610899565b005b6102e960048036038101906102e49190612af8565b6108b9565b005b61030560048036038101906103009190612af8565b610915565b60405161031493929190612c6a565b60405180910390f35b61033760048036038101906103329190612af8565b61096f565b6040516103449190612bfc565b60405180910390f35b61036760048036038101906103629190612af8565b6109e0565b6040516103749190612b66565b60405180910390f35b61039760048036038101906103929190612ca1565b610a66565b6040516103a49190612bfc565b60405180910390f35b6103b5610b1d565b005b6103bf610b31565b6040516103cc9190612b66565b60405180910390f35b6103ef60048036038101906103ea9190612af8565b610b5b565b6040516103fe93929190612c6a565b60405180910390f35b61040f610ba5565b60405161041c9190612aa0565b60405180910390f35b61043f600480360381019061043a9190612af8565b610c37565b60405161044c9190612b66565b60405180910390f35b61046f600480360381019061046a9190612cfa565b610c77565b005b61048b60048036038101906104869190612e6f565b610c8d565b005b6104a760048036038101906104a29190612af8565b610cef565b6040516104b49190612aa0565b60405180910390f35b6104d760048036038101906104d29190612f93565b610d01565b005b6104f360048036038101906104ee9190612af8565b610de3565b6040516105009190612bfc565b60405180910390f35b610523600480360381019061051e9190612fef565b610e03565b60405161053091906129ec565b60405180910390f35b610553600480360381019061054e9190612ca1565b610e97565b005b600061056082610f1a565b9050919050565b6060600080546105769061305e565b80601f01602080910402602001604051908101604052809291908181526020018280546105a29061305e565b80156105ef5780601f106105c4576101008083540402835291602001916105ef565b820191906000526020600020905b8154815290600101906020018083116105d257829003601f168201915b5050505050905090565b600061060482610f7b565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061064a826109e0565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036106ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b190613101565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166106d9610fc6565b73ffffffffffffffffffffffffffffffffffffffff161480610708575061070781610702610fc6565b610e03565b5b610747576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073e90613193565b60405180910390fd5b6107518383610fce565b505050565b6000600880549050905090565b6001600d6000838152602001908152602001600020600001600082825461078a91906131e2565b9250508190555050565b6107a561079f610fc6565b82611087565b6107e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107db906132aa565b60405180910390fd5b6107ef83838361111c565b505050565b60006107ff83610a66565b8210610840576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108379061333c565b60405180910390fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b6108b483838360405180602001604052806000815250610c8d565b505050565b6108ca6108c4610fc6565b82611087565b610909576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610900906132aa565b60405180910390fd5b61091281611415565b50565b600e818154811061092557600080fd5b90600052602060002090600302016000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b6000610979610756565b82106109ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b1906133ce565b60405180910390fd5b600882815481106109ce576109cd6133ee565b5b90600052602060002001549050919050565b6000806109ec83611421565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610a5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5490613469565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ad6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acd906134fb565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610b2561145e565b610b2f60006114dc565b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600d6020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905083565b606060018054610bb49061305e565b80601f0160208091040260200160405190810160405280929190818152602001828054610be09061305e565b8015610c2d5780601f10610c0257610100808354040283529160200191610c2d565b820191906000526020600020905b815481529060010190602001808311610c1057829003601f168201915b5050505050905090565b6000600d600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610c89610c82610fc6565b83836115a2565b5050565b610c9e610c98610fc6565b83611087565b610cdd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cd4906132aa565b60405180910390fd5b610ce98484848461170e565b50505050565b6060610cfa8261176a565b9050919050565b610d0961145e565b6000610d15600c61187c565b9050610d21600c61188a565b610d2b83826118a0565b610d3581836118be565b60006040518060600160405280600081526020018381526020013373ffffffffffffffffffffffffffffffffffffffff16815250905080600d6000848152602001908152602001600020600082015181600001556020820151816001015560408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555090505050505050565b6000600d6000838152602001908152602001600020600001549050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610e9f61145e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610f0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f059061358d565b60405180910390fd5b610f17816114dc565b50565b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610f745750610f7382611969565b5b9050919050565b610f84816119e3565b610fc3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fba90613469565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611041836109e0565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080611093836109e0565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806110d557506110d48185610e03565b5b8061111357508373ffffffffffffffffffffffffffffffffffffffff166110fb846105f9565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff1661113c826109e0565b73ffffffffffffffffffffffffffffffffffffffff1614611192576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111899061361f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611201576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111f8906136b1565b60405180910390fd5b61120e8383836001611a24565b8273ffffffffffffffffffffffffffffffffffffffff1661122e826109e0565b73ffffffffffffffffffffffffffffffffffffffff1614611284576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127b9061361f565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46114108383836001611a36565b505050565b61141e81611a3c565b50565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b611466610fc6565b73ffffffffffffffffffffffffffffffffffffffff16611484610b31565b73ffffffffffffffffffffffffffffffffffffffff16146114da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d19061371d565b60405180910390fd5b565b6000600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611610576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161160790613789565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161170191906129ec565b60405180910390a3505050565b61171984848461111c565b61172584848484611a8f565b611764576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175b9061381b565b60405180910390fd5b50505050565b606061177582610f7b565b6000600a600084815260200190815260200160002080546117959061305e565b80601f01602080910402602001604051908101604052809291908181526020018280546117c19061305e565b801561180e5780601f106117e35761010080835404028352916020019161180e565b820191906000526020600020905b8154815290600101906020018083116117f157829003601f168201915b50505050509050600061181f611c16565b90506000815103611834578192505050611877565b600082511115611869578082604051602001611851929190613877565b60405160208183030381529060405292505050611877565b61187284611c2d565b925050505b919050565b600081600001549050919050565b6001816000016000828254019250508190555050565b6118ba828260405180602001604052806000815250611c95565b5050565b6118c7826119e3565b611906576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118fd9061390d565b60405180910390fd5b80600a6000848152602001908152602001600020908051906020019061192d929190612855565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce78260405161195d9190612bfc565b60405180910390a15050565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806119dc57506119db82611cf0565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff16611a0583611421565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611a3084848484611dd2565b50505050565b50505050565b611a4581611f30565b6000600a60008381526020019081526020016000208054611a659061305e565b905014611a8c57600a60008281526020019081526020016000206000611a8b91906128db565b5b50565b6000611ab08473ffffffffffffffffffffffffffffffffffffffff1661207e565b15611c09578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611ad9610fc6565b8786866040518563ffffffff1660e01b8152600401611afb9493929190613982565b6020604051808303816000875af1925050508015611b3757506040513d601f19601f82011682018060405250810190611b3491906139e3565b60015b611bb9573d8060008114611b67576040519150601f19603f3d011682016040523d82523d6000602084013e611b6c565b606091505b506000815103611bb1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ba89061381b565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611c0e565b600190505b949350505050565b606060405180602001604052806000815250905090565b6060611c3882610f7b565b6000611c42611c16565b90506000815111611c625760405180602001604052806000815250611c8d565b80611c6c846120a1565b604051602001611c7d929190613877565b6040516020818303038152906040525b915050919050565b611c9f838361216f565b611cac6000848484611a8f565b611ceb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ce29061381b565b60405180910390fd5b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611dbb57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80611dcb5750611dca8261238c565b5b9050919050565b611dde848484846123f6565b6001811115611e22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611e1990613a82565b60405180910390fd5b6000829050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603611e6957611e64816123fc565b611ea8565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614611ea757611ea68582612445565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603611eea57611ee5816125b2565b611f29565b8473ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614611f2857611f278482612683565b5b5b5050505050565b6000611f3b826109e0565b9050611f4b816000846001611a24565b611f54826109e0565b90506004600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506002600083815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905581600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461207a816000846001611a36565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6060600060016120b084612702565b01905060008167ffffffffffffffff8111156120cf576120ce612d44565b5b6040519080825280601f01601f1916602001820160405280156121015781602001600182028036833780820191505090505b509050600082602001820190505b600115612164578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161215857612157613aa2565b5b0494506000850361210f575b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036121de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016121d590613b1d565b60405180910390fd5b6121e7816119e3565b15612227576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161221e90613b89565b60405180910390fd5b612235600083836001611a24565b61223e816119e3565b1561227e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161227590613b89565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4612388600083836001611a36565b5050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b50505050565b6008805490506009600083815260200190815260200160002081905550600881908060018154018082558091505060019003906000526020600020016000909190919091505550565b6000600161245284610a66565b61245c9190613ba9565b9050600060076000848152602001908152602001600020549050818114612541576000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816007600083815260200190815260200160002081905550505b6007600084815260200190815260200160002060009055600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b600060016008805490506125c69190613ba9565b90506000600960008481526020019081526020016000205490506000600883815481106125f6576125f56133ee565b5b906000526020600020015490508060088381548110612618576126176133ee565b5b90600052602060002001819055508160096000838152602001908152602001600020819055506009600085815260200190815260200160002060009055600880548061266757612666613bdd565b5b6001900381819060005260206000200160009055905550505050565b600061268e83610a66565b905081600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806007600084815260200190815260200160002081905550505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612760577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161275657612755613aa2565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061279d576d04ee2d6d415b85acef8100000000838161279357612792613aa2565b5b0492506020810190505b662386f26fc1000083106127cc57662386f26fc1000083816127c2576127c1613aa2565b5b0492506010810190505b6305f5e10083106127f5576305f5e10083816127eb576127ea613aa2565b5b0492506008810190505b612710831061281a5761271083816128105761280f613aa2565b5b0492506004810190505b6064831061283d576064838161283357612832613aa2565b5b0492506002810190505b600a831061284c576001810190505b80915050919050565b8280546128619061305e565b90600052602060002090601f01602090048101928261288357600085556128ca565b82601f1061289c57805160ff19168380011785556128ca565b828001600101855582156128ca579182015b828111156128c95782518255916020019190600101906128ae565b5b5090506128d7919061291b565b5090565b5080546128e79061305e565b6000825580601f106128f95750612918565b601f016020900490600052602060002090810190612917919061291b565b5b50565b5b8082111561293457600081600090555060010161291c565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6129818161294c565b811461298c57600080fd5b50565b60008135905061299e81612978565b92915050565b6000602082840312156129ba576129b9612942565b5b60006129c88482850161298f565b91505092915050565b60008115159050919050565b6129e6816129d1565b82525050565b6000602082019050612a0160008301846129dd565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612a41578082015181840152602081019050612a26565b83811115612a50576000848401525b50505050565b6000601f19601f8301169050919050565b6000612a7282612a07565b612a7c8185612a12565b9350612a8c818560208601612a23565b612a9581612a56565b840191505092915050565b60006020820190508181036000830152612aba8184612a67565b905092915050565b6000819050919050565b612ad581612ac2565b8114612ae057600080fd5b50565b600081359050612af281612acc565b92915050565b600060208284031215612b0e57612b0d612942565b5b6000612b1c84828501612ae3565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000612b5082612b25565b9050919050565b612b6081612b45565b82525050565b6000602082019050612b7b6000830184612b57565b92915050565b612b8a81612b45565b8114612b9557600080fd5b50565b600081359050612ba781612b81565b92915050565b60008060408385031215612bc457612bc3612942565b5b6000612bd285828601612b98565b9250506020612be385828601612ae3565b9150509250929050565b612bf681612ac2565b82525050565b6000602082019050612c116000830184612bed565b92915050565b600080600060608486031215612c3057612c2f612942565b5b6000612c3e86828701612b98565b9350506020612c4f86828701612b98565b9250506040612c6086828701612ae3565b9150509250925092565b6000606082019050612c7f6000830186612bed565b612c8c6020830185612bed565b612c996040830184612b57565b949350505050565b600060208284031215612cb757612cb6612942565b5b6000612cc584828501612b98565b91505092915050565b612cd7816129d1565b8114612ce257600080fd5b50565b600081359050612cf481612cce565b92915050565b60008060408385031215612d1157612d10612942565b5b6000612d1f85828601612b98565b9250506020612d3085828601612ce5565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b612d7c82612a56565b810181811067ffffffffffffffff82111715612d9b57612d9a612d44565b5b80604052505050565b6000612dae612938565b9050612dba8282612d73565b919050565b600067ffffffffffffffff821115612dda57612dd9612d44565b5b612de382612a56565b9050602081019050919050565b82818337600083830152505050565b6000612e12612e0d84612dbf565b612da4565b905082815260208101848484011115612e2e57612e2d612d3f565b5b612e39848285612df0565b509392505050565b600082601f830112612e5657612e55612d3a565b5b8135612e66848260208601612dff565b91505092915050565b60008060008060808587031215612e8957612e88612942565b5b6000612e9787828801612b98565b9450506020612ea887828801612b98565b9350506040612eb987828801612ae3565b925050606085013567ffffffffffffffff811115612eda57612ed9612947565b5b612ee687828801612e41565b91505092959194509250565b600067ffffffffffffffff821115612f0d57612f0c612d44565b5b612f1682612a56565b9050602081019050919050565b6000612f36612f3184612ef2565b612da4565b905082815260208101848484011115612f5257612f51612d3f565b5b612f5d848285612df0565b509392505050565b600082601f830112612f7a57612f79612d3a565b5b8135612f8a848260208601612f23565b91505092915050565b60008060408385031215612faa57612fa9612942565b5b6000612fb885828601612b98565b925050602083013567ffffffffffffffff811115612fd957612fd8612947565b5b612fe585828601612f65565b9150509250929050565b6000806040838503121561300657613005612942565b5b600061301485828601612b98565b925050602061302585828601612b98565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061307657607f821691505b6020821081036130895761308861302f565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006130eb602183612a12565b91506130f68261308f565b604082019050919050565b6000602082019050818103600083015261311a816130de565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061317d603d83612a12565b915061318882613121565b604082019050919050565b600060208201905081810360008301526131ac81613170565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006131ed82612ac2565b91506131f883612ac2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561322d5761322c6131b3565b5b828201905092915050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b6000613294602d83612a12565b915061329f82613238565b604082019050919050565b600060208201905081810360008301526132c381613287565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b6000613326602b83612a12565b9150613331826132ca565b604082019050919050565b6000602082019050818103600083015261335581613319565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b60006133b8602c83612a12565b91506133c38261335c565b604082019050919050565b600060208201905081810360008301526133e7816133ab565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000613453601883612a12565b915061345e8261341d565b602082019050919050565b6000602082019050818103600083015261348281613446565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006134e5602983612a12565b91506134f082613489565b604082019050919050565b60006020820190508181036000830152613514816134d8565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000613577602683612a12565b91506135828261351b565b604082019050919050565b600060208201905081810360008301526135a68161356a565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000613609602583612a12565b9150613614826135ad565b604082019050919050565b60006020820190508181036000830152613638816135fc565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061369b602483612a12565b91506136a68261363f565b604082019050919050565b600060208201905081810360008301526136ca8161368e565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000613707602083612a12565b9150613712826136d1565b602082019050919050565b60006020820190508181036000830152613736816136fa565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000613773601983612a12565b915061377e8261373d565b602082019050919050565b600060208201905081810360008301526137a281613766565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000613805603283612a12565b9150613810826137a9565b604082019050919050565b60006020820190508181036000830152613834816137f8565b9050919050565b600081905092915050565b600061385182612a07565b61385b818561383b565b935061386b818560208601612a23565b80840191505092915050565b60006138838285613846565b915061388f8284613846565b91508190509392505050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006138f7602e83612a12565b91506139028261389b565b604082019050919050565b60006020820190508181036000830152613926816138ea565b9050919050565b600081519050919050565b600082825260208201905092915050565b60006139548261392d565b61395e8185613938565b935061396e818560208601612a23565b61397781612a56565b840191505092915050565b60006080820190506139976000830187612b57565b6139a46020830186612b57565b6139b16040830185612bed565b81810360608301526139c38184613949565b905095945050505050565b6000815190506139dd81612978565b92915050565b6000602082840312156139f9576139f8612942565b5b6000613a07848285016139ce565b91505092915050565b7f455243373231456e756d657261626c653a20636f6e736563757469766520747260008201527f616e7366657273206e6f7420737570706f727465640000000000000000000000602082015250565b6000613a6c603583612a12565b9150613a7782613a10565b604082019050919050565b60006020820190508181036000830152613a9b81613a5f565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000613b07602083612a12565b9150613b1282613ad1565b602082019050919050565b60006020820190508181036000830152613b3681613afa565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000613b73601c83612a12565b9150613b7e82613b3d565b602082019050919050565b60006020820190508181036000830152613ba281613b66565b9050919050565b6000613bb482612ac2565b9150613bbf83612ac2565b925082821015613bd257613bd16131b3565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea26469706673582212201ab805ccc5a7f267ab2a68ab30cd6a08f0b8692367e91097554f106f72d36eb564736f6c634300080e0033",
    "immutableReferences": {},
    "generatedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:516:30",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "35:152:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "52:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "55:77:30",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "45:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "45:88:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "45:88:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "149:1:30",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "152:4:30",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "142:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "142:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "142:15:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "173:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "176:4:30",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "166:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "166:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "166:15:30"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "7:180:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "244:269:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "254:22:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "268:4:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "274:1:30",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "264:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "264:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "254:6:30"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "285:38:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "315:4:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "321:1:30",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "311:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "311:12:30"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "289:18:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "362:51:30",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "376:27:30",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "390:6:30"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "398:4:30",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "386:3:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "386:17:30"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "376:6:30"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "342:18:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "335:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "335:26:30"
                    },
                    "nodeType": "YulIf",
                    "src": "332:81:30"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "465:42:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "479:16:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "479:18:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "479:18:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "429:18:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "452:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "460:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "449:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "449:14:30"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "426:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "426:38:30"
                    },
                    "nodeType": "YulIf",
                    "src": "423:84:30"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "228:4:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "237:6:30",
                  "type": ""
                }
              ],
              "src": "193:320:30"
            }
          ]
        },
        "contents": "{\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
        "id": 30,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "deployedGeneratedSources": [
      {
        "ast": {
          "nodeType": "YulBlock",
          "src": "0:34558:30",
          "statements": [
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "47:35:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "57:19:30",
                    "value": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "73:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "67:5:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "67:9:30"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "57:6:30"
                      }
                    ]
                  }
                ]
              },
              "name": "allocate_unbounded",
              "nodeType": "YulFunctionDefinition",
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "40:6:30",
                  "type": ""
                }
              ],
              "src": "7:75:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "177:28:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "194:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "197:1:30",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "187:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "187:12:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "187:12:30"
                  }
                ]
              },
              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
              "nodeType": "YulFunctionDefinition",
              "src": "88:117:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "300:28:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "317:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "320:1:30",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "310:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "310:12:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "310:12:30"
                  }
                ]
              },
              "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
              "nodeType": "YulFunctionDefinition",
              "src": "211:117:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "378:105:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "388:89:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "403:5:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "410:66:30",
                          "type": "",
                          "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "399:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "399:78:30"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "388:7:30"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "360:5:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "370:7:30",
                  "type": ""
                }
              ],
              "src": "334:149:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "531:78:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "587:16:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "596:1:30",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "599:1:30",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "589:6:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "589:12:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "589:12:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "554:5:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "578:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bytes4",
                                "nodeType": "YulIdentifier",
                                "src": "561:16:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "561:23:30"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "551:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "551:34:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "544:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "544:42:30"
                    },
                    "nodeType": "YulIf",
                    "src": "541:62:30"
                  }
                ]
              },
              "name": "validator_revert_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "524:5:30",
                  "type": ""
                }
              ],
              "src": "489:120:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "666:86:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "676:29:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "698:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "685:12:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "685:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "676:5:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "740:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bytes4",
                        "nodeType": "YulIdentifier",
                        "src": "714:25:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "714:32:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "714:32:30"
                  }
                ]
              },
              "name": "abi_decode_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "644:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "652:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "660:5:30",
                  "type": ""
                }
              ],
              "src": "615:137:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "823:262:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "869:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "871:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "871:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "871:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "844:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "853:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "840:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "840:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "865:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "836:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "836:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "833:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "962:116:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "977:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "991:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "981:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1006:62:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1040:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "1051:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1036:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1036:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "1060:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes4",
                            "nodeType": "YulIdentifier",
                            "src": "1016:19:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1016:52:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "1006:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bytes4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "793:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "804:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "816:6:30",
                  "type": ""
                }
              ],
              "src": "758:327:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1133:48:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1143:32:30",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1168:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1161:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1161:13:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "1154:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1154:21:30"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "1143:7:30"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1115:5:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "1125:7:30",
                  "type": ""
                }
              ],
              "src": "1091:90:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1246:50:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1263:3:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1283:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "1268:14:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1268:21:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1256:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1256:34:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1256:34:30"
                  }
                ]
              },
              "name": "abi_encode_t_bool_to_t_bool_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1234:5:30",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1241:3:30",
                  "type": ""
                }
              ],
              "src": "1187:109:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1394:118:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1404:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "1416:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1427:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1412:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1412:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "1404:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1478:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1491:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1502:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1487:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1487:17:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bool_to_t_bool_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "1440:37:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1440:65:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1440:65:30"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "1366:9:30",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "1378:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "1389:4:30",
                  "type": ""
                }
              ],
              "src": "1302:210:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1577:40:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "1588:22:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "1604:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "1598:5:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1598:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1588:6:30"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "1560:5:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1570:6:30",
                  "type": ""
                }
              ],
              "src": "1518:99:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1719:73:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1736:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1741:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "1729:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1729:19:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "1729:19:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "1757:29:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "1776:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "1781:4:30",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "1772:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1772:14:30"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "1757:11:30"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "1691:3:30",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1696:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "1707:11:30",
                  "type": ""
                }
              ],
              "src": "1623:169:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "1847:258:30",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "1857:10:30",
                    "value": {
                      "kind": "number",
                      "nodeType": "YulLiteral",
                      "src": "1866:1:30",
                      "type": "",
                      "value": "0"
                    },
                    "variables": [
                      {
                        "name": "i",
                        "nodeType": "YulTypedName",
                        "src": "1861:1:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "1926:63:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "1951:3:30"
                                  },
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "1956:1:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "1947:3:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1947:11:30"
                              },
                              {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "src",
                                        "nodeType": "YulIdentifier",
                                        "src": "1970:3:30"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "1975:1:30"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "1966:3:30"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1966:11:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "mload",
                                  "nodeType": "YulIdentifier",
                                  "src": "1960:5:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1960:18:30"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "1940:6:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1940:39:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "1940:39:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "1887:1:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "1890:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "1884:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "1884:13:30"
                    },
                    "nodeType": "YulForLoop",
                    "post": {
                      "nodeType": "YulBlock",
                      "src": "1898:19:30",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "1900:15:30",
                          "value": {
                            "arguments": [
                              {
                                "name": "i",
                                "nodeType": "YulIdentifier",
                                "src": "1909:1:30"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1912:2:30",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1905:3:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1905:10:30"
                          },
                          "variableNames": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1900:1:30"
                            }
                          ]
                        }
                      ]
                    },
                    "pre": {
                      "nodeType": "YulBlock",
                      "src": "1880:3:30",
                      "statements": []
                    },
                    "src": "1876:113:30"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "2023:76:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "arguments": [
                                  {
                                    "name": "dst",
                                    "nodeType": "YulIdentifier",
                                    "src": "2073:3:30"
                                  },
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "2078:6:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "2069:3:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2069:16:30"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "2087:1:30",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "mstore",
                              "nodeType": "YulIdentifier",
                              "src": "2062:6:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2062:27:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "2062:27:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "i",
                          "nodeType": "YulIdentifier",
                          "src": "2004:1:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2007:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "2001:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2001:13:30"
                    },
                    "nodeType": "YulIf",
                    "src": "1998:101:30"
                  }
                ]
              },
              "name": "copy_memory_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "1829:3:30",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "1834:3:30",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "1839:6:30",
                  "type": ""
                }
              ],
              "src": "1798:307:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2159:54:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2169:38:30",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2187:5:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2194:2:30",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2183:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2183:14:30"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2203:2:30",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "not",
                            "nodeType": "YulIdentifier",
                            "src": "2199:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2199:7:30"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "2179:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2179:28:30"
                    },
                    "variableNames": [
                      {
                        "name": "result",
                        "nodeType": "YulIdentifier",
                        "src": "2169:6:30"
                      }
                    ]
                  }
                ]
              },
              "name": "round_up_to_mul_of_32",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2142:5:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "result",
                  "nodeType": "YulTypedName",
                  "src": "2152:6:30",
                  "type": ""
                }
              ],
              "src": "2111:102:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2311:272:30",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "2321:53:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2368:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "2335:32:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2335:39:30"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "2325:6:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2383:78:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2449:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2454:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2390:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2390:71:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2383:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2496:5:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2503:4:30",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2492:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2492:16:30"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2510:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "2515:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "2470:21:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2470:52:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2470:52:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2531:46:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "2542:3:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "2569:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "2547:21:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2547:29:30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2538:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2538:39:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2531:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2292:5:30",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "2299:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "2307:3:30",
                  "type": ""
                }
              ],
              "src": "2219:364:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2707:195:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2717:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "2729:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "2740:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "2725:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2725:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2717:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2764:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2775:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2760:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2760:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "2783:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "2789:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "2779:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2779:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "2753:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2753:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "2753:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "2809:86:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "2881:6:30"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "2890:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "2817:63:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "2817:78:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2809:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "2679:9:30",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "2691:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "2702:4:30",
                  "type": ""
                }
              ],
              "src": "2589:313:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "2953:32:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "2963:16:30",
                    "value": {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2974:5:30"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "2963:7:30"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "2935:5:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "2945:7:30",
                  "type": ""
                }
              ],
              "src": "2908:77:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3034:79:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3091:16:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3100:1:30",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3103:1:30",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "3093:6:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3093:12:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3093:12:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3057:5:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3082:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "3064:17:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3064:24:30"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "3054:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3054:35:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "3047:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3047:43:30"
                    },
                    "nodeType": "YulIf",
                    "src": "3044:63:30"
                  }
                ]
              },
              "name": "validator_revert_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3027:5:30",
                  "type": ""
                }
              ],
              "src": "2991:122:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3171:87:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3181:29:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "3203:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "3190:12:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3190:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3181:5:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3246:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "3219:26:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3219:33:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3219:33:30"
                  }
                ]
              },
              "name": "abi_decode_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "3149:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "3157:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3165:5:30",
                  "type": ""
                }
              ],
              "src": "3119:139:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3330:263:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "3376:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "3378:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3378:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "3378:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "3351:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3360:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "3347:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3347:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3372:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "3343:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3343:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "3340:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "3469:117:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "3484:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3498:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "3488:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3513:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3548:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "3559:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3544:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3544:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "3568:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "3523:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3523:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "3513:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "3300:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "3311:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "3323:6:30",
                  "type": ""
                }
              ],
              "src": "3264:329:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3644:81:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3654:65:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3669:5:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "3676:42:30",
                          "type": "",
                          "value": "0xffffffffffffffffffffffffffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "3665:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3665:54:30"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3654:7:30"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_uint160",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3626:5:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3636:7:30",
                  "type": ""
                }
              ],
              "src": "3599:126:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3776:51:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "3786:35:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "3815:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint160",
                        "nodeType": "YulIdentifier",
                        "src": "3797:17:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3797:24:30"
                    },
                    "variableNames": [
                      {
                        "name": "cleaned",
                        "nodeType": "YulIdentifier",
                        "src": "3786:7:30"
                      }
                    ]
                  }
                ]
              },
              "name": "cleanup_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3758:5:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "cleaned",
                  "nodeType": "YulTypedName",
                  "src": "3768:7:30",
                  "type": ""
                }
              ],
              "src": "3731:96:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "3898:53:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "3915:3:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "3938:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "3920:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3920:24:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "3908:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "3908:37:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "3908:37:30"
                  }
                ]
              },
              "name": "abi_encode_t_address_to_t_address_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "3886:5:30",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "3893:3:30",
                  "type": ""
                }
              ],
              "src": "3833:118:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4055:124:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4065:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "4077:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4088:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "4073:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4073:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "4065:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4145:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4158:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4169:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4154:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4154:17:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "4101:43:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4101:71:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4101:71:30"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4027:9:30",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4039:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "4050:4:30",
                  "type": ""
                }
              ],
              "src": "3957:222:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4228:79:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4285:16:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4294:1:30",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4297:1:30",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "4287:6:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4287:12:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4287:12:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4251:5:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4276:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4258:17:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4258:24:30"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "4248:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4248:35:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "4241:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4241:43:30"
                    },
                    "nodeType": "YulIf",
                    "src": "4238:63:30"
                  }
                ]
              },
              "name": "validator_revert_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4221:5:30",
                  "type": ""
                }
              ],
              "src": "4185:122:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4365:87:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "4375:29:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "4397:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "4384:12:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4384:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4375:5:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "4440:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_address",
                        "nodeType": "YulIdentifier",
                        "src": "4413:26:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4413:33:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "4413:33:30"
                  }
                ]
              },
              "name": "abi_decode_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "4343:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "4351:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4359:5:30",
                  "type": ""
                }
              ],
              "src": "4313:139:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "4541:391:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "4587:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "4589:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4589:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "4589:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4562:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4571:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "4558:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4558:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4583:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "4554:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "4554:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "4551:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4680:117:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4695:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4709:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4699:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4724:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4759:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4770:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4755:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4755:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4779:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "4734:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4734:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "4724:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "4807:118:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4822:16:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "4836:2:30",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "4826:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4852:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4887:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "4898:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4883:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4883:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "4907:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "4862:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4862:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "4852:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "4503:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "4514:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "4526:6:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "4534:6:30",
                  "type": ""
                }
              ],
              "src": "4458:474:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5003:53:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "5020:3:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "5043:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "5025:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5025:24:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "5013:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5013:37:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5013:37:30"
                  }
                ]
              },
              "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "4991:5:30",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "4998:3:30",
                  "type": ""
                }
              ],
              "src": "4938:118:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5160:124:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "5170:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "5182:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5193:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "5178:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5178:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "5170:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5250:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5263:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5274:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "5259:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5259:17:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "5206:43:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5206:71:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "5206:71:30"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5132:9:30",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5144:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "5155:4:30",
                  "type": ""
                }
              ],
              "src": "5062:222:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "5390:519:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "5436:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "5438:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5438:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "5438:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5411:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "5420:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "5407:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5407:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5432:2:30",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "5403:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "5403:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "5400:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5529:117:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5544:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5558:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5548:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5573:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5608:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5619:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5604:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5604:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5628:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "5583:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5583:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "5573:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5656:118:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5671:16:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5685:2:30",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5675:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5701:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5736:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5747:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5732:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5732:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5756:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "5711:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5711:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "5701:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "5784:118:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5799:16:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "5813:2:30",
                          "type": "",
                          "value": "64"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "5803:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "5829:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5864:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "5875:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "5860:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5860:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "5884:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "5839:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5839:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "5829:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "5344:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "5355:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "5367:6:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "5375:6:30",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "5383:6:30",
                  "type": ""
                }
              ],
              "src": "5290:619:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6069:288:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6079:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "6091:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6102:2:30",
                          "type": "",
                          "value": "96"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "6087:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6087:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "6079:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6159:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6172:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6183:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6168:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6168:17:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6115:43:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6115:71:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6115:71:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "6240:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6253:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6264:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6249:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6249:18:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6196:43:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6196:72:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6196:72:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "6322:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6335:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6346:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "6331:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6331:18:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "6278:43:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6278:72:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6278:72:30"
                  }
                ]
              },
              "name": "abi_encode_tuple_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_address__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6025:9:30",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "6037:6:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "6045:6:30",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6053:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "6064:4:30",
                  "type": ""
                }
              ],
              "src": "5915:442:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6429:263:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6475:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "6477:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6477:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6477:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "6450:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "6459:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "6446:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6446:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6471:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "6442:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6442:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "6439:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "6568:117:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "6583:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "6597:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "6587:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "6612:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "6647:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "6658:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "6643:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6643:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "6667:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "6622:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6622:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "6612:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "6399:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "6410:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "6422:6:30",
                  "type": ""
                }
              ],
              "src": "6363:329:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6738:76:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "6792:16:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6801:1:30",
                                "type": "",
                                "value": "0"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6804:1:30",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "revert",
                              "nodeType": "YulIdentifier",
                              "src": "6794:6:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6794:12:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "6794:12:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "6761:5:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "6783:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nodeType": "YulIdentifier",
                                "src": "6768:14:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6768:21:30"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "6758:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6758:32:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "6751:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6751:40:30"
                    },
                    "nodeType": "YulIf",
                    "src": "6748:60:30"
                  }
                ]
              },
              "name": "validator_revert_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6731:5:30",
                  "type": ""
                }
              ],
              "src": "6698:116:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "6869:84:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "6879:29:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "6901:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "6888:12:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6888:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6879:5:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "6941:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bool",
                        "nodeType": "YulIdentifier",
                        "src": "6917:23:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "6917:30:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "6917:30:30"
                  }
                ]
              },
              "name": "abi_decode_t_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "6847:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "6855:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "6863:5:30",
                  "type": ""
                }
              ],
              "src": "6820:133:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7039:388:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "7085:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "7087:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7087:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "7087:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7060:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "7069:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "7056:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7056:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7081:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "7052:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7052:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "7049:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "7178:117:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7193:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7207:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "7197:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7222:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7257:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "7268:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7253:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7253:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7277:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "7232:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7232:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "7222:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "7305:115:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "7320:16:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7334:2:30",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "7324:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7350:60:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "7382:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "7393:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7378:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7378:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "7402:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bool",
                            "nodeType": "YulIdentifier",
                            "src": "7360:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7360:50:30"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "7350:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_bool",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "7001:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "7012:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "7024:6:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "7032:6:30",
                  "type": ""
                }
              ],
              "src": "6959:468:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7522:28:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7539:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7542:1:30",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7532:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7532:12:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7532:12:30"
                  }
                ]
              },
              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
              "nodeType": "YulFunctionDefinition",
              "src": "7433:117:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7645:28:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7662:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7665:1:30",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7655:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7655:12:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7655:12:30"
                  }
                ]
              },
              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
              "nodeType": "YulFunctionDefinition",
              "src": "7556:117:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7707:152:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7724:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7727:77:30",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7717:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7717:88:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7717:88:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7821:1:30",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7824:4:30",
                          "type": "",
                          "value": "0x41"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "7814:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7814:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7814:15:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7845:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "7848:4:30",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "7838:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7838:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "7838:15:30"
                  }
                ]
              },
              "name": "panic_error_0x41",
              "nodeType": "YulFunctionDefinition",
              "src": "7679:180:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "7908:238:30",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "7918:58:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "7940:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "size",
                              "nodeType": "YulIdentifier",
                              "src": "7970:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "7948:21:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7948:27:30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "7936:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "7936:40:30"
                    },
                    "variables": [
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulTypedName",
                        "src": "7922:10:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8087:22:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "8089:16:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8089:18:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8089:18:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "8030:10:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8042:18:30",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "8027:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8027:34:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "newFreePtr",
                              "nodeType": "YulIdentifier",
                              "src": "8066:10:30"
                            },
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "8078:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "8063:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8063:22:30"
                        }
                      ],
                      "functionName": {
                        "name": "or",
                        "nodeType": "YulIdentifier",
                        "src": "8024:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8024:62:30"
                    },
                    "nodeType": "YulIf",
                    "src": "8021:88:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8125:2:30",
                          "type": "",
                          "value": "64"
                        },
                        {
                          "name": "newFreePtr",
                          "nodeType": "YulIdentifier",
                          "src": "8129:10:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8118:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8118:22:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8118:22:30"
                  }
                ]
              },
              "name": "finalize_allocation",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "7894:6:30",
                  "type": ""
                },
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "7902:4:30",
                  "type": ""
                }
              ],
              "src": "7865:281:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8193:88:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8203:30:30",
                    "value": {
                      "arguments": [],
                      "functionName": {
                        "name": "allocate_unbounded",
                        "nodeType": "YulIdentifier",
                        "src": "8213:18:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8213:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "8203:6:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "memPtr",
                          "nodeType": "YulIdentifier",
                          "src": "8262:6:30"
                        },
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "8270:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "finalize_allocation",
                        "nodeType": "YulIdentifier",
                        "src": "8242:19:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8242:33:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8242:33:30"
                  }
                ]
              },
              "name": "allocate_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "8177:4:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "8186:6:30",
                  "type": ""
                }
              ],
              "src": "8152:129:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8353:241:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "8458:22:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "8460:16:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8460:18:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "8460:18:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8430:6:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8438:18:30",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "8427:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8427:30:30"
                    },
                    "nodeType": "YulIf",
                    "src": "8424:56:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8490:37:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8520:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "round_up_to_mul_of_32",
                        "nodeType": "YulIdentifier",
                        "src": "8498:21:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8498:29:30"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "8490:4:30"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "8564:23:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "8576:4:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8582:4:30",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8572:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8572:15:30"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "8564:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "array_allocation_size_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "8337:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "8348:4:30",
                  "type": ""
                }
              ],
              "src": "8287:307:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8651:103:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "8674:3:30"
                        },
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "8679:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8684:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "calldatacopy",
                        "nodeType": "YulIdentifier",
                        "src": "8661:12:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8661:30:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8661:30:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dst",
                              "nodeType": "YulIdentifier",
                              "src": "8732:3:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8737:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8728:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8728:16:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8746:1:30",
                          "type": "",
                          "value": "0"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8721:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8721:27:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8721:27:30"
                  }
                ]
              },
              "name": "copy_calldata_to_memory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "8633:3:30",
                  "type": ""
                },
                {
                  "name": "dst",
                  "nodeType": "YulTypedName",
                  "src": "8638:3:30",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "8643:6:30",
                  "type": ""
                }
              ],
              "src": "8600:154:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "8843:327:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "8853:74:30",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "8919:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "array_allocation_size_t_bytes_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "8878:40:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8878:48:30"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "8862:15:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8862:65:30"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "8853:5:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "8943:5:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "8950:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "8936:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8936:21:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "8936:21:30"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "8966:27:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "8981:5:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "8988:4:30",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "8977:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "8977:16:30"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "8970:3:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9031:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                              "nodeType": "YulIdentifier",
                              "src": "9033:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9033:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9033:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "9012:3:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "9017:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9008:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9008:16:30"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "9026:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "9005:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9005:25:30"
                    },
                    "nodeType": "YulIf",
                    "src": "9002:112:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "9147:3:30"
                        },
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "9152:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9157:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "copy_calldata_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "9123:23:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9123:41:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "9123:41:30"
                  }
                ]
              },
              "name": "abi_decode_available_length_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "8816:3:30",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "8821:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "8829:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "8837:5:30",
                  "type": ""
                }
              ],
              "src": "8760:410:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9250:277:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9299:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nodeType": "YulIdentifier",
                              "src": "9301:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9301:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9301:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9278:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9286:4:30",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9274:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9274:17:30"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "9293:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "9270:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9270:27:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "9263:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9263:35:30"
                    },
                    "nodeType": "YulIf",
                    "src": "9260:122:30"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "9391:34:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "9418:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "9405:12:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9405:20:30"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "9395:6:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "9434:87:30",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "9494:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9502:4:30",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9490:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9490:17:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "9509:6:30"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "9517:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_available_length_t_bytes_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "9443:46:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9443:78:30"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "9434:5:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "9228:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "9236:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "9244:5:30",
                  "type": ""
                }
              ],
              "src": "9189:338:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "9659:817:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "9706:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "9708:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9708:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "9708:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9680:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9689:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "9676:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9676:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9701:3:30",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "9672:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "9672:33:30"
                    },
                    "nodeType": "YulIf",
                    "src": "9669:120:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "9799:117:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9814:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9828:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "9818:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9843:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9878:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "9889:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9874:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9874:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "9898:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "9853:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9853:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "9843:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "9926:118:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9941:16:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9955:2:30",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "9945:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9971:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10006:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "10017:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10002:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10002:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "10026:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "9981:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9981:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "9971:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "10054:118:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "10069:16:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10083:2:30",
                          "type": "",
                          "value": "64"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "10073:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10099:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10134:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "10145:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10130:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10130:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "10154:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "10109:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10109:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value2",
                            "nodeType": "YulIdentifier",
                            "src": "10099:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "10182:287:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "10197:46:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10228:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10239:2:30",
                                  "type": "",
                                  "value": "96"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10224:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10224:18:30"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "10211:12:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10211:32:30"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "10201:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "10290:83:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nodeType": "YulIdentifier",
                                  "src": "10292:77:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "10292:79:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "10292:79:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "10262:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10270:18:30",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "10259:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10259:30:30"
                        },
                        "nodeType": "YulIf",
                        "src": "10256:117:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10387:72:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10431:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "10442:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10427:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10427:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "10451:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "10397:29:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10397:62:30"
                        },
                        "variableNames": [
                          {
                            "name": "value3",
                            "nodeType": "YulIdentifier",
                            "src": "10387:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "9605:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "9616:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "9628:6:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "9636:6:30",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "9644:6:30",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "9652:6:30",
                  "type": ""
                }
              ],
              "src": "9533:943:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10549:241:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "10654:22:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x41",
                              "nodeType": "YulIdentifier",
                              "src": "10656:16:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10656:18:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "10656:18:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "10626:6:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10634:18:30",
                          "type": "",
                          "value": "0xffffffffffffffff"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "10623:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10623:30:30"
                    },
                    "nodeType": "YulIf",
                    "src": "10620:56:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10686:37:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "10716:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "round_up_to_mul_of_32",
                        "nodeType": "YulIdentifier",
                        "src": "10694:21:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10694:29:30"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "10686:4:30"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "10760:23:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "size",
                          "nodeType": "YulIdentifier",
                          "src": "10772:4:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "10778:4:30",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "10768:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10768:15:30"
                    },
                    "variableNames": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "10760:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "array_allocation_size_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "10533:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "size",
                  "nodeType": "YulTypedName",
                  "src": "10544:4:30",
                  "type": ""
                }
              ],
              "src": "10482:308:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "10880:328:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "10890:75:30",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10957:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "array_allocation_size_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "10915:41:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10915:49:30"
                        }
                      ],
                      "functionName": {
                        "name": "allocate_memory",
                        "nodeType": "YulIdentifier",
                        "src": "10899:15:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10899:66:30"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "10890:5:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "10981:5:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "10988:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "10974:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "10974:21:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "10974:21:30"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "11004:27:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "array",
                          "nodeType": "YulIdentifier",
                          "src": "11019:5:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11026:4:30",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "11015:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11015:16:30"
                    },
                    "variables": [
                      {
                        "name": "dst",
                        "nodeType": "YulTypedName",
                        "src": "11008:3:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11069:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                              "nodeType": "YulIdentifier",
                              "src": "11071:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11071:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11071:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "src",
                              "nodeType": "YulIdentifier",
                              "src": "11050:3:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "11055:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11046:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11046:16:30"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "11064:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "11043:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11043:25:30"
                    },
                    "nodeType": "YulIf",
                    "src": "11040:112:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "src",
                          "nodeType": "YulIdentifier",
                          "src": "11185:3:30"
                        },
                        {
                          "name": "dst",
                          "nodeType": "YulIdentifier",
                          "src": "11190:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "11195:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "copy_calldata_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "11161:23:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11161:41:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "11161:41:30"
                  }
                ]
              },
              "name": "abi_decode_available_length_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "src",
                  "nodeType": "YulTypedName",
                  "src": "10853:3:30",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "10858:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "10866:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "10874:5:30",
                  "type": ""
                }
              ],
              "src": "10796:412:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11290:278:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11339:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                              "nodeType": "YulIdentifier",
                              "src": "11341:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11341:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11341:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11318:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11326:4:30",
                                  "type": "",
                                  "value": "0x1f"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11314:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11314:17:30"
                            },
                            {
                              "name": "end",
                              "nodeType": "YulIdentifier",
                              "src": "11333:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "11310:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11310:27:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "11303:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11303:35:30"
                    },
                    "nodeType": "YulIf",
                    "src": "11300:122:30"
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "11431:34:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "11458:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "calldataload",
                        "nodeType": "YulIdentifier",
                        "src": "11445:12:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11445:20:30"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "11435:6:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "11474:88:30",
                    "value": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "11535:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11543:4:30",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11531:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11531:17:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "11550:6:30"
                        },
                        {
                          "name": "end",
                          "nodeType": "YulIdentifier",
                          "src": "11558:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_decode_available_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "11483:47:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11483:79:30"
                    },
                    "variableNames": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "11474:5:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_t_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "11268:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "11276:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "array",
                  "nodeType": "YulTypedName",
                  "src": "11284:5:30",
                  "type": ""
                }
              ],
              "src": "11228:340:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "11667:561:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "11713:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "11715:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11715:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "11715:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11688:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11697:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "11684:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11684:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11709:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "11680:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "11680:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "11677:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11806:117:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11821:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "11835:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11825:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11850:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11885:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "11896:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11881:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11881:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "11905:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "11860:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11860:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "11850:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "11933:288:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "11948:46:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11979:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11990:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11975:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11975:18:30"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "11962:12:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11962:32:30"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "11952:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "12041:83:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                  "nodeType": "YulIdentifier",
                                  "src": "12043:77:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "12043:79:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "12043:79:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "12013:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12021:18:30",
                              "type": "",
                              "value": "0xffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "12010:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12010:30:30"
                        },
                        "nodeType": "YulIf",
                        "src": "12007:117:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12138:73:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12183:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "12194:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12179:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12179:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "12203:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "12148:30:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12148:63:30"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "12138:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_string_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "11629:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "11640:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "11652:6:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "11660:6:30",
                  "type": ""
                }
              ],
              "src": "11574:654:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12317:391:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "12363:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "12365:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12365:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "12365:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "12338:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12347:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "12334:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12334:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12359:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "12330:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12330:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "12327:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "12456:117:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "12471:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12485:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "12475:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12500:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12535:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "12546:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12531:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12531:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "12555:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "12510:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12510:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "12500:6:30"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "12583:118:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "12598:16:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12612:2:30",
                          "type": "",
                          "value": "32"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "12602:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12628:63:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12663:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "12674:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12659:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12659:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "12683:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "12638:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12638:53:30"
                        },
                        "variableNames": [
                          {
                            "name": "value1",
                            "nodeType": "YulIdentifier",
                            "src": "12628:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_addresst_address",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "12279:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "12290:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "12302:6:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "12310:6:30",
                  "type": ""
                }
              ],
              "src": "12234:474:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12742:152:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12759:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12762:77:30",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12752:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12752:88:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12752:88:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12856:1:30",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12859:4:30",
                          "type": "",
                          "value": "0x22"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "12849:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12849:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12849:15:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12880:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12883:4:30",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "12873:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12873:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "12873:15:30"
                  }
                ]
              },
              "name": "panic_error_0x22",
              "nodeType": "YulFunctionDefinition",
              "src": "12714:180:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "12951:269:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "12961:22:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "12975:4:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "12981:1:30",
                          "type": "",
                          "value": "2"
                        }
                      ],
                      "functionName": {
                        "name": "div",
                        "nodeType": "YulIdentifier",
                        "src": "12971:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "12971:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "12961:6:30"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "12992:38:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "data",
                          "nodeType": "YulIdentifier",
                          "src": "13022:4:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13028:1:30",
                          "type": "",
                          "value": "1"
                        }
                      ],
                      "functionName": {
                        "name": "and",
                        "nodeType": "YulIdentifier",
                        "src": "13018:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13018:12:30"
                    },
                    "variables": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulTypedName",
                        "src": "12996:18:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "13069:51:30",
                      "statements": [
                        {
                          "nodeType": "YulAssignment",
                          "src": "13083:27:30",
                          "value": {
                            "arguments": [
                              {
                                "name": "length",
                                "nodeType": "YulIdentifier",
                                "src": "13097:6:30"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "13105:4:30",
                                "type": "",
                                "value": "0x7f"
                              }
                            ],
                            "functionName": {
                              "name": "and",
                              "nodeType": "YulIdentifier",
                              "src": "13093:3:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "13093:17:30"
                          },
                          "variableNames": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "13083:6:30"
                            }
                          ]
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "13049:18:30"
                        }
                      ],
                      "functionName": {
                        "name": "iszero",
                        "nodeType": "YulIdentifier",
                        "src": "13042:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13042:26:30"
                    },
                    "nodeType": "YulIf",
                    "src": "13039:81:30"
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "13172:42:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x22",
                              "nodeType": "YulIdentifier",
                              "src": "13186:16:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "13186:18:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "13186:18:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "outOfPlaceEncoding",
                          "nodeType": "YulIdentifier",
                          "src": "13136:18:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "13159:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13167:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "13156:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13156:14:30"
                        }
                      ],
                      "functionName": {
                        "name": "eq",
                        "nodeType": "YulIdentifier",
                        "src": "13133:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13133:38:30"
                    },
                    "nodeType": "YulIf",
                    "src": "13130:84:30"
                  }
                ]
              },
              "name": "extract_byte_array_length",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "data",
                  "nodeType": "YulTypedName",
                  "src": "12935:4:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "12944:6:30",
                  "type": ""
                }
              ],
              "src": "12900:320:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13332:114:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "13354:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13362:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13350:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13350:14:30"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13366:34:30",
                          "type": "",
                          "value": "ERC721: approval to current owne"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13343:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13343:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13343:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "13422:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13430:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13418:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13418:15:30"
                        },
                        {
                          "hexValue": "72",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "13435:3:30",
                          "type": "",
                          "value": "r"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "13411:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13411:28:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13411:28:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "13324:6:30",
                  "type": ""
                }
              ],
              "src": "13226:220:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13598:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "13608:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13674:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13679:2:30",
                          "type": "",
                          "value": "33"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "13615:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13615:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13608:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13780:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
                        "nodeType": "YulIdentifier",
                        "src": "13691:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13691:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "13691:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "13793:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "13804:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "13809:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "13800:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "13800:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "13793:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "13586:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "13594:3:30",
                  "type": ""
                }
              ],
              "src": "13452:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "13995:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14005:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "14017:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14028:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14013:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14013:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14005:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14052:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14063:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14048:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14048:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "14071:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14077:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "14067:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14067:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14041:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14041:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14041:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14097:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "14231:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "14105:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14105:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14097:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "13975:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "13990:4:30",
                  "type": ""
                }
              ],
              "src": "13824:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14355:142:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "14377:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14385:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14373:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14373:14:30"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "14389:34:30",
                          "type": "",
                          "value": "ERC721: approve caller is not to"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14366:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14366:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14366:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "14445:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14453:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14441:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14441:15:30"
                        },
                        {
                          "hexValue": "6b656e206f776e6572206f7220617070726f76656420666f7220616c6c",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "14458:31:30",
                          "type": "",
                          "value": "ken owner or approved for all"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "14434:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14434:56:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14434:56:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "14347:6:30",
                  "type": ""
                }
              ],
              "src": "14249:248:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "14649:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "14659:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14725:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14730:2:30",
                          "type": "",
                          "value": "61"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "14666:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14666:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14659:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14831:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83",
                        "nodeType": "YulIdentifier",
                        "src": "14742:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14742:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "14742:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "14844:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "14855:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "14860:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "14851:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "14851:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "14844:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "14637:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "14645:3:30",
                  "type": ""
                }
              ],
              "src": "14503:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15046:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "15056:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "15068:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15079:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15064:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15064:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15056:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15103:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15114:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15099:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15099:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "15122:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15128:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "15118:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15118:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15092:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15092:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15092:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15148:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "15282:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "15156:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15156:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15148:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "15026:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "15041:4:30",
                  "type": ""
                }
              ],
              "src": "14875:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15328:152:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15345:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15348:77:30",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15338:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15338:88:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15338:88:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15442:1:30",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15445:4:30",
                          "type": "",
                          "value": "0x11"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15435:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15435:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15435:15:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15466:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "15469:4:30",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "15459:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15459:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15459:15:30"
                  }
                ]
              },
              "name": "panic_error_0x11",
              "nodeType": "YulFunctionDefinition",
              "src": "15300:180:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15530:261:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "15540:25:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "15563:1:30"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "15545:17:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15545:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "15540:1:30"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15574:25:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "15597:1:30"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "15579:17:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15579:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "15574:1:30"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "15737:22:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "15739:16:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "15739:18:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "15739:18:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "15658:1:30"
                        },
                        {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15665:66:30",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "15733:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "15661:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15661:74:30"
                        }
                      ],
                      "functionName": {
                        "name": "gt",
                        "nodeType": "YulIdentifier",
                        "src": "15655:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15655:81:30"
                    },
                    "nodeType": "YulIf",
                    "src": "15652:107:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "15769:16:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "15780:1:30"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "15783:1:30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "15776:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15776:9:30"
                    },
                    "variableNames": [
                      {
                        "name": "sum",
                        "nodeType": "YulIdentifier",
                        "src": "15769:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_add_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "15517:1:30",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "15520:1:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "sum",
                  "nodeType": "YulTypedName",
                  "src": "15526:3:30",
                  "type": ""
                }
              ],
              "src": "15486:305:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "15903:126:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15925:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15933:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15921:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15921:14:30"
                        },
                        {
                          "hexValue": "4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e65",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "15937:34:30",
                          "type": "",
                          "value": "ERC721: caller is not token owne"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15914:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15914:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15914:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "15993:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16001:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15989:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15989:15:30"
                        },
                        {
                          "hexValue": "72206f7220617070726f766564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16006:15:30",
                          "type": "",
                          "value": "r or approved"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "15982:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "15982:40:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "15982:40:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "15895:6:30",
                  "type": ""
                }
              ],
              "src": "15797:232:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16181:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "16191:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16257:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16262:2:30",
                          "type": "",
                          "value": "45"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "16198:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16198:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16191:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16363:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af",
                        "nodeType": "YulIdentifier",
                        "src": "16274:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16274:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16274:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16376:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "16387:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16392:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16383:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16383:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "16376:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "16169:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "16177:3:30",
                  "type": ""
                }
              ],
              "src": "16035:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16578:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "16588:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "16600:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "16611:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "16596:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16596:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16588:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16635:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16646:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16631:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16631:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "16654:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "16660:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "16650:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16650:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16624:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16624:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16624:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "16680:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "16814:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "16688:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16688:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16680:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "16558:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "16573:4:30",
                  "type": ""
                }
              ],
              "src": "16407:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "16938:124:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "16960:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "16968:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "16956:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "16956:14:30"
                        },
                        {
                          "hexValue": "455243373231456e756d657261626c653a206f776e657220696e646578206f75",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "16972:34:30",
                          "type": "",
                          "value": "ERC721Enumerable: owner index ou"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "16949:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "16949:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "16949:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "17028:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17036:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17024:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17024:15:30"
                        },
                        {
                          "hexValue": "74206f6620626f756e6473",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "17041:13:30",
                          "type": "",
                          "value": "t of bounds"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17017:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17017:38:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17017:38:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "16930:6:30",
                  "type": ""
                }
              ],
              "src": "16832:230:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17214:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17224:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17290:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17295:2:30",
                          "type": "",
                          "value": "43"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "17231:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17231:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17224:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17396:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c",
                        "nodeType": "YulIdentifier",
                        "src": "17307:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17307:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17307:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17409:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "17420:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17425:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17416:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17416:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "17409:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "17202:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "17210:3:30",
                  "type": ""
                }
              ],
              "src": "17068:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17611:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "17621:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "17633:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "17644:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "17629:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17629:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17621:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17668:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "17679:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17664:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17664:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "17687:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "17693:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "17683:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17683:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17657:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17657:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17657:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "17713:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "17847:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "17721:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17721:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17713:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "17591:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "17606:4:30",
                  "type": ""
                }
              ],
              "src": "17440:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "17971:125:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "17993:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18001:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "17989:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "17989:14:30"
                        },
                        {
                          "hexValue": "455243373231456e756d657261626c653a20676c6f62616c20696e646578206f",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "18005:34:30",
                          "type": "",
                          "value": "ERC721Enumerable: global index o"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "17982:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "17982:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "17982:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "18061:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18069:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18057:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18057:15:30"
                        },
                        {
                          "hexValue": "7574206f6620626f756e6473",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "18074:14:30",
                          "type": "",
                          "value": "ut of bounds"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "18050:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18050:39:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18050:39:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "17963:6:30",
                  "type": ""
                }
              ],
              "src": "17865:231:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18248:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "18258:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18324:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18329:2:30",
                          "type": "",
                          "value": "44"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18265:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18265:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18258:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18430:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc",
                        "nodeType": "YulIdentifier",
                        "src": "18341:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18341:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18341:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18443:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "18454:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18459:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "18450:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18450:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "18443:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "18236:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "18244:3:30",
                  "type": ""
                }
              ],
              "src": "18102:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18645:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "18655:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "18667:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18678:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "18663:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18663:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18655:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "18702:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "18713:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "18698:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18698:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "18721:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "18727:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "18717:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "18717:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "18691:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18691:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18691:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "18747:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "18881:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "18755:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18755:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "18747:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "18625:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "18640:4:30",
                  "type": ""
                }
              ],
              "src": "18474:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "18927:152:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18944:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "18947:77:30",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "18937:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "18937:88:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "18937:88:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19041:1:30",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19044:4:30",
                          "type": "",
                          "value": "0x32"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19034:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19034:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19034:15:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19065:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19068:4:30",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "19058:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19058:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19058:15:30"
                  }
                ]
              },
              "name": "panic_error_0x32",
              "nodeType": "YulFunctionDefinition",
              "src": "18899:180:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19191:68:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "19213:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19221:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19209:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19209:14:30"
                        },
                        {
                          "hexValue": "4552433732313a20696e76616c696420746f6b656e204944",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "19225:26:30",
                          "type": "",
                          "value": "ERC721: invalid token ID"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19202:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19202:50:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19202:50:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "19183:6:30",
                  "type": ""
                }
              ],
              "src": "19085:174:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19411:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19421:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19487:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19492:2:30",
                          "type": "",
                          "value": "24"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19428:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19428:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19421:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19593:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
                        "nodeType": "YulIdentifier",
                        "src": "19504:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19504:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19504:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "19606:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "19617:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19622:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "19613:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19613:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "19606:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "19399:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "19407:3:30",
                  "type": ""
                }
              ],
              "src": "19265:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "19808:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "19818:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "19830:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "19841:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "19826:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19826:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19818:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19865:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "19876:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "19861:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19861:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "19884:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "19890:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "19880:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "19880:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "19854:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19854:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "19854:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "19910:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "20044:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "19918:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "19918:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19910:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "19788:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "19803:4:30",
                  "type": ""
                }
              ],
              "src": "19637:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20168:122:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "20190:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20198:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20186:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20186:14:30"
                        },
                        {
                          "hexValue": "4552433732313a2061646472657373207a65726f206973206e6f742061207661",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "20202:34:30",
                          "type": "",
                          "value": "ERC721: address zero is not a va"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20179:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20179:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20179:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "20258:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20266:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20254:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20254:15:30"
                        },
                        {
                          "hexValue": "6c6964206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "20271:11:30",
                          "type": "",
                          "value": "lid owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20247:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20247:36:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20247:36:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "20160:6:30",
                  "type": ""
                }
              ],
              "src": "20062:228:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20442:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "20452:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20518:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20523:2:30",
                          "type": "",
                          "value": "41"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "20459:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20459:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20452:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20624:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
                        "nodeType": "YulIdentifier",
                        "src": "20535:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20535:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20535:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20637:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "20648:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20653:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20644:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20644:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "20637:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "20430:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "20438:3:30",
                  "type": ""
                }
              ],
              "src": "20296:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "20839:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "20849:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "20861:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "20872:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "20857:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20857:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20849:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20896:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "20907:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "20892:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20892:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "20915:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "20921:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "20911:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "20911:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "20885:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20885:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "20885:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "20941:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "21075:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "20949:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "20949:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20941:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "20819:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "20834:4:30",
                  "type": ""
                }
              ],
              "src": "20668:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21199:119:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "21221:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21229:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21217:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21217:14:30"
                        },
                        {
                          "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "21233:34:30",
                          "type": "",
                          "value": "Ownable: new owner is the zero a"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21210:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21210:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21210:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "21289:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21297:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21285:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21285:15:30"
                        },
                        {
                          "hexValue": "646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "21302:8:30",
                          "type": "",
                          "value": "ddress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21278:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21278:33:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21278:33:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "21191:6:30",
                  "type": ""
                }
              ],
              "src": "21093:225:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21470:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "21480:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21546:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21551:2:30",
                          "type": "",
                          "value": "38"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "21487:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21487:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21480:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21652:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                        "nodeType": "YulIdentifier",
                        "src": "21563:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21563:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21563:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "21665:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "21676:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21681:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "21672:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21672:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "21665:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "21458:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "21466:3:30",
                  "type": ""
                }
              ],
              "src": "21324:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "21867:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "21877:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "21889:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "21900:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "21885:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21885:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21877:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "21924:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "21935:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "21920:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21920:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "21943:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "21949:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "21939:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "21939:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "21913:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21913:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "21913:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "21969:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "22103:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "21977:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "21977:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21969:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "21847:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "21862:4:30",
                  "type": ""
                }
              ],
              "src": "21696:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22227:118:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "22249:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22257:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22245:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22245:14:30"
                        },
                        {
                          "hexValue": "4552433732313a207472616e736665722066726f6d20696e636f727265637420",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "22261:34:30",
                          "type": "",
                          "value": "ERC721: transfer from incorrect "
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22238:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22238:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22238:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "22317:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22325:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22313:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22313:15:30"
                        },
                        {
                          "hexValue": "6f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "22330:7:30",
                          "type": "",
                          "value": "owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22306:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22306:32:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22306:32:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "22219:6:30",
                  "type": ""
                }
              ],
              "src": "22121:224:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22497:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22507:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22573:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22578:2:30",
                          "type": "",
                          "value": "37"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "22514:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22514:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22507:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22679:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
                        "nodeType": "YulIdentifier",
                        "src": "22590:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22590:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22590:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22692:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "22703:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22708:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "22699:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22699:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "22692:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "22485:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "22493:3:30",
                  "type": ""
                }
              ],
              "src": "22351:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "22894:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "22904:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "22916:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "22927:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "22912:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22912:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22904:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "22951:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "22962:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "22947:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22947:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "22970:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "22976:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "22966:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "22966:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "22940:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "22940:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "22940:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "22996:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "23130:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "23004:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23004:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22996:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "22874:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "22889:4:30",
                  "type": ""
                }
              ],
              "src": "22723:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23254:117:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "23276:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23284:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23272:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23272:14:30"
                        },
                        {
                          "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "23288:34:30",
                          "type": "",
                          "value": "ERC721: transfer to the zero add"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23265:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23265:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23265:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "23344:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23352:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23340:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23340:15:30"
                        },
                        {
                          "hexValue": "72657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "23357:6:30",
                          "type": "",
                          "value": "ress"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23333:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23333:31:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23333:31:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "23246:6:30",
                  "type": ""
                }
              ],
              "src": "23148:223:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23523:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23533:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23599:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23604:2:30",
                          "type": "",
                          "value": "36"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "23540:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23540:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "23533:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23705:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
                        "nodeType": "YulIdentifier",
                        "src": "23616:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23616:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23616:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "23718:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "23729:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23734:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "23725:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23725:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "23718:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "23511:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "23519:3:30",
                  "type": ""
                }
              ],
              "src": "23377:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "23920:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "23930:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "23942:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "23953:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "23938:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23938:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "23930:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "23977:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "23988:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "23973:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23973:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "23996:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "24002:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "23992:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23992:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "23966:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "23966:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "23966:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "24022:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "24156:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "24030:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24030:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "24022:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "23900:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "23915:4:30",
                  "type": ""
                }
              ],
              "src": "23749:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24280:76:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "24302:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24310:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "24298:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24298:14:30"
                        },
                        {
                          "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "24314:34:30",
                          "type": "",
                          "value": "Ownable: caller is not the owner"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "24291:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24291:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24291:58:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "24272:6:30",
                  "type": ""
                }
              ],
              "src": "24174:182:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24508:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "24518:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "24584:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24589:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "24525:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24525:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24518:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "24690:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                        "nodeType": "YulIdentifier",
                        "src": "24601:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24601:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24601:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "24703:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "24714:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24719:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "24710:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24710:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "24703:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "24496:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "24504:3:30",
                  "type": ""
                }
              ],
              "src": "24362:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "24905:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "24915:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "24927:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "24938:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "24923:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24923:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "24915:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "24962:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "24973:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "24958:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24958:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "24981:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "24987:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "24977:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "24977:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "24951:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "24951:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "24951:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "25007:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "25141:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "25015:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25015:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "25007:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "24885:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "24900:4:30",
                  "type": ""
                }
              ],
              "src": "24734:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25265:69:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "25287:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25295:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "25283:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25283:14:30"
                        },
                        {
                          "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "25299:27:30",
                          "type": "",
                          "value": "ERC721: approve to caller"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "25276:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25276:51:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "25276:51:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "25257:6:30",
                  "type": ""
                }
              ],
              "src": "25159:175:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25486:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "25496:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "25562:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "25567:2:30",
                          "type": "",
                          "value": "25"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "25503:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25503:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "25496:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "25668:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
                        "nodeType": "YulIdentifier",
                        "src": "25579:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25579:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "25579:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "25681:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "25692:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "25697:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "25688:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25688:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "25681:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "25474:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "25482:3:30",
                  "type": ""
                }
              ],
              "src": "25340:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "25883:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "25893:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "25905:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "25916:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "25901:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25901:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "25893:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "25940:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "25951:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "25936:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25936:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "25959:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "25965:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "25955:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "25955:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "25929:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25929:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "25929:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "25985:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "26119:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "25993:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "25993:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "25985:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "25863:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "25878:4:30",
                  "type": ""
                }
              ],
              "src": "25712:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "26243:131:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "26265:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26273:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26261:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26261:14:30"
                        },
                        {
                          "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "26277:34:30",
                          "type": "",
                          "value": "ERC721: transfer to non ERC721Re"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "26254:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26254:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26254:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "26333:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26341:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26329:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26329:15:30"
                        },
                        {
                          "hexValue": "63656976657220696d706c656d656e746572",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "26346:20:30",
                          "type": "",
                          "value": "ceiver implementer"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "26322:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26322:45:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26322:45:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "26235:6:30",
                  "type": ""
                }
              ],
              "src": "26137:237:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "26526:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "26536:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "26602:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26607:2:30",
                          "type": "",
                          "value": "50"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "26543:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26543:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "26536:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "26708:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
                        "nodeType": "YulIdentifier",
                        "src": "26619:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26619:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26619:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "26721:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "26732:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26737:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "26728:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26728:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "26721:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "26514:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "26522:3:30",
                  "type": ""
                }
              ],
              "src": "26380:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "26923:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "26933:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "26945:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "26956:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "26941:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26941:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "26933:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "26980:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "26991:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "26976:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26976:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "26999:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "27005:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "26995:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "26995:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "26969:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "26969:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "26969:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "27025:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "27159:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "27033:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27033:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "27025:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "26903:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "26918:4:30",
                  "type": ""
                }
              ],
              "src": "26752:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "27291:34:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "27301:18:30",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "27316:3:30"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "27301:11:30"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "27263:3:30",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "27268:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "27279:11:30",
                  "type": ""
                }
              ],
              "src": "27177:148:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "27441:267:30",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "27451:53:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "27498:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_string_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "27465:32:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27465:39:30"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "27455:6:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "27513:96:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27597:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "27602:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "27520:76:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27520:89:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27513:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "27644:5:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "27651:4:30",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "27640:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "27640:16:30"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27658:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "27663:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "27618:21:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27618:52:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "27618:52:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "27679:23:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "27690:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "27695:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "27686:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27686:16:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "27679:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "27422:5:30",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "27429:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "27437:3:30",
                  "type": ""
                }
              ],
              "src": "27331:377:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "27898:251:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "27909:102:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "27998:6:30"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28007:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "27916:81:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "27916:95:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27909:3:30"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "28021:102:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "28110:6:30"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28119:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "28028:81:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28028:95:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28021:3:30"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "28133:10:30",
                    "value": {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "28140:3:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "28133:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "27869:3:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "27875:6:30",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "27883:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "27894:3:30",
                  "type": ""
                }
              ],
              "src": "27714:435:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28261:127:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "28283:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28291:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28279:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28279:14:30"
                        },
                        {
                          "hexValue": "45524337323155524953746f726167653a2055524920736574206f66206e6f6e",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "28295:34:30",
                          "type": "",
                          "value": "ERC721URIStorage: URI set of non"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "28272:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28272:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28272:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "28351:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "28359:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28347:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28347:15:30"
                        },
                        {
                          "hexValue": "6578697374656e7420746f6b656e",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "28364:16:30",
                          "type": "",
                          "value": "existent token"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "28340:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28340:41:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28340:41:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "28253:6:30",
                  "type": ""
                }
              ],
              "src": "28155:233:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28540:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "28550:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28616:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28621:2:30",
                          "type": "",
                          "value": "46"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "28557:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28557:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28550:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28722:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
                        "nodeType": "YulIdentifier",
                        "src": "28633:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28633:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28633:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "28735:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "28746:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28751:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "28742:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28742:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "28735:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "28528:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "28536:3:30",
                  "type": ""
                }
              ],
              "src": "28394:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "28937:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "28947:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "28959:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "28970:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "28955:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28955:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "28947:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "28994:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29005:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "28990:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "28990:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "29013:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "29019:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "29009:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29009:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "28983:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "28983:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "28983:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "29039:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "29173:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "29047:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29047:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "29039:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "28917:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "28932:4:30",
                  "type": ""
                }
              ],
              "src": "28766:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29249:40:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "29260:22:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "29276:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "29270:5:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29270:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "29260:6:30"
                      }
                    ]
                  }
                ]
              },
              "name": "array_length_t_bytes_memory_ptr",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "29232:5:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "29242:6:30",
                  "type": ""
                }
              ],
              "src": "29191:98:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29390:73:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29407:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "29412:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "29400:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29400:19:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29400:19:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "29428:29:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29447:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "29452:4:30",
                          "type": "",
                          "value": "0x20"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "29443:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29443:14:30"
                    },
                    "variableNames": [
                      {
                        "name": "updated_pos",
                        "nodeType": "YulIdentifier",
                        "src": "29428:11:30"
                      }
                    ]
                  }
                ]
              },
              "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "29362:3:30",
                  "type": ""
                },
                {
                  "name": "length",
                  "nodeType": "YulTypedName",
                  "src": "29367:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "updated_pos",
                  "nodeType": "YulTypedName",
                  "src": "29378:11:30",
                  "type": ""
                }
              ],
              "src": "29295:168:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "29559:270:30",
                "statements": [
                  {
                    "nodeType": "YulVariableDeclaration",
                    "src": "29569:52:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "29615:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "array_length_t_bytes_memory_ptr",
                        "nodeType": "YulIdentifier",
                        "src": "29583:31:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29583:38:30"
                    },
                    "variables": [
                      {
                        "name": "length",
                        "nodeType": "YulTypedName",
                        "src": "29573:6:30",
                        "type": ""
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "29630:77:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29695:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "29700:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "29637:57:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29637:70:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29630:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "29742:5:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "29749:4:30",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "29738:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29738:16:30"
                        },
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29756:3:30"
                        },
                        {
                          "name": "length",
                          "nodeType": "YulIdentifier",
                          "src": "29761:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "copy_memory_to_memory",
                        "nodeType": "YulIdentifier",
                        "src": "29716:21:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29716:52:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "29716:52:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "29777:46:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "29788:3:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "29815:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "round_up_to_mul_of_32",
                            "nodeType": "YulIdentifier",
                            "src": "29793:21:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "29793:29:30"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "29784:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "29784:39:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "29777:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "29540:5:30",
                  "type": ""
                },
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "29547:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "29555:3:30",
                  "type": ""
                }
              ],
              "src": "29469:360:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30035:440:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30045:27:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "30057:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30068:3:30",
                          "type": "",
                          "value": "128"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "30053:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30053:19:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "30045:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "30126:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30139:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30150:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30135:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30135:17:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "30082:43:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30082:71:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30082:71:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "30207:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30220:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30231:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30216:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30216:18:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_address_to_t_address_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "30163:43:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30163:72:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30163:72:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "30289:6:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30302:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30313:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30298:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30298:18:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "30245:43:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30245:72:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30245:72:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30338:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "30349:2:30",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "30334:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30334:18:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "30358:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30364:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "30354:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30354:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "30327:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30327:48:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30327:48:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "30384:84:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "30454:6:30"
                        },
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "30463:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "30392:61:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30392:76:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "30384:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "29983:9:30",
                  "type": ""
                },
                {
                  "name": "value3",
                  "nodeType": "YulTypedName",
                  "src": "29995:6:30",
                  "type": ""
                },
                {
                  "name": "value2",
                  "nodeType": "YulTypedName",
                  "src": "30003:6:30",
                  "type": ""
                },
                {
                  "name": "value1",
                  "nodeType": "YulTypedName",
                  "src": "30011:6:30",
                  "type": ""
                },
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "30019:6:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "30030:4:30",
                  "type": ""
                }
              ],
              "src": "29835:640:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30543:79:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "30553:22:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "offset",
                          "nodeType": "YulIdentifier",
                          "src": "30568:6:30"
                        }
                      ],
                      "functionName": {
                        "name": "mload",
                        "nodeType": "YulIdentifier",
                        "src": "30562:5:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30562:13:30"
                    },
                    "variableNames": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "30553:5:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "30610:5:30"
                        }
                      ],
                      "functionName": {
                        "name": "validator_revert_t_bytes4",
                        "nodeType": "YulIdentifier",
                        "src": "30584:25:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30584:32:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "30584:32:30"
                  }
                ]
              },
              "name": "abi_decode_t_bytes4_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "offset",
                  "nodeType": "YulTypedName",
                  "src": "30521:6:30",
                  "type": ""
                },
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "30529:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value",
                  "nodeType": "YulTypedName",
                  "src": "30537:5:30",
                  "type": ""
                }
              ],
              "src": "30481:141:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "30704:273:30",
                "statements": [
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "30750:83:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                              "nodeType": "YulIdentifier",
                              "src": "30752:77:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "30752:79:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "30752:79:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "30725:7:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "30734:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "30721:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30721:23:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30746:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "slt",
                        "nodeType": "YulIdentifier",
                        "src": "30717:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "30717:32:30"
                    },
                    "nodeType": "YulIf",
                    "src": "30714:119:30"
                  },
                  {
                    "nodeType": "YulBlock",
                    "src": "30843:127:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "30858:15:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "30872:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "offset",
                            "nodeType": "YulTypedName",
                            "src": "30862:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "30887:73:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "30932:9:30"
                                },
                                {
                                  "name": "offset",
                                  "nodeType": "YulIdentifier",
                                  "src": "30943:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "30928:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "30928:22:30"
                            },
                            {
                              "name": "dataEnd",
                              "nodeType": "YulIdentifier",
                              "src": "30952:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_decode_t_bytes4_fromMemory",
                            "nodeType": "YulIdentifier",
                            "src": "30897:30:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "30897:63:30"
                        },
                        "variableNames": [
                          {
                            "name": "value0",
                            "nodeType": "YulIdentifier",
                            "src": "30887:6:30"
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              "name": "abi_decode_tuple_t_bytes4_fromMemory",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "30674:9:30",
                  "type": ""
                },
                {
                  "name": "dataEnd",
                  "nodeType": "YulTypedName",
                  "src": "30685:7:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "value0",
                  "nodeType": "YulTypedName",
                  "src": "30697:6:30",
                  "type": ""
                }
              ],
              "src": "30628:349:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31089:134:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "31111:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31119:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "31107:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31107:14:30"
                        },
                        {
                          "hexValue": "455243373231456e756d657261626c653a20636f6e7365637574697665207472",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "31123:34:30",
                          "type": "",
                          "value": "ERC721Enumerable: consecutive tr"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "31100:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31100:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31100:58:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "31179:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31187:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "31175:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31175:15:30"
                        },
                        {
                          "hexValue": "616e7366657273206e6f7420737570706f72746564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "31192:23:30",
                          "type": "",
                          "value": "ansfers not supported"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "31168:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31168:48:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31168:48:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "31081:6:30",
                  "type": ""
                }
              ],
              "src": "30983:240:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31375:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "31385:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "31451:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "31456:2:30",
                          "type": "",
                          "value": "53"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "31392:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31392:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "31385:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "31557:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314",
                        "nodeType": "YulIdentifier",
                        "src": "31468:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31468:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31468:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "31570:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "31581:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "31586:2:30",
                          "type": "",
                          "value": "64"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "31577:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31577:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "31570:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "31363:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "31371:3:30",
                  "type": ""
                }
              ],
              "src": "31229:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "31772:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "31782:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "31794:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "31805:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "31790:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31790:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "31782:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "31829:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "31840:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "31825:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31825:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "31848:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "31854:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "31844:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "31844:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "31818:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31818:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "31818:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "31874:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "32008:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "31882:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "31882:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "31874:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "31752:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "31767:4:30",
                  "type": ""
                }
              ],
              "src": "31601:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32054:152:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32071:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32074:77:30",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "32064:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32064:88:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32064:88:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32168:1:30",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32171:4:30",
                          "type": "",
                          "value": "0x12"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "32161:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32161:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32161:15:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32192:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32195:4:30",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "32185:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32185:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32185:15:30"
                  }
                ]
              },
              "name": "panic_error_0x12",
              "nodeType": "YulFunctionDefinition",
              "src": "32026:180:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32318:76:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "32340:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "32348:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32336:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32336:14:30"
                        },
                        {
                          "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "32352:34:30",
                          "type": "",
                          "value": "ERC721: mint to the zero address"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "32329:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32329:58:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32329:58:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "32310:6:30",
                  "type": ""
                }
              ],
              "src": "32212:182:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32546:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "32556:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "32622:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32627:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "32563:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32563:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "32556:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "32728:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
                        "nodeType": "YulIdentifier",
                        "src": "32639:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32639:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32639:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "32741:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "32752:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32757:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "32748:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32748:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "32741:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "32534:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "32542:3:30",
                  "type": ""
                }
              ],
              "src": "32400:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "32943:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "32953:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "32965:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "32976:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "32961:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32961:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "32953:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33000:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33011:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32996:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32996:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "33019:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33025:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "33015:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33015:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "32989:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "32989:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "32989:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "33045:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "33179:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "33053:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33053:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "33045:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "32923:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "32938:4:30",
                  "type": ""
                }
              ],
              "src": "32772:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "33303:72:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "memPtr",
                              "nodeType": "YulIdentifier",
                              "src": "33325:6:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33333:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "33321:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33321:14:30"
                        },
                        {
                          "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
                          "kind": "string",
                          "nodeType": "YulLiteral",
                          "src": "33337:30:30",
                          "type": "",
                          "value": "ERC721: token already minted"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "33314:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33314:54:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33314:54:30"
                  }
                ]
              },
              "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "memPtr",
                  "nodeType": "YulTypedName",
                  "src": "33295:6:30",
                  "type": ""
                }
              ],
              "src": "33197:178:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "33527:220:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "33537:74:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "33603:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33608:2:30",
                          "type": "",
                          "value": "28"
                        }
                      ],
                      "functionName": {
                        "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "33544:58:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33544:67:30"
                    },
                    "variableNames": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "33537:3:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "33709:3:30"
                        }
                      ],
                      "functionName": {
                        "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
                        "nodeType": "YulIdentifier",
                        "src": "33620:88:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33620:93:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33620:93:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "33722:19:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "pos",
                          "nodeType": "YulIdentifier",
                          "src": "33733:3:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33738:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "33729:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33729:12:30"
                    },
                    "variableNames": [
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "33722:3:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "pos",
                  "nodeType": "YulTypedName",
                  "src": "33515:3:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "end",
                  "nodeType": "YulTypedName",
                  "src": "33523:3:30",
                  "type": ""
                }
              ],
              "src": "33381:366:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "33924:248:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "33934:26:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "headStart",
                          "nodeType": "YulIdentifier",
                          "src": "33946:9:30"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "33957:2:30",
                          "type": "",
                          "value": "32"
                        }
                      ],
                      "functionName": {
                        "name": "add",
                        "nodeType": "YulIdentifier",
                        "src": "33942:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33942:18:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "33934:4:30"
                      }
                    ]
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "33981:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33992:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "33977:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33977:17:30"
                        },
                        {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "34000:4:30"
                            },
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "34006:9:30"
                            }
                          ],
                          "functionName": {
                            "name": "sub",
                            "nodeType": "YulIdentifier",
                            "src": "33996:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33996:20:30"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "33970:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "33970:47:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "33970:47:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "34026:139:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "tail",
                          "nodeType": "YulIdentifier",
                          "src": "34160:4:30"
                        }
                      ],
                      "functionName": {
                        "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                        "nodeType": "YulIdentifier",
                        "src": "34034:124:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34034:131:30"
                    },
                    "variableNames": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "34026:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "headStart",
                  "nodeType": "YulTypedName",
                  "src": "33904:9:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "tail",
                  "nodeType": "YulTypedName",
                  "src": "33919:4:30",
                  "type": ""
                }
              ],
              "src": "33753:419:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "34223:146:30",
                "statements": [
                  {
                    "nodeType": "YulAssignment",
                    "src": "34233:25:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "34256:1:30"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "34238:17:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34238:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "34233:1:30"
                      }
                    ]
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "34267:25:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "34290:1:30"
                        }
                      ],
                      "functionName": {
                        "name": "cleanup_t_uint256",
                        "nodeType": "YulIdentifier",
                        "src": "34272:17:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34272:20:30"
                    },
                    "variableNames": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "34267:1:30"
                      }
                    ]
                  },
                  {
                    "body": {
                      "nodeType": "YulBlock",
                      "src": "34314:22:30",
                      "statements": [
                        {
                          "expression": {
                            "arguments": [],
                            "functionName": {
                              "name": "panic_error_0x11",
                              "nodeType": "YulIdentifier",
                              "src": "34316:16:30"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "34316:18:30"
                          },
                          "nodeType": "YulExpressionStatement",
                          "src": "34316:18:30"
                        }
                      ]
                    },
                    "condition": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "34308:1:30"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "34311:1:30"
                        }
                      ],
                      "functionName": {
                        "name": "lt",
                        "nodeType": "YulIdentifier",
                        "src": "34305:2:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34305:8:30"
                    },
                    "nodeType": "YulIf",
                    "src": "34302:34:30"
                  },
                  {
                    "nodeType": "YulAssignment",
                    "src": "34346:17:30",
                    "value": {
                      "arguments": [
                        {
                          "name": "x",
                          "nodeType": "YulIdentifier",
                          "src": "34358:1:30"
                        },
                        {
                          "name": "y",
                          "nodeType": "YulIdentifier",
                          "src": "34361:1:30"
                        }
                      ],
                      "functionName": {
                        "name": "sub",
                        "nodeType": "YulIdentifier",
                        "src": "34354:3:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34354:9:30"
                    },
                    "variableNames": [
                      {
                        "name": "diff",
                        "nodeType": "YulIdentifier",
                        "src": "34346:4:30"
                      }
                    ]
                  }
                ]
              },
              "name": "checked_sub_t_uint256",
              "nodeType": "YulFunctionDefinition",
              "parameters": [
                {
                  "name": "x",
                  "nodeType": "YulTypedName",
                  "src": "34209:1:30",
                  "type": ""
                },
                {
                  "name": "y",
                  "nodeType": "YulTypedName",
                  "src": "34212:1:30",
                  "type": ""
                }
              ],
              "returnVariables": [
                {
                  "name": "diff",
                  "nodeType": "YulTypedName",
                  "src": "34218:4:30",
                  "type": ""
                }
              ],
              "src": "34178:191:30"
            },
            {
              "body": {
                "nodeType": "YulBlock",
                "src": "34403:152:30",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34420:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34423:77:30",
                          "type": "",
                          "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "34413:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34413:88:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "34413:88:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34517:1:30",
                          "type": "",
                          "value": "4"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34520:4:30",
                          "type": "",
                          "value": "0x31"
                        }
                      ],
                      "functionName": {
                        "name": "mstore",
                        "nodeType": "YulIdentifier",
                        "src": "34510:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34510:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "34510:15:30"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34541:1:30",
                          "type": "",
                          "value": "0"
                        },
                        {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "34544:4:30",
                          "type": "",
                          "value": "0x24"
                        }
                      ],
                      "functionName": {
                        "name": "revert",
                        "nodeType": "YulIdentifier",
                        "src": "34534:6:30"
                      },
                      "nodeType": "YulFunctionCall",
                      "src": "34534:15:30"
                    },
                    "nodeType": "YulExpressionStatement",
                    "src": "34534:15:30"
                  }
                ]
              },
              "name": "panic_error_0x31",
              "nodeType": "YulFunctionDefinition",
              "src": "34375:180:30"
            }
          ]
        },
        "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256_t_address__to_t_uint256_t_uint256_t_address__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_address_to_t_address_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(memPtr, 32), \"r\")\n\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve caller is not to\")\n\n        mstore(add(memPtr, 32), \"ken owner or approved for all\")\n\n    }\n\n    function abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 61)\n        store_literal_in_memory_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c6e14a63ffb144eeef7cce6988e5dce07c60a7e0a7b1ef25dbe18c61483e0a83_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: caller is not token owne\")\n\n        mstore(add(memPtr, 32), \"r or approved\")\n\n    }\n\n    function abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 45)\n        store_literal_in_memory_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_12a8e5623d251e191fe4a291d9a59bcc01a4db7a1f5c20fc8de44358c18308af_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: owner index ou\")\n\n        mstore(add(memPtr, 32), \"t of bounds\")\n\n    }\n\n    function abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 43)\n        store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: global index o\")\n\n        mstore(add(memPtr, 32), \"ut of bounds\")\n\n    }\n\n    function abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 44)\n        store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: invalid token ID\")\n\n    }\n\n    function abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: address zero is not a va\")\n\n        mstore(add(memPtr, 32), \"lid owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n        store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer from incorrect \")\n\n        mstore(add(memPtr, 32), \"owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve to caller\")\n\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n        store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(memPtr, 32), \"ceiver implementer\")\n\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n        store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721URIStorage: URI set of non\")\n\n        mstore(add(memPtr, 32), \"existent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function store_literal_in_memory_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: consecutive tr\")\n\n        mstore(add(memPtr, 32), \"ansfers not supported\")\n\n    }\n\n    function abi_encode_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 53)\n        store_literal_in_memory_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_da49291af84b6a1e37ed9eacd9a67360593e4a0e561cb261a6a738f621783314_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: token already minted\")\n\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function panic_error_0x31() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x31)\n        revert(0, 0x24)\n    }\n\n}\n",
        "id": 30,
        "language": "Yul",
        "name": "#utility.yul"
      }
    ],
    "sourceMap": "903:2378:28:-:0;;;1508:41;;;;;;;;;;1390:113:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1464:5;1456;:13;;;;;;;;;;;;:::i;:::-;;1489:7;1479;:17;;;;;;;;;;;;:::i;:::-;;1390:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;903:2378:28;;640:96:18;693:7;719:10;712:17;;640:96;:::o;2426:187:0:-;2499:16;2518:6;;;;;;;;;;;2499:25;;2543:8;2534:6;;:17;;;;;;;;;;;;;;;;;;2597:8;2566:40;;2587:8;2566:40;;;;;;;;;;;;2489:124;2426:187;:::o;903:2378:28:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:180:30:-;55:77;52:1;45:88;152:4;149:1;142:15;176:4;173:1;166:15;193:320;237:6;274:1;268:4;264:12;254:22;;321:1;315:4;311:12;342:18;332:81;;398:4;390:6;386:17;376:27;;332:81;460:2;452:6;449:14;429:18;426:38;423:84;;479:18;;:::i;:::-;423:84;244:269;193:320;;;:::o;903:2378:28:-;;;;;;;",
    "deployedSourceMap": "903:2378:28:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3049:229;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2471:98:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3935:167;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3468:406;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1630:111:13;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2101:100:28;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;4612:296:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1306:253:13;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4974:149:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;531:238:12;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1425:41:28;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;1813:230:13;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2190:219:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1929:204;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1824:101:0;;;:::i;:::-;;1201:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1357:61:28;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;2633:102:9;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2348:122:28;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4169:153:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5189:276;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2845:196:28;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1559:464;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2209:131;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4388:162:9;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2074:198:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;3049:229:28;3205:4;3234:36;3258:11;3234:23;:36::i;:::-;3227:43;;3049:229;;;:::o;2471:98:9:-;2525:13;2557:5;2550:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2471:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;4071:15;:24;4087:7;4071:24;;;;;;;;;;;;;;;;;;;;;4064:31;;3935:167;;;:::o;3468:406::-;3548:13;3564:23;3579:7;3564:14;:23::i;:::-;3548:39;;3611:5;3605:11;;:2;:11;;;3597:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3702:5;3686:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3711:37;3728:5;3735:12;:10;:12::i;:::-;3711:16;:37::i;:::-;3686:62;3665:170;;;;;;;;;;;;:::i;:::-;;;;;;;;;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3538:336;3468:406;;:::o;1630:111:13:-;1691:7;1717:10;:17;;;;1710:24;;1630:111;:::o;2101:100:28:-;2192:1;2154:14;:24;2169:8;2154:24;;;;;;;;;;;:36;;;:39;;;;;;;:::i;:::-;;;;;;;;2101:100;:::o;4612:296:9:-;4771:41;4790:12;:10;:12::i;:::-;4804:7;4771:18;:41::i;:::-;4763:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;4873:28;4883:4;4889:2;4893:7;4873:9;:28::i;:::-;4612:296;;;:::o;1306:253:13:-;1403:7;1438:23;1455:5;1438:16;:23::i;:::-;1430:5;:31;1422:87;;;;;;;;;;;;:::i;:::-;;;;;;;;;1526:12;:19;1539:5;1526:19;;;;;;;;;;;;;;;:26;1546:5;1526:26;;;;;;;;;;;;1519:33;;1306:253;;;;:::o;4974:149:9:-;5077:39;5094:4;5100:2;5104:7;5077:39;;;;;;;;;;;;:16;:39::i;:::-;4974:149;;;:::o;531:238:12:-;647:41;666:12;:10;:12::i;:::-;680:7;647:18;:41::i;:::-;639:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;748:14;754:7;748:5;:14::i;:::-;531:238;:::o;1425:41:28:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1813:230:13:-;1888:7;1923:30;:28;:30::i;:::-;1915:5;:38;1907:95;;;;;;;;;;;;:::i;:::-;;;;;;;;;2019:10;2030:5;2019:17;;;;;;;;:::i;:::-;;;;;;;;;;2012:24;;1813:230;;;:::o;2190:219:9:-;2262:7;2281:13;2297:17;2306:7;2297:8;:17::i;:::-;2281:33;;2349:1;2332:19;;:5;:19;;;2324:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;2397:5;2390:12;;;2190:219;;;:::o;1929:204::-;2001:7;2045:1;2028:19;;:5;:19;;;2020:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2110:9;:16;2120:5;2110:16;;;;;;;;;;;;;;;;2103:23;;1929:204;;;:::o;1824:101:0:-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;1201:85::-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;1357:61:28:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;2633:102:9:-;2689:13;2721:7;2714:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2633:102;:::o;2348:122:28:-;2400:7;2432:14;:24;2447:8;2432:24;;;;;;;;;;;:30;;;;;;;;;;;;2425:37;;2348:122;;;:::o;4169:153:9:-;4263:52;4282:12;:10;:12::i;:::-;4296:8;4306;4263:18;:52::i;:::-;4169:153;;:::o;5189:276::-;5319:41;5338:12;:10;:12::i;:::-;5352:7;5319:18;:41::i;:::-;5311:99;;;;;;;;;;;;:::i;:::-;;;;;;;;;5420:38;5434:4;5440:2;5444:7;5453:4;5420:13;:38::i;:::-;5189:276;;;;:::o;2845:196:28:-;2972:13;3010:23;3025:7;3010:14;:23::i;:::-;3003:30;;2845:196;;;:::o;1559:464::-;1094:13:0;:11;:13::i;:::-;1636:15:28::1;1654:25;:15;:23;:25::i;:::-;1636:43;;1690:27;:15;:25;:27::i;:::-;1728:22;1738:2;1742:7;1728:9;:22::i;:::-;1761:26;1774:7;1783:3;1761:12;:26::i;:::-;1800:41;1844:123;;;;;;;;1893:1;1844:123;;;;1917:7;1844:123;;;;1945:10;1844:123;;;;::::0;1800:167:::1;;2000:12;1975:14;:23;1990:7;1975:23;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1625:398;;1559:464:::0;;:::o;2209:131::-;2270:7;2296:14;:24;2311:8;2296:24;;;;;;;;;;;:36;;;2289:43;;2209:131;;;:::o;4388:162:9:-;4485:4;4508:18;:25;4527:5;4508:25;;;;;;;;;;;;;;;:35;4534:8;4508:35;;;;;;;;;;;;;;;;;;;;;;;;;4501:42;;4388:162;;;;:::o;2074:198:0:-;1094:13;:11;:13::i;:::-;2182:1:::1;2162:22;;:8;:22;;::::0;2154:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;535:205:14:-;637:4;682:10;675:18;;660:33;;;:11;:33;;;;:73;;;;697:36;721:11;697:23;:36::i;:::-;660:73;653:80;;535:205;;;:::o;13240:133:9:-;13321:16;13329:7;13321;:16::i;:::-;13313:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;13240:133;:::o;640:96:18:-;693:7;719:10;712:17;;640:96;:::o;12572:171:9:-;12673:2;12646:15;:24;12662:7;12646:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;12728:7;12724:2;12690:46;;12699:23;12714:7;12699:14;:23::i;:::-;12690:46;;;;;;;;;;;;12572:171;;:::o;7404:261::-;7497:4;7513:13;7529:23;7544:7;7529:14;:23::i;:::-;7513:39;;7581:5;7570:16;;:7;:16;;;:52;;;;7590:32;7607:5;7614:7;7590:16;:32::i;:::-;7570:52;:87;;;;7650:7;7626:31;;:20;7638:7;7626:11;:20::i;:::-;:31;;;7570:87;7562:96;;;7404:261;;;;:::o;11257:1203::-;11381:4;11354:31;;:23;11369:7;11354:14;:23::i;:::-;:31;;;11346:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;11459:1;11445:16;;:2;:16;;;11437:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;11513:42;11534:4;11540:2;11544:7;11553:1;11513:20;:42::i;:::-;11682:4;11655:31;;:23;11670:7;11655:14;:23::i;:::-;:31;;;11647:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;11797:15;:24;11813:7;11797:24;;;;;;;;;;;;11790:31;;;;;;;;;;;12284:1;12265:9;:15;12275:4;12265:15;;;;;;;;;;;;;;;;:20;;;;;;;;;;;12316:1;12299:9;:13;12309:2;12299:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;12356:2;12337:7;:16;12345:7;12337:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;12393:7;12389:2;12374:27;;12383:4;12374:27;;;;;;;;;;;;12412:41;12432:4;12438:2;12442:7;12451:1;12412:19;:41::i;:::-;11257:1203;;;:::o;2722:115:28:-;2809:20;2821:7;2809:11;:20::i;:::-;2722:115;:::o;6702::9:-;6768:7;6794;:16;6802:7;6794:16;;;;;;;;;;;;;;;;;;;;;6787:23;;6702:115;;;:::o;1359:130:0:-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;2426:187::-;2499:16;2518:6;;;;;;;;;;;2499:25;;2543:8;2534:6;;:17;;;;;;;;;;;;;;;;;;2597:8;2566:40;;2587:8;2566:40;;;;;;;;;;;;2489:124;2426:187;:::o;12879:277:9:-;12999:8;12990:17;;:5;:17;;;12982:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;13085:8;13047:18;:25;13066:5;13047:25;;;;;;;;;;;;;;;:35;13073:8;13047:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;13130:8;13108:41;;13123:5;13108:41;;;13140:8;13108:41;;;;;;:::i;:::-;;;;;;;;12879:277;;;:::o;6326:267::-;6438:28;6448:4;6454:2;6458:7;6438:9;:28::i;:::-;6484:47;6507:4;6513:2;6517:7;6526:4;6484:22;:47::i;:::-;6476:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;6326:267;;;;:::o;806:608:14:-;879:13;904:23;919:7;904:14;:23::i;:::-;938;964:10;:19;975:7;964:19;;;;;;;;;;;938:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;993:18;1014:10;:8;:10::i;:::-;993:31;;1119:1;1103:4;1097:18;:23;1093:70;;1143:9;1136:16;;;;;;1093:70;1291:1;1271:9;1265:23;:27;1261:106;;;1339:4;1345:9;1322:33;;;;;;;;;:::i;:::-;;;;;;;;;;;;;1308:48;;;;;;1261:106;1384:23;1399:7;1384:14;:23::i;:::-;1377:30;;;;806:608;;;;:::o;827:112:19:-;892:7;918;:14;;;911:21;;827:112;;;:::o;945:123::-;1050:1;1032:7;:14;;;:19;;;;;;;;;;;945:123;:::o;7995:108:9:-;8070:26;8080:2;8084:7;8070:26;;;;;;;;;;;;:9;:26::i;:::-;7995:108;;:::o;1599:253:14:-;1698:16;1706:7;1698;:16::i;:::-;1690:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;1797:9;1775:10;:19;1786:7;1775:19;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;1822:23;1837:7;1822:23;;;;;;:::i;:::-;;;;;;;;1599:253;;:::o;1005:222:13:-;1107:4;1145:35;1130:50;;;:11;:50;;;;:90;;;;1184:36;1208:11;1184:23;:36::i;:::-;1130:90;1123:97;;1005:222;;;:::o;7120:126:9:-;7185:4;7237:1;7208:31;;:17;7217:7;7208:8;:17::i;:::-;:31;;;;7201:38;;7120:126;;;:::o;2482:232:28:-;2651:55;2678:4;2684:2;2688:7;2696:9;2651:26;:55::i;:::-;2482:232;;;;:::o;16294:115:9:-;;;;;:::o;2070:200:14:-;2138:20;2150:7;2138:11;:20::i;:::-;2210:1;2179:10;:19;2190:7;2179:19;;;;;;;;;;;2173:33;;;;;:::i;:::-;;;:38;2169:95;;2234:10;:19;2245:7;2234:19;;;;;;;;;;;;2227:26;;;;:::i;:::-;2169:95;2070:200;:::o;13925:831:9:-;14074:4;14094:15;:2;:13;;;:15::i;:::-;14090:660;;;14145:2;14129:36;;;14166:12;:10;:12::i;:::-;14180:4;14186:7;14195:4;14129:71;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;14125:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14384:1;14367:6;:13;:18;14363:321;;14409:60;;;;;;;;;;:::i;:::-;;;;;;;;14363:321;14636:6;14630:13;14621:6;14617:2;14613:15;14606:38;14125:573;14260:41;;;14250:51;;;:6;:51;;;;14243:58;;;;;14090:660;14735:4;14728:11;;13925:831;;;;;;;:::o;3319:92::-;3370:13;3395:9;;;;;;;;;;;;;;3319:92;:::o;2801:276::-;2874:13;2899:23;2914:7;2899:14;:23::i;:::-;2933:21;2957:10;:8;:10::i;:::-;2933:34;;3008:1;2990:7;2984:21;:25;:86;;;;;;;;;;;;;;;;;3036:7;3045:18;:7;:16;:18::i;:::-;3019:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2984:86;2977:93;;;2801:276;;;:::o;8324:279::-;8418:18;8424:2;8428:7;8418:5;:18::i;:::-;8467:53;8498:1;8502:2;8506:7;8515:4;8467:22;:53::i;:::-;8446:150;;;;;;;;;;;;:::i;:::-;;;;;;;;;8324:279;;;:::o;1570:300::-;1672:4;1722:25;1707:40;;;:11;:40;;;;:104;;;;1778:33;1763:48;;;:11;:48;;;;1707:104;:156;;;;1827:36;1851:11;1827:23;:36::i;:::-;1707:156;1688:175;;1570:300;;;:::o;2112:890:13:-;2283:61;2310:4;2316:2;2320:12;2334:9;2283:26;:61::i;:::-;2371:1;2359:9;:13;2355:219;;;2500:63;;;;;;;;;;:::i;:::-;;;;;;;;2355:219;2584:15;2602:12;2584:30;;2645:1;2629:18;;:4;:18;;;2625:183;;2663:40;2695:7;2663:31;:40::i;:::-;2625:183;;;2732:2;2724:10;;:4;:10;;;2720:88;;2750:47;2783:4;2789:7;2750:32;:47::i;:::-;2720:88;2625:183;2835:1;2821:16;;:2;:16;;;2817:179;;2853:45;2890:7;2853:36;:45::i;:::-;2817:179;;;2925:4;2919:10;;:2;:10;;;2915:81;;2945:40;2973:2;2977:7;2945:27;:40::i;:::-;2915:81;2817:179;2273:729;2112:890;;;;:::o;10171:762:9:-;10230:13;10246:23;10261:7;10246:14;:23::i;:::-;10230:39;;10280:51;10301:5;10316:1;10320:7;10329:1;10280:20;:51::i;:::-;10441:23;10456:7;10441:14;:23::i;:::-;10433:31;;10509:15;:24;10525:7;10509:24;;;;;;;;;;;;10502:31;;;;;;;;;;;10769:1;10749:9;:16;10759:5;10749:16;;;;;;;;;;;;;;;;:21;;;;;;;;;;;10797:7;:16;10805:7;10797:16;;;;;;;;;;;;10790:23;;;;;;;;;;;10857:7;10853:1;10829:36;;10838:5;10829:36;;;;;;;;;;;;10876:50;10896:5;10911:1;10915:7;10924:1;10876:19;:50::i;:::-;10220:713;10171:762;:::o;1412:320:17:-;1472:4;1724:1;1702:7;:19;;;:23;1695:30;;1412:320;;;:::o;447:696:20:-;503:13;552:14;589:1;569:17;580:5;569:10;:17::i;:::-;:21;552:38;;604:20;638:6;627:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;604:41;;659:11;785:6;781:2;777:15;769:6;765:28;758:35;;820:280;827:4;820:280;;;851:5;;;;;;;;990:8;985:2;978:5;974:14;969:30;964:3;956:44;1044:2;1035:11;;;;;;:::i;:::-;;;;;1077:1;1068:5;:10;820:280;1064:21;820:280;1120:6;1113:13;;;;;447:696;;;:::o;8925:920:9:-;9018:1;9004:16;;:2;:16;;;8996:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9076:16;9084:7;9076;:16::i;:::-;9075:17;9067:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9136:48;9165:1;9169:2;9173:7;9182:1;9136:20;:48::i;:::-;9280:16;9288:7;9280;:16::i;:::-;9279:17;9271:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9688:1;9671:9;:13;9681:2;9671:13;;;;;;;;;;;;;;;;:18;;;;;;;;;;;9729:2;9710:7;:16;9718:7;9710:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9772:7;9768:2;9747:33;;9764:1;9747:33;;;;;;;;;;;;9791:47;9819:1;9823:2;9827:7;9836:1;9791:19;:47::i;:::-;8925:920;;:::o;829:155:21:-;914:4;952:25;937:40;;;:11;:40;;;;930:47;;829:155;;;:::o;15472:116:9:-;;;;;:::o;3708:161:13:-;3811:10;:17;;;;3784:15;:24;3800:7;3784:24;;;;;;;;;;;:44;;;;3838:10;3854:7;3838:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3708:161;:::o;4486:970::-;4748:22;4798:1;4773:22;4790:4;4773:16;:22::i;:::-;:26;;;;:::i;:::-;4748:51;;4809:18;4830:17;:26;4848:7;4830:26;;;;;;;;;;;;4809:47;;4974:14;4960:10;:28;4956:323;;5004:19;5026:12;:18;5039:4;5026:18;;;;;;;;;;;;;;;:34;5045:14;5026:34;;;;;;;;;;;;5004:56;;5108:11;5075:12;:18;5088:4;5075:18;;;;;;;;;;;;;;;:30;5094:10;5075:30;;;;;;;;;;;:44;;;;5224:10;5191:17;:30;5209:11;5191:30;;;;;;;;;;;:43;;;;4990:289;4956:323;5372:17;:26;5390:7;5372:26;;;;;;;;;;;5365:33;;;5415:12;:18;5428:4;5415:18;;;;;;;;;;;;;;;:34;5434:14;5415:34;;;;;;;;;;;5408:41;;;4567:889;;4486:970;;:::o;5744:1061::-;5993:22;6038:1;6018:10;:17;;;;:21;;;;:::i;:::-;5993:46;;6049:18;6070:15;:24;6086:7;6070:24;;;;;;;;;;;;6049:45;;6416:19;6438:10;6449:14;6438:26;;;;;;;;:::i;:::-;;;;;;;;;;6416:48;;6500:11;6475:10;6486;6475:22;;;;;;;;:::i;:::-;;;;;;;;;:36;;;;6610:10;6579:15;:28;6595:11;6579:28;;;;;;;;;;;:41;;;;6748:15;:24;6764:7;6748:24;;;;;;;;;;;6741:31;;;6782:10;:16;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5815:990;;;5744:1061;:::o;3296:217::-;3380:14;3397:20;3414:2;3397:16;:20::i;:::-;3380:37;;3454:7;3427:12;:16;3440:2;3427:16;;;;;;;;;;;;;;;:24;3444:6;3427:24;;;;;;;;;;;:34;;;;3500:6;3471:17;:26;3489:7;3471:26;;;;;;;;;;;:35;;;;3370:143;3296:217;;:::o;10139:916:23:-;10192:7;10211:14;10228:1;10211:18;;10276:8;10267:5;:17;10263:103;;10313:8;10304:17;;;;;;:::i;:::-;;;;;10349:2;10339:12;;;;10263:103;10392:8;10383:5;:17;10379:103;;10429:8;10420:17;;;;;;:::i;:::-;;;;;10465:2;10455:12;;;;10379:103;10508:8;10499:5;:17;10495:103;;10545:8;10536:17;;;;;;:::i;:::-;;;;;10581:2;10571:12;;;;10495:103;10624:7;10615:5;:16;10611:100;;10660:7;10651:16;;;;;;:::i;:::-;;;;;10695:1;10685:11;;;;10611:100;10737:7;10728:5;:16;10724:100;;10773:7;10764:16;;;;;;:::i;:::-;;;;;10808:1;10798:11;;;;10724:100;10850:7;10841:5;:16;10837:100;;10886:7;10877:16;;;;;;:::i;:::-;;;;;10921:1;10911:11;;;;10837:100;10963:7;10954:5;:16;10950:66;;11000:1;10990:11;;;;10950:66;11042:6;11035:13;;;10139:916;;;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:30:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:307::-;1866:1;1876:113;1890:6;1887:1;1884:13;1876:113;;;1975:1;1970:3;1966:11;1960:18;1956:1;1951:3;1947:11;1940:39;1912:2;1909:1;1905:10;1900:15;;1876:113;;;2007:6;2004:1;2001:13;1998:101;;;2087:1;2078:6;2073:3;2069:16;2062:27;1998:101;1847:258;1798:307;;;:::o;2111:102::-;2152:6;2203:2;2199:7;2194:2;2187:5;2183:14;2179:28;2169:38;;2111:102;;;:::o;2219:364::-;2307:3;2335:39;2368:5;2335:39;:::i;:::-;2390:71;2454:6;2449:3;2390:71;:::i;:::-;2383:78;;2470:52;2515:6;2510:3;2503:4;2496:5;2492:16;2470:52;:::i;:::-;2547:29;2569:6;2547:29;:::i;:::-;2542:3;2538:39;2531:46;;2311:272;2219:364;;;;:::o;2589:313::-;2702:4;2740:2;2729:9;2725:18;2717:26;;2789:9;2783:4;2779:20;2775:1;2764:9;2760:17;2753:47;2817:78;2890:4;2881:6;2817:78;:::i;:::-;2809:86;;2589:313;;;;:::o;2908:77::-;2945:7;2974:5;2963:16;;2908:77;;;:::o;2991:122::-;3064:24;3082:5;3064:24;:::i;:::-;3057:5;3054:35;3044:63;;3103:1;3100;3093:12;3044:63;2991:122;:::o;3119:139::-;3165:5;3203:6;3190:20;3181:29;;3219:33;3246:5;3219:33;:::i;:::-;3119:139;;;;:::o;3264:329::-;3323:6;3372:2;3360:9;3351:7;3347:23;3343:32;3340:119;;;3378:79;;:::i;:::-;3340:119;3498:1;3523:53;3568:7;3559:6;3548:9;3544:22;3523:53;:::i;:::-;3513:63;;3469:117;3264:329;;;;:::o;3599:126::-;3636:7;3676:42;3669:5;3665:54;3654:65;;3599:126;;;:::o;3731:96::-;3768:7;3797:24;3815:5;3797:24;:::i;:::-;3786:35;;3731:96;;;:::o;3833:118::-;3920:24;3938:5;3920:24;:::i;:::-;3915:3;3908:37;3833:118;;:::o;3957:222::-;4050:4;4088:2;4077:9;4073:18;4065:26;;4101:71;4169:1;4158:9;4154:17;4145:6;4101:71;:::i;:::-;3957:222;;;;:::o;4185:122::-;4258:24;4276:5;4258:24;:::i;:::-;4251:5;4248:35;4238:63;;4297:1;4294;4287:12;4238:63;4185:122;:::o;4313:139::-;4359:5;4397:6;4384:20;4375:29;;4413:33;4440:5;4413:33;:::i;:::-;4313:139;;;;:::o;4458:474::-;4526:6;4534;4583:2;4571:9;4562:7;4558:23;4554:32;4551:119;;;4589:79;;:::i;:::-;4551:119;4709:1;4734:53;4779:7;4770:6;4759:9;4755:22;4734:53;:::i;:::-;4724:63;;4680:117;4836:2;4862:53;4907:7;4898:6;4887:9;4883:22;4862:53;:::i;:::-;4852:63;;4807:118;4458:474;;;;;:::o;4938:118::-;5025:24;5043:5;5025:24;:::i;:::-;5020:3;5013:37;4938:118;;:::o;5062:222::-;5155:4;5193:2;5182:9;5178:18;5170:26;;5206:71;5274:1;5263:9;5259:17;5250:6;5206:71;:::i;:::-;5062:222;;;;:::o;5290:619::-;5367:6;5375;5383;5432:2;5420:9;5411:7;5407:23;5403:32;5400:119;;;5438:79;;:::i;:::-;5400:119;5558:1;5583:53;5628:7;5619:6;5608:9;5604:22;5583:53;:::i;:::-;5573:63;;5529:117;5685:2;5711:53;5756:7;5747:6;5736:9;5732:22;5711:53;:::i;:::-;5701:63;;5656:118;5813:2;5839:53;5884:7;5875:6;5864:9;5860:22;5839:53;:::i;:::-;5829:63;;5784:118;5290:619;;;;;:::o;5915:442::-;6064:4;6102:2;6091:9;6087:18;6079:26;;6115:71;6183:1;6172:9;6168:17;6159:6;6115:71;:::i;:::-;6196:72;6264:2;6253:9;6249:18;6240:6;6196:72;:::i;:::-;6278;6346:2;6335:9;6331:18;6322:6;6278:72;:::i;:::-;5915:442;;;;;;:::o;6363:329::-;6422:6;6471:2;6459:9;6450:7;6446:23;6442:32;6439:119;;;6477:79;;:::i;:::-;6439:119;6597:1;6622:53;6667:7;6658:6;6647:9;6643:22;6622:53;:::i;:::-;6612:63;;6568:117;6363:329;;;;:::o;6698:116::-;6768:21;6783:5;6768:21;:::i;:::-;6761:5;6758:32;6748:60;;6804:1;6801;6794:12;6748:60;6698:116;:::o;6820:133::-;6863:5;6901:6;6888:20;6879:29;;6917:30;6941:5;6917:30;:::i;:::-;6820:133;;;;:::o;6959:468::-;7024:6;7032;7081:2;7069:9;7060:7;7056:23;7052:32;7049:119;;;7087:79;;:::i;:::-;7049:119;7207:1;7232:53;7277:7;7268:6;7257:9;7253:22;7232:53;:::i;:::-;7222:63;;7178:117;7334:2;7360:50;7402:7;7393:6;7382:9;7378:22;7360:50;:::i;:::-;7350:60;;7305:115;6959:468;;;;;:::o;7433:117::-;7542:1;7539;7532:12;7556:117;7665:1;7662;7655:12;7679:180;7727:77;7724:1;7717:88;7824:4;7821:1;7814:15;7848:4;7845:1;7838:15;7865:281;7948:27;7970:4;7948:27;:::i;:::-;7940:6;7936:40;8078:6;8066:10;8063:22;8042:18;8030:10;8027:34;8024:62;8021:88;;;8089:18;;:::i;:::-;8021:88;8129:10;8125:2;8118:22;7908:238;7865:281;;:::o;8152:129::-;8186:6;8213:20;;:::i;:::-;8203:30;;8242:33;8270:4;8262:6;8242:33;:::i;:::-;8152:129;;;:::o;8287:307::-;8348:4;8438:18;8430:6;8427:30;8424:56;;;8460:18;;:::i;:::-;8424:56;8498:29;8520:6;8498:29;:::i;:::-;8490:37;;8582:4;8576;8572:15;8564:23;;8287:307;;;:::o;8600:154::-;8684:6;8679:3;8674;8661:30;8746:1;8737:6;8732:3;8728:16;8721:27;8600:154;;;:::o;8760:410::-;8837:5;8862:65;8878:48;8919:6;8878:48;:::i;:::-;8862:65;:::i;:::-;8853:74;;8950:6;8943:5;8936:21;8988:4;8981:5;8977:16;9026:3;9017:6;9012:3;9008:16;9005:25;9002:112;;;9033:79;;:::i;:::-;9002:112;9123:41;9157:6;9152:3;9147;9123:41;:::i;:::-;8843:327;8760:410;;;;;:::o;9189:338::-;9244:5;9293:3;9286:4;9278:6;9274:17;9270:27;9260:122;;9301:79;;:::i;:::-;9260:122;9418:6;9405:20;9443:78;9517:3;9509:6;9502:4;9494:6;9490:17;9443:78;:::i;:::-;9434:87;;9250:277;9189:338;;;;:::o;9533:943::-;9628:6;9636;9644;9652;9701:3;9689:9;9680:7;9676:23;9672:33;9669:120;;;9708:79;;:::i;:::-;9669:120;9828:1;9853:53;9898:7;9889:6;9878:9;9874:22;9853:53;:::i;:::-;9843:63;;9799:117;9955:2;9981:53;10026:7;10017:6;10006:9;10002:22;9981:53;:::i;:::-;9971:63;;9926:118;10083:2;10109:53;10154:7;10145:6;10134:9;10130:22;10109:53;:::i;:::-;10099:63;;10054:118;10239:2;10228:9;10224:18;10211:32;10270:18;10262:6;10259:30;10256:117;;;10292:79;;:::i;:::-;10256:117;10397:62;10451:7;10442:6;10431:9;10427:22;10397:62;:::i;:::-;10387:72;;10182:287;9533:943;;;;;;;:::o;10482:308::-;10544:4;10634:18;10626:6;10623:30;10620:56;;;10656:18;;:::i;:::-;10620:56;10694:29;10716:6;10694:29;:::i;:::-;10686:37;;10778:4;10772;10768:15;10760:23;;10482:308;;;:::o;10796:412::-;10874:5;10899:66;10915:49;10957:6;10915:49;:::i;:::-;10899:66;:::i;:::-;10890:75;;10988:6;10981:5;10974:21;11026:4;11019:5;11015:16;11064:3;11055:6;11050:3;11046:16;11043:25;11040:112;;;11071:79;;:::i;:::-;11040:112;11161:41;11195:6;11190:3;11185;11161:41;:::i;:::-;10880:328;10796:412;;;;;:::o;11228:340::-;11284:5;11333:3;11326:4;11318:6;11314:17;11310:27;11300:122;;11341:79;;:::i;:::-;11300:122;11458:6;11445:20;11483:79;11558:3;11550:6;11543:4;11535:6;11531:17;11483:79;:::i;:::-;11474:88;;11290:278;11228:340;;;;:::o;11574:654::-;11652:6;11660;11709:2;11697:9;11688:7;11684:23;11680:32;11677:119;;;11715:79;;:::i;:::-;11677:119;11835:1;11860:53;11905:7;11896:6;11885:9;11881:22;11860:53;:::i;:::-;11850:63;;11806:117;11990:2;11979:9;11975:18;11962:32;12021:18;12013:6;12010:30;12007:117;;;12043:79;;:::i;:::-;12007:117;12148:63;12203:7;12194:6;12183:9;12179:22;12148:63;:::i;:::-;12138:73;;11933:288;11574:654;;;;;:::o;12234:474::-;12302:6;12310;12359:2;12347:9;12338:7;12334:23;12330:32;12327:119;;;12365:79;;:::i;:::-;12327:119;12485:1;12510:53;12555:7;12546:6;12535:9;12531:22;12510:53;:::i;:::-;12500:63;;12456:117;12612:2;12638:53;12683:7;12674:6;12663:9;12659:22;12638:53;:::i;:::-;12628:63;;12583:118;12234:474;;;;;:::o;12714:180::-;12762:77;12759:1;12752:88;12859:4;12856:1;12849:15;12883:4;12880:1;12873:15;12900:320;12944:6;12981:1;12975:4;12971:12;12961:22;;13028:1;13022:4;13018:12;13049:18;13039:81;;13105:4;13097:6;13093:17;13083:27;;13039:81;13167:2;13159:6;13156:14;13136:18;13133:38;13130:84;;13186:18;;:::i;:::-;13130:84;12951:269;12900:320;;;:::o;13226:220::-;13366:34;13362:1;13354:6;13350:14;13343:58;13435:3;13430:2;13422:6;13418:15;13411:28;13226:220;:::o;13452:366::-;13594:3;13615:67;13679:2;13674:3;13615:67;:::i;:::-;13608:74;;13691:93;13780:3;13691:93;:::i;:::-;13809:2;13804:3;13800:12;13793:19;;13452:366;;;:::o;13824:419::-;13990:4;14028:2;14017:9;14013:18;14005:26;;14077:9;14071:4;14067:20;14063:1;14052:9;14048:17;14041:47;14105:131;14231:4;14105:131;:::i;:::-;14097:139;;13824:419;;;:::o;14249:248::-;14389:34;14385:1;14377:6;14373:14;14366:58;14458:31;14453:2;14445:6;14441:15;14434:56;14249:248;:::o;14503:366::-;14645:3;14666:67;14730:2;14725:3;14666:67;:::i;:::-;14659:74;;14742:93;14831:3;14742:93;:::i;:::-;14860:2;14855:3;14851:12;14844:19;;14503:366;;;:::o;14875:419::-;15041:4;15079:2;15068:9;15064:18;15056:26;;15128:9;15122:4;15118:20;15114:1;15103:9;15099:17;15092:47;15156:131;15282:4;15156:131;:::i;:::-;15148:139;;14875:419;;;:::o;15300:180::-;15348:77;15345:1;15338:88;15445:4;15442:1;15435:15;15469:4;15466:1;15459:15;15486:305;15526:3;15545:20;15563:1;15545:20;:::i;:::-;15540:25;;15579:20;15597:1;15579:20;:::i;:::-;15574:25;;15733:1;15665:66;15661:74;15658:1;15655:81;15652:107;;;15739:18;;:::i;:::-;15652:107;15783:1;15780;15776:9;15769:16;;15486:305;;;;:::o;15797:232::-;15937:34;15933:1;15925:6;15921:14;15914:58;16006:15;16001:2;15993:6;15989:15;15982:40;15797:232;:::o;16035:366::-;16177:3;16198:67;16262:2;16257:3;16198:67;:::i;:::-;16191:74;;16274:93;16363:3;16274:93;:::i;:::-;16392:2;16387:3;16383:12;16376:19;;16035:366;;;:::o;16407:419::-;16573:4;16611:2;16600:9;16596:18;16588:26;;16660:9;16654:4;16650:20;16646:1;16635:9;16631:17;16624:47;16688:131;16814:4;16688:131;:::i;:::-;16680:139;;16407:419;;;:::o;16832:230::-;16972:34;16968:1;16960:6;16956:14;16949:58;17041:13;17036:2;17028:6;17024:15;17017:38;16832:230;:::o;17068:366::-;17210:3;17231:67;17295:2;17290:3;17231:67;:::i;:::-;17224:74;;17307:93;17396:3;17307:93;:::i;:::-;17425:2;17420:3;17416:12;17409:19;;17068:366;;;:::o;17440:419::-;17606:4;17644:2;17633:9;17629:18;17621:26;;17693:9;17687:4;17683:20;17679:1;17668:9;17664:17;17657:47;17721:131;17847:4;17721:131;:::i;:::-;17713:139;;17440:419;;;:::o;17865:231::-;18005:34;18001:1;17993:6;17989:14;17982:58;18074:14;18069:2;18061:6;18057:15;18050:39;17865:231;:::o;18102:366::-;18244:3;18265:67;18329:2;18324:3;18265:67;:::i;:::-;18258:74;;18341:93;18430:3;18341:93;:::i;:::-;18459:2;18454:3;18450:12;18443:19;;18102:366;;;:::o;18474:419::-;18640:4;18678:2;18667:9;18663:18;18655:26;;18727:9;18721:4;18717:20;18713:1;18702:9;18698:17;18691:47;18755:131;18881:4;18755:131;:::i;:::-;18747:139;;18474:419;;;:::o;18899:180::-;18947:77;18944:1;18937:88;19044:4;19041:1;19034:15;19068:4;19065:1;19058:15;19085:174;19225:26;19221:1;19213:6;19209:14;19202:50;19085:174;:::o;19265:366::-;19407:3;19428:67;19492:2;19487:3;19428:67;:::i;:::-;19421:74;;19504:93;19593:3;19504:93;:::i;:::-;19622:2;19617:3;19613:12;19606:19;;19265:366;;;:::o;19637:419::-;19803:4;19841:2;19830:9;19826:18;19818:26;;19890:9;19884:4;19880:20;19876:1;19865:9;19861:17;19854:47;19918:131;20044:4;19918:131;:::i;:::-;19910:139;;19637:419;;;:::o;20062:228::-;20202:34;20198:1;20190:6;20186:14;20179:58;20271:11;20266:2;20258:6;20254:15;20247:36;20062:228;:::o;20296:366::-;20438:3;20459:67;20523:2;20518:3;20459:67;:::i;:::-;20452:74;;20535:93;20624:3;20535:93;:::i;:::-;20653:2;20648:3;20644:12;20637:19;;20296:366;;;:::o;20668:419::-;20834:4;20872:2;20861:9;20857:18;20849:26;;20921:9;20915:4;20911:20;20907:1;20896:9;20892:17;20885:47;20949:131;21075:4;20949:131;:::i;:::-;20941:139;;20668:419;;;:::o;21093:225::-;21233:34;21229:1;21221:6;21217:14;21210:58;21302:8;21297:2;21289:6;21285:15;21278:33;21093:225;:::o;21324:366::-;21466:3;21487:67;21551:2;21546:3;21487:67;:::i;:::-;21480:74;;21563:93;21652:3;21563:93;:::i;:::-;21681:2;21676:3;21672:12;21665:19;;21324:366;;;:::o;21696:419::-;21862:4;21900:2;21889:9;21885:18;21877:26;;21949:9;21943:4;21939:20;21935:1;21924:9;21920:17;21913:47;21977:131;22103:4;21977:131;:::i;:::-;21969:139;;21696:419;;;:::o;22121:224::-;22261:34;22257:1;22249:6;22245:14;22238:58;22330:7;22325:2;22317:6;22313:15;22306:32;22121:224;:::o;22351:366::-;22493:3;22514:67;22578:2;22573:3;22514:67;:::i;:::-;22507:74;;22590:93;22679:3;22590:93;:::i;:::-;22708:2;22703:3;22699:12;22692:19;;22351:366;;;:::o;22723:419::-;22889:4;22927:2;22916:9;22912:18;22904:26;;22976:9;22970:4;22966:20;22962:1;22951:9;22947:17;22940:47;23004:131;23130:4;23004:131;:::i;:::-;22996:139;;22723:419;;;:::o;23148:223::-;23288:34;23284:1;23276:6;23272:14;23265:58;23357:6;23352:2;23344:6;23340:15;23333:31;23148:223;:::o;23377:366::-;23519:3;23540:67;23604:2;23599:3;23540:67;:::i;:::-;23533:74;;23616:93;23705:3;23616:93;:::i;:::-;23734:2;23729:3;23725:12;23718:19;;23377:366;;;:::o;23749:419::-;23915:4;23953:2;23942:9;23938:18;23930:26;;24002:9;23996:4;23992:20;23988:1;23977:9;23973:17;23966:47;24030:131;24156:4;24030:131;:::i;:::-;24022:139;;23749:419;;;:::o;24174:182::-;24314:34;24310:1;24302:6;24298:14;24291:58;24174:182;:::o;24362:366::-;24504:3;24525:67;24589:2;24584:3;24525:67;:::i;:::-;24518:74;;24601:93;24690:3;24601:93;:::i;:::-;24719:2;24714:3;24710:12;24703:19;;24362:366;;;:::o;24734:419::-;24900:4;24938:2;24927:9;24923:18;24915:26;;24987:9;24981:4;24977:20;24973:1;24962:9;24958:17;24951:47;25015:131;25141:4;25015:131;:::i;:::-;25007:139;;24734:419;;;:::o;25159:175::-;25299:27;25295:1;25287:6;25283:14;25276:51;25159:175;:::o;25340:366::-;25482:3;25503:67;25567:2;25562:3;25503:67;:::i;:::-;25496:74;;25579:93;25668:3;25579:93;:::i;:::-;25697:2;25692:3;25688:12;25681:19;;25340:366;;;:::o;25712:419::-;25878:4;25916:2;25905:9;25901:18;25893:26;;25965:9;25959:4;25955:20;25951:1;25940:9;25936:17;25929:47;25993:131;26119:4;25993:131;:::i;:::-;25985:139;;25712:419;;;:::o;26137:237::-;26277:34;26273:1;26265:6;26261:14;26254:58;26346:20;26341:2;26333:6;26329:15;26322:45;26137:237;:::o;26380:366::-;26522:3;26543:67;26607:2;26602:3;26543:67;:::i;:::-;26536:74;;26619:93;26708:3;26619:93;:::i;:::-;26737:2;26732:3;26728:12;26721:19;;26380:366;;;:::o;26752:419::-;26918:4;26956:2;26945:9;26941:18;26933:26;;27005:9;26999:4;26995:20;26991:1;26980:9;26976:17;26969:47;27033:131;27159:4;27033:131;:::i;:::-;27025:139;;26752:419;;;:::o;27177:148::-;27279:11;27316:3;27301:18;;27177:148;;;;:::o;27331:377::-;27437:3;27465:39;27498:5;27465:39;:::i;:::-;27520:89;27602:6;27597:3;27520:89;:::i;:::-;27513:96;;27618:52;27663:6;27658:3;27651:4;27644:5;27640:16;27618:52;:::i;:::-;27695:6;27690:3;27686:16;27679:23;;27441:267;27331:377;;;;:::o;27714:435::-;27894:3;27916:95;28007:3;27998:6;27916:95;:::i;:::-;27909:102;;28028:95;28119:3;28110:6;28028:95;:::i;:::-;28021:102;;28140:3;28133:10;;27714:435;;;;;:::o;28155:233::-;28295:34;28291:1;28283:6;28279:14;28272:58;28364:16;28359:2;28351:6;28347:15;28340:41;28155:233;:::o;28394:366::-;28536:3;28557:67;28621:2;28616:3;28557:67;:::i;:::-;28550:74;;28633:93;28722:3;28633:93;:::i;:::-;28751:2;28746:3;28742:12;28735:19;;28394:366;;;:::o;28766:419::-;28932:4;28970:2;28959:9;28955:18;28947:26;;29019:9;29013:4;29009:20;29005:1;28994:9;28990:17;28983:47;29047:131;29173:4;29047:131;:::i;:::-;29039:139;;28766:419;;;:::o;29191:98::-;29242:6;29276:5;29270:12;29260:22;;29191:98;;;:::o;29295:168::-;29378:11;29412:6;29407:3;29400:19;29452:4;29447:3;29443:14;29428:29;;29295:168;;;;:::o;29469:360::-;29555:3;29583:38;29615:5;29583:38;:::i;:::-;29637:70;29700:6;29695:3;29637:70;:::i;:::-;29630:77;;29716:52;29761:6;29756:3;29749:4;29742:5;29738:16;29716:52;:::i;:::-;29793:29;29815:6;29793:29;:::i;:::-;29788:3;29784:39;29777:46;;29559:270;29469:360;;;;:::o;29835:640::-;30030:4;30068:3;30057:9;30053:19;30045:27;;30082:71;30150:1;30139:9;30135:17;30126:6;30082:71;:::i;:::-;30163:72;30231:2;30220:9;30216:18;30207:6;30163:72;:::i;:::-;30245;30313:2;30302:9;30298:18;30289:6;30245:72;:::i;:::-;30364:9;30358:4;30354:20;30349:2;30338:9;30334:18;30327:48;30392:76;30463:4;30454:6;30392:76;:::i;:::-;30384:84;;29835:640;;;;;;;:::o;30481:141::-;30537:5;30568:6;30562:13;30553:22;;30584:32;30610:5;30584:32;:::i;:::-;30481:141;;;;:::o;30628:349::-;30697:6;30746:2;30734:9;30725:7;30721:23;30717:32;30714:119;;;30752:79;;:::i;:::-;30714:119;30872:1;30897:63;30952:7;30943:6;30932:9;30928:22;30897:63;:::i;:::-;30887:73;;30843:127;30628:349;;;;:::o;30983:240::-;31123:34;31119:1;31111:6;31107:14;31100:58;31192:23;31187:2;31179:6;31175:15;31168:48;30983:240;:::o;31229:366::-;31371:3;31392:67;31456:2;31451:3;31392:67;:::i;:::-;31385:74;;31468:93;31557:3;31468:93;:::i;:::-;31586:2;31581:3;31577:12;31570:19;;31229:366;;;:::o;31601:419::-;31767:4;31805:2;31794:9;31790:18;31782:26;;31854:9;31848:4;31844:20;31840:1;31829:9;31825:17;31818:47;31882:131;32008:4;31882:131;:::i;:::-;31874:139;;31601:419;;;:::o;32026:180::-;32074:77;32071:1;32064:88;32171:4;32168:1;32161:15;32195:4;32192:1;32185:15;32212:182;32352:34;32348:1;32340:6;32336:14;32329:58;32212:182;:::o;32400:366::-;32542:3;32563:67;32627:2;32622:3;32563:67;:::i;:::-;32556:74;;32639:93;32728:3;32639:93;:::i;:::-;32757:2;32752:3;32748:12;32741:19;;32400:366;;;:::o;32772:419::-;32938:4;32976:2;32965:9;32961:18;32953:26;;33025:9;33019:4;33015:20;33011:1;33000:9;32996:17;32989:47;33053:131;33179:4;33053:131;:::i;:::-;33045:139;;32772:419;;;:::o;33197:178::-;33337:30;33333:1;33325:6;33321:14;33314:54;33197:178;:::o;33381:366::-;33523:3;33544:67;33608:2;33603:3;33544:67;:::i;:::-;33537:74;;33620:93;33709:3;33620:93;:::i;:::-;33738:2;33733:3;33729:12;33722:19;;33381:366;;;:::o;33753:419::-;33919:4;33957:2;33946:9;33942:18;33934:26;;34006:9;34000:4;33996:20;33992:1;33981:9;33977:17;33970:47;34034:131;34160:4;34034:131;:::i;:::-;34026:139;;33753:419;;;:::o;34178:191::-;34218:4;34238:20;34256:1;34238:20;:::i;:::-;34233:25;;34272:20;34290:1;34272:20;:::i;:::-;34267:25;;34311:1;34308;34305:8;34302:34;;;34316:18;;:::i;:::-;34302:34;34361:1;34358;34354:9;34346:17;;34178:191;;;;:::o;34375:180::-;34423:77;34420:1;34413:88;34520:4;34517:1;34510:15;34544:4;34541:1;34534:15",
    "source": "// SPDX-License-Identifier:MIT\r\npragma solidity ^0.8.4;\r\n\r\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\r\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\";\r\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\";\r\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol\";\r\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\r\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\r\n\r\nimport \"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\";\r\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\r\nimport \"@openzeppelin/contracts/utils/math/SafeMath.sol\";\r\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\r\n\r\n\r\n\r\n\r\ninterface PlayCounter{\r\n\r\nstruct tokenInfo{\r\n        uint256 listenCount;\r\n        uint256 tokenId; \r\n        address owner;\r\n\r\n    }\r\n\r\n    function listen(uint256 _tokenId) external ;\r\n}\r\n\r\ncontract ArtGrowNFT is ERC721, ERC721Enumerable, ERC721URIStorage, ERC721Burnable, Ownable {\r\n    using Counters for Counters.Counter;\r\n\r\n    Counters.Counter private _tokenIdCounter;\r\n\r\n    // struct tokenInfo{\r\n    //     uint256 listenCount;\r\n    //     uint256 tokenId; \r\n    //     address owner;\r\n\r\n    // }\r\n    // mapping(uint256=>tokenInfo) public _tokenInfoList;\r\n    // tokenInfo[] public _tokenInfo;//구조체 배열 선언\r\n    \r\n\r\n\r\n\r\n    mapping(uint256=>PlayCounter.tokenInfo) public _tokenInfoList;\r\n    PlayCounter.tokenInfo[] public _tokenInfo;//구조체 배열 선언\r\n    \r\n\r\n\r\n    constructor() ERC721(\"ArtGrow\", \"ARG\") {}\r\n\r\n\r\n    function safeMint(address to, string memory uri) public onlyOwner {\r\n        uint256 tokenId = _tokenIdCounter.current();\r\n        _tokenIdCounter.increment();\r\n        _safeMint(to, tokenId);\r\n        _setTokenURI(tokenId, uri);\r\n\r\n        PlayCounter.tokenInfo memory newtokenInfo = PlayCounter.tokenInfo({\r\n            listenCount:0,\r\n            tokenId:tokenId,\r\n            owner:msg.sender\r\n        });\r\n     _tokenInfoList[tokenId]= newtokenInfo;   \r\n    }\r\n\r\n    // The following functions are overrides required by Solidity.\r\n\r\n    function listen(uint256 _tokenId) external{\r\n        _tokenInfoList[_tokenId].listenCount+=1;\r\n    }\r\n\r\n    function howmanyListen(uint256 _tokenId) public view returns(uint256){\r\n        return _tokenInfoList[_tokenId].listenCount;\r\n    }\r\n\r\n    function owner(uint256 _tokenId)public view returns(address)\r\n    {\r\n        return _tokenInfoList[_tokenId].owner;\r\n    }\r\n\r\n\r\n\r\n    function _beforeTokenTransfer(address from, address to, uint256 tokenId,uint256 batchSize)\r\n        internal\r\n        override(ERC721, ERC721Enumerable)\r\n    {\r\n        super._beforeTokenTransfer(from, to, tokenId,batchSize);\r\n    }\r\n\r\n    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {\r\n        super._burn(tokenId);\r\n    }\r\n\r\n    function tokenURI(uint256 tokenId)\r\n        public\r\n        view\r\n        override(ERC721, ERC721URIStorage)\r\n        returns (string memory)\r\n    {\r\n        return super.tokenURI(tokenId);\r\n    }\r\n\r\n    function supportsInterface(bytes4 interfaceId)\r\n        public\r\n        view\r\n        override(ERC721, ERC721Enumerable,ERC721URIStorage)\r\n        returns (bool)\r\n    {\r\n        return super.supportsInterface(interfaceId);\r\n    }\r\n}\r\n\r\n\r\n\r\ncontract Amaranthus is ERC20{\r\n        using Counters for Counters.Counter;\r\n\r\n    Counters.Counter private _playerCounter;\r\n\r\n   using SafeMath for uint256;\r\n   using SafeERC20 for IERC20;\r\n\r\n    uint256 private MAX_TOKEN_COUNT = 20000000000;   // 총 코인 개수\r\n    constructor() ERC20(\"Amaranthus\", \"AAS\") {\r\n        // Mint 100 tokens to msg.sender\r\n        // Similar to how\r\n        // 1 dollar = 100 cents\r\n        // 1 token = 1 * (10 ** decimals)\r\n        _mint(msg.sender, MAX_TOKEN_COUNT * 10**uint(decimals()));\r\n    }\r\n\r\n    mapping(address => uint256) private lockedUntil;\r\n\r\n    function sendTransaction(address to, uint256 value,address _counter,uint256 _tokenId) external {\r\n        require(block.timestamp >= lockedUntil[msg.sender], \"Transaction is locked.\");\r\n\r\n        // Lock the sender's account for 4 minutes\r\n        lockedUntil[msg.sender] = block.timestamp + 240;\r\n        // Send the transaction\r\n        transfer(to,value);\r\n        PlayCounter(_counter).listen(_tokenId);  \r\n    }\r\n\r\n\r\n\r\n}",
    "sourcePath": "C:\\Users\\paete\\NftMusic\\client\\truffle\\contracts\\RoyalClub.sol",
    "ast": {
      "absolutePath": "project:/contracts/RoyalClub.sol",
      "exportedSymbols": {
        "Address": [
          3231
        ],
        "Amaranthus": [
          5490
        ],
        "ArtGrowNFT": [
          5399
        ],
        "Context": [
          3253
        ],
        "Counters": [
          3327
        ],
        "ERC165": [
          3580
        ],
        "ERC20": [
          727
        ],
        "ERC721": [
          2169
        ],
        "ERC721Burnable": [
          2333
        ],
        "ERC721Enumerable": [
          2687
        ],
        "ERC721URIStorage": [
          2843
        ],
        "IERC165": [
          3592
        ],
        "IERC20": [
          805
        ],
        "IERC20Metadata": [
          830
        ],
        "IERC20Permit": [
          866
        ],
        "IERC4906": [
          137
        ],
        "IERC721": [
          2285
        ],
        "IERC721Enumerable": [
          2874
        ],
        "IERC721Metadata": [
          2901
        ],
        "IERC721Receiver": [
          2303
        ],
        "Math": [
          4458
        ],
        "Ownable": [
          112
        ],
        "PlayCounter": [
          5203
        ],
        "SafeERC20": [
          1242
        ],
        "SafeMath": [
          4770
        ],
        "SignedMath": [
          4875
        ],
        "Strings": [
          3556
        ]
      },
      "id": 5491,
      "license": "MIT",
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 5180,
          "literals": [
            "solidity",
            "^",
            "0.8",
            ".4"
          ],
          "nodeType": "PragmaDirective",
          "src": "32:23:28"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
          "id": 5181,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 2170,
          "src": "59:57:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
          "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
          "id": 5182,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 2688,
          "src": "118:78:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
          "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
          "id": 5183,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 2844,
          "src": "198:78:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol",
          "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol",
          "id": 5184,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 2334,
          "src": "278:76:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
          "file": "@openzeppelin/contracts/access/Ownable.sol",
          "id": 5185,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 113,
          "src": "356:52:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
          "file": "@openzeppelin/contracts/utils/Counters.sol",
          "id": 5186,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 3328,
          "src": "410:52:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol",
          "id": 5187,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 1243,
          "src": "466:65:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "id": 5188,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 728,
          "src": "533:55:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/math/SafeMath.sol",
          "file": "@openzeppelin/contracts/utils/math/SafeMath.sol",
          "id": 5189,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 4771,
          "src": "590:57:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
          "file": "@openzeppelin/contracts/utils/Counters.sol",
          "id": 5190,
          "nameLocation": "-1:-1:-1",
          "nodeType": "ImportDirective",
          "scope": 5491,
          "sourceUnit": 3328,
          "src": "649:52:28",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [],
          "canonicalName": "PlayCounter",
          "contractDependencies": [],
          "contractKind": "interface",
          "fullyImplemented": false,
          "id": 5203,
          "linearizedBaseContracts": [
            5203
          ],
          "name": "PlayCounter",
          "nameLocation": "721:11:28",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "canonicalName": "PlayCounter.tokenInfo",
              "id": 5197,
              "members": [
                {
                  "constant": false,
                  "id": 5192,
                  "mutability": "mutable",
                  "name": "listenCount",
                  "nameLocation": "772:11:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 5197,
                  "src": "764:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5191,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "764:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5194,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "802:7:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 5197,
                  "src": "794:15:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5193,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "794:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 5196,
                  "mutability": "mutable",
                  "name": "owner",
                  "nameLocation": "829:5:28",
                  "nodeType": "VariableDeclaration",
                  "scope": 5197,
                  "src": "821:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5195,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "821:7:28",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "name": "tokenInfo",
              "nameLocation": "744:9:28",
              "nodeType": "StructDefinition",
              "scope": 5203,
              "src": "737:107:28",
              "visibility": "public"
            },
            {
              "functionSelector": "1e5f7e72",
              "id": 5202,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "listen",
              "nameLocation": "861:6:28",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5200,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5199,
                    "mutability": "mutable",
                    "name": "_tokenId",
                    "nameLocation": "876:8:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5202,
                    "src": "868:16:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5198,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "868:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "867:18:28"
              },
              "returnParameters": {
                "id": 5201,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "895:0:28"
              },
              "scope": 5203,
              "src": "852:44:28",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 5491,
          "src": "711:188:28",
          "usedErrors": []
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 5204,
                "name": "ERC721",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 2169,
                "src": "926:6:28"
              },
              "id": 5205,
              "nodeType": "InheritanceSpecifier",
              "src": "926:6:28"
            },
            {
              "baseName": {
                "id": 5206,
                "name": "ERC721Enumerable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 2687,
                "src": "934:16:28"
              },
              "id": 5207,
              "nodeType": "InheritanceSpecifier",
              "src": "934:16:28"
            },
            {
              "baseName": {
                "id": 5208,
                "name": "ERC721URIStorage",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 2843,
                "src": "952:16:28"
              },
              "id": 5209,
              "nodeType": "InheritanceSpecifier",
              "src": "952:16:28"
            },
            {
              "baseName": {
                "id": 5210,
                "name": "ERC721Burnable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 2333,
                "src": "970:14:28"
              },
              "id": 5211,
              "nodeType": "InheritanceSpecifier",
              "src": "970:14:28"
            },
            {
              "baseName": {
                "id": 5212,
                "name": "Ownable",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 112,
                "src": "986:7:28"
              },
              "id": 5213,
              "nodeType": "InheritanceSpecifier",
              "src": "986:7:28"
            }
          ],
          "canonicalName": "ArtGrowNFT",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 5399,
          "linearizedBaseContracts": [
            5399,
            112,
            2333,
            2843,
            2687,
            2874,
            2169,
            2901,
            137,
            2285,
            3580,
            3592,
            3253
          ],
          "name": "ArtGrowNFT",
          "nameLocation": "912:10:28",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "global": false,
              "id": 5217,
              "libraryName": {
                "id": 5214,
                "name": "Counters",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3327,
                "src": "1007:8:28"
              },
              "nodeType": "UsingForDirective",
              "src": "1001:36:28",
              "typeName": {
                "id": 5216,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 5215,
                  "name": "Counters.Counter",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3259,
                  "src": "1020:16:28"
                },
                "referencedDeclaration": 3259,
                "src": "1020:16:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$3259_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              }
            },
            {
              "constant": false,
              "id": 5220,
              "mutability": "mutable",
              "name": "_tokenIdCounter",
              "nameLocation": "1070:15:28",
              "nodeType": "VariableDeclaration",
              "scope": 5399,
              "src": "1045:40:28",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$3259_storage",
                "typeString": "struct Counters.Counter"
              },
              "typeName": {
                "id": 5219,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 5218,
                  "name": "Counters.Counter",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3259,
                  "src": "1045:16:28"
                },
                "referencedDeclaration": 3259,
                "src": "1045:16:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$3259_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              },
              "visibility": "private"
            },
            {
              "constant": false,
              "functionSelector": "8e29c1a7",
              "id": 5225,
              "mutability": "mutable",
              "name": "_tokenInfoList",
              "nameLocation": "1404:14:28",
              "nodeType": "VariableDeclaration",
              "scope": 5399,
              "src": "1357:61:28",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_tokenInfo_$5197_storage_$",
                "typeString": "mapping(uint256 => struct PlayCounter.tokenInfo)"
              },
              "typeName": {
                "id": 5224,
                "keyType": {
                  "id": 5221,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "1365:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "nodeType": "Mapping",
                "src": "1357:39:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_tokenInfo_$5197_storage_$",
                  "typeString": "mapping(uint256 => struct PlayCounter.tokenInfo)"
                },
                "valueType": {
                  "id": 5223,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 5222,
                    "name": "PlayCounter.tokenInfo",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 5197,
                    "src": "1374:21:28"
                  },
                  "referencedDeclaration": 5197,
                  "src": "1374:21:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_tokenInfo_$5197_storage_ptr",
                    "typeString": "struct PlayCounter.tokenInfo"
                  }
                }
              },
              "visibility": "public"
            },
            {
              "constant": false,
              "functionSelector": "4bb8456c",
              "id": 5229,
              "mutability": "mutable",
              "name": "_tokenInfo",
              "nameLocation": "1456:10:28",
              "nodeType": "VariableDeclaration",
              "scope": 5399,
              "src": "1425:41:28",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_tokenInfo_$5197_storage_$dyn_storage",
                "typeString": "struct PlayCounter.tokenInfo[]"
              },
              "typeName": {
                "baseType": {
                  "id": 5227,
                  "nodeType": "UserDefinedTypeName",
                  "pathNode": {
                    "id": 5226,
                    "name": "PlayCounter.tokenInfo",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 5197,
                    "src": "1425:21:28"
                  },
                  "referencedDeclaration": 5197,
                  "src": "1425:21:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_tokenInfo_$5197_storage_ptr",
                    "typeString": "struct PlayCounter.tokenInfo"
                  }
                },
                "id": 5228,
                "nodeType": "ArrayTypeName",
                "src": "1425:23:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_tokenInfo_$5197_storage_$dyn_storage_ptr",
                  "typeString": "struct PlayCounter.tokenInfo[]"
                }
              },
              "visibility": "public"
            },
            {
              "body": {
                "id": 5236,
                "nodeType": "Block",
                "src": "1547:2:28",
                "statements": []
              },
              "id": 5237,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "41727447726f77",
                      "id": 5232,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1529:9:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_c5265cb68a774cc2d126de3c62e419c0f8929a8014b675aae93e70cbb48473bf",
                        "typeString": "literal_string \"ArtGrow\""
                      },
                      "value": "ArtGrow"
                    },
                    {
                      "hexValue": "415247",
                      "id": 5233,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1540:5:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_73423ff7bbf24f26662f84f1ab3d14334103a5250d07b587eef31eb0516f1f73",
                        "typeString": "literal_string \"ARG\""
                      },
                      "value": "ARG"
                    }
                  ],
                  "id": 5234,
                  "kind": "baseConstructorSpecifier",
                  "modifierName": {
                    "id": 5231,
                    "name": "ERC721",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2169,
                    "src": "1522:6:28"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1522:24:28"
                }
              ],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5230,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1519:2:28"
              },
              "returnParameters": {
                "id": 5235,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1547:0:28"
              },
              "scope": 5399,
              "src": "1508:41:28",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 5286,
                "nodeType": "Block",
                "src": "1625:398:28",
                "statements": [
                  {
                    "assignments": [
                      5247
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 5247,
                        "mutability": "mutable",
                        "name": "tokenId",
                        "nameLocation": "1644:7:28",
                        "nodeType": "VariableDeclaration",
                        "scope": 5286,
                        "src": "1636:15:28",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 5246,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "1636:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 5251,
                    "initialValue": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 5248,
                          "name": "_tokenIdCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5220,
                          "src": "1654:15:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Counter_$3259_storage",
                            "typeString": "struct Counters.Counter storage ref"
                          }
                        },
                        "id": 5249,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "current",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3271,
                        "src": "1654:23:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$3259_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$3259_storage_ptr_$",
                          "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                        }
                      },
                      "id": 5250,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1654:25:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1636:43:28"
                  },
                  {
                    "expression": {
                      "arguments": [],
                      "expression": {
                        "argumentTypes": [],
                        "expression": {
                          "id": 5252,
                          "name": "_tokenIdCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5220,
                          "src": "1690:15:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Counter_$3259_storage",
                            "typeString": "struct Counters.Counter storage ref"
                          }
                        },
                        "id": 5254,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "increment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3285,
                        "src": "1690:25:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$3259_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$3259_storage_ptr_$",
                          "typeString": "function (struct Counters.Counter storage pointer)"
                        }
                      },
                      "id": 5255,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1690:27:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5256,
                    "nodeType": "ExpressionStatement",
                    "src": "1690:27:28"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5258,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5239,
                          "src": "1738:2:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5259,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5247,
                          "src": "1742:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 5257,
                        "name": "_safeMint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          1737,
                          1766
                        ],
                        "referencedDeclaration": 1737,
                        "src": "1728:9:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 5260,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1728:22:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5261,
                    "nodeType": "ExpressionStatement",
                    "src": "1728:22:28"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5263,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5247,
                          "src": "1774:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 5264,
                          "name": "uri",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5241,
                          "src": "1783:3:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        ],
                        "id": 5262,
                        "name": "_setTokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2812,
                        "src": "1761:12:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (uint256,string memory)"
                        }
                      },
                      "id": 5265,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1761:26:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5266,
                    "nodeType": "ExpressionStatement",
                    "src": "1761:26:28"
                  },
                  {
                    "assignments": [
                      5271
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 5271,
                        "mutability": "mutable",
                        "name": "newtokenInfo",
                        "nameLocation": "1829:12:28",
                        "nodeType": "VariableDeclaration",
                        "scope": 5286,
                        "src": "1800:41:28",
                        "stateVariable": false,
                        "storageLocation": "memory",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tokenInfo_$5197_memory_ptr",
                          "typeString": "struct PlayCounter.tokenInfo"
                        },
                        "typeName": {
                          "id": 5270,
                          "nodeType": "UserDefinedTypeName",
                          "pathNode": {
                            "id": 5269,
                            "name": "PlayCounter.tokenInfo",
                            "nodeType": "IdentifierPath",
                            "referencedDeclaration": 5197,
                            "src": "1800:21:28"
                          },
                          "referencedDeclaration": 5197,
                          "src": "1800:21:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_tokenInfo_$5197_storage_ptr",
                            "typeString": "struct PlayCounter.tokenInfo"
                          }
                        },
                        "visibility": "internal"
                      }
                    ],
                    "id": 5279,
                    "initialValue": {
                      "arguments": [
                        {
                          "hexValue": "30",
                          "id": 5274,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "1893:1:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        {
                          "id": 5275,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5247,
                          "src": "1917:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "expression": {
                            "id": 5276,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "1945:3:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5277,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "1945:10:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        ],
                        "expression": {
                          "id": 5272,
                          "name": "PlayCounter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5203,
                          "src": "1844:11:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_PlayCounter_$5203_$",
                            "typeString": "type(contract PlayCounter)"
                          }
                        },
                        "id": 5273,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokenInfo",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5197,
                        "src": "1844:21:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_tokenInfo_$5197_storage_ptr_$",
                          "typeString": "type(struct PlayCounter.tokenInfo storage pointer)"
                        }
                      },
                      "id": 5278,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "names": [
                        "listenCount",
                        "tokenId",
                        "owner"
                      ],
                      "nodeType": "FunctionCall",
                      "src": "1844:123:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_tokenInfo_$5197_memory_ptr",
                        "typeString": "struct PlayCounter.tokenInfo memory"
                      }
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1800:167:28"
                  },
                  {
                    "expression": {
                      "id": 5284,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 5280,
                          "name": "_tokenInfoList",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5225,
                          "src": "1975:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_tokenInfo_$5197_storage_$",
                            "typeString": "mapping(uint256 => struct PlayCounter.tokenInfo storage ref)"
                          }
                        },
                        "id": 5282,
                        "indexExpression": {
                          "id": 5281,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5247,
                          "src": "1990:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "1975:23:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tokenInfo_$5197_storage",
                          "typeString": "struct PlayCounter.tokenInfo storage ref"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "id": 5283,
                        "name": "newtokenInfo",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5271,
                        "src": "2000:12:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tokenInfo_$5197_memory_ptr",
                          "typeString": "struct PlayCounter.tokenInfo memory"
                        }
                      },
                      "src": "1975:37:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_tokenInfo_$5197_storage",
                        "typeString": "struct PlayCounter.tokenInfo storage ref"
                      }
                    },
                    "id": 5285,
                    "nodeType": "ExpressionStatement",
                    "src": "1975:37:28"
                  }
                ]
              },
              "functionSelector": "d204c45e",
              "id": 5287,
              "implemented": true,
              "kind": "function",
              "modifiers": [
                {
                  "id": 5244,
                  "kind": "modifierInvocation",
                  "modifierName": {
                    "id": 5243,
                    "name": "onlyOwner",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 31,
                    "src": "1615:9:28"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "1615:9:28"
                }
              ],
              "name": "safeMint",
              "nameLocation": "1568:8:28",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5242,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5239,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "1585:2:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5287,
                    "src": "1577:10:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5238,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1577:7:28",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5241,
                    "mutability": "mutable",
                    "name": "uri",
                    "nameLocation": "1603:3:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5287,
                    "src": "1589:17:28",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 5240,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "1589:6:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "1576:31:28"
              },
              "returnParameters": {
                "id": 5245,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "1625:0:28"
              },
              "scope": 5399,
              "src": "1559:464:28",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 5299,
                "nodeType": "Block",
                "src": "2143:58:28",
                "statements": [
                  {
                    "expression": {
                      "id": 5297,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "expression": {
                          "baseExpression": {
                            "id": 5292,
                            "name": "_tokenInfoList",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5225,
                            "src": "2154:14:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_tokenInfo_$5197_storage_$",
                              "typeString": "mapping(uint256 => struct PlayCounter.tokenInfo storage ref)"
                            }
                          },
                          "id": 5294,
                          "indexExpression": {
                            "id": 5293,
                            "name": "_tokenId",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5289,
                            "src": "2169:8:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2154:24:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_tokenInfo_$5197_storage",
                            "typeString": "struct PlayCounter.tokenInfo storage ref"
                          }
                        },
                        "id": 5295,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "memberName": "listenCount",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5192,
                        "src": "2154:36:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "+=",
                      "rightHandSide": {
                        "hexValue": "31",
                        "id": 5296,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2192:1:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_1_by_1",
                          "typeString": "int_const 1"
                        },
                        "value": "1"
                      },
                      "src": "2154:39:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5298,
                    "nodeType": "ExpressionStatement",
                    "src": "2154:39:28"
                  }
                ]
              },
              "functionSelector": "1e5f7e72",
              "id": 5300,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "listen",
              "nameLocation": "2110:6:28",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5290,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5289,
                    "mutability": "mutable",
                    "name": "_tokenId",
                    "nameLocation": "2125:8:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5300,
                    "src": "2117:16:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5288,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2117:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2116:18:28"
              },
              "returnParameters": {
                "id": 5291,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2143:0:28"
              },
              "scope": 5399,
              "src": "2101:100:28",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": {
                "id": 5312,
                "nodeType": "Block",
                "src": "2278:62:28",
                "statements": [
                  {
                    "expression": {
                      "expression": {
                        "baseExpression": {
                          "id": 5307,
                          "name": "_tokenInfoList",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5225,
                          "src": "2296:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_tokenInfo_$5197_storage_$",
                            "typeString": "mapping(uint256 => struct PlayCounter.tokenInfo storage ref)"
                          }
                        },
                        "id": 5309,
                        "indexExpression": {
                          "id": 5308,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5302,
                          "src": "2311:8:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2296:24:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tokenInfo_$5197_storage",
                          "typeString": "struct PlayCounter.tokenInfo storage ref"
                        }
                      },
                      "id": 5310,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "listenCount",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5192,
                      "src": "2296:36:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "functionReturnParameters": 5306,
                    "id": 5311,
                    "nodeType": "Return",
                    "src": "2289:43:28"
                  }
                ]
              },
              "functionSelector": "df738ee2",
              "id": 5313,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "howmanyListen",
              "nameLocation": "2218:13:28",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5303,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5302,
                    "mutability": "mutable",
                    "name": "_tokenId",
                    "nameLocation": "2240:8:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5313,
                    "src": "2232:16:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5301,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2232:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2231:18:28"
              },
              "returnParameters": {
                "id": 5306,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5305,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 5313,
                    "src": "2270:7:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5304,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2270:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2269:9:28"
              },
              "scope": 5399,
              "src": "2209:131:28",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "body": {
                "id": 5325,
                "nodeType": "Block",
                "src": "2414:56:28",
                "statements": [
                  {
                    "expression": {
                      "expression": {
                        "baseExpression": {
                          "id": 5320,
                          "name": "_tokenInfoList",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5225,
                          "src": "2432:14:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_tokenInfo_$5197_storage_$",
                            "typeString": "mapping(uint256 => struct PlayCounter.tokenInfo storage ref)"
                          }
                        },
                        "id": 5322,
                        "indexExpression": {
                          "id": 5321,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5315,
                          "src": "2447:8:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2432:24:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_tokenInfo_$5197_storage",
                          "typeString": "struct PlayCounter.tokenInfo storage ref"
                        }
                      },
                      "id": 5323,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "owner",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5196,
                      "src": "2432:30:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "functionReturnParameters": 5319,
                    "id": 5324,
                    "nodeType": "Return",
                    "src": "2425:37:28"
                  }
                ]
              },
              "functionSelector": "a123c33e",
              "id": 5326,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "owner",
              "nameLocation": "2357:5:28",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5316,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5315,
                    "mutability": "mutable",
                    "name": "_tokenId",
                    "nameLocation": "2371:8:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5326,
                    "src": "2363:16:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5314,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2363:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2362:18:28"
              },
              "returnParameters": {
                "id": 5319,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5318,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 5326,
                    "src": "2400:7:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5317,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2400:7:28",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2399:9:28"
              },
              "scope": 5399,
              "src": "2348:122:28",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                2140,
                2525
              ],
              "body": {
                "id": 5349,
                "nodeType": "Block",
                "src": "2640:74:28",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5343,
                          "name": "from",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5328,
                          "src": "2678:4:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5344,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5330,
                          "src": "2684:2:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5345,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5332,
                          "src": "2688:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "id": 5346,
                          "name": "batchSize",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5334,
                          "src": "2696:9:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 5340,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "2651:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ArtGrowNFT_$5399_$",
                            "typeString": "type(contract super ArtGrowNFT)"
                          }
                        },
                        "id": 5342,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "_beforeTokenTransfer",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2525,
                        "src": "2651:26:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                          "typeString": "function (address,address,uint256,uint256)"
                        }
                      },
                      "id": 5347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2651:55:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5348,
                    "nodeType": "ExpressionStatement",
                    "src": "2651:55:28"
                  }
                ]
              },
              "id": 5350,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_beforeTokenTransfer",
              "nameLocation": "2491:20:28",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 5338,
                "nodeType": "OverrideSpecifier",
                "overrides": [
                  {
                    "id": 5336,
                    "name": "ERC721",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2169,
                    "src": "2609:6:28"
                  },
                  {
                    "id": 5337,
                    "name": "ERC721Enumerable",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2687,
                    "src": "2617:16:28"
                  }
                ],
                "src": "2600:34:28"
              },
              "parameters": {
                "id": 5335,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5328,
                    "mutability": "mutable",
                    "name": "from",
                    "nameLocation": "2520:4:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5350,
                    "src": "2512:12:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5327,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2512:7:28",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5330,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "2534:2:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5350,
                    "src": "2526:10:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5329,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2526:7:28",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5332,
                    "mutability": "mutable",
                    "name": "tokenId",
                    "nameLocation": "2546:7:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5350,
                    "src": "2538:15:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5331,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2538:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5334,
                    "mutability": "mutable",
                    "name": "batchSize",
                    "nameLocation": "2562:9:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5350,
                    "src": "2554:17:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5333,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2554:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2511:61:28"
              },
              "returnParameters": {
                "id": 5339,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2640:0:28"
              },
              "scope": 5399,
              "src": "2482:232:28",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "baseFunctions": [
                1910,
                2842
              ],
              "body": {
                "id": 5364,
                "nodeType": "Block",
                "src": "2798:39:28",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5361,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5352,
                          "src": "2821:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 5358,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "2809:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ArtGrowNFT_$5399_$",
                            "typeString": "type(contract super ArtGrowNFT)"
                          }
                        },
                        "id": 5360,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "_burn",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2842,
                        "src": "2809:11:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256)"
                        }
                      },
                      "id": 5362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2809:20:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5363,
                    "nodeType": "ExpressionStatement",
                    "src": "2809:20:28"
                  }
                ]
              },
              "id": 5365,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "_burn",
              "nameLocation": "2731:5:28",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 5356,
                "nodeType": "OverrideSpecifier",
                "overrides": [
                  {
                    "id": 5354,
                    "name": "ERC721",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2169,
                    "src": "2772:6:28"
                  },
                  {
                    "id": 5355,
                    "name": "ERC721URIStorage",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2843,
                    "src": "2780:16:28"
                  }
                ],
                "src": "2763:34:28"
              },
              "parameters": {
                "id": 5353,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5352,
                    "mutability": "mutable",
                    "name": "tokenId",
                    "nameLocation": "2745:7:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5365,
                    "src": "2737:15:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5351,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2737:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2736:17:28"
              },
              "returnParameters": {
                "id": 5357,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "2798:0:28"
              },
              "scope": 5399,
              "src": "2722:115:28",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "internal"
            },
            {
              "baseFunctions": [
                1447,
                2786
              ],
              "body": {
                "id": 5380,
                "nodeType": "Block",
                "src": "2992:49:28",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5377,
                          "name": "tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5367,
                          "src": "3025:7:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "id": 5375,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "3010:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ArtGrowNFT_$5399_$",
                            "typeString": "type(contract super ArtGrowNFT)"
                          }
                        },
                        "id": 5376,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "tokenURI",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2786,
                        "src": "3010:14:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                          "typeString": "function (uint256) view returns (string memory)"
                        }
                      },
                      "id": 5378,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3010:23:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "functionReturnParameters": 5374,
                    "id": 5379,
                    "nodeType": "Return",
                    "src": "3003:30:28"
                  }
                ]
              },
              "functionSelector": "c87b56dd",
              "id": 5381,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "tokenURI",
              "nameLocation": "2854:8:28",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 5371,
                "nodeType": "OverrideSpecifier",
                "overrides": [
                  {
                    "id": 5369,
                    "name": "ERC721",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2169,
                    "src": "2928:6:28"
                  },
                  {
                    "id": 5370,
                    "name": "ERC721URIStorage",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2843,
                    "src": "2936:16:28"
                  }
                ],
                "src": "2919:34:28"
              },
              "parameters": {
                "id": 5368,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5367,
                    "mutability": "mutable",
                    "name": "tokenId",
                    "nameLocation": "2871:7:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5381,
                    "src": "2863:15:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5366,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2863:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2862:17:28"
              },
              "returnParameters": {
                "id": 5374,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5373,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 5381,
                    "src": "2972:13:28",
                    "stateVariable": false,
                    "storageLocation": "memory",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string"
                    },
                    "typeName": {
                      "id": 5372,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2972:6:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "2971:15:28"
              },
              "scope": 5399,
              "src": "2845:196:28",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            },
            {
              "baseFunctions": [
                1336,
                2383,
                2727
              ],
              "body": {
                "id": 5397,
                "nodeType": "Block",
                "src": "3216:62:28",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5394,
                          "name": "interfaceId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5383,
                          "src": "3258:11:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
                          }
                        ],
                        "expression": {
                          "id": 5392,
                          "name": "super",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4294967271,
                          "src": "3234:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_super$_ArtGrowNFT_$5399_$",
                            "typeString": "type(contract super ArtGrowNFT)"
                          }
                        },
                        "id": 5393,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "supportsInterface",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 2727,
                        "src": "3234:23:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                          "typeString": "function (bytes4) view returns (bool)"
                        }
                      },
                      "id": 5395,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3234:36:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "functionReturnParameters": 5391,
                    "id": 5396,
                    "nodeType": "Return",
                    "src": "3227:43:28"
                  }
                ]
              },
              "functionSelector": "01ffc9a7",
              "id": 5398,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "supportsInterface",
              "nameLocation": "3058:17:28",
              "nodeType": "FunctionDefinition",
              "overrides": {
                "id": 5388,
                "nodeType": "OverrideSpecifier",
                "overrides": [
                  {
                    "id": 5385,
                    "name": "ERC721",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2169,
                    "src": "3144:6:28"
                  },
                  {
                    "id": 5386,
                    "name": "ERC721Enumerable",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2687,
                    "src": "3152:16:28"
                  },
                  {
                    "id": 5387,
                    "name": "ERC721URIStorage",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 2843,
                    "src": "3169:16:28"
                  }
                ],
                "src": "3135:51:28"
              },
              "parameters": {
                "id": 5384,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5383,
                    "mutability": "mutable",
                    "name": "interfaceId",
                    "nameLocation": "3083:11:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5398,
                    "src": "3076:18:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "typeName": {
                      "id": 5382,
                      "name": "bytes4",
                      "nodeType": "ElementaryTypeName",
                      "src": "3076:6:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3075:20:28"
              },
              "returnParameters": {
                "id": 5391,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5390,
                    "mutability": "mutable",
                    "name": "",
                    "nameLocation": "-1:-1:-1",
                    "nodeType": "VariableDeclaration",
                    "scope": 5398,
                    "src": "3205:4:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 5389,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "3205:4:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3204:6:28"
              },
              "scope": 5399,
              "src": "3049:229:28",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 5491,
          "src": "903:2378:28",
          "usedErrors": []
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "baseName": {
                "id": 5400,
                "name": "ERC20",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 727,
                "src": "3312:5:28"
              },
              "id": 5401,
              "nodeType": "InheritanceSpecifier",
              "src": "3312:5:28"
            }
          ],
          "canonicalName": "Amaranthus",
          "contractDependencies": [],
          "contractKind": "contract",
          "fullyImplemented": true,
          "id": 5490,
          "linearizedBaseContracts": [
            5490,
            727,
            830,
            805,
            3253
          ],
          "name": "Amaranthus",
          "nameLocation": "3298:10:28",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "global": false,
              "id": 5405,
              "libraryName": {
                "id": 5402,
                "name": "Counters",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 3327,
                "src": "3334:8:28"
              },
              "nodeType": "UsingForDirective",
              "src": "3328:36:28",
              "typeName": {
                "id": 5404,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 5403,
                  "name": "Counters.Counter",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3259,
                  "src": "3347:16:28"
                },
                "referencedDeclaration": 3259,
                "src": "3347:16:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$3259_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              }
            },
            {
              "constant": false,
              "id": 5408,
              "mutability": "mutable",
              "name": "_playerCounter",
              "nameLocation": "3397:14:28",
              "nodeType": "VariableDeclaration",
              "scope": 5490,
              "src": "3372:39:28",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$3259_storage",
                "typeString": "struct Counters.Counter"
              },
              "typeName": {
                "id": 5407,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 5406,
                  "name": "Counters.Counter",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 3259,
                  "src": "3372:16:28"
                },
                "referencedDeclaration": 3259,
                "src": "3372:16:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Counter_$3259_storage_ptr",
                  "typeString": "struct Counters.Counter"
                }
              },
              "visibility": "private"
            },
            {
              "global": false,
              "id": 5411,
              "libraryName": {
                "id": 5409,
                "name": "SafeMath",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 4770,
                "src": "3425:8:28"
              },
              "nodeType": "UsingForDirective",
              "src": "3419:27:28",
              "typeName": {
                "id": 5410,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "3438:7:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            {
              "global": false,
              "id": 5415,
              "libraryName": {
                "id": 5412,
                "name": "SafeERC20",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1242,
                "src": "3457:9:28"
              },
              "nodeType": "UsingForDirective",
              "src": "3451:27:28",
              "typeName": {
                "id": 5414,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 5413,
                  "name": "IERC20",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 805,
                  "src": "3471:6:28"
                },
                "referencedDeclaration": 805,
                "src": "3471:6:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_IERC20_$805",
                  "typeString": "contract IERC20"
                }
              }
            },
            {
              "constant": false,
              "id": 5418,
              "mutability": "mutable",
              "name": "MAX_TOKEN_COUNT",
              "nameLocation": "3502:15:28",
              "nodeType": "VariableDeclaration",
              "scope": 5490,
              "src": "3486:45:28",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              },
              "typeName": {
                "id": 5416,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "3486:7:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "value": {
                "hexValue": "3230303030303030303030",
                "id": 5417,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "3520:11:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_20000000000_by_1",
                  "typeString": "int_const 20000000000"
                },
                "value": "20000000000"
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 5439,
                "nodeType": "Block",
                "src": "3602:221:28",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 5426,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "3764:3:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5427,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "3764:10:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 5436,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 5428,
                            "name": "MAX_TOKEN_COUNT",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5418,
                            "src": "3776:15:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 5435,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "hexValue": "3130",
                              "id": 5429,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3794:2:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_10_by_1",
                                "typeString": "int_const 10"
                              },
                              "value": "10"
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "**",
                            "rightExpression": {
                              "arguments": [
                                {
                                  "arguments": [],
                                  "expression": {
                                    "argumentTypes": [],
                                    "id": 5432,
                                    "name": "decimals",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 215,
                                    "src": "3803:8:28",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_view$__$returns$_t_uint8_$",
                                      "typeString": "function () view returns (uint8)"
                                    }
                                  },
                                  "id": 5433,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "3803:10:28",
                                  "tryCall": false,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                ],
                                "id": 5431,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3798:4:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint256_$",
                                  "typeString": "type(uint256)"
                                },
                                "typeName": {
                                  "id": 5430,
                                  "name": "uint",
                                  "nodeType": "ElementaryTypeName",
                                  "src": "3798:4:28",
                                  "typeDescriptions": {}
                                }
                              },
                              "id": 5434,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3798:16:28",
                              "tryCall": false,
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "3794:20:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "3776:38:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 5425,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 544,
                        "src": "3758:5:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                          "typeString": "function (address,uint256)"
                        }
                      },
                      "id": 5437,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3758:57:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5438,
                    "nodeType": "ExpressionStatement",
                    "src": "3758:57:28"
                  }
                ]
              },
              "id": 5440,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "hexValue": "416d6172616e74687573",
                      "id": 5421,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3581:12:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_f4998f9dd32125a3575516bffb4ad09fa7716c929d8985942ea4225005e24622",
                        "typeString": "literal_string \"Amaranthus\""
                      },
                      "value": "Amaranthus"
                    },
                    {
                      "hexValue": "414153",
                      "id": 5422,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3595:5:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_0b3a870b141ddb48504afa3366a3c5f8c3535761e66ce473f74412795a3884d6",
                        "typeString": "literal_string \"AAS\""
                      },
                      "value": "AAS"
                    }
                  ],
                  "id": 5423,
                  "kind": "baseConstructorSpecifier",
                  "modifierName": {
                    "id": 5420,
                    "name": "ERC20",
                    "nodeType": "IdentifierPath",
                    "referencedDeclaration": 727,
                    "src": "3575:5:28"
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "3575:26:28"
                }
              ],
              "name": "",
              "nameLocation": "-1:-1:-1",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5419,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3572:2:28"
              },
              "returnParameters": {
                "id": 5424,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3602:0:28"
              },
              "scope": 5490,
              "src": "3561:262:28",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            {
              "constant": false,
              "id": 5444,
              "mutability": "mutable",
              "name": "lockedUntil",
              "nameLocation": "3867:11:28",
              "nodeType": "VariableDeclaration",
              "scope": 5490,
              "src": "3831:47:28",
              "stateVariable": true,
              "storageLocation": "default",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                "typeString": "mapping(address => uint256)"
              },
              "typeName": {
                "id": 5443,
                "keyType": {
                  "id": 5441,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "3839:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "nodeType": "Mapping",
                "src": "3831:27:28",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                  "typeString": "mapping(address => uint256)"
                },
                "valueType": {
                  "id": 5442,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "3850:7:28",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                }
              },
              "visibility": "private"
            },
            {
              "body": {
                "id": 5488,
                "nodeType": "Block",
                "src": "3982:321:28",
                "statements": [
                  {
                    "expression": {
                      "arguments": [
                        {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 5462,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "expression": {
                              "id": 5456,
                              "name": "block",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4294967292,
                              "src": "4001:5:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_block",
                                "typeString": "block"
                              }
                            },
                            "id": 5457,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "timestamp",
                            "nodeType": "MemberAccess",
                            "src": "4001:15:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": ">=",
                          "rightExpression": {
                            "baseExpression": {
                              "id": 5458,
                              "name": "lockedUntil",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5444,
                              "src": "4020:11:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 5461,
                            "indexExpression": {
                              "expression": {
                                "id": 5459,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4294967281,
                                "src": "4032:3:28",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 5460,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "src": "4032:10:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "4020:23:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "4001:42:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        {
                          "hexValue": "5472616e73616374696f6e206973206c6f636b65642e",
                          "id": 5463,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4045:24:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886",
                            "typeString": "literal_string \"Transaction is locked.\""
                          },
                          "value": "Transaction is locked."
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886",
                            "typeString": "literal_string \"Transaction is locked.\""
                          }
                        ],
                        "id": 5455,
                        "name": "require",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [
                          4294967278,
                          4294967278
                        ],
                        "referencedDeclaration": 4294967278,
                        "src": "3993:7:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                          "typeString": "function (bool,string memory) pure"
                        }
                      },
                      "id": 5464,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3993:77:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5465,
                    "nodeType": "ExpressionStatement",
                    "src": "3993:77:28"
                  },
                  {
                    "expression": {
                      "id": 5474,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftHandSide": {
                        "baseExpression": {
                          "id": 5466,
                          "name": "lockedUntil",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5444,
                          "src": "4135:11:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                            "typeString": "mapping(address => uint256)"
                          }
                        },
                        "id": 5469,
                        "indexExpression": {
                          "expression": {
                            "id": 5467,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967281,
                            "src": "4147:3:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5468,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "4147:10:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": true,
                        "nodeType": "IndexAccess",
                        "src": "4135:23:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "Assignment",
                      "operator": "=",
                      "rightHandSide": {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 5473,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 5470,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4294967292,
                            "src": "4161:5:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 5471,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "4161:15:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "hexValue": "323430",
                          "id": 5472,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "4179:3:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_240_by_1",
                            "typeString": "int_const 240"
                          },
                          "value": "240"
                        },
                        "src": "4161:21:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "4135:47:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 5475,
                    "nodeType": "ExpressionStatement",
                    "src": "4135:47:28"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5477,
                          "name": "to",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5446,
                          "src": "4235:2:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 5478,
                          "name": "value",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5448,
                          "src": "4238:5:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 5476,
                        "name": "transfer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 264,
                        "src": "4226:8:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$_t_bool_$",
                          "typeString": "function (address,uint256) returns (bool)"
                        }
                      },
                      "id": 5479,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4226:18:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "id": 5480,
                    "nodeType": "ExpressionStatement",
                    "src": "4226:18:28"
                  },
                  {
                    "expression": {
                      "arguments": [
                        {
                          "id": 5485,
                          "name": "_tokenId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5452,
                          "src": "4284:8:28",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "expression": {
                          "arguments": [
                            {
                              "id": 5482,
                              "name": "_counter",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5450,
                              "src": "4267:8:28",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 5481,
                            "name": "PlayCounter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5203,
                            "src": "4255:11:28",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_PlayCounter_$5203_$",
                              "typeString": "type(contract PlayCounter)"
                            }
                          },
                          "id": 5483,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "4255:21:28",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_PlayCounter_$5203",
                            "typeString": "contract PlayCounter"
                          }
                        },
                        "id": 5484,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "listen",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5202,
                        "src": "4255:28:28",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_uint256_$returns$__$",
                          "typeString": "function (uint256) external"
                        }
                      },
                      "id": 5486,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "4255:38:28",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 5487,
                    "nodeType": "ExpressionStatement",
                    "src": "4255:38:28"
                  }
                ]
              },
              "functionSelector": "f7068cf0",
              "id": 5489,
              "implemented": true,
              "kind": "function",
              "modifiers": [],
              "name": "sendTransaction",
              "nameLocation": "3896:15:28",
              "nodeType": "FunctionDefinition",
              "parameters": {
                "id": 5453,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 5446,
                    "mutability": "mutable",
                    "name": "to",
                    "nameLocation": "3920:2:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5489,
                    "src": "3912:10:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5445,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3912:7:28",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5448,
                    "mutability": "mutable",
                    "name": "value",
                    "nameLocation": "3932:5:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5489,
                    "src": "3924:13:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5447,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3924:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5450,
                    "mutability": "mutable",
                    "name": "_counter",
                    "nameLocation": "3946:8:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5489,
                    "src": "3938:16:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 5449,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3938:7:28",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 5452,
                    "mutability": "mutable",
                    "name": "_tokenId",
                    "nameLocation": "3963:8:28",
                    "nodeType": "VariableDeclaration",
                    "scope": 5489,
                    "src": "3955:16:28",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5451,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "3955:7:28",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "visibility": "internal"
                  }
                ],
                "src": "3911:61:28"
              },
              "returnParameters": {
                "id": 5454,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "3982:0:28"
              },
              "scope": 5490,
              "src": "3887:416:28",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            }
          ],
          "scope": 5491,
          "src": "3289:1023:28",
          "usedErrors": []
        }
      ],
      "src": "32:4280:28"
    },
    "compiler": {
      "name": "solc",
      "version": "0.8.14+commit.80d49f37.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.4.13",
    "updatedAt": "2023-06-18T10:24:17.247Z",
    "devdoc": {
      "kind": "dev",
      "methods": {
        "approve(address,uint256)": {
          "details": "See {IERC721-approve}."
        },
        "balanceOf(address)": {
          "details": "See {IERC721-balanceOf}."
        },
        "burn(uint256)": {
          "details": "Burns `tokenId`. See {ERC721-_burn}. Requirements: - The caller must own `tokenId` or be an approved operator."
        },
        "getApproved(uint256)": {
          "details": "See {IERC721-getApproved}."
        },
        "isApprovedForAll(address,address)": {
          "details": "See {IERC721-isApprovedForAll}."
        },
        "name()": {
          "details": "See {IERC721Metadata-name}."
        },
        "owner()": {
          "details": "Returns the address of the current owner."
        },
        "ownerOf(uint256)": {
          "details": "See {IERC721-ownerOf}."
        },
        "renounceOwnership()": {
          "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."
        },
        "safeTransferFrom(address,address,uint256)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          "details": "See {IERC721-safeTransferFrom}."
        },
        "setApprovalForAll(address,bool)": {
          "details": "See {IERC721-setApprovalForAll}."
        },
        "symbol()": {
          "details": "See {IERC721Metadata-symbol}."
        },
        "tokenByIndex(uint256)": {
          "details": "See {IERC721Enumerable-tokenByIndex}."
        },
        "tokenOfOwnerByIndex(address,uint256)": {
          "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
        },
        "totalSupply()": {
          "details": "See {IERC721Enumerable-totalSupply}."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC721-transferFrom}."
        },
        "transferOwnership(address)": {
          "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
        }
      },
      "version": 1
    },
    "userdoc": {
      "kind": "user",
      "methods": {},
      "version": 1
    }
  }
]