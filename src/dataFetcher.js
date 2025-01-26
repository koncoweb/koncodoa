// dataFetcher.js

export const fetchData = async (filename) => {
    try {
        const response = await fetch(`./data/${filename}`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};