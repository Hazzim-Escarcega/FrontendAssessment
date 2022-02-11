
$(document).ready(function(){
    const request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = () => {
    if(request.status === 200){
        var cdata = JSON.parse(request.response);
        cdata.sort(function(a,b){
            if(a.name.official.toLowerCase() < b.name.official.toLowerCase()) return -1;
            if(a.name.official.toLowerCase() > b.name.official.toLowerCase()) return 1;
            return 0;
            })
            console.log(cdata)
        cdata.forEach(function(country) {
            
            $("#cdata").append(
            "<tr  onclick='showModal()'>"
            +"<td text='ASDFG'>"+country.name.official+"</td>"
            +"<td>"+country.capital+"</td>"
            +"<td>"+country.region+"</td>"
            +"<td>"+country.languages+"</td>"
            +"<td>"+country.population+"</td>"
            +"<td>"+"<img style='width: 60px; height: 40px' src="+country.flags.svg+">"+"</td>"
            +"</tr>")
        });
    }
    else{
        console.log("An error has ocurred")
        console.log(request)
        console.log(`Error ${request.status}`)
    }
}
});
