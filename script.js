
function on_click(){
    console.log("her")

    names_string = [0,0,0]
    score_string = [29,39,01]

    fetch("https://7320-2601-647-cb00-4c50-4cae-f0ca-4379-8731.ngrok.io/yuh", {
        headers: {
            Accept: "application/json",
            'Content-Type': 'application/json',
            origin: "https://genicos.github.io/test_site/"
        },
        method: "POST",
        body: JSON.stringify({
            "names": names_string,
            "scores": score_string
        })
    }).then(res => {
        console.log("Request complete! response:", res);
    });
}