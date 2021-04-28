const apiHost = 'https://cloud.iexapis.com/stable/';
const search = 'search';
const quotePrice = 'stock';
const apikey =
    'pk_2d87808402a3463ab504dac6eb52b540';
// IsdX32acGoVARDNcEHAVClZRX0BNcuvrWeLSpy9is5Ipe9CP5J6Z8EnYFoL2
// BMxa3DAbRA6UN72hRMCZb228oPGAO5IXO86RZcEB4dbktedzZUsfuBdSNNWQ
// kyUmO7F6Euzgg5Q8V3768Z49T1fwtjKQ5GIFpIMDVdJLVwvOkN5aR1HCeX8J
export default {
    async fetchStockPrice(val) {
        try {
            const response = await fetch(
                apiHost + quotePrice + '/' + val + '/quote?token=' + apikey
            );
            const responseJson = await response.json();
            // console.log('In Ajax' + responseJson.data[0]['price']);
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    },
    async fetchSearchStock(val) {
        try {
            const response = await fetch(
                apiHost +
                search +
                '/' +
                val +
                '?token=' +
                apikey
            );
            const responseJson = await response.json();
            return responseJson;
        } catch (error) {
            console.error(error);
        }
    }
};