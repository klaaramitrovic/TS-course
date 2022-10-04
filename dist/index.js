"use strict";
;
class Book {
    constructor(id, name, price, type, pages, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.pages = pages;
        this.description = description;
    }
}
class Food {
    constructor(id, name, price, type, calories, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.calories = calories;
        this.description = description;
    }
}
var items = [];
//fulfilling dropdown menu
var select = document.getElementById("item-type"), types = ["food", "book"];
for (var i = 0; i < types.length; i++) {
    var option = document.createElement("OPTION"), txt = document.createTextNode(types[i]);
    option.appendChild(txt);
    option.setAttribute("value", types[i]);
    select === null || select === void 0 ? void 0 : select.insertBefore(option, select.lastChild);
}
//add item
var id_number = 1;
var addButton = document.getElementById("add-item");
function addItem(item) {
    items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        type: item.type
    });
}
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function (event) {
    event.preventDefault();
    var type = document.getElementById("item-type");
    var name = document.getElementById("name");
    var description = document.getElementById("description");
    var price = document.getElementById("price");
    var allItems = document.getElementById("display-items");
    var priceValue = Number(price.value);
    let id;
    if (items.length <= 0) {
        id = id_number;
    }
    else {
        id = items[items.length - 1].id + 1;
    }
    if (type.value === "book") {
        debugger;
        items[items.length] = new Book(id, name.value, priceValue, type.value, 0, description.value);
        var element = document.createElement("div");
        element.setAttribute("id", "" + id);
        element.setAttribute("class", "item");
        element.innerHTML =
            `<ul>
            <li>ID: ${id}</li>
            <li>Name: ${name.value}</li>
            <li>Price: ${priceValue}</li>
            <li>Description:<p> ${description.value}</p></li>
            <li>Pages: 0 </li>
         </ul>`;
        //add button to item card
        var button = document.createElement('button');
        button.innerHTML = 'delete';
        button.addEventListener('click', function (e) {
            var _a;
            const target = e.target;
            debugger;
            items = items.filter(item => { var _a; return !(String(item.id) === ((_a = target === null || target === void 0 ? void 0 : target.parentElement) === null || _a === void 0 ? void 0 : _a.id)); });
            const el = document.getElementById(`${(_a = target === null || target === void 0 ? void 0 : target.parentElement) === null || _a === void 0 ? void 0 : _a.id}`);
            var allItems = document.getElementById("display-items");
            allItems === null || allItems === void 0 ? void 0 : allItems.removeChild(el);
        });
        element.appendChild(button);
        allItems === null || allItems === void 0 ? void 0 : allItems.appendChild(element);
    }
    else if (type.value === "food") {
        debugger;
        items[items.length] = new Food(id, name.value, priceValue, type.value, 0, description.value);
        var element = document.createElement("div");
        element.setAttribute("id", "" + id);
        element.setAttribute("class", "item");
        element.innerHTML =
            `<ul>
            <li>ID: ${id}</li>
            <li>Name: ${name.value}</li>
            <li>Price: ${priceValue}</li>
            <li>Description:<p> ${description.value}</p></li>
            <li>Calories: 0 </li>
         </ul>`;
        //add button to item card
        var button = document.createElement('button');
        button.innerHTML = 'delete';
        button.addEventListener('click', function (e) {
            var _a, _b;
            const target = e.target;
            debugger;
            console.log((_a = target === null || target === void 0 ? void 0 : target.parentElement) === null || _a === void 0 ? void 0 : _a.id);
            items = items.filter(item => { var _a; return !(String(item.id) === ((_a = target === null || target === void 0 ? void 0 : target.parentElement) === null || _a === void 0 ? void 0 : _a.id)); });
            const el = document.getElementById(`${(_b = target === null || target === void 0 ? void 0 : target.parentElement) === null || _b === void 0 ? void 0 : _b.id}`);
            var allItems = document.getElementById("display-items");
            allItems === null || allItems === void 0 ? void 0 : allItems.removeChild(el);
        });
        element.appendChild(button);
        allItems === null || allItems === void 0 ? void 0 : allItems.appendChild(element);
    }
    name.value = "";
    price.value = "";
    description.value = "";
    console.log(items);
});
