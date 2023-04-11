

async function getParks(id) {
    const stateID = id
    const fetch_url = "https://developer.nps.gov/api/v1/parks?stateCode=" + stateID + "&limit=50&start=1&api_key=IbJ0TVIDmveOI3eJFBHvm8jNTU2USCihPpsiGyJq";


    function removeAll(){
        document.getElementById("parkmenu").innerHTML = "";
    }
    removeAll();

    const response = await fetch(fetch_url);
    const data = await response.json();

    console.log(data);

    data.data.forEach(elem => {
        // const markup = `<li id="${stateID}" onclick="getinfo(this.id)">${elem.fullName}</li>`;
        const markup = `<li id="${elem.parkCode}" onclick="getInfo(this.id)">${elem.fullName}</li>`;


        document.getElementById('parkmenu').insertAdjacentHTML('beforeend', markup);
    });

    // $.each(data, function(index, value){

    //     data.data.forEach(elem => {
    //         // const markup = `<li id="${stateID}" onclick="getinfo(this.id)">${elem.fullName}</li>`;
    //         const markup = `<li id="${elem.parkCode}" onclick="getInfo(this.id)">${elem.fullName}</li>`;


    //         document.getElementById('parkmenu').insertAdjacentHTML('beforeend', markup);
    //     });
    // });
}



async function getInfo(id) {
    const parkID = id
    const fetchPark_url = "https://developer.nps.gov/api/v1/parks?parkCode=" + parkID + "&limit=50&start=0&api_key=IbJ0TVIDmveOI3eJFBHvm8jNTU2USCihPpsiGyJq"
    console.log(parkID);

    function removeAll(){
        document.getElementById("parkinfo").innerHTML = "";
    }
    removeAll();

    const response = await fetch(fetchPark_url);
    const data = await response.json();

    console.log(data);

    data.data.forEach(elem => {
        const imgs = elem.images;


        const markup = `<h2 class"parkname">${elem.fullName}</h2>
                        <p class="descript">${elem.description}</p>`;
                        // <p class="descript">${elem.directionsInfo}</p>`;
                        // <p class="descript"><a href="${elem.directionsUrl}" target="_blank">${elem.directionsUrl}</a></p>

        document.getElementById("parkinfo").insertAdjacentHTML('beforeend', markup);

        imgs.forEach(elem => {
            console.log(elem.title)
            console.log(elem.url)

            function removeAll(){
                document.getElementById("prkImages").innerHTML = "";
            }
            removeAll();

            const imgmarkup = `<li><img src="${elem.url}" alt="${elem.title}" class="responsive"></li>`;

            document.getElementById("prkImages").insertAdjacentHTML('beforeend', imgmarkup);
        });
    });

}
