// Animator to skrypt uruchamiający animacje dopiero gdy są w zasięgu wzroku użytkownika aby działał prawidłowo wymaga się:

// 1 - Dodajemy arkusz CSS z dwoma klasami 
//   .animator{
//       animation-play-state: paused;
//   }

//   .animator.active{
//       animation-play-state: running;
//   }

// 2 - Dalej w tym pliku dodajemy swoje klasy z animacjami najepiej tworzyć je w sposób animator-nazwaAnimacji

// 3 - Dodaj klasy swoich animacji w HTML oraz klasę .animator aby Javascript zaczął nasłuchiwać 

// 4 w HTML musimy dodać gdzieś na spodzie taką funkcję która włączy odrazu wszystkie animacje w przypadku gdy js będzie wyłączony

/* 
    <noscript>
        <style>
            .animator{
                animation-play-state: running !important;
            }
        </style>
    </noscript> 

*/

const Animator_Callback = (entries)=>{ 
    entries.forEach( element=>{
        if(!element.target.classList.contains("active") && element.intersectionRatio > 0){
            element.target.classList.add("active");
            console.log("[ANIMATOR] Turn on element > ",element.target)
        }
    })
}

const Animator_Options = {
    root:null,
    rootMargin:"0px",
    threshold:0
}

const Animator = new IntersectionObserver(Animator_Callback,Animator_Options);

for(let element of document.getElementsByClassName("animator")){
    Animator.observe(element)
}
