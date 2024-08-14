const base_url=" http://api.weatherapi.com/v1"
const key="3b0be50f453c49ce9a0105501241408"

const getWeather=async()=>{
    let result=''
    const city=winp.value
    const res=await fetch(`${base_url}/current.json?key=${key}&q=${city}`)
    const jsres=await res.json()
    console.log(jsres)
    result=`
    <div class=text-center>
        <h3>${jsres.location.name},${jsres.location.region},${jsres.location.country}</h3>
        <img src=${jsres.current.condition.icon} atl="icon">
        <h5>${jsres.current.condition.text}</h5>
    </div>
    `
    cnt.innerHTML=result
}