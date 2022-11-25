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

    function appendCat() {
       return [...cats, "Broom"]
    }
function prependCat()
{
return ["Arnold", ...cats]
}
function removeLastCat(){
    return cats.slice(0,2)
}
function removeFirstCat()
{
    return cats.slice(1)
}