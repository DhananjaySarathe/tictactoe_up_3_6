import React, { useState } from "react";

function Wincase(props)
{
    const arr=props.game;
    const ox=props.ox;
    const winner=[['0','1','2'],['4','5','3'],['7','8','6'],['0','3',"6"],['1','4','7'],['2','5','8'],['0','4','8'],['2','4','6']];
    winner.forEach(win=>{
        if(arr.includes(win[0]) && arr.includes(win[1]) && arr.includes(win[2]))
        {
            if(ox[(win[0])]===ox[(win[1])]  && ox[(win[1])]===ox[(win[2])])
            {
                let boxes=document.getElementsByClassName('boxx');
                for(let i=0;i<3;i++)
                boxes[win[i]].classList.add('winbox')
                update();
            }    
        }
    })

    function update(){
        for(let i=0;i<9;i++)
        {
            if(ox[i]==="")
            ox[i]=" ";
        }
        props.over();
    }

    return (
        <>
        <div className="container-fluid info"> 
        <h1 className="rule"> Maximum 6 places can be Filled </h1>
        {props.help===0 && <h2>Turn for Player {props.turn==='X'?1:2} </h2>}
        {props.help===1 && <h2 className="won">Player {props.turn==='X'?2:1} Won</h2>}
        </div>
        </>
    )
}

export default Wincase;