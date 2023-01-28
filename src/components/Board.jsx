import React, { useState } from 'react'
import Wincase from './Wincase';

function Board(){
    var[player,updateplayer]=useState("X");
    var[game,updategame]=useState([]);
    var[ox,updateox]=useState(["","","","","","","","",""]);
    var[over,updateover]=useState(0);
    let arr=["bu col","col","bb col"];          
    let arr2=[" bl",""," br"];

    
    function newgame(){
        updateover(1);
    }
    
    function restart(){
        updateplayer("X");
        updategame([]);
        updateox(["","","","","","","","",""]);
        updateover(0);
        let boxes=document.getElementsByClassName('boxx');
        for(let i=0;i<9;i++)
        {
            boxes[i].classList.remove('winbox');
        }
    }
    
    function handleGame(e)
    {
        const ind=e.target.id;
        if(ox[ind]==="")
        {
            game.push(ind);
            if(game.length===6)
            {
                ox[game[0]]="";
                game.shift();
            }
            ox[ind]=player;
            updateox(ox);
            updategame(game);
            player=(player==="X"?"O":"X");
            updateplayer(player);
        }
    }   


    
    return <div className='container text-center board' >
    <Wincase game={game} turn={player} help={over} over={newgame} ox={ox}/>

    {arr.map((e,i)=><div className='row align-items-center'>
        {arr2.map((e2,i2)=><div onClick={handleGame} className={"boxx " + e+e2} id={3*(i)+i2}>{ox[3*(i)+i2]}</div>)}
    </div>)}
    {over===1 && <button onClick={restart} className='btn'>Restart</button>}
    </div>
}

export default Board;




// if(boxes.length !==0)
    // {
    //     for(let i=0;i<9;i++)
    //     {
    //         if(boxes[i].innerText===" ")
    //         {
    //             console.log("herewego")
    //         }
    //         // if(boxes[i].classList)
    //     }
    // }