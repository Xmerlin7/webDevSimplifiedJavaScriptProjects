let porch = {
    make: 2023,
    model: "Porch",
    condition: "new",
    info(){
        console.log(porch.make + " " + porch.model + " is " + porch.condition);
    }
}
porch.info(); // 2023 Porch is new