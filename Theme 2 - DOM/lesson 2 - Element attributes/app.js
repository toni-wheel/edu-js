const content = document.querySelector(".content");
const link = document.querySelector(".link");

const type = content.nodeType; // тип узла (1 - element, 3 - text node, 8 - comment)
const name1 = content.tagName; // имя тега
const name2 = content.nodeName; // имя узла

link.innerHTML = "euro"; // заменяет текст в данном узле внутри тега
link.innerHTML += "rubl"; // добавляет текст в данный узел внутри тега

link.outerHTML = "<span>dollar</span>"; // меняет сам тег и текст внутри него

const data = link.firstChild.data; // содержимое узлов для НЕ элементов (текст, комментарии)
const text = link.textContent; // текстовое содержимое узла без тегов

// теги имеют стандартные атрибуты.

const linkHref = link.href; // полный адрес ссылки
const linkClassName = link.className; // название класса

// .. и так далее

// classList позволяет работать с атрибутом class

const linkCheckClass = link.classList.contains("link"); // содержит ли ссылка класс link
content.classList.add("red"); // добавляет класс red
content.classList.remove("red"); // удаляет класс red
content.classList.toggle("red"); // переключает класс red
content.classList.toggle("red");

// работа с атрибутами

link.setAttribute("href", "index.html"); // задать атрибут
const linkAttr = link.attributes; // посмотреть все аттрибуты
const linkGetAttr = link.getAttribute("href"); // получить атрибут href
const hasAttr = link.hasAttribute("href"); // есть ли атрибут href
link.removeAttribute("href"); // удалить атрибут

console.log(hasAttr);

// свойство dataset считывает в теге кастомный атрибут data-custom = "info"

const contentInfo = content.dataset.info;

// создание элемента

const div = document.createElement("div"); // создание элемента (он еще не отрисовался)
div.textContent = "It's div ";

const textNode = document.createTextNode("It's text node "); // создает текстовый узел

const content2 = content.cloneNode(1); // создает копию узла, 1 - глубокое копирование

content.appendChild(div); // добавляет в конец дочерний узел
content.insertBefore(textNode, div); // перед div вставит textNode
content.removeChild(textNode); // удалит textNode

const newDiv = document.createElement("div");
newDiv.textContent = "It's new div ";

content.replaceChild(newDiv, div); // заменит div на "новый"

//

const fragment = document.createDocumentFragment(); // создаем DOM ноду, обособленную от документа
// .. по сути это "коробка", куда мы складываем другие элементы
const colors = ["black", "white", "red", "blue"];

colors.forEach((color) => {
  const item = document.createElement("div");
  item.classList.add(`bg-${color}`);
  item.style.color = color;
  item.textContent = color;
  fragment.appendChild(item);
});

document.body.appendChild(fragment); // единаразово добавляем все элементы
