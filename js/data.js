{
    function getJSON(){
        getJsonURL = jsonURL.value;
        getJsonUrl(getJsonURL);
    }

    function getJsonUrl(jsonUrl){
        if(jsonUrl == ""){
            document.getElementById("getJsonData").innerHTML = Error
        }else{
            fetch(jsonUrl)
                .then(result => result.json())
                .then((output) => {
                const jsonData = JSON.stringify(output);
                console.log(jsonData);
                let obj = jsonData;
                Object = obj
                document.getElementById("getJsonData").innerHTML = obj;
            }).catch(err => console.error(err));
        };
    }

    function check(checkEmailText, jsonT){
        let herSc = jsonT
        herSc["name"][0];
        console.log(herSc)
    }

    function jsonCheckData(){
        getJSON();
        checkEmailText = document.getElementById('checkEmail').value;
        check('Fun117', Object);
    }
}