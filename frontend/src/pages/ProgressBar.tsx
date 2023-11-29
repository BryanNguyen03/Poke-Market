import { useEffect, useState } from 'react'
import '../styles/ProgressBar.css'
import { useAuthContext } from '../hooks/useAuthContext';

interface Progression {
    progress: number;
}

const ProgressBar: React.FC<Progression> = ({ progress }) => {

  return (
    <div className="capacity">
        <div className="colored" style={{
            position: 'absolute',
            height: '100%',
            width: `${progress >= 5 ? progress : 5}%`,
            backgroundColor: '#C63C3C',
            borderRadius: '24px',
        }}></div>
    </div>
  )
}

export default ProgressBar;
