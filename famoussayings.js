const famoussaying = [
    {
        famoussayings: "새벽에 먹는 맥주와 치킨은 0칼로리",
        person: "G-park",
    },
    {
        famoussayings: "잘생긴 놈들은 얼굴값하고 못생긴 놈은 꼴값을 한다",
        person: "G-park",
    },
    {
        famoussayings: "즐길수 없으면 피해라.",
        person: "G-park",
    },
    {
        famoussayings: "일찍 일어나는 새가 피곤하다",
        person: "G-park",
    },
    {
        famoussayings: "티끌 모아 티끌",
        person: "G-park",
    },
    {
        famoussayings: "참을인이 세번이면 호구다.",
        person: "G-park",
    },
    {
        famoussayings: "일찍 일어난 벌레는 일찍 잡아먹힌다.",
        person: "G-park",
    },
    {
        famoussayings: "가는말이 고우면 얕본다.",
        person: "G-park",
    },
    {
        famoussayings: "내일도 할 수 있는 일을 굳이 오늘 할 필요는 없다.",
        person: "G-park",
    },
    {
        famoussayings: "어려운 길은 길이 아니다.",
        person: "G-park",
    },
]

const famoussayings = document.querySelector("#famoussaying span:first-child")
const person = document.querySelector("#famoussaying span:last-child")

const todayFamousSaying = famoussaying[Math.floor(Math.random() * famoussaying.length)];

famoussayings.innerText = todayFamousSaying.famoussayings;
person.innerText = todayFamousSaying.person;

