// Get Profile using local storage
const profile = [
    {
        name: "Elyes",
        photo: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229",
        videoWatching: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABca2DuILY0smongIAf2baOcG9C41lPQeCIrlcoNTwd45m1amb8F988PPo2vsm8ljEQ8WMG5gKRiiWLnhHOeCS2foG3uSyHFVPh0H-Mi6a-PqDZKx4FrSlVNJT09xqcj1QETQ.jpg?r=5e6"
    },
    {
        name: "Mike",
        photo: "./images/profile-1.jpg",
        videoWatching: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRyjX8HmWjul41VG8sQjaVWVisg1OqMnxmCNi4oUBSvXHsh8ZrlysCPhHHiHdaXdStjKDdPyLzVVfWK3QgjbRTnrV1Fd8JnyGgNQ5eExOn7cdeQ6RvedJ8xopRSX24PmvMYdwwmmeIkX0C2WS-I0br-Ir6HvX1J7C7ybrQ.jpg?r=f3e"
    },
    {
        name: "Harvey",
        photo: "./images/profile-2.jpg",
        videoWatching: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUskZDSAR3B6HBIbsavahl62hpZRjeC29gmalPutx66I5EOHZftFSHeBZo_PJhgPo27XQIgLjsac_wByIeu20J6Fkz2lj_2K1Ichge_rYu8jPPkHu8NdRjxyeVodtaAnjQjj.jpg?r=d2a"
    }
];


// get elements
let profilePhoto = document.querySelector(".container .right-side li:last-child img");
let profileSpan = document.querySelector(".continue-watching .container span");
let profileVideo = document.querySelector(".continue-watching .container img");


// Set profile
if (window.localStorage.getItem("profile")) {
    let obj = JSON.parse(window.localStorage.getItem("profile"));
    profilePhoto.src = obj.photo;
    profileSpan.innerHTML = obj.name;
    profileVideo.src = obj.videoWatching;
} else {
    window.localStorage.setItem("profile", JSON.stringify(profile[0]));
    profilePhoto.src = profile[0].photo;
    profileSpan.innerHTML = profile[0].name;
    profileVideo.src = profile[0].videoWatching;
}

// Change profile
let profiles = [...document.querySelectorAll(".settings .profile .image")];

profiles.forEach((profil, index) => {
    profil.onclick = () => {
        window.localStorage.setItem("profile", JSON.stringify(profile[index]));
        location.reload();
    }
});


// Get Elements
let searchBar = document.querySelector(".right-side li:first-child .search-bar");
let searchIcon = document.querySelector(".right-side li:first-child span");
let searchIcon2 = document.querySelector(".right-side li:first-child .search-bar i");
let searchInput = document.querySelector(".right-side li:first-child .search-bar input");

let parcourir = document.querySelector(".container .parcourir");
let menu = document.querySelector(".container .left-side ul");

// display the search bar
searchIcon.onclick = function () {
    searchIcon.style.display = "none";
    searchBar.style.display = "block";
};

// hide the search bar
window.onmouseup =  function (e) {
    if (e.target !== searchBar && e.target !== searchInput && e.target !== searchIcon2) {
        searchIcon.style.display = "block";
        searchBar.style.display = "none";
    }
};


