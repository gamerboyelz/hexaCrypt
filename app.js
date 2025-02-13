
//function to decode a string
const urlDecoder = (string) => {
    let newText = atob(string);
    console.log("the decoded string is:",newText)
  };
//function to encode a string urlDecoder function to decode a string
  const urlEncoder = (string) => {
    let newText = btoa(string);
    console.log("the encoded string is:",newText)
  };

//event listener function that calls on the urlDecoder function to decode a string 
  const decodeButton = document.getElementById("decodeButton")
    decodeButton.addEventListener('click',(e)=>{
        e.preventDefault()

        let encodedString = document.getElementById("inputString").value

        // if (encodedString !== atob((btoa(string)))) {
        //     console.log("this string is already in tthe decoded version")
        // }

        console.log("decodeButton was clicked")
        console.log("the string input is:", encodedString )

        urlDecoder(encodedString)
    })

//event listener function that calls on the urlEncoder function to encode a string 
    const encodeButton = document.getElementById("encodeButton")
        encodeButton.addEventListener("click", (e)=>{
            e.preventDefault()

            let normalString = document.getElementById("inputString").value

            // if (normalString !== btoa((atob(string)))) {
            //     console.log("this string is already encoded")
            // }

            console.log("the encode button was clicked")
            console.log("the string input is:", normalString )

            urlEncoder(normalString)

        })
