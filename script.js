const img = document.getElementById("img");
const title = document.getElementById("title");
const date = document.getElementById("date");
const leftBtn = document.getElementById("left_btn");
const rightBtn = document.getElementById("right_btn");

const items = [
    {
        photoUrl:
            "https://images.squarespace-cdn.com/content/v1/5caed8960cf57d49530e8c60/d63c2b11-49bc-491a-83a8-b9b2244ac0df/art-mg-mercedes190e2516evo1a.jpg",
        name: "Mercedes 190",
        date: "Published on May 17, 2017",
    },

    {
        photoUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVb1bzH7y1gHuTxv6CqSg2QN-bHcqBGkTHhw&s",
        name: "Mustang 1960",
        date: "Published on May 17, 2017",
    },

    {
        photoUrl:
            "https://lamag.com/.image/t_share/MTk3NTU2MzYxNTMwMzIwNTc2/black-car_rezup-slight_silo_1500x1000px.jpg",
        name: "Retro car 1",
        date: "Published on May 17, 2017",
    },

    {
        photoUrl:
            "https://st4.depositphotos.com/13052220/20354/i/1600/depositphotos_203542778-stock-photo-green-retro-car-standing-beach.jpg",
        name: "Retro car 2",
        date: "Published on May 17, 2017",
    },
];

let index = 0;

function returnUI () {

    const item = items[index];
    img.src = item.photoUrl;

    title.textContent = item.name;
    
    date.textContent = item.date;
}

returnUI();

rightBtn.addEventListener("click", function () {

    if (index === items.length - 1) {

        index = 0;

    } else {
        index++
    }
    returnUI()
    
});

leftBtn.addEventListener("click", function () {
    if (index <= 0) {
        index = items.length - 1;
    } else {
        index--;
    }
    returnUI()
});