// Array of images for main
const mainImages = [
    {
        coverImage: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTo1CJXgxEAjecf19zJEo0MPGBhOtZDvs3aXnmQTPs9efeQBqLGMEvmMf4kbzgSp1qWKE52iOe4BzkzFQ7lok7dpeFSaAA31rqlr.webp?r=a3e",
        description: "Lorsqu'un énigmatique espion de la CIA découvre des secrets inavouables, il se retrouve traqué aux quatre coins du monde par un agent sociopathe qui a mis sa tête à prix.",
        logo: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABW39jtTXCdRXl9PE_XKxJXX6ZPRoKVEgUueAhA5vJvx090JijlTRtudBQ1Q9cjP4f8bjx7LYawl2PKoeARLqfzvCuu-lKE8e3LMbR8d-z1kKNcigsLW-V4kA2wwWjSk7Gd6X3Yn9tf5cvlxbEKtMzRvLwGsThbEyd48GTglE06oApzAMatSEBQ.webp?r=9a6",
    },
    {
        coverImage: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRNqVbbOqKgtFfaOupV7QPEmMF_xAKKR3Po61-ejJX-K5TsgGljYxiOjPXuHqQ1yffRG6oTt8VYPUla5tCFWvTKjrVM0g6KEa6n8.webp?r=b1a",
        description: "Cette série réaliste s'attache aux exploits du héros Ragnar Lothbrok qui ambitionne d'étendre le pouvoir viking à la faveur d'un chef manquant de vision politique.",
        logo: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABZrZN8uYPGgV7BzobVgXpdNhjHS1UUEvlPfHRua-myczR_5WwA9_U6Y6BcHCasUW9hiikUHOQfOONq4yRcYgXMfDS5VAnqTTkxrwxMV_pF0U.webp?r=b42"
    },
    {
        coverImage: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbXZOiUcjrWurxz8u8_c3F1cLw2sqOlosqHVKvqbe-WootXlyIepFjh0avJ9MEslOQ4QsVoxtKvj9Hvi4VtGrQuyWLrP7Yd2OF08.webp?r=bc9",
        description: "À la mort de leur père, des frères et sœurs aux pouvoirs extraordinaires découvrent des secrets de famille traumatisants et une menace terrible qui plane sur l'humanité.",
        logo: "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABS5oO8_8KQFXZd7YBsujxPRzy_RSinIu1mSF-qr5GF9pj8LRdE2sHyFqOhCjaqehcEd-QS4wsdZLLj096thJWGrPmiTz9mGx5z8femazoVpZPNHNhhL1jaGaKwKtakDd7tSUP-F0LAGOMyfzxhRoK8R6FBxa37HDZCqZv1PuXhuAAcZ8Hf2pfQ.webp?r=add"
    }
];


// get elements of main
let main = document.querySelector("main");
let logo = document.querySelector("main .container .image img");
let description = document.querySelector("main .container .description");


// choose a movies or a tv serie randomly
function chooseImage(imagesArray) {
    // choose an index randomely
    let index = Math.floor(Math.random() * imagesArray.length);

    // set elements
    main.style.backgroundImage = `url(${imagesArray[index].coverImage})`;
    logo.src = imagesArray[index].logo;
    description.innerHTML = imagesArray[index].description;
}

chooseImage(mainImages);

// Scroll

let boxesContainer = document.querySelector(".boxes");
let boxes = document.querySelectorAll(".boxes .box img");
let arrowLeft = document.querySelector("section .one");
let arrowRight = document.querySelector("section .two");

boxes.forEach((box) => {
    box.addEventListener("mouseover", function () {
        box.style.transform = "scale(1.1)";
    });

    box.addEventListener("mouseout", function () {
        box.style.transform = null;
    });
});

arrowLeft.onclick = () => {
    boxesContainer.scrollBy({
        top: 0,
        left: -250,
        behavior: "smooth",

    });
};

arrowRight.onclick = () => {
    boxesContainer.scrollBy({
        top: 0,
        left: 250,
        behavior: "smooth",

    });
};



// Array of movies an tv series

