import React from 'react';




const ListColor = (props) => 

        <div >
        { props.colorMessage.map((color, i) => 
            
            <li key={color.id} className="itemColor" onClick={(e) => props.changeColor(color.color)} >
                {color.name}
            </li>) }
        
        </div>;
       
export default ListColor;