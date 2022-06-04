const div = document.querySelector("div"); // Выделяем первый попавшийся div
const titles = document.querySelectorAll("h1"); // Выделяем все заголовки h1
// получаем псеводмассив NodeList, который статический
const h1 = document.getElementsByTagName("h1"); // тоже самое
// получаем коллекцию HTMLcollection, которая динамическая (может добавлять и убирать элементы)

titlesArr = Array.from(titles); // создаёт массив из массивоподобного или итерируемого объекта.

const content = document.querySelector(".content");
const beforeContent = content.previousSibling; // получит предыдущий элемент (в том числе текст и комментарий)
const afterContent = content.nextSibling; // получит следующий элемент (в том числе текст и комментарий)

const beforeContentNode = content.previousElementSibling; // получит предыдущий узел
const afterContentNode = content.nextElementSibling; // получит следующий узел

const link = document.querySelector(".link");
const parentLink = link.parentNode; // ссылка на прямой родительский узел

const childContent = content.childNodes; // все дочерный узлы (текст, комментарии ...)
const childElementContent = content.children; // все дочерный html-элементы

const body = document.querySelector("body");

const firstChildDocument = body.firstChild; // первый дочерный узел
const lastChildDocument = body.lastChild; // последний дочерный узел

const firstElementChildDocument = body.firstElementChild; // первый html-элемент
const lastElementChildDocument = body.lastElementChild; // последний html-элемент

// Все эти свойства позволяют прочитать значение, но не поменять его.

const test = content.matches("div"); // соответствует ли элемент данному селектору
const parent = link.closest("div"); // найдет ближайшего родителя div'a

console.log(parent);
