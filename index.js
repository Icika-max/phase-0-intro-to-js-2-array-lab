// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob");

}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat() {
    cats.shift("milo")}

    function  appendCat() {
        [...cats,"Broom"]
    }


