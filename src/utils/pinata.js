import axios from "axios";

const pinata_api_key = "5aacd753f1cf6d864482";
const pinata_secret_api_key = "9e9c2a8cfe46772041b2fd7d6aeab18196437a349a4dd6a9fff1ed2c7058ff2e";

export const pinFileToIPFS = async (file) => {
    const data = new FormData();
    data.append('file', file);

    try {
        const res = await axios.post(
            "https://api.pinata.cloud/pinning/pinFileToIPFS",
            data,
            {
                headers: {
                    pinata_api_key: `${pinata_api_key}`,
                    pinata_secret_api_key: `${pinata_secret_api_key}`,
                },
            }
        );
        return {
            isSuccess: true,
            data: res.data,
        };
    } catch (error) {
        console.error(error, "Error");
        return {
            isSuccess: false,
            data: null,
        };
    }
};

export const pinJSONToIPFS = async (data, imageHash) => {
    const jsonData = await constructJSON(data, imageHash);
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    try {
        const res = await axios.post(url, jsonData, {
            headers: {
                pinata_api_key: `${pinata_api_key}`,
                pinata_secret_api_key: `${pinata_secret_api_key}`,
            },
        });
        return {
            isSuccess: true,
            data: res.data,
        };
    } catch (error) {
        console.error(error.response, "Error");
        return {
            isSuccess: false,
            data: null,
        };
    }
};

const constructJSON = async(data, imageHash) => {

    const json_data = {
        pinataMetadata: {
            name: `${data.your_nft}.json`,
        },
        pinataContent: {
            name: data.your_nft,
            description: data.description,
            external_url: data.external_link,
            image: `ipfs://${imageHash}`,
            attributes: [],
        },
    };

    return json_data;
}