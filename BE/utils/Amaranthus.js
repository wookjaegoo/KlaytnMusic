module.exports =[
    {
        "contractName": "Amaranthus",
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
                "name": "spender",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
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
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              }
            ],
            "name": "Transfer",
            "type": "event"
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
                "name": "spender",
                "type": "address"
              }
            ],
            "name": "allowance",
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
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "account",
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
            "inputs": [],
            "name": "decimals",
            "outputs": [
              {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
              }
            ],
            "name": "decreaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "address",
                "name": "spender",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
              }
            ],
            "name": "increaseAllowance",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
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
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
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
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transferFrom",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
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
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "_counter",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
              }
            ],
            "name": "sendTransaction",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        "metadata": "{\"compiler\":{\"version\":\"0.8.14+commit.80d49f37\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"_counter\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"sendTransaction\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/RoyalClub.sol\":\"Amaranthus\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32\",\"dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz\"]},\"@openzeppelin/contracts/interfaces/IERC165.sol\":{\"keccak256\":\"0xd04b0f06e0666f29cf7cccc82894de541e19bb30a765b107b1e40bb7fe5f7d7a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7b652499d098e88d8d878374616bb58434301061cae2253298b3f374044e0ddb\",\"dweb:/ipfs/QmbhAzctqo5jrSKU6idHdVyqfmzCcDbNUPvmx4GiXxfA6q\"]},\"@openzeppelin/contracts/interfaces/IERC4906.sol\":{\"keccak256\":\"0x2a9dadb806be80dd451821f1f1190eb9aa6f6edae85b185db29d60767cc0c5f4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5c25cac8dbe5bd96320053d23c3dacdb875e629d7c53ac00892eb7aa8500bde6\",\"dweb:/ipfs/Qmaf2oqbxxdJA9DphAoH4UCb8aXEAVM8fnu6qMxHJ5ta4A\"]},\"@openzeppelin/contracts/interfaces/IERC721.sol\":{\"keccak256\":\"0xaf297d12d8d4a57fe01a70f0ef38908f208e3faedc577056d0b728fa2f3ccf0c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fbfaf37123958822a2720a4ea29651be00edab787540b770f73d3e025d286ff8\",\"dweb:/ipfs/QmbzgWeTm8hJVUqWrNAwFjshqbYVyeGpQA8D1huzxQdmw6\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xa56ca923f70c1748830700250b19c61b70db9a683516dc5e216694a50445d99c\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cac938788bc4be12101e59d45588b4e059579f4e61062e1cda8d6b06c0191b15\",\"dweb:/ipfs/QmV2JKCyjTVH3rkWNrfdJRhAT7tZ3usAN2XcnD4h53Mvih\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x287b55befed2961a7eabd7d7b1b2839cbca8a5b80ef8dcbb25ed3d4c2002c305\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bd39944e8fc06be6dbe2dd1d8449b5336e23c6a7ba3e8e9ae5ae0f37f35283f5\",\"dweb:/ipfs/QmPV3FGYjVwvKSgAXKUN3r9T9GwniZz83CxBpM7vyj2G53\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol\":{\"keccak256\":\"0x8de418a5503946cabe331f35fe242d3201a73f67f77aaeb7110acb1f30423aca\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5a376d3dda2cb70536c0a45c208b29b34ac560c4cb4f513a42079f96ba47d2dd\",\"dweb:/ipfs/QmZQg6gn1sUpM8wHzwNvSnihumUCAhxD119MpXeKp8B9s8\"]},\"@openzeppelin/contracts/token/ERC20/extensions/IERC20Permit.sol\":{\"keccak256\":\"0xec63854014a5b4f2b3290ab9103a21bdf902a508d0f41a8573fea49e98bf571a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://bc5b5dc12fbc4002f282eaa7a5f06d8310ed62c1c77c5770f6283e058454c39a\",\"dweb:/ipfs/Qme9rE2wS3yBuyJq9GgbmzbsBQsW2M2sVFqYYLw7bosGrv\"]},\"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\":{\"keccak256\":\"0x909d608c2db6eb165ca178c81289a07ed2e118e444d0025b2a85c97d0b44a4fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://656cda26512ddd7373c2d5551c8fae759fc30f05b10f0fc2e738e9274199dbd4\",\"dweb:/ipfs/QmTSArSzQRFbQmHgq7U1PZXnsDFhvDZhKVu9CzMG4yo6Lx\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x2c309e7df9e05e6ce15bedfe74f3c61b467fc37e0fae9eab496acf5ea0bbd7ff\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7063b5c98711a98018ba4635ac74cee1c1cfa2ea01099498e062699ed9530005\",\"dweb:/ipfs/QmeJ8rGXkcv7RrqLdAW8PCXPAykxVsddfYY6g5NaTwmRFE\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x5bce51e11f7d194b79ea59fe00c9e8de9fa2c5530124960f29a24d4c740a3266\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7e66dfde185df46104c11bc89d08fa0760737aa59a2b8546a656473d810a8ea4\",\"dweb:/ipfs/QmXvyqtXPaPss2PD7eqPoSao5Szm2n6UMoiG8TZZDjmChR\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol\":{\"keccak256\":\"0x52da94e59d870f54ca0eb4f485c3d9602011f668ba34d72c88124a1496ebaab1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://09656a37963a61e79df0b718ad0ec323cd29d409d6ead33dbb91d0770ff87fa4\",\"dweb:/ipfs/QmXLWCYoMpZ4SecK4kVaL53LZWXZNbQG8gUzACmZ6A64rE\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0xa8796bd16014cefb8c26449413981a49c510f92a98d6828494f5fd046223ced3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://63a5e0bb5a7d182e0d0eef87033f78115eab791de3626a929bc98c157087880a\",\"dweb:/ipfs/QmetkXAu2CJKS4qrZtEQPU8okAPwUwa6HL4XYwk8vrYMk8\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\":{\"keccak256\":\"0x7942989e3525aec1672469e4c65fb33fbd19c785c9cadbcb70fcbe1fe8bfdd37\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6c9f260258c2be0e3b75f8ca285872c4bfa3a8fc97fdc2e62366c78abf22b54f\",\"dweb:/ipfs/QmTg1DMNwCDj8NVi6i1noqx7cxuRdPP4VyW4fzDkKAKmH2\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34\",\"dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x006dd67219697fe68d7fbfdea512e7c4cb64a43565ed86171d67e844982da6fa\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2455248c8ddd9cc6a7af76a13973cddf222072427e7b0e2a7d1aff345145e931\",\"dweb:/ipfs/QmfYjnjRbWqYpuxurqveE6HtzsY1Xx323J428AKQgtBJZm\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x3088eb2868e8d13d89d16670b5f8612c4ab9ff8956272837d8e90106c59c14a0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b81d9ff6559ea5c47fc573e17ece6d9ba5d6839e213e6ebc3b4c5c8fe4199d7f\",\"dweb:/ipfs/QmPCW1bFisUzJkyjroY3yipwfism9RRCigCcK1hbXtVM8n\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"@openzeppelin/contracts/utils/math/Math.sol\":{\"keccak256\":\"0xe4455ac1eb7fc497bb7402579e7b4d64d928b846fce7d2b6fde06d366f21c2b3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://cc8841b3cd48ad125e2f46323c8bad3aa0e88e399ec62acb9e57efa7e7c8058c\",\"dweb:/ipfs/QmSqE4mXHA2BXW58deDbXE8MTcsL5JSKNDbm23sVQxRLPS\"]},\"@openzeppelin/contracts/utils/math/SafeMath.sol\":{\"keccak256\":\"0x58b21219689909c4f8339af00813760337f7e2e7f169a97fe49e2896dcfb3b9a\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ef8e012e946dec20e59f2d4446f4b44bb098f3fa8bac103b1b5112fff777447b\",\"dweb:/ipfs/QmVTooKWcLkJ9W68yNX4MgdrbAKiAXwuRN9A7f4NkdcdtQ\"]},\"@openzeppelin/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0xf92515413956f529d95977adc9b0567d583c6203fc31ab1c23824c35187e3ddc\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c50fcc459e49a9858b6d8ad5f911295cb7c9ab57567845a250bf0153f84a95c7\",\"dweb:/ipfs/QmcEW85JRzvDkQggxiBBLVAasXWdkhEysqypj9EaB6H2g6\"]},\"project:/contracts/RoyalClub.sol\":{\"keccak256\":\"0xcb45bfcf0c22061e8e74cb2def287ff82843904f9ce728e0b66c8e08bb021934\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://f947d7ddb42726e6a05f6da50e093584350654d1918b56889446b836b24cc06a\",\"dweb:/ipfs/QmRjqtPGaWfThNrnZD1kP3hccFZCWyTRzWLt3NqJFAK9Cm\"]}},\"version\":1}",
        "bytecode": "0x60806040526404a817c8006006553480156200001a57600080fd5b506040518060400160405280600a81526020017f416d6172616e74687573000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f414153000000000000000000000000000000000000000000000000000000000081525081600390805190602001906200009f92919062000282565b508060049080519060200190620000b892919062000282565b505050620000fc33620000d06200010260201b60201c565b60ff16600a620000e19190620004bf565b600654620000f0919062000510565b6200010b60201b60201c565b620006e3565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036200017d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200017490620005d2565b60405180910390fd5b62000191600083836200027860201b60201c565b8060026000828254620001a59190620005f4565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000258919062000662565b60405180910390a362000274600083836200027d60201b60201c565b5050565b505050565b505050565b8280546200029090620006ae565b90600052602060002090601f016020900481019282620002b4576000855562000300565b82601f10620002cf57805160ff191683800117855562000300565b8280016001018555821562000300579182015b82811115620002ff578251825591602001919060010190620002e2565b5b5090506200030f919062000313565b5090565b5b808211156200032e57600081600090555060010162000314565b5090565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620003c05780860481111562000398576200039762000332565b5b6001851615620003a85780820291505b8081029050620003b88562000361565b945062000378565b94509492505050565b600082620003db5760019050620004ae565b81620003eb5760009050620004ae565b81600181146200040457600281146200040f5762000445565b6001915050620004ae565b60ff84111562000424576200042362000332565b5b8360020a9150848211156200043e576200043d62000332565b5b50620004ae565b5060208310610133831016604e8410600b84101617156200047f5782820a90508381111562000479576200047862000332565b5b620004ae565b6200048e84848460016200036e565b92509050818404811115620004a857620004a762000332565b5b81810290505b9392505050565b6000819050919050565b6000620004cc82620004b5565b9150620004d983620004b5565b9250620005087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484620003c9565b905092915050565b60006200051d82620004b5565b91506200052a83620004b5565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000566576200056562000332565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000620005ba601f8362000571565b9150620005c78262000582565b602082019050919050565b60006020820190508181036000830152620005ed81620005ab565b9050919050565b60006200060182620004b5565b91506200060e83620004b5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000646576200064562000332565b5b828201905092915050565b6200065c81620004b5565b82525050565b600060208201905062000679600083018462000651565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620006c757607f821691505b602082108103620006dd57620006dc6200067f565b5b50919050565b6114a280620006f36000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a357806395d89b41146101d3578063a457c2d7146101f1578063a9059cbb14610221578063dd62ed3e14610251578063f7068cf014610281576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610c8a565b60405180910390f35b6100f160048036038101906100ec9190610d45565b61032f565b6040516100fe9190610da0565b60405180910390f35b61010f610352565b60405161011c9190610dca565b60405180910390f35b61013f600480360381019061013a9190610de5565b61035c565b60405161014c9190610da0565b60405180910390f35b61015d61038b565b60405161016a9190610e54565b60405180910390f35b61018d60048036038101906101889190610d45565b610394565b60405161019a9190610da0565b60405180910390f35b6101bd60048036038101906101b89190610e6f565b6103cb565b6040516101ca9190610dca565b60405180910390f35b6101db610413565b6040516101e89190610c8a565b60405180910390f35b61020b60048036038101906102069190610d45565b6104a5565b6040516102189190610da0565b60405180910390f35b61023b60048036038101906102369190610d45565b61051c565b6040516102489190610da0565b60405180910390f35b61026b60048036038101906102669190610e9c565b61053f565b6040516102789190610dca565b60405180910390f35b61029b60048036038101906102969190610edc565b6105c6565b005b6060600380546102ac90610f72565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f72565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a610714565b905061034781858561071c565b600191505092915050565b6000600254905090565b600080610367610714565b90506103748582856108e5565b61037f858585610971565b60019150509392505050565b60006012905090565b60008061039f610714565b90506103c08185856103b1858961053f565b6103bb9190610fd2565b61071c565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461042290610f72565b80601f016020809104026020016040519081016040528092919081815260200182805461044e90610f72565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b5050505050905090565b6000806104b0610714565b905060006104be828661053f565b905083811015610503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fa9061109a565b60405180910390fd5b610510828686840361071c565b60019250505092915050565b600080610527610714565b9050610534818585610971565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054421015610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063f90611106565b60405180910390fd5b60f0426106559190610fd2565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506106a2848461051c565b508173ffffffffffffffffffffffffffffffffffffffff16631e5f7e72826040518263ffffffff1660e01b81526004016106dc9190610dca565b600060405180830381600087803b1580156106f657600080fd5b505af115801561070a573d6000803e3d6000fd5b5050505050505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361078b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078290611198565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f19061122a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108d89190610dca565b60405180910390a3505050565b60006108f1848461053f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461096b578181101561095d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095490611296565b60405180910390fd5b61096a848484840361071c565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d790611328565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a46906113ba565b60405180910390fd5b610a5a838383610be7565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ae0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad79061144c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bce9190610dca565b60405180910390a3610be1848484610bec565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c2b578082015181840152602081019050610c10565b83811115610c3a576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c5c82610bf1565b610c668185610bfc565b9350610c76818560208601610c0d565b610c7f81610c40565b840191505092915050565b60006020820190508181036000830152610ca48184610c51565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cdc82610cb1565b9050919050565b610cec81610cd1565b8114610cf757600080fd5b50565b600081359050610d0981610ce3565b92915050565b6000819050919050565b610d2281610d0f565b8114610d2d57600080fd5b50565b600081359050610d3f81610d19565b92915050565b60008060408385031215610d5c57610d5b610cac565b5b6000610d6a85828601610cfa565b9250506020610d7b85828601610d30565b9150509250929050565b60008115159050919050565b610d9a81610d85565b82525050565b6000602082019050610db56000830184610d91565b92915050565b610dc481610d0f565b82525050565b6000602082019050610ddf6000830184610dbb565b92915050565b600080600060608486031215610dfe57610dfd610cac565b5b6000610e0c86828701610cfa565b9350506020610e1d86828701610cfa565b9250506040610e2e86828701610d30565b9150509250925092565b600060ff82169050919050565b610e4e81610e38565b82525050565b6000602082019050610e696000830184610e45565b92915050565b600060208284031215610e8557610e84610cac565b5b6000610e9384828501610cfa565b91505092915050565b60008060408385031215610eb357610eb2610cac565b5b6000610ec185828601610cfa565b9250506020610ed285828601610cfa565b9150509250929050565b60008060008060808587031215610ef657610ef5610cac565b5b6000610f0487828801610cfa565b9450506020610f1587828801610d30565b9350506040610f2687828801610cfa565b9250506060610f3787828801610d30565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f8a57607f821691505b602082108103610f9d57610f9c610f43565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fdd82610d0f565b9150610fe883610d0f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561101d5761101c610fa3565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611084602583610bfc565b915061108f82611028565b604082019050919050565b600060208201905081810360008301526110b381611077565b9050919050565b7f5472616e73616374696f6e206973206c6f636b65642e00000000000000000000600082015250565b60006110f0601683610bfc565b91506110fb826110ba565b602082019050919050565b6000602082019050818103600083015261111f816110e3565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611182602483610bfc565b915061118d82611126565b604082019050919050565b600060208201905081810360008301526111b181611175565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611214602283610bfc565b915061121f826111b8565b604082019050919050565b6000602082019050818103600083015261124381611207565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611280601d83610bfc565b915061128b8261124a565b602082019050919050565b600060208201905081810360008301526112af81611273565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611312602583610bfc565b915061131d826112b6565b604082019050919050565b6000602082019050818103600083015261134181611305565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006113a4602383610bfc565b91506113af82611348565b604082019050919050565b600060208201905081810360008301526113d381611397565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611436602683610bfc565b9150611441826113da565b604082019050919050565b6000602082019050818103600083015261146581611429565b905091905056fea2646970667358221220f89a16e40754a01032175f1e5f049346bfd38c18c75f8a728a2a50a1ae16c81f64736f6c634300080e0033",
        "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a08231146101a357806395d89b41146101d3578063a457c2d7146101f1578063a9059cbb14610221578063dd62ed3e14610251578063f7068cf014610281576100b4565b806306fdde03146100b9578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610125578063313ce567146101555780633950935114610173575b600080fd5b6100c161029d565b6040516100ce9190610c8a565b60405180910390f35b6100f160048036038101906100ec9190610d45565b61032f565b6040516100fe9190610da0565b60405180910390f35b61010f610352565b60405161011c9190610dca565b60405180910390f35b61013f600480360381019061013a9190610de5565b61035c565b60405161014c9190610da0565b60405180910390f35b61015d61038b565b60405161016a9190610e54565b60405180910390f35b61018d60048036038101906101889190610d45565b610394565b60405161019a9190610da0565b60405180910390f35b6101bd60048036038101906101b89190610e6f565b6103cb565b6040516101ca9190610dca565b60405180910390f35b6101db610413565b6040516101e89190610c8a565b60405180910390f35b61020b60048036038101906102069190610d45565b6104a5565b6040516102189190610da0565b60405180910390f35b61023b60048036038101906102369190610d45565b61051c565b6040516102489190610da0565b60405180910390f35b61026b60048036038101906102669190610e9c565b61053f565b6040516102789190610dca565b60405180910390f35b61029b60048036038101906102969190610edc565b6105c6565b005b6060600380546102ac90610f72565b80601f01602080910402602001604051908101604052809291908181526020018280546102d890610f72565b80156103255780601f106102fa57610100808354040283529160200191610325565b820191906000526020600020905b81548152906001019060200180831161030857829003601f168201915b5050505050905090565b60008061033a610714565b905061034781858561071c565b600191505092915050565b6000600254905090565b600080610367610714565b90506103748582856108e5565b61037f858585610971565b60019150509392505050565b60006012905090565b60008061039f610714565b90506103c08185856103b1858961053f565b6103bb9190610fd2565b61071c565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606004805461042290610f72565b80601f016020809104026020016040519081016040528092919081815260200182805461044e90610f72565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b5050505050905090565b6000806104b0610714565b905060006104be828661053f565b905083811015610503576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fa9061109a565b60405180910390fd5b610510828686840361071c565b60019250505092915050565b600080610527610714565b9050610534818585610971565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054421015610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063f90611106565b60405180910390fd5b60f0426106559190610fd2565b600760003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506106a2848461051c565b508173ffffffffffffffffffffffffffffffffffffffff16631e5f7e72826040518263ffffffff1660e01b81526004016106dc9190610dca565b600060405180830381600087803b1580156106f657600080fd5b505af115801561070a573d6000803e3d6000fd5b5050505050505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361078b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078290611198565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107fa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f19061122a565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108d89190610dca565b60405180910390a3505050565b60006108f1848461053f565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461096b578181101561095d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095490611296565b60405180910390fd5b61096a848484840361071c565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036109e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109d790611328565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a4f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a46906113ba565b60405180910390fd5b610a5a838383610be7565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610ae0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ad79061144c565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bce9190610dca565b60405180910390a3610be1848484610bec565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c2b578082015181840152602081019050610c10565b83811115610c3a576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c5c82610bf1565b610c668185610bfc565b9350610c76818560208601610c0d565b610c7f81610c40565b840191505092915050565b60006020820190508181036000830152610ca48184610c51565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cdc82610cb1565b9050919050565b610cec81610cd1565b8114610cf757600080fd5b50565b600081359050610d0981610ce3565b92915050565b6000819050919050565b610d2281610d0f565b8114610d2d57600080fd5b50565b600081359050610d3f81610d19565b92915050565b60008060408385031215610d5c57610d5b610cac565b5b6000610d6a85828601610cfa565b9250506020610d7b85828601610d30565b9150509250929050565b60008115159050919050565b610d9a81610d85565b82525050565b6000602082019050610db56000830184610d91565b92915050565b610dc481610d0f565b82525050565b6000602082019050610ddf6000830184610dbb565b92915050565b600080600060608486031215610dfe57610dfd610cac565b5b6000610e0c86828701610cfa565b9350506020610e1d86828701610cfa565b9250506040610e2e86828701610d30565b9150509250925092565b600060ff82169050919050565b610e4e81610e38565b82525050565b6000602082019050610e696000830184610e45565b92915050565b600060208284031215610e8557610e84610cac565b5b6000610e9384828501610cfa565b91505092915050565b60008060408385031215610eb357610eb2610cac565b5b6000610ec185828601610cfa565b9250506020610ed285828601610cfa565b9150509250929050565b60008060008060808587031215610ef657610ef5610cac565b5b6000610f0487828801610cfa565b9450506020610f1587828801610d30565b9350506040610f2687828801610cfa565b9250506060610f3787828801610d30565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f8a57607f821691505b602082108103610f9d57610f9c610f43565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610fdd82610d0f565b9150610fe883610d0f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561101d5761101c610fa3565b5b828201905092915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611084602583610bfc565b915061108f82611028565b604082019050919050565b600060208201905081810360008301526110b381611077565b9050919050565b7f5472616e73616374696f6e206973206c6f636b65642e00000000000000000000600082015250565b60006110f0601683610bfc565b91506110fb826110ba565b602082019050919050565b6000602082019050818103600083015261111f816110e3565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611182602483610bfc565b915061118d82611126565b604082019050919050565b600060208201905081810360008301526111b181611175565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611214602283610bfc565b915061121f826111b8565b604082019050919050565b6000602082019050818103600083015261124381611207565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611280601d83610bfc565b915061128b8261124a565b602082019050919050565b600060208201905081810360008301526112af81611273565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611312602583610bfc565b915061131d826112b6565b604082019050919050565b6000602082019050818103600083015261134181611305565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006113a4602383610bfc565b91506113af82611348565b604082019050919050565b600060208201905081810360008301526113d381611397565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611436602683610bfc565b9150611441826113da565b604082019050919050565b6000602082019050818103600083015261146581611429565b905091905056fea2646970667358221220f89a16e40754a01032175f1e5f049346bfd38c18c75f8a728a2a50a1ae16c81f64736f6c634300080e0033",
        "immutableReferences": {},
        "generatedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:5293:30",
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
                              "value": "0x11"
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
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "7:180:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "244:51:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "254:34:30",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "279:1:30",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "282:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "shr",
                            "nodeType": "YulIdentifier",
                            "src": "275:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "275:13:30"
                        },
                        "variableNames": [
                          {
                            "name": "newValue",
                            "nodeType": "YulIdentifier",
                            "src": "254:8:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "shift_right_1_unsigned",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "225:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "newValue",
                      "nodeType": "YulTypedName",
                      "src": "235:8:30",
                      "type": ""
                    }
                  ],
                  "src": "193:102:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "374:775:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "384:15:30",
                        "value": {
                          "name": "_power",
                          "nodeType": "YulIdentifier",
                          "src": "393:6:30"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "384:5:30"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "408:14:30",
                        "value": {
                          "name": "_base",
                          "nodeType": "YulIdentifier",
                          "src": "417:5:30"
                        },
                        "variableNames": [
                          {
                            "name": "base",
                            "nodeType": "YulIdentifier",
                            "src": "408:4:30"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "466:677:30",
                          "statements": [
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "554:22:30",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nodeType": "YulIdentifier",
                                        "src": "556:16:30"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "556:18:30"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "556:18:30"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "532:4:30"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "name": "max",
                                        "nodeType": "YulIdentifier",
                                        "src": "542:3:30"
                                      },
                                      {
                                        "name": "base",
                                        "nodeType": "YulIdentifier",
                                        "src": "547:4:30"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "div",
                                      "nodeType": "YulIdentifier",
                                      "src": "538:3:30"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "538:14:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nodeType": "YulIdentifier",
                                  "src": "529:2:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "529:24:30"
                              },
                              "nodeType": "YulIf",
                              "src": "526:50:30"
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "621:419:30",
                                "statements": [
                                  {
                                    "nodeType": "YulAssignment",
                                    "src": "1001:25:30",
                                    "value": {
                                      "arguments": [
                                        {
                                          "name": "power",
                                          "nodeType": "YulIdentifier",
                                          "src": "1014:5:30"
                                        },
                                        {
                                          "name": "base",
                                          "nodeType": "YulIdentifier",
                                          "src": "1021:4:30"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "1010:3:30"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "1010:16:30"
                                    },
                                    "variableNames": [
                                      {
                                        "name": "power",
                                        "nodeType": "YulIdentifier",
                                        "src": "1001:5:30"
                                      }
                                    ]
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "596:8:30"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "606:1:30",
                                    "type": "",
                                    "value": "1"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "592:3:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "592:16:30"
                              },
                              "nodeType": "YulIf",
                              "src": "589:451:30"
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "1053:23:30",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "1065:4:30"
                                  },
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "1071:4:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "mul",
                                  "nodeType": "YulIdentifier",
                                  "src": "1061:3:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1061:15:30"
                              },
                              "variableNames": [
                                {
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "1053:4:30"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulAssignment",
                              "src": "1089:44:30",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "1124:8:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "shift_right_1_unsigned",
                                  "nodeType": "YulIdentifier",
                                  "src": "1101:22:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1101:32:30"
                              },
                              "variableNames": [
                                {
                                  "name": "exponent",
                                  "nodeType": "YulIdentifier",
                                  "src": "1089:8:30"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "442:8:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "452:1:30",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "439:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "439:15:30"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "455:2:30",
                          "statements": []
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "435:3:30",
                          "statements": []
                        },
                        "src": "431:712:30"
                      }
                    ]
                  },
                  "name": "checked_exp_helper",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "_power",
                      "nodeType": "YulTypedName",
                      "src": "329:6:30",
                      "type": ""
                    },
                    {
                      "name": "_base",
                      "nodeType": "YulTypedName",
                      "src": "337:5:30",
                      "type": ""
                    },
                    {
                      "name": "exponent",
                      "nodeType": "YulTypedName",
                      "src": "344:8:30",
                      "type": ""
                    },
                    {
                      "name": "max",
                      "nodeType": "YulTypedName",
                      "src": "354:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "power",
                      "nodeType": "YulTypedName",
                      "src": "362:5:30",
                      "type": ""
                    },
                    {
                      "name": "base",
                      "nodeType": "YulTypedName",
                      "src": "369:4:30",
                      "type": ""
                    }
                  ],
                  "src": "301:848:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1215:1013:30",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1410:20:30",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1412:10:30",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1421:1:30",
                                "type": "",
                                "value": "1"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "1412:5:30"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "1423:5:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "1400:8:30"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1393:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1393:16:30"
                        },
                        "nodeType": "YulIf",
                        "src": "1390:40:30"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1455:20:30",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1457:10:30",
                              "value": {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "1466:1:30",
                                "type": "",
                                "value": "0"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "1457:5:30"
                                }
                              ]
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "1468:5:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "1449:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "1442:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1442:12:30"
                        },
                        "nodeType": "YulIf",
                        "src": "1439:36:30"
                      },
                      {
                        "cases": [
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "1585:20:30",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "1587:10:30",
                                  "value": {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "1596:1:30",
                                    "type": "",
                                    "value": "1"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "power",
                                      "nodeType": "YulIdentifier",
                                      "src": "1587:5:30"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulLeave",
                                  "src": "1598:5:30"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "1578:27:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1583:1:30",
                              "type": "",
                              "value": "1"
                            }
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "1629:176:30",
                              "statements": [
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1664:22:30",
                                    "statements": [
                                      {
                                        "expression": {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "panic_error_0x11",
                                            "nodeType": "YulIdentifier",
                                            "src": "1666:16:30"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1666:18:30"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1666:18:30"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "arguments": [
                                      {
                                        "name": "exponent",
                                        "nodeType": "YulIdentifier",
                                        "src": "1649:8:30"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1659:3:30",
                                        "type": "",
                                        "value": "255"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "gt",
                                      "nodeType": "YulIdentifier",
                                      "src": "1646:2:30"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1646:17:30"
                                  },
                                  "nodeType": "YulIf",
                                  "src": "1643:43:30"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "1699:25:30",
                                  "value": {
                                    "arguments": [
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "1712:1:30",
                                        "type": "",
                                        "value": "2"
                                      },
                                      {
                                        "name": "exponent",
                                        "nodeType": "YulIdentifier",
                                        "src": "1715:8:30"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "exp",
                                      "nodeType": "YulIdentifier",
                                      "src": "1708:3:30"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1708:16:30"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "power",
                                      "nodeType": "YulIdentifier",
                                      "src": "1699:5:30"
                                    }
                                  ]
                                },
                                {
                                  "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1755:22:30",
                                    "statements": [
                                      {
                                        "expression": {
                                          "arguments": [],
                                          "functionName": {
                                            "name": "panic_error_0x11",
                                            "nodeType": "YulIdentifier",
                                            "src": "1757:16:30"
                                          },
                                          "nodeType": "YulFunctionCall",
                                          "src": "1757:18:30"
                                        },
                                        "nodeType": "YulExpressionStatement",
                                        "src": "1757:18:30"
                                      }
                                    ]
                                  },
                                  "condition": {
                                    "arguments": [
                                      {
                                        "name": "power",
                                        "nodeType": "YulIdentifier",
                                        "src": "1743:5:30"
                                      },
                                      {
                                        "name": "max",
                                        "nodeType": "YulIdentifier",
                                        "src": "1750:3:30"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "gt",
                                      "nodeType": "YulIdentifier",
                                      "src": "1740:2:30"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "1740:14:30"
                                  },
                                  "nodeType": "YulIf",
                                  "src": "1737:40:30"
                                },
                                {
                                  "nodeType": "YulLeave",
                                  "src": "1790:5:30"
                                }
                              ]
                            },
                            "nodeType": "YulCase",
                            "src": "1614:191:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1619:1:30",
                              "type": "",
                              "value": "2"
                            }
                          }
                        ],
                        "expression": {
                          "name": "base",
                          "nodeType": "YulIdentifier",
                          "src": "1535:4:30"
                        },
                        "nodeType": "YulSwitch",
                        "src": "1528:277:30"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "1937:123:30",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "1951:28:30",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "base",
                                    "nodeType": "YulIdentifier",
                                    "src": "1964:4:30"
                                  },
                                  {
                                    "name": "exponent",
                                    "nodeType": "YulIdentifier",
                                    "src": "1970:8:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "exp",
                                  "nodeType": "YulIdentifier",
                                  "src": "1960:3:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1960:19:30"
                              },
                              "variableNames": [
                                {
                                  "name": "power",
                                  "nodeType": "YulIdentifier",
                                  "src": "1951:5:30"
                                }
                              ]
                            },
                            {
                              "body": {
                                "nodeType": "YulBlock",
                                "src": "2010:22:30",
                                "statements": [
                                  {
                                    "expression": {
                                      "arguments": [],
                                      "functionName": {
                                        "name": "panic_error_0x11",
                                        "nodeType": "YulIdentifier",
                                        "src": "2012:16:30"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "2012:18:30"
                                    },
                                    "nodeType": "YulExpressionStatement",
                                    "src": "2012:18:30"
                                  }
                                ]
                              },
                              "condition": {
                                "arguments": [
                                  {
                                    "name": "power",
                                    "nodeType": "YulIdentifier",
                                    "src": "1998:5:30"
                                  },
                                  {
                                    "name": "max",
                                    "nodeType": "YulIdentifier",
                                    "src": "2005:3:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "gt",
                                  "nodeType": "YulIdentifier",
                                  "src": "1995:2:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "1995:14:30"
                              },
                              "nodeType": "YulIf",
                              "src": "1992:40:30"
                            },
                            {
                              "nodeType": "YulLeave",
                              "src": "2045:5:30"
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
                                      "name": "base",
                                      "nodeType": "YulIdentifier",
                                      "src": "1840:4:30"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1846:2:30",
                                      "type": "",
                                      "value": "11"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "1837:2:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1837:12:30"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "exponent",
                                      "nodeType": "YulIdentifier",
                                      "src": "1854:8:30"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1864:2:30",
                                      "type": "",
                                      "value": "78"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "1851:2:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1851:16:30"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1833:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1833:35:30"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "base",
                                      "nodeType": "YulIdentifier",
                                      "src": "1889:4:30"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1895:3:30",
                                      "type": "",
                                      "value": "307"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "1886:2:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1886:13:30"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "exponent",
                                      "nodeType": "YulIdentifier",
                                      "src": "1904:8:30"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "1914:2:30",
                                      "type": "",
                                      "value": "32"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "lt",
                                    "nodeType": "YulIdentifier",
                                    "src": "1901:2:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1901:16:30"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "1882:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1882:36:30"
                            }
                          ],
                          "functionName": {
                            "name": "or",
                            "nodeType": "YulIdentifier",
                            "src": "1817:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1817:111:30"
                        },
                        "nodeType": "YulIf",
                        "src": "1814:246:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2070:57:30",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2104:1:30",
                              "type": "",
                              "value": "1"
                            },
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "2107:4:30"
                            },
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "2113:8:30"
                            },
                            {
                              "name": "max",
                              "nodeType": "YulIdentifier",
                              "src": "2123:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "checked_exp_helper",
                            "nodeType": "YulIdentifier",
                            "src": "2085:18:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2085:42:30"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "2070:5:30"
                          },
                          {
                            "name": "base",
                            "nodeType": "YulIdentifier",
                            "src": "2077:4:30"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2166:22:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "2168:16:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2168:18:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2168:18:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "2143:5:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "max",
                                  "nodeType": "YulIdentifier",
                                  "src": "2154:3:30"
                                },
                                {
                                  "name": "base",
                                  "nodeType": "YulIdentifier",
                                  "src": "2159:4:30"
                                }
                              ],
                              "functionName": {
                                "name": "div",
                                "nodeType": "YulIdentifier",
                                "src": "2150:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2150:14:30"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "2140:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2140:25:30"
                        },
                        "nodeType": "YulIf",
                        "src": "2137:51:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2197:25:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "power",
                              "nodeType": "YulIdentifier",
                              "src": "2210:5:30"
                            },
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "2217:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "2206:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2206:16:30"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "2197:5:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_exp_unsigned",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "base",
                      "nodeType": "YulTypedName",
                      "src": "1185:4:30",
                      "type": ""
                    },
                    {
                      "name": "exponent",
                      "nodeType": "YulTypedName",
                      "src": "1191:8:30",
                      "type": ""
                    },
                    {
                      "name": "max",
                      "nodeType": "YulTypedName",
                      "src": "1201:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "power",
                      "nodeType": "YulTypedName",
                      "src": "1209:5:30",
                      "type": ""
                    }
                  ],
                  "src": "1155:1073:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2279:32:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2289:16:30",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2300:5:30"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "2289:7:30"
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
                      "src": "2261:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "2271:7:30",
                      "type": ""
                    }
                  ],
                  "src": "2234:77:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2383:219:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2393:31:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "2419:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2401:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2401:23:30"
                        },
                        "variableNames": [
                          {
                            "name": "base",
                            "nodeType": "YulIdentifier",
                            "src": "2393:4:30"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2433:39:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "2463:8:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2445:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2445:27:30"
                        },
                        "variableNames": [
                          {
                            "name": "exponent",
                            "nodeType": "YulIdentifier",
                            "src": "2433:8:30"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2482:113:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "base",
                              "nodeType": "YulIdentifier",
                              "src": "2512:4:30"
                            },
                            {
                              "name": "exponent",
                              "nodeType": "YulIdentifier",
                              "src": "2518:8:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2528:66:30",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "checked_exp_unsigned",
                            "nodeType": "YulIdentifier",
                            "src": "2491:20:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2491:104:30"
                        },
                        "variableNames": [
                          {
                            "name": "power",
                            "nodeType": "YulIdentifier",
                            "src": "2482:5:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_exp_t_uint256_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "base",
                      "nodeType": "YulTypedName",
                      "src": "2358:4:30",
                      "type": ""
                    },
                    {
                      "name": "exponent",
                      "nodeType": "YulTypedName",
                      "src": "2364:8:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "power",
                      "nodeType": "YulTypedName",
                      "src": "2377:5:30",
                      "type": ""
                    }
                  ],
                  "src": "2317:285:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2656:300:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2666:25:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "2689:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2671:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2671:20:30"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "2666:1:30"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2700:25:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "2723:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2705:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2705:20:30"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "2700:1:30"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2898:22:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "2900:16:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2900:18:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2900:18:30"
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
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "2810:1:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "iszero",
                                    "nodeType": "YulIdentifier",
                                    "src": "2803:6:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2803:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "2796:6:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2796:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "2818:1:30"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "2825:66:30",
                                      "type": "",
                                      "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                    },
                                    {
                                      "name": "x",
                                      "nodeType": "YulIdentifier",
                                      "src": "2893:1:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "div",
                                    "nodeType": "YulIdentifier",
                                    "src": "2821:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2821:74:30"
                                }
                              ],
                              "functionName": {
                                "name": "gt",
                                "nodeType": "YulIdentifier",
                                "src": "2815:2:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2815:81:30"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "2792:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2792:105:30"
                        },
                        "nodeType": "YulIf",
                        "src": "2789:131:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "2930:20:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "2945:1:30"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "2948:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "mul",
                            "nodeType": "YulIdentifier",
                            "src": "2941:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2941:9:30"
                        },
                        "variableNames": [
                          {
                            "name": "product",
                            "nodeType": "YulIdentifier",
                            "src": "2930:7:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "checked_mul_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "x",
                      "nodeType": "YulTypedName",
                      "src": "2639:1:30",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "2642:1:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "product",
                      "nodeType": "YulTypedName",
                      "src": "2648:7:30",
                      "type": ""
                    }
                  ],
                  "src": "2608:348:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3058:73:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3075:3:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "3080:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3068:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3068:19:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3068:19:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3096:29:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3115:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3120:4:30",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3111:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3111:14:30"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nodeType": "YulIdentifier",
                            "src": "3096:11:30"
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
                      "src": "3030:3:30",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "3035:6:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulTypedName",
                      "src": "3046:11:30",
                      "type": ""
                    }
                  ],
                  "src": "2962:169:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3243:75:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "3265:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3273:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3261:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3261:14:30"
                            },
                            {
                              "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "3277:33:30",
                              "type": "",
                              "value": "ERC20: mint to the zero address"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3254:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3254:57:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3254:57:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "3235:6:30",
                      "type": ""
                    }
                  ],
                  "src": "3137:181:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3470:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3480:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3546:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3551:2:30",
                              "type": "",
                              "value": "31"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "3487:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3487:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "3480:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3652:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                            "nodeType": "YulIdentifier",
                            "src": "3563:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3563:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3563:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3665:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3676:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3681:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3672:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3672:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "3665:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "3458:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "3466:3:30",
                      "type": ""
                    }
                  ],
                  "src": "3324:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3867:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3877:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3889:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3900:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3885:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3885:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3877:4:30"
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
                                  "src": "3924:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3935:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3920:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3920:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "3943:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3949:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3939:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3939:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3913:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3913:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3913:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "3969:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "4103:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "3977:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3977:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3969:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3847:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3862:4:30",
                      "type": ""
                    }
                  ],
                  "src": "3696:419:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4165:261:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4175:25:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4198:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "4180:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4180:20:30"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "4175:1:30"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4209:25:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "4232:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "4214:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4214:20:30"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "4209:1:30"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4372:22:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "4374:16:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "4374:18:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "4374:18:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4293:1:30"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4300:66:30",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "4368:1:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "4296:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4296:74:30"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "4290:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4290:81:30"
                        },
                        "nodeType": "YulIf",
                        "src": "4287:107:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "4404:16:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "4415:1:30"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "4418:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4411:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4411:9:30"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nodeType": "YulIdentifier",
                            "src": "4404:3:30"
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
                      "src": "4152:1:30",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "4155:1:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nodeType": "YulTypedName",
                      "src": "4161:3:30",
                      "type": ""
                    }
                  ],
                  "src": "4121:305:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4497:53:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "4514:3:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4537:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "4519:17:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4519:24:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4507:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4507:37:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4507:37:30"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4485:5:30",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "4492:3:30",
                      "type": ""
                    }
                  ],
                  "src": "4432:118:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4654:124:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4664:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4676:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4687:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4672:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4672:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4664:4:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4744:6:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4757:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4768:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4753:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4753:17:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "4700:43:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4700:71:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4700:71:30"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "4626:9:30",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "4638:6:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "4649:4:30",
                      "type": ""
                    }
                  ],
                  "src": "4556:222:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4812:152:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4829:1:30",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4832:77:30",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4822:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4822:88:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4822:88:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4926:1:30",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4929:4:30",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4919:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4919:15:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4919:15:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4950:1:30",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4953:4:30",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4943:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4943:15:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4943:15:30"
                      }
                    ]
                  },
                  "name": "panic_error_0x22",
                  "nodeType": "YulFunctionDefinition",
                  "src": "4784:180:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5021:269:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "5031:22:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "5045:4:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5051:1:30",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "5041:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5041:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "5031:6:30"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "5062:38:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "5092:4:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5098:1:30",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "5088:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5088:12:30"
                        },
                        "variables": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nodeType": "YulTypedName",
                            "src": "5066:18:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5139:51:30",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "5153:27:30",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "5167:6:30"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "5175:4:30",
                                    "type": "",
                                    "value": "0x7f"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "5163:3:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5163:17:30"
                              },
                              "variableNames": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "5153:6:30"
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
                              "src": "5119:18:30"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "5112:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5112:26:30"
                        },
                        "nodeType": "YulIf",
                        "src": "5109:81:30"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5242:42:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x22",
                                  "nodeType": "YulIdentifier",
                                  "src": "5256:16:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5256:18:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5256:18:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "5206:18:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "5229:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "5237:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "5226:2:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5226:14:30"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "5203:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5203:38:30"
                        },
                        "nodeType": "YulIf",
                        "src": "5200:84:30"
                      }
                    ]
                  },
                  "name": "extract_byte_array_length",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "5005:4:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5014:6:30",
                      "type": ""
                    }
                  ],
                  "src": "4970:320:30"
                }
              ]
            },
            "contents": "{\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function checked_exp_t_uint256_t_uint256(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint256(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n}\n",
            "id": 30,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "deployedGeneratedSources": [
          {
            "ast": {
              "nodeType": "YulBlock",
              "src": "0:15607:30",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "66:40:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "77:22:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "93:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "87:5:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "87:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "77:6:30"
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
                      "src": "49:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "59:6:30",
                      "type": ""
                    }
                  ],
                  "src": "7:99:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "208:73:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "225:3:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "230:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "218:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "218:19:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "218:19:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "246:29:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "265:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "270:4:30",
                              "type": "",
                              "value": "0x20"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "261:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "261:14:30"
                        },
                        "variableNames": [
                          {
                            "name": "updated_pos",
                            "nodeType": "YulIdentifier",
                            "src": "246:11:30"
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
                      "src": "180:3:30",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "185:6:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulTypedName",
                      "src": "196:11:30",
                      "type": ""
                    }
                  ],
                  "src": "112:169:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "336:258:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "346:10:30",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "355:1:30",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "350:1:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "415:63:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "440:3:30"
                                      },
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "445:1:30"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "436:3:30"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "436:11:30"
                                  },
                                  {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "459:3:30"
                                          },
                                          {
                                            "name": "i",
                                            "nodeType": "YulIdentifier",
                                            "src": "464:1:30"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "455:3:30"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "455:11:30"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "449:5:30"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "449:18:30"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "429:6:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "429:39:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "429:39:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "376:1:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "379:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "373:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "373:13:30"
                        },
                        "nodeType": "YulForLoop",
                        "post": {
                          "nodeType": "YulBlock",
                          "src": "387:19:30",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "389:15:30",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "i",
                                    "nodeType": "YulIdentifier",
                                    "src": "398:1:30"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "401:2:30",
                                    "type": "",
                                    "value": "32"
                                  }
                                ],
                                "functionName": {
                                  "name": "add",
                                  "nodeType": "YulIdentifier",
                                  "src": "394:3:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "394:10:30"
                              },
                              "variableNames": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "389:1:30"
                                }
                              ]
                            }
                          ]
                        },
                        "pre": {
                          "nodeType": "YulBlock",
                          "src": "369:3:30",
                          "statements": []
                        },
                        "src": "365:113:30"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "512:76:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "arguments": [
                                      {
                                        "name": "dst",
                                        "nodeType": "YulIdentifier",
                                        "src": "562:3:30"
                                      },
                                      {
                                        "name": "length",
                                        "nodeType": "YulIdentifier",
                                        "src": "567:6:30"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "558:3:30"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "558:16:30"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "576:1:30",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "mstore",
                                  "nodeType": "YulIdentifier",
                                  "src": "551:6:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "551:27:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "551:27:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "493:1:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "496:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "490:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "490:13:30"
                        },
                        "nodeType": "YulIf",
                        "src": "487:101:30"
                      }
                    ]
                  },
                  "name": "copy_memory_to_memory",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "src",
                      "nodeType": "YulTypedName",
                      "src": "318:3:30",
                      "type": ""
                    },
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "323:3:30",
                      "type": ""
                    },
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "328:6:30",
                      "type": ""
                    }
                  ],
                  "src": "287:307:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "648:54:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "658:38:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "676:5:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "683:2:30",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "672:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "672:14:30"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "692:2:30",
                                  "type": "",
                                  "value": "31"
                                }
                              ],
                              "functionName": {
                                "name": "not",
                                "nodeType": "YulIdentifier",
                                "src": "688:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "688:7:30"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "668:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "668:28:30"
                        },
                        "variableNames": [
                          {
                            "name": "result",
                            "nodeType": "YulIdentifier",
                            "src": "658:6:30"
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
                      "src": "631:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "result",
                      "nodeType": "YulTypedName",
                      "src": "641:6:30",
                      "type": ""
                    }
                  ],
                  "src": "600:102:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "800:272:30",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "810:53:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "857:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "array_length_t_string_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "824:32:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "824:39:30"
                        },
                        "variables": [
                          {
                            "name": "length",
                            "nodeType": "YulTypedName",
                            "src": "814:6:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "872:78:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "938:3:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "943:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "879:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "879:71:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "872:3:30"
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
                                  "src": "985:5:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "992:4:30",
                                  "type": "",
                                  "value": "0x20"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "981:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "981:16:30"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "999:3:30"
                            },
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1004:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "copy_memory_to_memory",
                            "nodeType": "YulIdentifier",
                            "src": "959:21:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "959:52:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "959:52:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1020:46:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "1031:3:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "1058:6:30"
                                }
                              ],
                              "functionName": {
                                "name": "round_up_to_mul_of_32",
                                "nodeType": "YulIdentifier",
                                "src": "1036:21:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1036:29:30"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1027:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1027:39:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "1020:3:30"
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
                      "src": "781:5:30",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "788:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "796:3:30",
                      "type": ""
                    }
                  ],
                  "src": "708:364:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1196:195:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1206:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "1218:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1229:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1214:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1214:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1206:4:30"
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
                                  "src": "1253:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "1264:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1249:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1249:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "1272:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "1278:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "1268:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1268:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1242:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1242:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1242:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "1298:86:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "1370:6:30"
                            },
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "1379:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "1306:63:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1306:78:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "1298:4:30"
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
                      "src": "1168:9:30",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "1180:6:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "1191:4:30",
                      "type": ""
                    }
                  ],
                  "src": "1078:313:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1437:35:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1447:19:30",
                        "value": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1463:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "1457:5:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1457:9:30"
                        },
                        "variableNames": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "1447:6:30"
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
                      "src": "1430:6:30",
                      "type": ""
                    }
                  ],
                  "src": "1397:75:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1567:28:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1584:1:30",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1587:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1577:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1577:12:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1577:12:30"
                      }
                    ]
                  },
                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1478:117:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1690:28:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1707:1:30",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1710:1:30",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "1700:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1700:12:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1700:12:30"
                      }
                    ]
                  },
                  "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                  "nodeType": "YulFunctionDefinition",
                  "src": "1601:117:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1769:81:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1779:65:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1794:5:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1801:42:30",
                              "type": "",
                              "value": "0xffffffffffffffffffffffffffffffffffffffff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1790:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1790:54:30"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "1779:7:30"
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
                      "src": "1751:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "1761:7:30",
                      "type": ""
                    }
                  ],
                  "src": "1724:126:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1901:51:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1911:35:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "1940:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint160",
                            "nodeType": "YulIdentifier",
                            "src": "1922:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1922:24:30"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "1911:7:30"
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
                      "src": "1883:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "1893:7:30",
                      "type": ""
                    }
                  ],
                  "src": "1856:96:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2001:79:30",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2058:16:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2067:1:30",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2070:1:30",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2060:6:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2060:12:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2060:12:30"
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
                                  "src": "2024:5:30"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2049:5:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_address",
                                    "nodeType": "YulIdentifier",
                                    "src": "2031:17:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2031:24:30"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "2021:2:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2021:35:30"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2014:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2014:43:30"
                        },
                        "nodeType": "YulIf",
                        "src": "2011:63:30"
                      }
                    ]
                  },
                  "name": "validator_revert_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "1994:5:30",
                      "type": ""
                    }
                  ],
                  "src": "1958:122:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2138:87:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2148:29:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2170:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "2157:12:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2157:20:30"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2148:5:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2213:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_address",
                            "nodeType": "YulIdentifier",
                            "src": "2186:26:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2186:33:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2186:33:30"
                      }
                    ]
                  },
                  "name": "abi_decode_t_address",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "2116:6:30",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "2124:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2132:5:30",
                      "type": ""
                    }
                  ],
                  "src": "2086:139:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2276:32:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2286:16:30",
                        "value": {
                          "name": "value",
                          "nodeType": "YulIdentifier",
                          "src": "2297:5:30"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "2286:7:30"
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
                      "src": "2258:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "2268:7:30",
                      "type": ""
                    }
                  ],
                  "src": "2231:77:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2357:79:30",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2414:16:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2423:1:30",
                                    "type": "",
                                    "value": "0"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "2426:1:30",
                                    "type": "",
                                    "value": "0"
                                  }
                                ],
                                "functionName": {
                                  "name": "revert",
                                  "nodeType": "YulIdentifier",
                                  "src": "2416:6:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2416:12:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2416:12:30"
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
                                  "src": "2380:5:30"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "2405:5:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "cleanup_t_uint256",
                                    "nodeType": "YulIdentifier",
                                    "src": "2387:17:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2387:24:30"
                                }
                              ],
                              "functionName": {
                                "name": "eq",
                                "nodeType": "YulIdentifier",
                                "src": "2377:2:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2377:35:30"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "2370:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2370:43:30"
                        },
                        "nodeType": "YulIf",
                        "src": "2367:63:30"
                      }
                    ]
                  },
                  "name": "validator_revert_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2350:5:30",
                      "type": ""
                    }
                  ],
                  "src": "2314:122:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2494:87:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2504:29:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "offset",
                              "nodeType": "YulIdentifier",
                              "src": "2526:6:30"
                            }
                          ],
                          "functionName": {
                            "name": "calldataload",
                            "nodeType": "YulIdentifier",
                            "src": "2513:12:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2513:20:30"
                        },
                        "variableNames": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2504:5:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "2569:5:30"
                            }
                          ],
                          "functionName": {
                            "name": "validator_revert_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2542:26:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2542:33:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2542:33:30"
                      }
                    ]
                  },
                  "name": "abi_decode_t_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "offset",
                      "nodeType": "YulTypedName",
                      "src": "2472:6:30",
                      "type": ""
                    },
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "2480:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "2488:5:30",
                      "type": ""
                    }
                  ],
                  "src": "2442:139:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2670:391:30",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "2716:83:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "2718:77:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "2718:79:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "2718:79:30"
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
                                  "src": "2691:7:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "2700:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "2687:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2687:23:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2712:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "2683:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2683:32:30"
                        },
                        "nodeType": "YulIf",
                        "src": "2680:119:30"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "2809:117:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2824:15:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2838:1:30",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "2828:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "2853:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "2888:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "2899:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "2884:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "2884:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "2908:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "2863:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2863:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "2853:6:30"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "2936:118:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "2951:16:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2965:2:30",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "2955:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "2981:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "3016:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "3027:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "3012:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3012:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "3036:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "2991:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2991:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "2981:6:30"
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
                      "src": "2632:9:30",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "2643:7:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "2655:6:30",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "2663:6:30",
                      "type": ""
                    }
                  ],
                  "src": "2587:474:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3109:48:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3119:32:30",
                        "value": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3144:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "iszero",
                                "nodeType": "YulIdentifier",
                                "src": "3137:6:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3137:13:30"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "3130:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3130:21:30"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "3119:7:30"
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
                      "src": "3091:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "3101:7:30",
                      "type": ""
                    }
                  ],
                  "src": "3067:90:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3222:50:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3239:3:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3259:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_bool",
                                "nodeType": "YulIdentifier",
                                "src": "3244:14:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3244:21:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3232:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3232:34:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3232:34:30"
                      }
                    ]
                  },
                  "name": "abi_encode_t_bool_to_t_bool_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3210:5:30",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "3217:3:30",
                      "type": ""
                    }
                  ],
                  "src": "3163:109:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3370:118:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3380:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3392:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3403:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3388:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3388:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3380:4:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3454:6:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3467:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3478:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3463:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3463:17:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_bool_to_t_bool_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "3416:37:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3416:65:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3416:65:30"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3342:9:30",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3354:6:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3365:4:30",
                      "type": ""
                    }
                  ],
                  "src": "3278:210:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3559:53:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "3576:3:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "3599:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "3581:17:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3581:24:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "3569:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3569:37:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3569:37:30"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "3547:5:30",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "3554:3:30",
                      "type": ""
                    }
                  ],
                  "src": "3494:118:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3716:124:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3726:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "3738:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3749:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3734:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3734:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "3726:4:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "3806:6:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3819:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "3830:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3815:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3815:17:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "3762:43:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3762:71:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3762:71:30"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "3688:9:30",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3700:6:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "3711:4:30",
                      "type": ""
                    }
                  ],
                  "src": "3618:222:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3946:519:30",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3992:83:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "3994:77:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "3994:79:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "3994:79:30"
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
                                  "src": "3967:7:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3976:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "3963:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3963:23:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3988:2:30",
                              "type": "",
                              "value": "96"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "3959:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3959:32:30"
                        },
                        "nodeType": "YulIf",
                        "src": "3956:119:30"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "4085:117:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4100:15:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4114:1:30",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "4104:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4129:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4164:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4175:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4160:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4160:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4184:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4139:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4139:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "4129:6:30"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "4212:118:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4227:16:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4241:2:30",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "4231:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4257:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4292:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4303:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4288:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4288:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4312:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "4267:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4267:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "4257:6:30"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "4340:118:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4355:16:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4369:2:30",
                              "type": "",
                              "value": "64"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "4359:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "4385:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "4420:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4431:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4416:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4416:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4440:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "4395:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4395:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value2",
                                "nodeType": "YulIdentifier",
                                "src": "4385:6:30"
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
                      "src": "3900:9:30",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "3911:7:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "3923:6:30",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "3931:6:30",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "3939:6:30",
                      "type": ""
                    }
                  ],
                  "src": "3846:619:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4514:43:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4524:27:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "value",
                              "nodeType": "YulIdentifier",
                              "src": "4539:5:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4546:4:30",
                              "type": "",
                              "value": "0xff"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "4535:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4535:16:30"
                        },
                        "variableNames": [
                          {
                            "name": "cleaned",
                            "nodeType": "YulIdentifier",
                            "src": "4524:7:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "cleanup_t_uint8",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4496:5:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulTypedName",
                      "src": "4506:7:30",
                      "type": ""
                    }
                  ],
                  "src": "4471:86:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4624:51:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "4641:3:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "value",
                                  "nodeType": "YulIdentifier",
                                  "src": "4662:5:30"
                                }
                              ],
                              "functionName": {
                                "name": "cleanup_t_uint8",
                                "nodeType": "YulIdentifier",
                                "src": "4646:15:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4646:22:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "4634:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4634:35:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4634:35:30"
                      }
                    ]
                  },
                  "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "value",
                      "nodeType": "YulTypedName",
                      "src": "4612:5:30",
                      "type": ""
                    },
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "4619:3:30",
                      "type": ""
                    }
                  ],
                  "src": "4563:112:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4775:120:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "4785:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "4797:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4808:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4793:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4793:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "4785:4:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "value0",
                              "nodeType": "YulIdentifier",
                              "src": "4861:6:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4874:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "4885:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4870:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4870:17:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_uint8_to_t_uint8_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "4821:39:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4821:67:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4821:67:30"
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "4747:9:30",
                      "type": ""
                    },
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "4759:6:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "4770:4:30",
                      "type": ""
                    }
                  ],
                  "src": "4681:214:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4967:263:30",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5013:83:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "5015:77:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5015:79:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5015:79:30"
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
                                  "src": "4988:7:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4997:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "4984:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4984:23:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5009:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "4980:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4980:32:30"
                        },
                        "nodeType": "YulIf",
                        "src": "4977:119:30"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5106:117:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5121:15:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5135:1:30",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5125:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5150:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5185:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5196:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5181:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5181:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5205:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5160:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5160:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "5150:6:30"
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
                      "src": "4937:9:30",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "4948:7:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "4960:6:30",
                      "type": ""
                    }
                  ],
                  "src": "4901:329:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5319:391:30",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5365:83:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "5367:77:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5367:79:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5367:79:30"
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
                                  "src": "5340:7:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5349:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "5336:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5336:23:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5361:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "5332:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5332:32:30"
                        },
                        "nodeType": "YulIf",
                        "src": "5329:119:30"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5458:117:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5473:15:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5487:1:30",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5477:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5502:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5537:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5548:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5533:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5533:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5557:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5512:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5512:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "5502:6:30"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5585:118:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5600:16:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5614:2:30",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5604:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "5630:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "5665:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5676:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "5661:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5661:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5685:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "5640:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5640:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "5630:6:30"
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
                      "src": "5281:9:30",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "5292:7:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "5304:6:30",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "5312:6:30",
                      "type": ""
                    }
                  ],
                  "src": "5236:474:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5833:648:30",
                    "statements": [
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "5880:83:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                                  "nodeType": "YulIdentifier",
                                  "src": "5882:77:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "5882:79:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "5882:79:30"
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
                                  "src": "5854:7:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "5863:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "5850:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5850:23:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5875:3:30",
                              "type": "",
                              "value": "128"
                            }
                          ],
                          "functionName": {
                            "name": "slt",
                            "nodeType": "YulIdentifier",
                            "src": "5846:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5846:33:30"
                        },
                        "nodeType": "YulIf",
                        "src": "5843:120:30"
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "5973:117:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5988:15:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6002:1:30",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "5992:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "6017:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "6052:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "6063:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6048:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6048:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6072:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "6027:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6027:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value0",
                                "nodeType": "YulIdentifier",
                                "src": "6017:6:30"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "6100:118:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "6115:16:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6129:2:30",
                              "type": "",
                              "value": "32"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "6119:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "6145:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "6180:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "6191:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6176:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6176:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6200:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "6155:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6155:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value1",
                                "nodeType": "YulIdentifier",
                                "src": "6145:6:30"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "6228:118:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "6243:16:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6257:2:30",
                              "type": "",
                              "value": "64"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "6247:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "6273:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "6308:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "6319:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6304:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6304:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6328:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_address",
                                "nodeType": "YulIdentifier",
                                "src": "6283:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6283:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value2",
                                "nodeType": "YulIdentifier",
                                "src": "6273:6:30"
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "nodeType": "YulBlock",
                        "src": "6356:118:30",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "6371:16:30",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6385:2:30",
                              "type": "",
                              "value": "96"
                            },
                            "variables": [
                              {
                                "name": "offset",
                                "nodeType": "YulTypedName",
                                "src": "6375:6:30",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulAssignment",
                            "src": "6401:63:30",
                            "value": {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "headStart",
                                      "nodeType": "YulIdentifier",
                                      "src": "6436:9:30"
                                    },
                                    {
                                      "name": "offset",
                                      "nodeType": "YulIdentifier",
                                      "src": "6447:6:30"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6432:3:30"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6432:22:30"
                                },
                                {
                                  "name": "dataEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "6456:7:30"
                                }
                              ],
                              "functionName": {
                                "name": "abi_decode_t_uint256",
                                "nodeType": "YulIdentifier",
                                "src": "6411:20:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6411:53:30"
                            },
                            "variableNames": [
                              {
                                "name": "value3",
                                "nodeType": "YulIdentifier",
                                "src": "6401:6:30"
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_decode_tuple_t_addresst_uint256t_addresst_uint256",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "5779:9:30",
                      "type": ""
                    },
                    {
                      "name": "dataEnd",
                      "nodeType": "YulTypedName",
                      "src": "5790:7:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "value0",
                      "nodeType": "YulTypedName",
                      "src": "5802:6:30",
                      "type": ""
                    },
                    {
                      "name": "value1",
                      "nodeType": "YulTypedName",
                      "src": "5810:6:30",
                      "type": ""
                    },
                    {
                      "name": "value2",
                      "nodeType": "YulTypedName",
                      "src": "5818:6:30",
                      "type": ""
                    },
                    {
                      "name": "value3",
                      "nodeType": "YulTypedName",
                      "src": "5826:6:30",
                      "type": ""
                    }
                  ],
                  "src": "5716:765:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6515:152:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6532:1:30",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6535:77:30",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6525:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6525:88:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6525:88:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6629:1:30",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6632:4:30",
                              "type": "",
                              "value": "0x22"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "6622:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6622:15:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6622:15:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6653:1:30",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6656:4:30",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6646:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6646:15:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6646:15:30"
                      }
                    ]
                  },
                  "name": "panic_error_0x22",
                  "nodeType": "YulFunctionDefinition",
                  "src": "6487:180:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6724:269:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "6734:22:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "6748:4:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6754:1:30",
                              "type": "",
                              "value": "2"
                            }
                          ],
                          "functionName": {
                            "name": "div",
                            "nodeType": "YulIdentifier",
                            "src": "6744:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6744:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "6734:6:30"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "6765:38:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "data",
                              "nodeType": "YulIdentifier",
                              "src": "6795:4:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6801:1:30",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "6791:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6791:12:30"
                        },
                        "variables": [
                          {
                            "name": "outOfPlaceEncoding",
                            "nodeType": "YulTypedName",
                            "src": "6769:18:30",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6842:51:30",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "6856:27:30",
                              "value": {
                                "arguments": [
                                  {
                                    "name": "length",
                                    "nodeType": "YulIdentifier",
                                    "src": "6870:6:30"
                                  },
                                  {
                                    "kind": "number",
                                    "nodeType": "YulLiteral",
                                    "src": "6878:4:30",
                                    "type": "",
                                    "value": "0x7f"
                                  }
                                ],
                                "functionName": {
                                  "name": "and",
                                  "nodeType": "YulIdentifier",
                                  "src": "6866:3:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6866:17:30"
                              },
                              "variableNames": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "6856:6:30"
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
                              "src": "6822:18:30"
                            }
                          ],
                          "functionName": {
                            "name": "iszero",
                            "nodeType": "YulIdentifier",
                            "src": "6815:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6815:26:30"
                        },
                        "nodeType": "YulIf",
                        "src": "6812:81:30"
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "6945:42:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x22",
                                  "nodeType": "YulIdentifier",
                                  "src": "6959:16:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "6959:18:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "6959:18:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "outOfPlaceEncoding",
                              "nodeType": "YulIdentifier",
                              "src": "6909:18:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "6932:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "6940:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "6929:2:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6929:14:30"
                            }
                          ],
                          "functionName": {
                            "name": "eq",
                            "nodeType": "YulIdentifier",
                            "src": "6906:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6906:38:30"
                        },
                        "nodeType": "YulIf",
                        "src": "6903:84:30"
                      }
                    ]
                  },
                  "name": "extract_byte_array_length",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "data",
                      "nodeType": "YulTypedName",
                      "src": "6708:4:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "6717:6:30",
                      "type": ""
                    }
                  ],
                  "src": "6673:320:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7027:152:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7044:1:30",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7047:77:30",
                              "type": "",
                              "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7037:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7037:88:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7037:88:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7141:1:30",
                              "type": "",
                              "value": "4"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7144:4:30",
                              "type": "",
                              "value": "0x11"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7134:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7134:15:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7134:15:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7165:1:30",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7168:4:30",
                              "type": "",
                              "value": "0x24"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "7158:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7158:15:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7158:15:30"
                      }
                    ]
                  },
                  "name": "panic_error_0x11",
                  "nodeType": "YulFunctionDefinition",
                  "src": "6999:180:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7229:261:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7239:25:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "7262:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "7244:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7244:20:30"
                        },
                        "variableNames": [
                          {
                            "name": "x",
                            "nodeType": "YulIdentifier",
                            "src": "7239:1:30"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7273:25:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "7296:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "cleanup_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "7278:17:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7278:20:30"
                        },
                        "variableNames": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "7273:1:30"
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "7436:22:30",
                          "statements": [
                            {
                              "expression": {
                                "arguments": [],
                                "functionName": {
                                  "name": "panic_error_0x11",
                                  "nodeType": "YulIdentifier",
                                  "src": "7438:16:30"
                                },
                                "nodeType": "YulFunctionCall",
                                "src": "7438:18:30"
                              },
                              "nodeType": "YulExpressionStatement",
                              "src": "7438:18:30"
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "7357:1:30"
                            },
                            {
                              "arguments": [
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7364:66:30",
                                  "type": "",
                                  "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                },
                                {
                                  "name": "y",
                                  "nodeType": "YulIdentifier",
                                  "src": "7432:1:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "7360:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7360:74:30"
                            }
                          ],
                          "functionName": {
                            "name": "gt",
                            "nodeType": "YulIdentifier",
                            "src": "7354:2:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7354:81:30"
                        },
                        "nodeType": "YulIf",
                        "src": "7351:107:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "7468:16:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "x",
                              "nodeType": "YulIdentifier",
                              "src": "7479:1:30"
                            },
                            {
                              "name": "y",
                              "nodeType": "YulIdentifier",
                              "src": "7482:1:30"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "7475:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7475:9:30"
                        },
                        "variableNames": [
                          {
                            "name": "sum",
                            "nodeType": "YulIdentifier",
                            "src": "7468:3:30"
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
                      "src": "7216:1:30",
                      "type": ""
                    },
                    {
                      "name": "y",
                      "nodeType": "YulTypedName",
                      "src": "7219:1:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "sum",
                      "nodeType": "YulTypedName",
                      "src": "7225:3:30",
                      "type": ""
                    }
                  ],
                  "src": "7185:305:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7602:118:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "7624:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7632:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7620:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7620:14:30"
                            },
                            {
                              "hexValue": "45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "7636:34:30",
                              "type": "",
                              "value": "ERC20: decreased allowance below"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7613:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7613:58:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7613:58:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "7692:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "7700:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "7688:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7688:15:30"
                            },
                            {
                              "hexValue": "207a65726f",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "7705:7:30",
                              "type": "",
                              "value": " zero"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "7681:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7681:32:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7681:32:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "7594:6:30",
                      "type": ""
                    }
                  ],
                  "src": "7496:224:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7872:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "7882:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "7948:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "7953:2:30",
                              "type": "",
                              "value": "37"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "7889:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7889:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "7882:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "8054:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8",
                            "nodeType": "YulIdentifier",
                            "src": "7965:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7965:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7965:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8067:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "8078:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8083:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8074:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8074:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "8067:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "7860:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "7868:3:30",
                      "type": ""
                    }
                  ],
                  "src": "7726:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8269:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8279:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "8291:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8302:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "8287:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8287:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8279:4:30"
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
                                  "src": "8326:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8337:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8322:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8322:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "8345:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "8351:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "8341:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8341:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "8315:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8315:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8315:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "8371:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "8505:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "8379:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8379:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "8371:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "8249:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "8264:4:30",
                      "type": ""
                    }
                  ],
                  "src": "8098:419:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8629:66:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "8651:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "8659:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "8647:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "8647:14:30"
                            },
                            {
                              "hexValue": "5472616e73616374696f6e206973206c6f636b65642e",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "8663:24:30",
                              "type": "",
                              "value": "Transaction is locked."
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "8640:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8640:48:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8640:48:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "8621:6:30",
                      "type": ""
                    }
                  ],
                  "src": "8523:172:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8847:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "8857:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "8923:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "8928:2:30",
                              "type": "",
                              "value": "22"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "8864:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8864:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "8857:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "9029:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886",
                            "nodeType": "YulIdentifier",
                            "src": "8940:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8940:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8940:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9042:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "9053:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9058:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9049:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9049:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "9042:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "8835:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "8843:3:30",
                      "type": ""
                    }
                  ],
                  "src": "8701:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9244:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9254:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "9266:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9277:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9262:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9262:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9254:4:30"
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
                                  "src": "9301:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9312:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9297:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9297:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "9320:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "9326:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "9316:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9316:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9290:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9290:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9290:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9346:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "9480:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "9354:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9354:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9346:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "9224:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "9239:4:30",
                      "type": ""
                    }
                  ],
                  "src": "9073:419:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9604:117:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "9626:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9634:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9622:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9622:14:30"
                            },
                            {
                              "hexValue": "45524332303a20617070726f76652066726f6d20746865207a65726f20616464",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "9638:34:30",
                              "type": "",
                              "value": "ERC20: approve from the zero add"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9615:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9615:58:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9615:58:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "9694:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "9702:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "9690:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9690:15:30"
                            },
                            {
                              "hexValue": "72657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "9707:6:30",
                              "type": "",
                              "value": "ress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "9683:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9683:31:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9683:31:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "9596:6:30",
                      "type": ""
                    }
                  ],
                  "src": "9498:223:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9873:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9883:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "9949:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9954:2:30",
                              "type": "",
                              "value": "36"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "9890:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9890:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9883:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "10055:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208",
                            "nodeType": "YulIdentifier",
                            "src": "9966:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9966:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9966:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10068:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "10079:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10084:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10075:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10075:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "10068:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "9861:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "9869:3:30",
                      "type": ""
                    }
                  ],
                  "src": "9727:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10270:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10280:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "10292:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10303:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "10288:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10288:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10280:4:30"
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
                                  "src": "10327:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10338:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10323:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10323:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "10346:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "10352:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "10342:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10342:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10316:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10316:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10316:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "10372:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "10506:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "10380:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10380:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "10372:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "10250:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "10265:4:30",
                      "type": ""
                    }
                  ],
                  "src": "10099:419:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10630:115:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "10652:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10660:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10648:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10648:14:30"
                            },
                            {
                              "hexValue": "45524332303a20617070726f766520746f20746865207a65726f206164647265",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "10664:34:30",
                              "type": "",
                              "value": "ERC20: approve to the zero addre"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10641:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10641:58:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10641:58:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "10720:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "10728:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "10716:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "10716:15:30"
                            },
                            {
                              "hexValue": "7373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "10733:4:30",
                              "type": "",
                              "value": "ss"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "10709:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10709:29:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10709:29:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "10622:6:30",
                      "type": ""
                    }
                  ],
                  "src": "10524:221:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10897:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10907:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "10973:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10978:2:30",
                              "type": "",
                              "value": "34"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "10914:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10914:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "10907:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "11079:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029",
                            "nodeType": "YulIdentifier",
                            "src": "10990:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10990:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10990:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11092:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "11103:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11108:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11099:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11099:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "11092:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "10885:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "10893:3:30",
                      "type": ""
                    }
                  ],
                  "src": "10751:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11294:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "11304:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "11316:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11327:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "11312:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11312:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11304:4:30"
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
                                  "src": "11351:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11362:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11347:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11347:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "11370:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "11376:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "11366:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11366:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "11340:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11340:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11340:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "11396:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "11530:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "11404:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11404:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11396:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "11274:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "11289:4:30",
                      "type": ""
                    }
                  ],
                  "src": "11123:419:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11654:73:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "11676:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "11684:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "11672:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "11672:14:30"
                            },
                            {
                              "hexValue": "45524332303a20696e73756666696369656e7420616c6c6f77616e6365",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "11688:31:30",
                              "type": "",
                              "value": "ERC20: insufficient allowance"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "11665:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11665:55:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11665:55:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "11646:6:30",
                      "type": ""
                    }
                  ],
                  "src": "11548:179:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11879:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "11889:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "11955:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "11960:2:30",
                              "type": "",
                              "value": "29"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "11896:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11896:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "11889:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "12061:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe",
                            "nodeType": "YulIdentifier",
                            "src": "11972:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11972:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11972:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12074:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "12085:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12090:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12081:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12081:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "12074:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "11867:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "11875:3:30",
                      "type": ""
                    }
                  ],
                  "src": "11733:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12276:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12286:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "12298:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12309:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "12294:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12294:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12286:4:30"
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
                                  "src": "12333:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12344:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12329:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12329:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "12352:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "12358:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "12348:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12348:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "12322:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12322:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12322:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "12378:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "12512:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "12386:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12386:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12378:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "12256:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "12271:4:30",
                      "type": ""
                    }
                  ],
                  "src": "12105:419:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12636:118:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "12658:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12666:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12654:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12654:14:30"
                            },
                            {
                              "hexValue": "45524332303a207472616e736665722066726f6d20746865207a65726f206164",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "12670:34:30",
                              "type": "",
                              "value": "ERC20: transfer from the zero ad"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "12647:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12647:58:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12647:58:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "12726:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "12734:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "12722:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12722:15:30"
                            },
                            {
                              "hexValue": "6472657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "12739:7:30",
                              "type": "",
                              "value": "dress"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "12715:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12715:32:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12715:32:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "12628:6:30",
                      "type": ""
                    }
                  ],
                  "src": "12530:224:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12906:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12916:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "12982:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12987:2:30",
                              "type": "",
                              "value": "37"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "12923:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12923:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "12916:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "13088:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea",
                            "nodeType": "YulIdentifier",
                            "src": "12999:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12999:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12999:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "13101:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "13112:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13117:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13108:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13108:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "13101:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "12894:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "12902:3:30",
                      "type": ""
                    }
                  ],
                  "src": "12760:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13303:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "13313:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "13325:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "13336:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "13321:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13321:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13313:4:30"
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
                                  "src": "13360:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "13371:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "13356:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13356:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "13379:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "13385:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "13375:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13375:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13349:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13349:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13349:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "13405:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "13539:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "13413:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13413:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13405:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "13283:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "13298:4:30",
                      "type": ""
                    }
                  ],
                  "src": "13132:419:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13663:116:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "13685:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "13693:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "13681:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13681:14:30"
                            },
                            {
                              "hexValue": "45524332303a207472616e7366657220746f20746865207a65726f2061646472",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "13697:34:30",
                              "type": "",
                              "value": "ERC20: transfer to the zero addr"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13674:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13674:58:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13674:58:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "13753:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "13761:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "13749:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "13749:15:30"
                            },
                            {
                              "hexValue": "657373",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "13766:5:30",
                              "type": "",
                              "value": "ess"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "13742:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13742:30:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "13742:30:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "13655:6:30",
                      "type": ""
                    }
                  ],
                  "src": "13557:222:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "13931:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "13941:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "14007:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14012:2:30",
                              "type": "",
                              "value": "35"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "13948:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "13948:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "13941:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "14113:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f",
                            "nodeType": "YulIdentifier",
                            "src": "14024:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14024:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14024:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "14126:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "14137:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14142:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14133:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14133:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "14126:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "13919:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "13927:3:30",
                      "type": ""
                    }
                  ],
                  "src": "13785:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14328:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "14338:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "14350:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "14361:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "14346:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14346:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14338:4:30"
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
                                  "src": "14385:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14396:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14381:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14381:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "14404:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "14410:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "14400:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14400:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14374:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14374:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14374:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "14430:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "14564:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "14438:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14438:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14430:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "14308:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "14323:4:30",
                      "type": ""
                    }
                  ],
                  "src": "14157:419:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14688:119:30",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "14710:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14718:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14706:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14706:14:30"
                            },
                            {
                              "hexValue": "45524332303a207472616e7366657220616d6f756e7420657863656564732062",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "14722:34:30",
                              "type": "",
                              "value": "ERC20: transfer amount exceeds b"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14699:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14699:58:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14699:58:30"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "memPtr",
                                  "nodeType": "YulIdentifier",
                                  "src": "14778:6:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "14786:2:30",
                                  "type": "",
                                  "value": "32"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "14774:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "14774:15:30"
                            },
                            {
                              "hexValue": "616c616e6365",
                              "kind": "string",
                              "nodeType": "YulLiteral",
                              "src": "14791:8:30",
                              "type": "",
                              "value": "alance"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "14767:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14767:33:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "14767:33:30"
                      }
                    ]
                  },
                  "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulTypedName",
                      "src": "14680:6:30",
                      "type": ""
                    }
                  ],
                  "src": "14582:225:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "14959:220:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "14969:74:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15035:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15040:2:30",
                              "type": "",
                              "value": "38"
                            }
                          ],
                          "functionName": {
                            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "14976:58:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "14976:67:30"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "14969:3:30"
                          }
                        ]
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15141:3:30"
                            }
                          ],
                          "functionName": {
                            "name": "store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6",
                            "nodeType": "YulIdentifier",
                            "src": "15052:88:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15052:93:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15052:93:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "15154:19:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "15165:3:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15170:2:30",
                              "type": "",
                              "value": "64"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15161:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15161:12:30"
                        },
                        "variableNames": [
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "15154:3:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "pos",
                      "nodeType": "YulTypedName",
                      "src": "14947:3:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "end",
                      "nodeType": "YulTypedName",
                      "src": "14955:3:30",
                      "type": ""
                    }
                  ],
                  "src": "14813:366:30"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "15356:248:30",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "15366:26:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "headStart",
                              "nodeType": "YulIdentifier",
                              "src": "15378:9:30"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "15389:2:30",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "15374:3:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15374:18:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15366:4:30"
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
                                  "src": "15413:9:30"
                                },
                                {
                                  "kind": "number",
                                  "nodeType": "YulLiteral",
                                  "src": "15424:1:30",
                                  "type": "",
                                  "value": "0"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "15409:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15409:17:30"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "tail",
                                  "nodeType": "YulIdentifier",
                                  "src": "15432:4:30"
                                },
                                {
                                  "name": "headStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "15438:9:30"
                                }
                              ],
                              "functionName": {
                                "name": "sub",
                                "nodeType": "YulIdentifier",
                                "src": "15428:3:30"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "15428:20:30"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "15402:6:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15402:47:30"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "15402:47:30"
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "15458:139:30",
                        "value": {
                          "arguments": [
                            {
                              "name": "tail",
                              "nodeType": "YulIdentifier",
                              "src": "15592:4:30"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack",
                            "nodeType": "YulIdentifier",
                            "src": "15466:124:30"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "15466:131:30"
                        },
                        "variableNames": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15458:4:30"
                          }
                        ]
                      }
                    ]
                  },
                  "name": "abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed",
                  "nodeType": "YulFunctionDefinition",
                  "parameters": [
                    {
                      "name": "headStart",
                      "nodeType": "YulTypedName",
                      "src": "15336:9:30",
                      "type": ""
                    }
                  ],
                  "returnVariables": [
                    {
                      "name": "tail",
                      "nodeType": "YulTypedName",
                      "src": "15351:4:30",
                      "type": ""
                    }
                  ],
                  "src": "15185:419:30"
                }
              ]
            },
            "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function abi_encode_t_uint8_to_t_uint8_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint8(value))\n    }\n\n    function abi_encode_tuple_t_uint8__to_t_uint8__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint8_to_t_uint8_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256t_addresst_uint256(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 96\n\n            value3 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: decreased allowance below\")\n\n        mstore(add(memPtr, 32), \" zero\")\n\n    }\n\n    function abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_f8b476f7d28209d77d4a4ac1fe36b9f8259aa1bb6bddfa6e89de7e51615cf8a8_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886(memPtr) {\n\n        mstore(add(memPtr, 0), \"Transaction is locked.\")\n\n    }\n\n    function abi_encode_t_stringliteral_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 22)\n        store_literal_in_memory_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b34d11d802f5e8807f141ae71ab83aaf246cb0c2cee4536399b3527025531886_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve from the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_c953f4879035ed60e766b34720f656aab5c697b141d924c283124ecedb91c208_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: approve to the zero addre\")\n\n        mstore(add(memPtr, 32), \"ss\")\n\n    }\n\n    function abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 34)\n        store_literal_in_memory_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_24883cc5fe64ace9d0df1893501ecb93c77180f0ff69cca79affb3c316dc8029_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: insufficient allowance\")\n\n    }\n\n    function abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 29)\n        store_literal_in_memory_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_3b6607e091cba9325f958656d2b5e0622ab7dc0eac71a26ac788cb25bc19f4fe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer from the zero ad\")\n\n        mstore(add(memPtr, 32), \"dress\")\n\n    }\n\n    function abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_baecc556b46f4ed0f2b4cb599d60785ac8563dd2dc0a5bf12edea1c39e5e1fea_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer to the zero addr\")\n\n        mstore(add(memPtr, 32), \"ess\")\n\n    }\n\n    function abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 35)\n        store_literal_in_memory_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_0557e210f7a69a685100a7e4e3d0a7024c546085cee28910fd17d0b081d9516f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: transfer amount exceeds b\")\n\n        mstore(add(memPtr, 32), \"alance\")\n\n    }\n\n    function abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_4107e8a8b9e94bf8ff83080ddec1c0bffe897ebc2241b89d44f66b3d274088b6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n}\n",
            "id": 30,
            "language": "Yul",
            "name": "#utility.yul"
          }
        ],
        "sourceMap": "3289:1023:28:-:0;;;3520:11;3486:45;;3561:262;;;;;;;;;;1980:113:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2054:5;2046;:13;;;;;;;;;;;;:::i;:::-;;2079:7;2069;:17;;;;;;;;;;;;:::i;:::-;;1980:113;;3758:57:28::1;3764:10;3803;:8;;;:10;;:::i;:::-;3798:16;;3794:2;:20;;;;:::i;:::-;3776:15;;:38;;;;:::i;:::-;3758:5;;;:57;;:::i;:::-;3289:1023:::0;;3104:91:4;3162:5;3186:2;3179:9;;3104:91;:::o;8520:535::-;8622:1;8603:21;;:7;:21;;;8595:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8671:49;8700:1;8704:7;8713:6;8671:20;;;:49;;:::i;:::-;8747:6;8731:12;;:22;;;;;;;:::i;:::-;;;;;;;;8921:6;8899:9;:18;8909:7;8899:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;8973:7;8952:37;;8969:1;8952:37;;;8982:6;8952:37;;;;;;:::i;:::-;;;;;;;;9000:48;9028:1;9032:7;9041:6;9000:19;;;:48;;:::i;:::-;8520:535;;:::o;12073:91::-;;;;:::o;12752:90::-;;;;:::o;3289:1023:28:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:180:30:-;55:77;52:1;45:88;152:4;149:1;142:15;176:4;173:1;166:15;193:102;235:8;282:5;279:1;275:13;254:34;;193:102;;;:::o;301:848::-;362:5;369:4;393:6;384:15;;417:5;408:14;;431:712;452:1;442:8;439:15;431:712;;;547:4;542:3;538:14;532:4;529:24;526:50;;;556:18;;:::i;:::-;526:50;606:1;596:8;592:16;589:451;;;1021:4;1014:5;1010:16;1001:25;;589:451;1071:4;1065;1061:15;1053:23;;1101:32;1124:8;1101:32;:::i;:::-;1089:44;;431:712;;;301:848;;;;;;;:::o;1155:1073::-;1209:5;1400:8;1390:40;;1421:1;1412:10;;1423:5;;1390:40;1449:4;1439:36;;1466:1;1457:10;;1468:5;;1439:36;1535:4;1583:1;1578:27;;;;1619:1;1614:191;;;;1528:277;;1578:27;1596:1;1587:10;;1598:5;;;1614:191;1659:3;1649:8;1646:17;1643:43;;;1666:18;;:::i;:::-;1643:43;1715:8;1712:1;1708:16;1699:25;;1750:3;1743:5;1740:14;1737:40;;;1757:18;;:::i;:::-;1737:40;1790:5;;;1528:277;;1914:2;1904:8;1901:16;1895:3;1889:4;1886:13;1882:36;1864:2;1854:8;1851:16;1846:2;1840:4;1837:12;1833:35;1817:111;1814:246;;;1970:8;1964:4;1960:19;1951:28;;2005:3;1998:5;1995:14;1992:40;;;2012:18;;:::i;:::-;1992:40;2045:5;;1814:246;2085:42;2123:3;2113:8;2107:4;2104:1;2085:42;:::i;:::-;2070:57;;;;2159:4;2154:3;2150:14;2143:5;2140:25;2137:51;;;2168:18;;:::i;:::-;2137:51;2217:4;2210:5;2206:16;2197:25;;1155:1073;;;;;;:::o;2234:77::-;2271:7;2300:5;2289:16;;2234:77;;;:::o;2317:285::-;2377:5;2401:23;2419:4;2401:23;:::i;:::-;2393:31;;2445:27;2463:8;2445:27;:::i;:::-;2433:39;;2491:104;2528:66;2518:8;2512:4;2491:104;:::i;:::-;2482:113;;2317:285;;;;:::o;2608:348::-;2648:7;2671:20;2689:1;2671:20;:::i;:::-;2666:25;;2705:20;2723:1;2705:20;:::i;:::-;2700:25;;2893:1;2825:66;2821:74;2818:1;2815:81;2810:1;2803:9;2796:17;2792:105;2789:131;;;2900:18;;:::i;:::-;2789:131;2948:1;2945;2941:9;2930:20;;2608:348;;;;:::o;2962:169::-;3046:11;3080:6;3075:3;3068:19;3120:4;3115:3;3111:14;3096:29;;2962:169;;;;:::o;3137:181::-;3277:33;3273:1;3265:6;3261:14;3254:57;3137:181;:::o;3324:366::-;3466:3;3487:67;3551:2;3546:3;3487:67;:::i;:::-;3480:74;;3563:93;3652:3;3563:93;:::i;:::-;3681:2;3676:3;3672:12;3665:19;;3324:366;;;:::o;3696:419::-;3862:4;3900:2;3889:9;3885:18;3877:26;;3949:9;3943:4;3939:20;3935:1;3924:9;3920:17;3913:47;3977:131;4103:4;3977:131;:::i;:::-;3969:139;;3696:419;;;:::o;4121:305::-;4161:3;4180:20;4198:1;4180:20;:::i;:::-;4175:25;;4214:20;4232:1;4214:20;:::i;:::-;4209:25;;4368:1;4300:66;4296:74;4293:1;4290:81;4287:107;;;4374:18;;:::i;:::-;4287:107;4418:1;4415;4411:9;4404:16;;4121:305;;;;:::o;4432:118::-;4519:24;4537:5;4519:24;:::i;:::-;4514:3;4507:37;4432:118;;:::o;4556:222::-;4649:4;4687:2;4676:9;4672:18;4664:26;;4700:71;4768:1;4757:9;4753:17;4744:6;4700:71;:::i;:::-;4556:222;;;;:::o;4784:180::-;4832:77;4829:1;4822:88;4929:4;4926:1;4919:15;4953:4;4950:1;4943:15;4970:320;5014:6;5051:1;5045:4;5041:12;5031:22;;5098:1;5092:4;5088:12;5119:18;5109:81;;5175:4;5167:6;5163:17;5153:27;;5109:81;5237:2;5229:6;5226:14;5206:18;5203:38;5200:84;;5256:18;;:::i;:::-;5200:84;5021:269;4970:320;;;:::o;3289:1023:28:-;;;;;;;",
        "deployedSourceMap": "3289:1023:28:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4444:197;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3255:106;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5203:256;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3104:91;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5854:234;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3419:125;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2369:102;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;6575:427;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3740:189;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3987:149;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3887:416:28;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;2158:98:4;2212:13;2244:5;2237:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2158:98;:::o;4444:197::-;4527:4;4543:13;4559:12;:10;:12::i;:::-;4543:28;;4581:32;4590:5;4597:7;4606:6;4581:8;:32::i;:::-;4630:4;4623:11;;;4444:197;;;;:::o;3255:106::-;3316:7;3342:12;;3335:19;;3255:106;:::o;5203:256::-;5300:4;5316:15;5334:12;:10;:12::i;:::-;5316:30;;5356:38;5372:4;5378:7;5387:6;5356:15;:38::i;:::-;5404:27;5414:4;5420:2;5424:6;5404:9;:27::i;:::-;5448:4;5441:11;;;5203:256;;;;;:::o;3104:91::-;3162:5;3186:2;3179:9;;3104:91;:::o;5854:234::-;5942:4;5958:13;5974:12;:10;:12::i;:::-;5958:28;;5996:64;6005:5;6012:7;6049:10;6021:25;6031:5;6038:7;6021:9;:25::i;:::-;:38;;;;:::i;:::-;5996:8;:64::i;:::-;6077:4;6070:11;;;5854:234;;;;:::o;3419:125::-;3493:7;3519:9;:18;3529:7;3519:18;;;;;;;;;;;;;;;;3512:25;;3419:125;;;:::o;2369:102::-;2425:13;2457:7;2450:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2369:102;:::o;6575:427::-;6668:4;6684:13;6700:12;:10;:12::i;:::-;6684:28;;6722:24;6749:25;6759:5;6766:7;6749:9;:25::i;:::-;6722:52;;6812:15;6792:16;:35;;6784:85;;;;;;;;;;;;:::i;:::-;;;;;;;;;6903:60;6912:5;6919:7;6947:15;6928:16;:34;6903:8;:60::i;:::-;6991:4;6984:11;;;;6575:427;;;;:::o;3740:189::-;3819:4;3835:13;3851:12;:10;:12::i;:::-;3835:28;;3873;3883:5;3890:2;3894:6;3873:9;:28::i;:::-;3918:4;3911:11;;;3740:189;;;;:::o;3987:149::-;4076:7;4102:11;:18;4114:5;4102:18;;;;;;;;;;;;;;;:27;4121:7;4102:27;;;;;;;;;;;;;;;;4095:34;;3987:149;;;;:::o;3887:416:28:-;4020:11;:23;4032:10;4020:23;;;;;;;;;;;;;;;;4001:15;:42;;3993:77;;;;;;;;;;;;:::i;:::-;;;;;;;;;4179:3;4161:15;:21;;;;:::i;:::-;4135:11;:23;4147:10;4135:23;;;;;;;;;;;;;;;:47;;;;4226:18;4235:2;4238:5;4226:8;:18::i;:::-;;4267:8;4255:28;;;4284:8;4255:38;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3887:416;;;;:::o;640:96:18:-;693:7;719:10;712:17;;640:96;:::o;10457:340:4:-;10575:1;10558:19;;:5;:19;;;10550:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10655:1;10636:21;;:7;:21;;;10628:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;10737:6;10707:11;:18;10719:5;10707:18;;;;;;;;;;;;;;;:27;10726:7;10707:27;;;;;;;;;;;;;;;:36;;;;10774:7;10758:32;;10767:5;10758:32;;;10783:6;10758:32;;;;;;:::i;:::-;;;;;;;;10457:340;;;:::o;11078:411::-;11178:24;11205:25;11215:5;11222:7;11205:9;:25::i;:::-;11178:52;;11264:17;11244:16;:37;11240:243;;11325:6;11305:16;:26;;11297:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;11407:51;11416:5;11423:7;11451:6;11432:16;:25;11407:8;:51::i;:::-;11240:243;11168:321;11078:411;;;:::o;7456:788::-;7568:1;7552:18;;:4;:18;;;7544:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;7644:1;7630:16;;:2;:16;;;7622:64;;;;;;;;;;;;:::i;:::-;;;;;;;;;7697:38;7718:4;7724:2;7728:6;7697:20;:38::i;:::-;7746:19;7768:9;:15;7778:4;7768:15;;;;;;;;;;;;;;;;7746:37;;7816:6;7801:11;:21;;7793:72;;;;;;;;;;;;:::i;:::-;;;;;;;;;7931:6;7917:11;:20;7899:9;:15;7909:4;7899:15;;;;;;;;;;;;;;;:38;;;;8131:6;8114:9;:13;8124:2;8114:13;;;;;;;;;;;;;;;;:23;;;;;;;;;;;8178:2;8163:26;;8172:4;8163:26;;;8182:6;8163:26;;;;;;:::i;:::-;;;;;;;;8200:37;8220:4;8226:2;8230:6;8200:19;:37::i;:::-;7534:710;7456:788;;;:::o;12073:91::-;;;;:::o;12752:90::-;;;;:::o;7:99:30:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:307::-;355:1;365:113;379:6;376:1;373:13;365:113;;;464:1;459:3;455:11;449:18;445:1;440:3;436:11;429:39;401:2;398:1;394:10;389:15;;365:113;;;496:6;493:1;490:13;487:101;;;576:1;567:6;562:3;558:16;551:27;487:101;336:258;287:307;;;:::o;600:102::-;641:6;692:2;688:7;683:2;676:5;672:14;668:28;658:38;;600:102;;;:::o;708:364::-;796:3;824:39;857:5;824:39;:::i;:::-;879:71;943:6;938:3;879:71;:::i;:::-;872:78;;959:52;1004:6;999:3;992:4;985:5;981:16;959:52;:::i;:::-;1036:29;1058:6;1036:29;:::i;:::-;1031:3;1027:39;1020:46;;800:272;708:364;;;;:::o;1078:313::-;1191:4;1229:2;1218:9;1214:18;1206:26;;1278:9;1272:4;1268:20;1264:1;1253:9;1249:17;1242:47;1306:78;1379:4;1370:6;1306:78;:::i;:::-;1298:86;;1078:313;;;;:::o;1478:117::-;1587:1;1584;1577:12;1724:126;1761:7;1801:42;1794:5;1790:54;1779:65;;1724:126;;;:::o;1856:96::-;1893:7;1922:24;1940:5;1922:24;:::i;:::-;1911:35;;1856:96;;;:::o;1958:122::-;2031:24;2049:5;2031:24;:::i;:::-;2024:5;2021:35;2011:63;;2070:1;2067;2060:12;2011:63;1958:122;:::o;2086:139::-;2132:5;2170:6;2157:20;2148:29;;2186:33;2213:5;2186:33;:::i;:::-;2086:139;;;;:::o;2231:77::-;2268:7;2297:5;2286:16;;2231:77;;;:::o;2314:122::-;2387:24;2405:5;2387:24;:::i;:::-;2380:5;2377:35;2367:63;;2426:1;2423;2416:12;2367:63;2314:122;:::o;2442:139::-;2488:5;2526:6;2513:20;2504:29;;2542:33;2569:5;2542:33;:::i;:::-;2442:139;;;;:::o;2587:474::-;2655:6;2663;2712:2;2700:9;2691:7;2687:23;2683:32;2680:119;;;2718:79;;:::i;:::-;2680:119;2838:1;2863:53;2908:7;2899:6;2888:9;2884:22;2863:53;:::i;:::-;2853:63;;2809:117;2965:2;2991:53;3036:7;3027:6;3016:9;3012:22;2991:53;:::i;:::-;2981:63;;2936:118;2587:474;;;;;:::o;3067:90::-;3101:7;3144:5;3137:13;3130:21;3119:32;;3067:90;;;:::o;3163:109::-;3244:21;3259:5;3244:21;:::i;:::-;3239:3;3232:34;3163:109;;:::o;3278:210::-;3365:4;3403:2;3392:9;3388:18;3380:26;;3416:65;3478:1;3467:9;3463:17;3454:6;3416:65;:::i;:::-;3278:210;;;;:::o;3494:118::-;3581:24;3599:5;3581:24;:::i;:::-;3576:3;3569:37;3494:118;;:::o;3618:222::-;3711:4;3749:2;3738:9;3734:18;3726:26;;3762:71;3830:1;3819:9;3815:17;3806:6;3762:71;:::i;:::-;3618:222;;;;:::o;3846:619::-;3923:6;3931;3939;3988:2;3976:9;3967:7;3963:23;3959:32;3956:119;;;3994:79;;:::i;:::-;3956:119;4114:1;4139:53;4184:7;4175:6;4164:9;4160:22;4139:53;:::i;:::-;4129:63;;4085:117;4241:2;4267:53;4312:7;4303:6;4292:9;4288:22;4267:53;:::i;:::-;4257:63;;4212:118;4369:2;4395:53;4440:7;4431:6;4420:9;4416:22;4395:53;:::i;:::-;4385:63;;4340:118;3846:619;;;;;:::o;4471:86::-;4506:7;4546:4;4539:5;4535:16;4524:27;;4471:86;;;:::o;4563:112::-;4646:22;4662:5;4646:22;:::i;:::-;4641:3;4634:35;4563:112;;:::o;4681:214::-;4770:4;4808:2;4797:9;4793:18;4785:26;;4821:67;4885:1;4874:9;4870:17;4861:6;4821:67;:::i;:::-;4681:214;;;;:::o;4901:329::-;4960:6;5009:2;4997:9;4988:7;4984:23;4980:32;4977:119;;;5015:79;;:::i;:::-;4977:119;5135:1;5160:53;5205:7;5196:6;5185:9;5181:22;5160:53;:::i;:::-;5150:63;;5106:117;4901:329;;;;:::o;5236:474::-;5304:6;5312;5361:2;5349:9;5340:7;5336:23;5332:32;5329:119;;;5367:79;;:::i;:::-;5329:119;5487:1;5512:53;5557:7;5548:6;5537:9;5533:22;5512:53;:::i;:::-;5502:63;;5458:117;5614:2;5640:53;5685:7;5676:6;5665:9;5661:22;5640:53;:::i;:::-;5630:63;;5585:118;5236:474;;;;;:::o;5716:765::-;5802:6;5810;5818;5826;5875:3;5863:9;5854:7;5850:23;5846:33;5843:120;;;5882:79;;:::i;:::-;5843:120;6002:1;6027:53;6072:7;6063:6;6052:9;6048:22;6027:53;:::i;:::-;6017:63;;5973:117;6129:2;6155:53;6200:7;6191:6;6180:9;6176:22;6155:53;:::i;:::-;6145:63;;6100:118;6257:2;6283:53;6328:7;6319:6;6308:9;6304:22;6283:53;:::i;:::-;6273:63;;6228:118;6385:2;6411:53;6456:7;6447:6;6436:9;6432:22;6411:53;:::i;:::-;6401:63;;6356:118;5716:765;;;;;;;:::o;6487:180::-;6535:77;6532:1;6525:88;6632:4;6629:1;6622:15;6656:4;6653:1;6646:15;6673:320;6717:6;6754:1;6748:4;6744:12;6734:22;;6801:1;6795:4;6791:12;6822:18;6812:81;;6878:4;6870:6;6866:17;6856:27;;6812:81;6940:2;6932:6;6929:14;6909:18;6906:38;6903:84;;6959:18;;:::i;:::-;6903:84;6724:269;6673:320;;;:::o;6999:180::-;7047:77;7044:1;7037:88;7144:4;7141:1;7134:15;7168:4;7165:1;7158:15;7185:305;7225:3;7244:20;7262:1;7244:20;:::i;:::-;7239:25;;7278:20;7296:1;7278:20;:::i;:::-;7273:25;;7432:1;7364:66;7360:74;7357:1;7354:81;7351:107;;;7438:18;;:::i;:::-;7351:107;7482:1;7479;7475:9;7468:16;;7185:305;;;;:::o;7496:224::-;7636:34;7632:1;7624:6;7620:14;7613:58;7705:7;7700:2;7692:6;7688:15;7681:32;7496:224;:::o;7726:366::-;7868:3;7889:67;7953:2;7948:3;7889:67;:::i;:::-;7882:74;;7965:93;8054:3;7965:93;:::i;:::-;8083:2;8078:3;8074:12;8067:19;;7726:366;;;:::o;8098:419::-;8264:4;8302:2;8291:9;8287:18;8279:26;;8351:9;8345:4;8341:20;8337:1;8326:9;8322:17;8315:47;8379:131;8505:4;8379:131;:::i;:::-;8371:139;;8098:419;;;:::o;8523:172::-;8663:24;8659:1;8651:6;8647:14;8640:48;8523:172;:::o;8701:366::-;8843:3;8864:67;8928:2;8923:3;8864:67;:::i;:::-;8857:74;;8940:93;9029:3;8940:93;:::i;:::-;9058:2;9053:3;9049:12;9042:19;;8701:366;;;:::o;9073:419::-;9239:4;9277:2;9266:9;9262:18;9254:26;;9326:9;9320:4;9316:20;9312:1;9301:9;9297:17;9290:47;9354:131;9480:4;9354:131;:::i;:::-;9346:139;;9073:419;;;:::o;9498:223::-;9638:34;9634:1;9626:6;9622:14;9615:58;9707:6;9702:2;9694:6;9690:15;9683:31;9498:223;:::o;9727:366::-;9869:3;9890:67;9954:2;9949:3;9890:67;:::i;:::-;9883:74;;9966:93;10055:3;9966:93;:::i;:::-;10084:2;10079:3;10075:12;10068:19;;9727:366;;;:::o;10099:419::-;10265:4;10303:2;10292:9;10288:18;10280:26;;10352:9;10346:4;10342:20;10338:1;10327:9;10323:17;10316:47;10380:131;10506:4;10380:131;:::i;:::-;10372:139;;10099:419;;;:::o;10524:221::-;10664:34;10660:1;10652:6;10648:14;10641:58;10733:4;10728:2;10720:6;10716:15;10709:29;10524:221;:::o;10751:366::-;10893:3;10914:67;10978:2;10973:3;10914:67;:::i;:::-;10907:74;;10990:93;11079:3;10990:93;:::i;:::-;11108:2;11103:3;11099:12;11092:19;;10751:366;;;:::o;11123:419::-;11289:4;11327:2;11316:9;11312:18;11304:26;;11376:9;11370:4;11366:20;11362:1;11351:9;11347:17;11340:47;11404:131;11530:4;11404:131;:::i;:::-;11396:139;;11123:419;;;:::o;11548:179::-;11688:31;11684:1;11676:6;11672:14;11665:55;11548:179;:::o;11733:366::-;11875:3;11896:67;11960:2;11955:3;11896:67;:::i;:::-;11889:74;;11972:93;12061:3;11972:93;:::i;:::-;12090:2;12085:3;12081:12;12074:19;;11733:366;;;:::o;12105:419::-;12271:4;12309:2;12298:9;12294:18;12286:26;;12358:9;12352:4;12348:20;12344:1;12333:9;12329:17;12322:47;12386:131;12512:4;12386:131;:::i;:::-;12378:139;;12105:419;;;:::o;12530:224::-;12670:34;12666:1;12658:6;12654:14;12647:58;12739:7;12734:2;12726:6;12722:15;12715:32;12530:224;:::o;12760:366::-;12902:3;12923:67;12987:2;12982:3;12923:67;:::i;:::-;12916:74;;12999:93;13088:3;12999:93;:::i;:::-;13117:2;13112:3;13108:12;13101:19;;12760:366;;;:::o;13132:419::-;13298:4;13336:2;13325:9;13321:18;13313:26;;13385:9;13379:4;13375:20;13371:1;13360:9;13356:17;13349:47;13413:131;13539:4;13413:131;:::i;:::-;13405:139;;13132:419;;;:::o;13557:222::-;13697:34;13693:1;13685:6;13681:14;13674:58;13766:5;13761:2;13753:6;13749:15;13742:30;13557:222;:::o;13785:366::-;13927:3;13948:67;14012:2;14007:3;13948:67;:::i;:::-;13941:74;;14024:93;14113:3;14024:93;:::i;:::-;14142:2;14137:3;14133:12;14126:19;;13785:366;;;:::o;14157:419::-;14323:4;14361:2;14350:9;14346:18;14338:26;;14410:9;14404:4;14400:20;14396:1;14385:9;14381:17;14374:47;14438:131;14564:4;14438:131;:::i;:::-;14430:139;;14157:419;;;:::o;14582:225::-;14722:34;14718:1;14710:6;14706:14;14699:58;14791:8;14786:2;14778:6;14774:15;14767:33;14582:225;:::o;14813:366::-;14955:3;14976:67;15040:2;15035:3;14976:67;:::i;:::-;14969:74;;15052:93;15141:3;15052:93;:::i;:::-;15170:2;15165:3;15161:12;15154:19;;14813:366;;;:::o;15185:419::-;15351:4;15389:2;15378:9;15374:18;15366:26;;15438:9;15432:4;15428:20;15424:1;15413:9;15409:17;15402:47;15466:131;15592:4;15466:131;:::i;:::-;15458:139;;15185:419;;;:::o",
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
        "updatedAt": "2023-06-18T10:24:17.242Z",
        "devdoc": {
          "kind": "dev",
          "methods": {
            "allowance(address,address)": {
              "details": "See {IERC20-allowance}."
            },
            "approve(address,uint256)": {
              "details": "See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address."
            },
            "balanceOf(address)": {
              "details": "See {IERC20-balanceOf}."
            },
            "decimals()": {
              "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5.05` (`505 / 10 ** 2`). Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the default value returned by this function, unless it's overridden. NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
            },
            "decreaseAllowance(address,uint256)": {
              "details": "Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
            },
            "increaseAllowance(address,uint256)": {
              "details": "Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address."
            },
            "name()": {
              "details": "Returns the name of the token."
            },
            "symbol()": {
              "details": "Returns the symbol of the token, usually a shorter version of the name."
            },
            "totalSupply()": {
              "details": "See {IERC20-totalSupply}."
            },
            "transfer(address,uint256)": {
              "details": "See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`."
            },
            "transferFrom(address,address,uint256)": {
              "details": "See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``'s tokens of at least `amount`."
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