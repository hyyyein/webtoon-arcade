import { GameBoyFrame } from './components/GameBoyFrame';
import { IntroScreen } from './screens/IntroScreen';
import { QuizScreen } from './screens/QuizScreen';
import { LoadingScreen } from './screens/LoadingScreen';
import { GachaScreen } from './screens/GachaScreen';
import { ResultScreen } from './screens/ResultScreen';
import { useQuizState } from './hooks/useQuizState';

function App() {
  const { state, actions, currentQuestion, totalQuestions } = useQuizState();

  let screenEl: React.ReactNode;
  switch (state.screen) {
    case 'intro':
      screenEl = <IntroScreen onStart={actions.start} />;
      break;
    case 'quiz':
      screenEl = (
        <QuizScreen
          question={currentQuestion}
          current={state.currentQuestion}
          total={totalQuestions}
          onAnswer={(choice) => actions.answer(currentQuestion.id, choice)}
        />
      );
      break;
    case 'loading':
      screenEl = <LoadingScreen onComplete={actions.beginGacha} />;
      break;
    case 'gacha':
      if (!state.result) throw new Error('No result for gacha screen');
      screenEl = <GachaScreen result={state.result} onComplete={actions.showResult} />;
      break;
    case 'result':
      if (!state.result) throw new Error('No result for result screen');
      screenEl = <ResultScreen result={state.result} onRestart={actions.restart} />;
      break;
  }

  return <GameBoyFrame>{screenEl}</GameBoyFrame>;
}

export default App;