const array1 = [
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRyjX8HmWjul41VG8sQjaVWVisg1OqMnxmCNi4oUBSvXHsh8ZrlysCPhHHiHdaXdStjKDdPyLzVVfWK3QgjbRTnrV1Fd8JnyGgNQ5eExOn7cdeQ6RvedJ8xopRSX24PmvMYdwwmmeIkX0C2WS-I0br-Ir6HvX1J7C7ybrQ.jpg?r=f3e",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRS4Uh96UlLJF9EqxWIf3_iibGKTonwUKber3_do8YULOF5fIIW9T37wOcieAc6QoiyLsKtWf53mR1q3EXGOrRFydE6c30tLjw4.jpg?r=9e9",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTVo493wjANv0sEjjDKreXseonl5j3pwoSSkqzoPY2UHi_eE83WWaoLvANrnDIF8IJXjbprwMeUxXN8veB0TmT8TzKEmC9e49eY-TaA7KL7t8d15n8k5LOfV-nVmDgLvF3mDvTqts0ZnShOnc3PoF_FiMh5mU0I3LjkLhw.jpg?r=4f9",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWV8VSrTjaf0ZRzeQJBBBWSugaPOh48DdP54lHn15EsJMFNFKiyTH-BnwirCV1xd9gp4jKBMhQpfXgjqMOgaJRW0DuVSQxku9NZj7Om0oi_sLrk7GiIuEKT2fCkXfoJqaT-n3BLAAg.jpg?r=e82",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABca2DuILY0smongIAf2baOcG9C41lPQeCIrlcoNTwd45m1amb8F988PPo2vsm8ljEQ8WMG5gKRiiWLnhHOeCS2foG3uSyHFVPh0H-Mi6a-PqDZKx4FrSlVNJT09xqcj1QETQ.jpg?r=5e6",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUOhDKhSePxgJuCiivYDuxf3n422txhXs_p9PkescsuR9SQGqa-3Pfh73cqsAJfmtwm4cKm8eT4ze_bG7Q6G7crG8VwAD1D9EVdry_L_6t9CMnz4AXyFTIHWT8tTM_IlNuBg.jpg?r=21e",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaIAchVSo_F8Py-vV-PXRpj1QIP7lNKgSdQPehWX4oglatrsksX5zqDhFLdcRr_v-ijewvZAMtthOUjLdZLiWbbgkgAI08WK6-IFsjdY5zTeZyCx3ANAxfPr9ulu3rTei7Sk0WmRUHJfknSJcgxmisxtFdDJT2_icYBQ_A.jpg?r=90f",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb4YHplhlOcSvqQrEylWQGMmULJPFIK3KQbqJNisK4BAsF7IxqLOSyL9d8jTpTTVegnrqFc8fH1UlBYzKoaK_AKQfqKtGhICLytdpNelk-pp4D2tKqj_CIZnbZBZTkXG34qh.jpg?r=e66",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfAYjoPTyDtLPK69vJXyOFrfkqbaHF96kNv3pGmLpjqAkDAHBGqZFO9IpZ4seeWbV-mxmn2nCXo85EzZsJPq7Oy0smOP1q5E9gY.jpg?r=a36",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABd0FwrUgqQLRjshQbIcbbmSH8EQjgJ7Hr7VygQ4EpGC8WGZw3hRVO6T5zvZJq_F-_2MWEnAtGpCA53CC1NhaseoeHiK9_lnh9bUtxOl_Rx4C4ahbjNfNYe20ApQcUZdiU9nE.jpg?r=816",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe3gsenMmyHMhvIMdIFNCqu2lQ-TTunLJ7aeh93Ty5CKlacyjjicCkzktWizM5818IBX9bSVSDCXo13yzzcHlomsi2H0pWwkSJ9ji0hM4HpLsUCfweT0QElRGlAWYTkvmS8t.jpg?r=0b2",
];

