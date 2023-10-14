import { useEffect, useState } from 'react';
import Home from '../../components/CommonPages/home';
import PageThree from './pageThree';
import PageTwo from '../../components/CommonPages/pageTwo';
import song from '../../assets/audio/Garden(chosic.com).mp3';

function PalmJumeriah() {
  const [currentPage, setCurrentPage] = useState('one');
  const [isPlayAudio, setIsPlayAudio] = useState(false);
  const [playAudio, setPlayAudio] = useState(new Audio(song));
  useEffect(() => {
    renderComponent();
  }, [currentPage]);
  const plyAudioFuc = () => {
    playAudio.play();
  };
  const pauseAudioFuc = () => {
    playAudio.pause();
  };
  const renderComponent = () => {
    switch (currentPage) {
      case 'one':
        return (
          <>
            {pauseAudioFuc()}
            <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </>
        );
        break;
      case 'two':
        return (
          <>
            <PageTwo
              isPlayAudio={isPlayAudio}
              setIsPlayAudio={setIsPlayAudio}
              plyAudioFuc={plyAudioFuc}
              pauseAudioFuc={pauseAudioFuc}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        );
        break;
      case 'three':
        return (
          <PageThree
            isPlayAudio={isPlayAudio}
            setIsPlayAudio={setIsPlayAudio}
            plyAudioFuc={plyAudioFuc}
            pauseAudioFuc={pauseAudioFuc}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        );
        break;
    }
  };
  return <>{renderComponent()}</>;
}

export default PalmJumeriah;
