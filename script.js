/*const images = [
    {
      image: "01.webp",
      title: "Marvel's Spiderman Miles Morale",
      text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    },
    {
      image: "02.webp",
      title: "Ratchet & Clank: Rift Apart",
      text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    },
    {
      image: "03.webp",
      title: "Fortnite",
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
      image: "04.webp",
      title: "Stray",
      text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    },
    {
      image: "05.webp",
      title: "Marvel's Avengers",
      text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with immagini-player and co-operative gameplay.",
    },
  ];
  
  const principale = document.getElementById("principale");
  
  const secondarie = document.getElementById("secondarie");
  
  const title = document.getElementById("title");
  
  const text = document.getElementById("text");
  
  title.innerHTML = images[0].title;
  
  text.innerHTML = images[0].text;
  
  for (i = 0; i < images.length; i++) {
    const immagini = document.createElement("img");
    immagini.src = `img/${images[i].image}`;
    immagini.classList.add("principale-img");
  
    if (i === 0) {
      immagini.classList.add("active");
    }
  
    principale.append(immagini);
  }
  
  for (i = 0; i < images.length; i++) {
    const immagini = document.createElement("img");
    immagini.src = `img/${images[i].image}`;
    immagini.classList.add("secondarie-img");
  
    if (i === 0) {
      immagini.classList.add("selected");
    }
    secondarie.append(immagini);
  }
  
  let currentImg = 0;
  
  const pimg = document.querySelectorAll(".principale-img");
  
  const simg = document.querySelectorAll(".secondarie-img");
  
  const bottoneSopra = document.getElementById("sopra");
  const bottoneSotto = document.getElementById("sotto");
  
  function next() {
    pimg[currentImg].classList.remove("active");
    simg[currentImg].classList.remove("selected");
  
    currentImg++;
  
    if (currentImg === images.length) {
      currentImg = 0;
    }
  
    pimg[currentImg].classList.add("active");
    simg[currentImg].classList.add("selected");
    title.innerHTML = images[currentImg].title;
    text.innerHTML = images[currentImg].text;
  }
  
  function previous() {
    pimg[currentImg].classList.remove("active");
    simg[currentImg].classList.remove("selected");
  
    if (currentImg === 0) {
      currentImg = images.length;
    }
  
    currentImg--;
  
    pimg[currentImg].classList.add("active");
    simg[currentImg].classList.add("selected");
    infoTitle.innerHTML = images[currentImg].title;
    infoText.innerHTML = images[currentImg].text;
  }
  
  const autoSlide = setInterval(next, 3000);*/