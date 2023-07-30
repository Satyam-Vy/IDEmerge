import React, { useState } from 'react'
import{v4 as uuidv4} from 'uuid'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
//import EditorPage from './EditorPage'

const Home = () => {

    const navigate = useNavigate();

    const [roomId , setRoomId] = useState('');

    const [username , setUsername] = useState('');

    const createNewRoom = (e) => {

        e.preventDefault();
        const id = uuidv4();
        // console.log(id);
        setRoomId(id);
        toast.success('Created a New Room');

    };

    const joinRoom = () => {
        if(!roomId || !username){
            toast.error('ROOM ID & Username is Required');
            return ;
        }

        //redirect
        navigate(`/editor/${roomId}`, { state: { username,} , });
    };

    const handleInputEnter = (e) => {
        //console.log("event: " , e.code);
        if(e.code === 'Enter'){
            joinRoom();
        }

    }

  return (
    <div className='homePageWrapper'>

    <div className="formWrapper">

    <div className="title">

    <img src="\IDEmerge-logos_white.png" alt="Editor Logo" className='homePageLogo' height={151} width={151} />
    <h4 className="ide">IDEmerge</h4>

    </div>

        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>

        <div className="inputGroup">

            <input
            type="text" 
            className="inputBox" 
            placeholder='ROOM ID' 
            onChange={(e)=> setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
            />

            <input 
            type="text"
            className="inputBox"
            placeholder='USERNAME' 
            onChange={(e)=> setUsername(e.target.value)} 
            value={username}
            onKeyUp={handleInputEnter}
            />

            <button className="btn button " onClick={joinRoom}>Join</button>

        </div>      

        

        <span className="createInfo">If you don't have an invite then create a   &nbsp; 

        <a className='createNewBtn' onClick={createNewRoom} href="/"  >New Room</a>
        
        </span>
    </div>

    <footer>
        <h4>Built With 💛 &nbsp; </h4>
    </footer>


    </div>
  )
}

export default Home