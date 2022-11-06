window.onload = function(){
    document.getElementById("search").addEventListener("click", () => {
        fetch("http://localhost/info2180-lab4/superheroes.php")
        .then((response) => {
            if (response.ok) {
                return response.text()
            }
            else{
                throw new Error(`Error! status: ${response.status}`)
            }
        })
          .then((data) => alert(data))
          .catch((err) => alert(err));
      });
}