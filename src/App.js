import { useEffect, useState } from 'react';
import Home from './pages/home';
import PageThree from './pages/pageThree';
import PageTwo from './pages/pageTwo';
import song from './assets/audio/Garden(chosic.com).mp3';

function App() {
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

export default App;
