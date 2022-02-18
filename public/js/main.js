//Fetch accessibility issues
const testAccessibility = async (e) => {
    e.preventDefault();

    const url = document.querySelector('#url').value;

    if (url === '') {
        alert("Enter a valid url")
    }else{
        setLoading();
        const response = await fetch(`http://localhost:5000/api/test?url=${url}`);

        if(response.status !== 200){
            setLoading(false);
            alert("An error has ocurred");
        }else{
            const {issues} = await response.json();
            addIssuesToDom(issues);
            setLoading(false);
        }
    }
}
//Add issues to DOM
    const addIssuesToDom = (issues) => {
        console.log(issues)
    }
//Set loading state
const setLoading = (isLoading = true) => {
    const loader = document.querySelector('.loader');
    if(isLoading) {
        loader.style.display = 'block';
    }else{
        loader.style.display = 'none';
    }
}

//Escape HTML


document.querySelector('#form').addEventListener('submit', testAccessibility)