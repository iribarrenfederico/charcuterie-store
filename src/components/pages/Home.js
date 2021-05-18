import React from 'react'


export default function Home(){

const imagenes_carrousel = [
                        {src:"images/productos/bondiola.jpg"            ,alt:"Bondiola"},
                        {src:"images/productos/jamon-crudo.jpg"         ,alt:"Crudo"},
                        {src:"images/productos/lomito-ahumado.jpg"      ,alt:"Lomito"},
                        {src:"images/productos/tabla1.png"              ,alt:"Tabla1"},
                        {src:"images/productos/tabla3.png"              ,alt:"Tabla3"},
                        {src:"images/productos/tabla-fiambres.png"      ,alt:"Tabla2"},
                        {src:"images/productos/royalty-jamon.jpg"       ,alt:"Jamon"},
                        {src:"images/productos/salame-trufa.jpg"        ,alt:"Trufa"},
                        {src:"images/productos/salame.jpg"              ,alt:"Salame"},
                        {src:"images/productos/smoked-jowl.png"         ,alt:"Jowl"},
                      
                    ]


return(
<>
<div className="row justify-content-center py-3">    
    <div className="col-12 pb-4">
        <h1>Award Winning British Charcuterie</h1> 
    </div>
    
    <div className="col-10 col-md-9 col-lg-8">
        <p>Tempus was a range that we had to have on our shelves at Fortnum's. I cannot recommend them enough.</p>    
        
        <p>Tom and Dhruv deliver a range of charcuterie which, in my opinion, can rival the continental classic and makes this brand one to watch for 2019 and beyond.</p>

        <p>All you need is a platter of Tempus, a decent bread, and a bottle of wine for a very happy evening.</p>
    </div>
</div>



<div className="row justify-content-center">
    <div className="col-6">
        <div id="calesita" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {imagenes_carrousel.map((imagen,index)=>
                    <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>  
                        <img key={index+1} className="d-block w-100" src={"./"+imagen.src} alt={imagen.alt}/>                            
                    </div>
                    )
                }
            </div>

            <a class="carousel-control-prev" href="#calesita" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
             </a>
            <a class="carousel-control-next" href="#calesita" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>

        </div>
        <p className="pt-4">Our philosophy is a simple one.</p>
    </div> 
</div> 


</>
)
}
