import React from 'react';
import usePlayer from "~/hooks/usePlayer.hook";
import trackData from "~/data/trackData.json";
import styles from "./Player.module.css";
import { PlayButton,PauseButton ,TimeDisplay,ProgressBar,VolumeButton } from '..';

const Player = () => {
  const { state, actions} = usePlayer()

  
  return (
    <div className={styles.root}>

      {state.playing ? (
        <PauseButton pause={()=>actions.pause()}/>
      ) : (
        <PlayButton play={() => actions.play({
          id: trackData.id,
          name: trackData.name,
          src: trackData.preview_url,
          artists: trackData.artists.map(artist => artist.name)
        })} />
      )}
       <div className='w-full px-2'>
       <p>Staden</p>
       <ProgressBar
            progress={state.progress}
          />
      <p className='text-ui1'>Anders Linros</p>
       </div>
        
        <TimeDisplay
          currentTime={state.currentTime}
          duration={state.duration}
        />
          <VolumeButton />
    </div>
    
  );
};

export default Player;