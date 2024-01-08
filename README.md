# klaytn music

# :books: 목차

- [:book: 프로젝트 소개](#book-프로젝트-소개)

  - [프로젝트 개요](#프로젝트-개요)
  - [프로젝트 요약](#프로젝트-요약)
  - [프로젝트 플로우차트](#프로젝트-플로우차트)
  <!-- - [DB 스키마](#db-스키마) -->

- [:wrench: 사용 기술 (Technique)](#wrench-사용-기술-technique)

  - [:hammer:기술 스택 (Technique Used)](#기술-스택-technique-used)

    - [**FrontEnd**](#frontend)
    - [**BackEnd**](#backend)
    - [**Smart Contract**](#smart-contract)
    <!-- - [**Deploy**](#deploy) -->

    <!-- - [Deploy :rocket:](#deploy-rocket) -->
    <!-- - [Connect](#connect) -->

- [:computer: 제공 기능 (Service)](#computer-제공-기능-service)
- [:프로젝트 후기](#프로젝트 후기)


# :book: 프로젝트 소개

## 프로젝트 개요

기존 음원서비스의 정산 시스템의 속도가 가상화폐를 사용하여 정산하는 속도보다 느리다.

※ 음원 다운로드 혹은 스트리밍 방식에 의한 수익 산정 방법은 명시되어 있으나 언제 수익이 정산되는지 사용자가 알 수가 없다.

- 음원차트의 경우 특정 플랫폼이 사용자 음원 재생 정보를 독점하기 때문에 사용자는 자세한 정보를 알 수 없다.

  이러한 단점을 해결하기 위해 만든 프로젝트 입니다.
  ![](/Doc/img/cashflow.png)

## 프로젝트 요약

기존 음원 스트리밍 서비스보다 블록체인의 스마트 컨트랙트를 통한 신뢰성 있는 음원차트기능 생성

음원 스트리밍에 적용할 수 있는 스마트 컨트랙트를 통한 ERC-20표준 가상화폐 발행

기존 음원 스트리밍 서비스보다 스마트 컨트랙트의 가상화폐를 통한 빠른 음원 스트리밍 비용 정산 시스템 구축

## 프로젝트 플로우차트

![](./Doc/img/flowchart.png)

# :wrench: 사용 기술 (Technique)

### FrontEnd

|                         Icon                         | Stack | Description     |
| :--------------------------------------------------: | :---: | --------------- |
| <img src = "/Doc/stackIcon/react.png" height = 25px> | REACT | 프론트앤드 구성 |

### BackEnd

|                          Icon                          |  Stack  | Description        |
| :----------------------------------------------------: | :-----: | ------------------ |
| <img src = "/Doc/stackIcon/nodejs.png" height = 25px>  | NODEJS  | API 서버 제작      |
| <img src = "/Doc/stackIcon/mongoDB.png" height = 25px> | MONGODB | MongoDB Atlas 사용 |
|  <img src = "/Doc/stackIcon/nginx.png" height = 27px>  |  NGINX  | 웹 서버로 사용     |

### Smart Contract

|                          Icon                           |  Stack   | Description          |
| :-----------------------------------------------------: | :------: | -------------------- |
| <img src = "/Doc/stackIcon/Solidity.png" height = 25px> | SOLIDITY | 스마트 컨트랙트 작성 |
| <img src = "/Doc/stackIcon/Truffle.png" height = 25px>  | TRUFFLE  | 스마트 컨트랙트 배포 |
|  <img src = "/Doc/stackIcon/klaytn.png" height = 25px>  |  KLAYTN  | 블록체인 네트워크    |
| <img src = "/Doc/stackIcon/ganache.png" height = 25px>  | GANACHE  | 로컬에서 테스트      |

<!-- ### Deploy

|                               Icon                                |        Stack        | Description                        |
| :---------------------------------------------------------------: | :-----------------: | ---------------------------------- |
|    <img src = "./Doc/img/stackIcon/docker.png" height = 25px>     |       DOCKER        | 컨테이너 생성, 배포 시 이미지 생성 |
|      <img src = "./Doc/img/stackIcon/ec2.png" height = 30px>      |         EC2         | 배포 서버                          |
|    <img src = "./Doc/img/stackIcon/route53.png" height = 30px>    |      ROUTE 53       | DNS와 EC2서버 연결                 |
|      <img src = "./Doc/img/stackIcon/acm.png" height = 30px>      | CERTIFICATE MANAGER | SSL 인증서 생성                    |
| <img src = "./Doc/img/stackIcon/githubactions.png" height = 25px> |   GITHUB ACTIONS    | CI/CI 배포 자동화 사용             | -->

<!-- ## :construction:Architecture

## 1. FE .env 설정 -->

# :computer: 제공 기능 (Service)

<div>
<!-- 홈화면 이미지 -->
<img src="/Doc/img/homelogo.png" alt="홈화면" width="324" height="707">

<!-- 음원업로드 이미지 -->
<img src="/Doc/img/downloadtab.png" alt="음원업로드" width="324" height="707">
</div>
<div>
<!-- 마이페이지 이미지 -->
<img src="/Doc/img/mypagelogo.png" alt="마이페이지" width="324" height="707">

<!-- 음원리스트 이미지 -->
<img src="/Doc/img/songlistlogo.png" alt="음원리스트" width="324" height="707">
</div>

## 음원 재생 SmartContract

```solidity
// 예시 솔리디티 코드
pragma solidity ^0.8.0;

interface PlayCounter{

struct tokenInfo{
        uint256 listenCount;
        uint256 tokenId;
        address owner;

    }

    function listen(uint256 _tokenId) external ;
}

//ERC721 NFT 발행을 위한 ArtGrowNFT.sol
//음원정산을 위한 ERC20토큰 발행 Amaranthus.sol 의 interface이다.

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

//ArtGrowNFT.sol의 NFT 발행 로직이다. 음원 관련하여 사용자의 기호를 반영하려고 했다.
```


```solidity
// 예시 솔리디티 코드
pragma solidity ^0.8.0;


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

//Amaranthus.sol의 일부분이며 사용자가 음원 재생시 sendTransaction 함수가 사용되어 앞서 발행한 erc20토큰을
//음원 제작자에게 전송한다. 무분별한 트랜잭션을 방지하기위해 4분의 transaction lock을 설정해두었다.
```
## 프로젝트 후기

### 기술적 성취
기존 프로젝트는 프론트단에서 가상화폐 지갑을 연결하여 블록체인과 통신하였다면 이 프로젝트는 kaytn wallet을 
통해서 쉽게 사용자 지갑정보를 생성하고 DB를 구축하여 Raw Transaction을 발생시켰다. 이를 통해 walletConnectModal을
사용했을때 처럼 웹에서 사용자 서명을 따로 받을 필요없이 접근성을 향상시킬수 있었다.

### 문제해결
처음 접하는 백엔드단과 프론트단의 통신과정에서 프로젝트의 시스템 아키텍쳐가 매우 중요함을 깨달았다.
특히 AWS에 배포하는 경우 클라우드 환경을 고려하지않은 설계는 엄청난 시간소모를 불러일으킴을 알았다.

### 한계점
음원파일은 여전히 IPFS에 저장되어 의존한다는 점

실제 컨트랙트를 배포했을때 GAS FEE 해결문제

클레이튼 TESTNET을 대체하기 위해 GETH를 통해 구축한 PRIVATE
네트워크의 외부 통신 문제 

1인으로 진행한 프로젝트는 완벽에 가깝기 힘들고 반드시
팀원을 구성하여 분업이 필요함을 느꼈다.

