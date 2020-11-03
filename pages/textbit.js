import Hashids from 'hashids'




export default function Textbit (){
    var myHashId = new Hashids();

    console.log("Encode: " + myHashId.encode(3));
    console.log(myHashId.decode('Mj3')[0])

    return <div></div>

}


