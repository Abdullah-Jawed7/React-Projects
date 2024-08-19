import { useEffect ,useState } from "react";

function useInfo(currency){

    // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`
    // let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json`


    const [data ,setData] =useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))
    },[currency])
    console.log(data);
    return data;
    
}
const myHeaders = new Headers();
myHeaders.append("x-api-key", "aMFouLkMjcxGopFBPmzjWGMKQCkVKPDMsghukTvPHaPWzsqALZZFfGRtpBgvEKVVLGDJjDBavveHcoVKhuqjovsRWhkgGEQiyRmX");
myHeaders.append("x-app-version", "1.0.0");
myHeaders.append("x-apihub-key", "");
myHeaders.append("x-apihub-host", "Currency-Converter.allthingsdev.co");
myHeaders.append("x-apihub-endpoint", "f7a950b7-e795-4241-b4ab-1c646fcabadc");

const requestOptions = {
   method: "GET",
   headers: myHeaders,
   redirect: "follow"
};

fetch("https://Currency-Converter.proxy-production.allthingsdev.co/api/v1/currency/list", requestOptions)
   .then((response) => response.text())
   .then((result) => console.log(result))
   .catch((error) => console.error(error));
export default useInfo;