const array2 = [
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSUJSmOPmWK9wmg5MoUe9UMtsvzomIEadVNVzFWV1Iaa6H0k4yFvAobFaRuKOTAQ2-vATwryQr8RiTxY_8iIXPVpqS-8fl4GBMk.jpg?r=099",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTLvlM-C9Hdi92fuxEQjmpy9ibNXpW7TYNJ0HLy24pVe8kM2vMTLLBCSuF8FMa2We9IHY6m0maKa6BlKIEfKasRYl5FTTm4GtuAAJTZdFO-cNGcGV85kbTRfglNHyGR7L5mxDkbW7l7DqxWWnBY37zG1BmpkXWj4BC3DtQ.jpg?r=dc6",    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdDJeQTQxlAq5EB_5G_bW8Km2dzgwaXj_iVOewT23S3rwO7TxY_cIpQs-9ZMQrt4GFmMPxEflNqEk2qt1VpbrDuk79Q4wQOicO8mp-X98e5HBez8YRnRv5CdH4QZWq5I5D1B.jpg?r=479",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABddbva5K3srhxRyRoqQY7h_--cPCUhfTfM3Yo4U5YhOFkOippmeXghuazqpRkp2qoeNKokI430Bb0ajIYoU8byzBa-lctygUdeSr8TAVypF90RXegbQWKv1HEuNe51aJppsT.jpg?r=692",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTAj8V-y58ep83GgvOH0txZPcoMheY7uhs4rC84ZwhK-qOA6F6RD5P3PL1e6qbYGS3z22YZRxZt5mRuRTXvmxTwUYJ98wyG-nnc.jpg?r=f78",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVixrf_PrzTzzrQ2LguJSrrY6dRJnffMOWQurov7cNDseZwvO3_F49IHDnMJiZ9PtYksSXPnGSmpaeyRufRvTLXplWhLNq3lNBNqoGKes6yOpt-BXHPStLNzeRk-v_buhI789QOCyg.jpg?r=eab",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVw-FSoUCSeL9jjziqg8_s8JU3uBj0dFj_ChjY-5FnYcrARuHCcjR7j4_F2WOS7tlUU6lvz3q15t79MZZCLqBa6vLqE1gj4bQRY.jpg?r=01d",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeq_biU86wPrVJbgKd3Xx7qqu3X6Kd2fSpZ9pescOjUTIVGEA80KzM7vzU-dUL3A2mU4kuCR_vsu6crKNjZmXMNMpJEe194-Ly1d6N_5MCWali11T6sYTSApIh0bwx8mwS_y.jpg?r=131",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXytFYtdD7Iazo7KBZq-P_HaYbkx0qfErCTi44ThbeUROgzYLFvvW2voV3FVvvXGX0GDh8grIQFOg64zKZQdkFaHWjrgLXNVIa8.jpg?r=dd6",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT85d-4KiAJg2RzkL_GiXs7yy5jkMGVM-k5LyXCywYr8R1L8rxIdfZtV0c74aSLp7jMtkmcu1pg2DwmNmSRezHrb8Fif0MUHajlm7s020fC7_MMuUpVzVgnjc15E0LZIQ5HZ.jpg?r=6b4",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT0tx4bqfIgifGTZeQSVaFHYB6mrkIbeRfPs61r6rdtqWZ0VWbGwJbP-3-Z-8YGHtZv1wbhw2DkrMjanYsor6U5128BWmDzggA7HywR_QzS6PdXveVIMWwxLa646trqGgejU.jpg?r=908",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQGPw_47Ew45nNwE7qX4lzfORrHmw1kXTaea37dC_Vl5Y5eGLwBFD1bIQtXrPPQzoJ_Pgr8BkvCPWyZs_3_kEcYj9DxDgWjZ3PpxIPzjxXBwML-4nAUWHR5yolllcoAGzd2j.jpg?r=afc",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR0z_2mCT3TVto00R4wCh_bNSzeFpZ2Eh9XjcC8B6tEdOVk9CEGbzCufURfam8kHGsbzWXjfc_uib5z6ntQXLP7I6oXc8dHuiDE0etyEh5T8AvmZKHj2TE_tbGxc6Wjb3lfW.jpg?r=33d",
];

