interface Item {
    id: number,
    name: string,
    price: number,
    type: string,
    description?: string
};

class Book implements Item {
    id: number
    name: string
    price: number
    type: string
    description?: string
    pages?: number

    constructor(id: number, name: string, price: number, type: string, pages?: number, description?: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.pages = pages;
        this.description = description
    }
}

class Food implements Item {
    id: number
    name: string
    price: number
    type: string
    calories?: number 
    description?: string

    constructor(id: number, name: string, price: number, type: string, calories?: number, description?: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.type = type;
        this.calories = calories;
        this.description = description;
    }
}

type ItemType = Book | Food;
var items: ItemType[] = [];

//fulfilling dropdown menu
var select = document.getElementById("item-type"), types = ["food", "book"];

for(var i = 0; i < types.length; i++) {
    var option = document.createElement("OPTION"),
    
    txt = document.createTextNode(types[i]);
    
    option.appendChild(txt);

    option.setAttribute("value", types[i]);

    select?.insertBefore(option, select.lastChild)
}

//add item
var id_number: number = 1;

var addButton = document.getElementById("add-item");

function addItem(item: ItemType): void {
    items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        type: item.type
    })
} 

addButton?.addEventListener("click", function(event){
    event.preventDefault();

    var type = document.getElementById("item-type") as HTMLInputElement;
    var name = document.getElementById("name") as HTMLInputElement;
    var description = document.getElementById("description") as HTMLInputElement;
    var price = document.getElementById("price") as HTMLInputElement;
    var allItems = document.getElementById("display-items");

    var priceValue = Number(price.value);

    let id: number;
    if(items.length <= 0) {
        id = id_number;
    }
    else {
        id = items[items.length - 1].id + 1;
    }

    if(type.value === "book"){
        debugger
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
         button.addEventListener('click', deleteItem);

         element.appendChild(button);

        allItems?.appendChild(element);
    } else if(type.value === "food"){
        debugger
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
        button.addEventListener('click', deleteItem);

        element.appendChild(button);

        allItems?.appendChild(element);
    }

    name.value = "";
    price.value = "";
    description.value = "";

    console.log(items)
})

const deleteItem = (e: MouseEvent)=> {
    const target = e.target as HTMLButtonElement;
    debugger;
    items = items.filter(item => !(String(item.id) === target?.parentElement?.id));
    const el = document.getElementById(`${target?.parentElement?.id}`)!;
    var allItems = document.getElementById("display-items");
    allItems?.removeChild(el);
 }