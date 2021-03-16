function makeWorker()

    { let name = "John";    return function() { console.log(name); };

}

let name = "Pete";

let work = makeWorker();

work(); // what will it show?