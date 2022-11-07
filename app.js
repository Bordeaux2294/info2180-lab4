window.onload = function(){

    function SearchName(name){
        return fetch(`http://localhost/info2180-lab4/superheroes.php?query=${name}`)
            .then((response) => {
                if (response.ok) {
                    return response.text()
                }
                else{
                    throw new Error(`Error! status: ${response.status}`)
                }
            })
            .then((data) => data)
            .catch((err) => err);
    }


    document.getElementById("search").onclick = e => {
        e.preventDefault();
        SearchName(document.getElementById("searchname").value.trim()).then(
            (data) => (document.getElementById("result").innerHTML = data)
          );
        };
}