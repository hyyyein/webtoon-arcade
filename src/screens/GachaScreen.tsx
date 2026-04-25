import type { RecommendResult } from '../types';
import { SlotMachine } from '../components/SlotMachine';

type Props = {
  result: RecommendResult;
  onComplete: () => void;
};

export function GachaScreen({ result, onComplete }: Props) {
  return <SlotMachine webtoons={result.webtoons} onComplete={onComplete} />;
}
