"use strict";

const ALL_PRODUCTS = [
    {
        id: 1,
        image: "../images/nigeria-jersey.webp",
        title: "The Iconic Nigeria Jersey",
        price: 35000,
        pid: "nigeria-iconic",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Nigeria",
        type: "National"
    },
    {
        id: 1,
        image: "../images/PSG-Home-2025-26.webp",
        title: "PSG 2025/26 Home Jersey",
        price: 55000,
        pid: "psg-25-26-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "PSG",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/FCB-2020-21-away.webp",
        title: "Barcelona Away Jersey 2020/21",
        price: 15000,
        pid: "bar-20-21-away",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Inter-Miami.webp",
        title: "Inter Miami Jersey",
        price: 10000,
        pid: "inter-miami",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Miami",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Nigeria-New-Nike-Kit.webp",
        title: "Nigeria's New Nike Kit",
        price: 5000,
        pid: "nigeria-new-nike",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Nigeria",
        type: "National"
    },
    {
        id: 1,
        image: "../images/Madrid-2025-26-home.webp",
        title: "Madrid 2025/26 Home Jersey",
        price: 35000,
        pid: "rma-25-26-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "RMA",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Manchester-United-Home-2025-26.webp",
        title: "United 2025/26 Home Jersey",
        price: 25000,
        pid: "mun-25-26-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "MUN",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Liverpool-FC-Away-2025-26.webp",
        title: "Liverpool 2025/26 Away Jersey",
        price: 30000,
        pid: "lfc-25-26-away",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "LFC",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Messi-2020-21-barcelona.webp",
        title: "Messi 2020/21 Barcelona",
        price: 55000,
        pid: "messi-20-21-bar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Player"
    },
    {
        id: 1,
        image: "../images/Nigeria-2020-Stadium-Away.webp",
        title: "Nigeria 2020 Away Jersey",
        price: 7000,
        pid: "nigeria-20-away",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Nigeria",
        type: "National"
    },
    {
        id: 1,
        image: "../images/AlNassr-25-26-home.webp",
        title: "Al Nassr 2025/26 Home Jersey",
        price: 9000,
        pid: "alnassr-25-26-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Al Nassr",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Argentina-Home-Jersey-2022-Custom.webp",
        title: "Messi 2022 WC Jersey",
        price: 62000,
        pid: "messi-22-wc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "ARG",
        type: "National"
    },
    {
        id: 1,
        image: "../images/Barcelona-Third-Shirt-2021-2022.webp",
        title: "Barcelona 3rd Jersey 2021/2022",
        price: 20000,
        pid: "bar-20-21-third",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Chelsea-FC-Home-2024-25.webp",
        title: "Chelsea 2024/25 Home Jersey",
        price: 35000,
        pid: "che-24-25-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "CHE",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Green-Madrid-Away-Jersey.webp",
        title: "Green Madrid Away Jersey",
        price: 12000,
        pid: "madrid-green-away",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "RMA",
        type: "Club"
    },
    {
        id: 1,
        image: "../images/Argentina-2026.webp",
        title: "Argentina 2026 WC Jersey",
        price: 46000,
        pid: "arg-26-wc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "ARG",
        type: "National"
    },
    {
        id: 2,
        image: "../images/PSG-stylish-white.webp",
        title: "PSG Stylish White",
        price: 15000,
        pid: "psg-stylish",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "PSG",
        type: "Club"
    },
    {
        id: 2,
        image: "../images/Tottenham-25-26-Away.webp",
        title: "Tottenham 2025/26 Away",
        price: 10000,
        pid: "tot-25-26-away",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "TOT",
        type: "Club"
    },
    {
        id: 2,
        image: "../images/Tottenham-25-26-home.webp",
        title: "Tottenham 2025/26 Home",
        price: 10000,
        pid: "tot-25-26-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "TOT",
        type: "Club"
    },
    {
        id: 2,
        image: "../images/Yamal-25-26-Barcelona-third.webp",
        title: "Yamal 2025/26 Barcelona",
        price: 8000,
        pid: "yamal-25-26-bar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/Yamal-25-26-Barcelona-Home.webp",
        title: "Yamal 2025/26 Barcelona Home",
        price: 13000,
        pid: "yamal-25-26-bar-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/Vinicius-24-25-Brazil.webp",
        title: "Vinicius 2024 Brazil",
        price: 7500,
        pid: "vinicius-24-brazil",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Brazil",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/SouthAfrica-jersey.webp",
        title: "South Africa Jersey",
        price: 4000,
        pid: "sa-jersey",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "SA",
        type: "National"
    },
    {
        id: 2,
        image: "../images/Salah-25-26-third-jersey.webp",
        title: "Salah 2025/26 Liverpool",
        price: 9500,
        pid: "salah-25-26-lfc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "LFC",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/Pedri-25-26-Barcelona-Away.webp",
        title: "Pedri 2025/26 Barcelona",
        price: 9000,
        pid: "pedri-25-26-bar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/Musiala-25-26-Bayern-Home.webp",
        title: "Musiala 25/26 Bayern Home",
        price: 3500,
        pid: "musiala-25-26-fcb",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "FCB",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/Musiala-2026-Germany.webp",
        title: "Musiala 2026 Germany",
        price: 15000,
        pid: "musiala-26-germany",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Germany",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/Nike-Nigeria-white.webp",
        title: "Nigeria White Jersey",
        price: 8000,
        pid: "nigeria-white",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Nigeria",
        type: "National"
    },
    {
        id: 2,
        image: "../images/PSG-24-25-Home.webp",
        title: "PSG 2024/25 Home",
        price: 20000,
        pid: "psg-24-25-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "PSG",
        type: "Club"
    },
    {
        id: 2,
        image: "../images/Ronaldo-WC-jersey.webp",
        title: "Ronaldo 2022 WC Jersey",
        price: 22000,
        pid: "ronaldo-22-wc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Portugal",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/Neymar-22-23-Brazil.webp",
        title: "Neymar 2022 WC Jersey",
        price: 18000,
        pid: "neymar-22-wc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Brazil",
        type: "Player"
    },
    {
        id: 2,
        image: "../images/Messi-InterMiamiBlack.webp",
        title: "Messi Inter Miami Black",
        price: 29000,
        pid: "messi-miami-black",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Miami",
        type: "Player"
    },
    {
        id: 3,
        image: "../images/Messi-2012-Barcelona-Home.webp",
        title: "Messi 2012 Barcelona Home",
        price: 60000,
        pid: "messi-12-bar-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Player"
    },
    {
        id: 3,
        image: "../images/Mbappe-Madrid-Home-jersey.webp",
        title: "Mbappe Madrid Debut Jersey",
        price: 30000,
        pid: "mbappe-rma-debut",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "RMA",
        type: "Player"
    },
    {
        id: 3,
        image: "../images/Mbappe-24-25-France-Away.webp",
        title: "Mbappe 2024/25 France",
        price: 4500,
        pid: "mbappe-24-25-france-away",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "FRA",
        type: "Player"
    },
    {
        id: 3,
        image: "../images/ManCity-Puma.webp",
        title: "Man City Home Jersey",
        price: 12500,
        pid: "mci-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "MCI",
        type: "Club"
    },
    {
        id: 3,
        image: "../images/ManCity-25-26-Away.webp",
        title: "Man City 2025/26 Away",
        price: 10000,
        pid: "mci-25-26-away",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "MCI",
        type: "Club"
    },
    {
        id: 3,
        image: "../images/Liverpool-25-26-Home.webp",
        title: "Liverpool 2025/26 Home",
        price: 19500,
        pid: "lfc-25-26-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "LFC",
        type: "Club"
    },
    {
        id: 3,
        image: "../images/Liverpool-24-25-Home.webp",
        title: "Liverpool 2024/25 Home",
        price: 9500,
        pid: "lfc-24-25-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "LFC",
        type: "Club"
    },
    {
        id: 3,
        image: "../images/Lewandowski-25-26-Barcelona-third.webp",
        title: "Lewandowski 2025/26 Barcelona",
        price: 13500,
        pid: "lewy-25-26-bar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Player"
    },
    {
        id: 3,
        image: "../images/KDB-2022-23-City-Home.webp",
        title: "De Bruyne 2022/23 City Home",
        price: 8500,
        pid: "kdb-22-23-mci-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "MCI",
        type: "Player"
    },
    {
        id: 3,
        image: "../images/Hazard-Chelsea-jersey.webp",
        title: "Hazard Chelsea Home Jersey",
        price: 5500,
        pid: "hazard-che-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "CHE",
        type: "Player"
    },
    {
        id: 3,
        image: "../images/Haaland-25-26-City-third.webp",
        title: "Haaland 2025/26 City",
        price: 10000,
        pid: "haaland-25-26-city",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "MCI",
        type: "Player"
    },
    {
        id: 3,
        image: "../images/Ghana-Home-jersey.webp",
        title: "Ghana Home Jersey",
        price: 3500,
        pid: "ghana-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Ghana",
        type: "National"
    },
    {
        id: 3,
        image: "../images/Ghana-GK-jersey.webp",
        title: "Ghana Goalkeeper",
        price: 3000,
        pid: "ghana-gk",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Ghana",
        type: "National"
    },
    {
        id: 3,
        image: "../images/Ghana-2025-Away.webp",
        title: "Ghana 2025 Away",
        price: 4000,
        pid: "ghana-away",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Ghana",
        type: "National"
    },
    {
        id: 3,
        image: "../images/France-24-25-Home.webp",
        title: "France 2024/25 Home",
        price: 12000,
        pid: "france-24-25-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "FRA",
        type: "National"
    },
    {
        id: 3,
        image: "../images/France-2022-WC.webp",
        title: "France 2022 WC Jersey",
        price: 25000,
        pid: "france-22-wc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "FRA",
        type: "National"
    },
    {
        id: 4,
        image: "../images/Brazil-home.webp",
        title: "Brazil Home Jersey",
        price: 7000,
        pid: "brazil-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Brazil",
        type: "National"
    },
    {
        id: 4,
        image: "../images/Brazil-2018WC.webp",
        title: "Brazil 2018 WC Jersey",
        price: 15000,
        pid: "brazil-18-wc",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "Brazil",
        type: "National"
    },
    {
        id: 4,
        image: "../images/Bellingham-Euros24-jersey.webp",
        title: "Bellingham Euros 2024",
        price: 15000,
        pid: "bellingham-24-euros",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "England",
        type: "Player"
    },
    {
        id: 4,
        image: "../images/Barcelona-25-26-Home.webp",
        title: "Barcelona 2025/26 Home",
        price: 29500,
        pid: "bar-25-26-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "BAR",
        type: "Club"
    },
    {
        id: 4,
        image: "../images/Bayern-24-25-Home.webp",
        title: "Bayern 2024/25 Home",
        price: 15000,
        pid: "fcb-24-25-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "FCB",
        type: "Club"
    },
    {
        id: 4,
        image: "../images/B-Fernandes-25-26-United.webp",
        title: "B.Fernandes 2025/26 United",
        price: 13000,
        pid: "bruno-25-26-united",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "MUN",
        type: "Player"
    },
    {
        id: 4,
        image: "../images/Atletico-25-26-Home.webp",
        title: "Atletico 2025/26 Home",
        price: 8500,
        pid: "atm-25-26-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "ATM",
        type: "Club"
    },
    {
        id: 4,
        image: "../images/Arsenal-FC-Home-2024-25.webp",
        title: "Arsenal 2024/25 Home",
        price: 12500,
        pid: "ars-24-25-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "ARS",
        type: "Club"
    },
    {
        id: 4,
        image: "../images/ACMilan-23-24-Home.webp",
        title: "AC Milan 2023/24 Home",
        price: 9000,
        pid: "acm-23-24-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "ACM",
        type: "Club"
    },
    {
        id: 4,
        image: "../images/AC-Milan-Home.webp",
        title: "AC Milan Home Jersey",
        price: 12000,
        pid: "acm-home",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, praesentium accusantium exercitationem nostrum commodi soluta autem obcaecati ut esse culpa placeat eos, in vero beatae numquam itaque delectus nihil dolores!",
        team: "ACM",
        type: "Club"
    },
];

window.ALL_PRODUCTS = ALL_PRODUCTS;