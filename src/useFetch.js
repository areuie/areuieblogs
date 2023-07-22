import {useState, useEffect} from 'react';

const useFetch = (url) => { //custom hooks have to start with "use"
    const [data, setData] = useState(null); //change to data to make it more reusable
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { // only runs when the value changes, so when you press it again, useEffect doesn't run
        const abortCont = new AbortController();
        setTimeout(() => { //timer
            fetch(url, {signal: abortCont.signal})
                .then(res => { //get the response object using json object
                    console.log(res);
                    if(!res.ok) { //ok property is true when we get data back
                        throw Error('Faulty endpoint'); //takes it to the catch block, as even if it's faulty, it still shows a res
                    }
                    return res.json();
                })
                .then((data) => { //tack on another then where we get the data, data here is a local version
                    console.log(data);
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch( err => { //not fetching the data anymore but we are still fetching the state when we abort it
                    //make sure if it is aborted, we don't update the state
                    if (err.name === "AbortError") {
                        console.log('Webpage aborted');
                    }
                    else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000)
        return () => abortCont.abort(); //abort whatever fetch its associated withe 
    },[url]);// this one will not have an infinite loop because of the [], url is a dependency, when the url changes it reruns it

    return {data, isPending, error}
}

export default useFetch; //so that we can use this file in the future components
 