const array3 = [
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYe4k9OtHPhYlHsBPdMSOT2aF_NoAFf8d3qfp-to6NBWHFbHaWJ3LrsRY-RkJNvu0z4smLv82J0TT-jqC7z4CiubwEgg-4c1Rsp2twYRxnkABZ2H9DnarE4Lc8fvgcc-2S_Z.jpg?r=514",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdYSE6WrhH18MHWDtTBg0J6MzKeVrZyjfrM12pACGtGzQM_RqIlnFNi4RXTFBMz92hDlQEicv_g1eZ8pX3OCgTXMRhH0uLSNXrQSdlw2riC3AsBMFXvNcyCFOwS9OzBIjegH.jpg?r=393",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcepFqFmdkeLNVk_vL0DpMSmxywXyZV3ewD9KS9Ghwz7hg_1v4uOp1Us-gMBPw4wLetByXiN8ubDRdcZq73iSD4DDR8BYpwmqg-NYLVxSZTNTsRT5HhW_kCfsWvJOu2-T2uZ.jpg?r=8cb",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcVEUrd1X_ZJYVSv9vQgyGNzIYhvGIo7ffOUgZo3Xbv4LUg6P5XMqaOoImnE0OtwcqcMPJzWk6ZUqb8NN_WGVmCEbpwD9DGKDIimli5ZUHHnt2z9ZluBscppMfO0OqQqYbZE.jpg?r=891",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUEgw88gpolMHujqBOSCq9Tbq1KX4IdXjGyp_RALLNnbPao3DisKPk2f-USCcITTigQ9HSrvlcXmT2Xxg382kIWAy-gWyrAzAKqdzBiDmy2n_Q9R4gHtrlqtlNJuzUdY9q_r.jpg?r=e0d",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXhjkB1KrXjWwWiWfDsdqzCVVZjKy4EwYrlmuISubV2I-8lH9TQ2ogv11SjL2EBj7Qxg7J7ZcHoDdDK5nAe_tZFKF-U4GR0lgpE.jpg?r=039",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUskZDSAR3B6HBIbsavahl62hpZRjeC29gmalPutx66I5EOHZftFSHeBZo_PJhgPo27XQIgLjsac_wByIeu20J6Fkz2lj_2K1Ichge_rYu8jPPkHu8NdRjxyeVodtaAnjQjj.jpg?r=d2a",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUQIOI5eIvht9OnU-d3Zwh-kvDdN-7KD2cz-24cr6DyU_yyK0rKKneq7cxeR0sLOSKCyGtcZ9LrY93xP-Jnw4GwZ6KNuYYGw8rLSfYLsEXF3PjuZpXkG0LLzB06w5GOjipMA.jpg?r=4b6",
    "https://occ-0-56-55.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvO2BrFKWFJZIqlBtNdNq25afIh1xGwNA0GZHgOXkXNIJbv1UdPD0M3hcbK1KxS8fZVHN2rluKmSTuSTmIx3e5j1hmA6iDQ8JhAFsWeY50q89ygQVp9YX-LqGOJhFEPLF4a.jpg?r=92d",
];

// get section elements
let section1 = [...document.querySelectorAll(".container.genre")];
let blocksContainer = [...document.querySelectorAll(".container .movies")];
let leftBtns = [...document.querySelectorAll(".left")];
let rightBtns = [...document.querySelectorAll(".right")];

// create movies blocks
function makeBlocks(arr, container) {
    let array = [...arr];
    for (let i = 0; i < arr.length; i++) {
        // get an image url randomly
        let randomPhoto = array[Math.floor(Math.random() * array.length)];

        // delete photo from url
        array.splice(array.indexOf(randomPhoto), 1);

        // create the block
        let block = document.createElement("div");
        block.className = "movie";
        block.style.transition = "0.5s";
        let img = document.createElement("img");
        img.src = randomPhoto;

        // append img to div
        block.appendChild(img);

        container.appendChild(block);
    }
}

makeBlocks(array1, blocksContainer[0]);
makeBlocks(array2, blocksContainer[1]);
makeBlocks(array3, blocksContainer[2]);

leftBtns.forEach((btn, index) => {
    btn.style.height = getComputedStyle(blocksContainer[index]).height;
    btn.onclick = () => {
        blocksContainer[index].scrollBy({
            top: 0,
            left: -500,
            behavior: "smooth",
        });
    };
});

rightBtns.forEach((btn, index) => {
    btn.style.height = getComputedStyle(blocksContainer[index]).height;
    btn.onclick = () => {
        blocksContainer[index].scrollBy({
            top: 0,
            left: 500,
            behavior: "smooth",
        });
    };
});


let blocks = [...document.querySelectorAll(".movie")];

blocks.forEach((block) => {
    block.addEventListener("mouseover", function () {
        block.style.transform = "scale(1.1)";
    });
    block.addEventListener("mouseout", function () {
        block.style.transform = null;
        block.style.opacity = null;
    });
});
