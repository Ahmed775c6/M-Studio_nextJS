
const ClientCard = ({ img, text, source } : {img : any,text:any,source:any})=>{
    return(
        <div className="testimonial">
             
                 <div className="source">
          <span>{source}</span>
        </div>
        <span className="open quote">“</span>
 <div className="flex w-full gap-4">
 <p className="w-full">{text}</p>
    <div className="w-[100px] realtive">
    <div className="image">
          <div className="clip"></div>
          
          <img src={img} alt="testimonial" />
        </div>
    </div>
 </div>

    
   
        <span className="close quote">”</span>
      </div>
    );
  };

export default ClientCard