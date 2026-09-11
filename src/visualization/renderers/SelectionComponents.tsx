import { useState, type ReactNode } from 'react';
import type { VisualizationProps } from '@/visualization/registry';
import { C, ControlRows, Figure, Note, Slider, Stack } from './lifeKit';

/**
 * Where the variance in reproductive success actually sits.
 *
 * Removing early mortality does not remove selection; it moves it. The sliders
 * make that concrete — push survival to 100% and the fitness differences are
 * still there, just carried by a different component.
 */

export default function SelectionComponents(_props: VisualizationProps): ReactNode {
  const [survival, setSurvival] = useState(0.99);
  const [fertilityVar, setFertilityVar] = useState(0.55);

  const survivalVar = 4 * survival * (1 - survival);
  const total = survivalVar + fertilityVar;
  const sShare = total > 0 ? survivalVar / total : 0;

  const LEFT = 20;
  const W = 340;

  return (
    <Stack>
      <Figure height={190}>
        <text x={LEFT} y={18} fontSize={8.5} fill={C.dim}>
          what determines how many descendants someone leaves
        </text>

        <rect x={LEFT} y={34} width={W} height={26} rx={5} fill="rgba(148,162,192,0.1)" />
        <rect x={LEFT} y={34} width={W * sShare} height={26} rx={5} fill={C.hot} opacity={0.75} />
        <rect
          x={LEFT + W * sShare}
          y={34}
          width={W * (1 - sShare)}
          height={26}
          rx={5}
          fill={C.life}
          opacity={0.75}
        />
        {sShare > 0.14 ? (
          <text x={LEFT + 8} y={51} fontSize={8} fill="rgba(9,16,14,0.85)">
            surviving to adulthood
          </text>
        ) : null}
        {1 - sShare > 0.2 ? (
          <text x={LEFT + W * sShare + 8} y={51} fontSize={8} fill="rgba(9,16,14,0.85)">
            fertility and timing
          </text>
        ) : null}

        <text x={LEFT} y={84} fontSize={8} fill={C.hot}>
          {Math.round(sShare * 100)}% of the differences between people come from who survives
        </text>
        <text x={LEFT} y={98} fontSize={8} fill={C.life}>
          {Math.round((1 - sShare) * 100)}% from how many children, and when
        </text>

        <rect
          x={LEFT}
          y={114}
          width={W}
          height={34}
          rx={5}
          fill={total > 0.05 ? 'rgba(79,224,192,0.1)' : 'rgba(148,162,192,0.1)'}
        />
        <text x={LEFT + 8} y={130} fontSize={9} fill={total > 0.05 ? C.life : C.faint}>
          {total > 0.05
            ? 'evolution is happening'
            : 'no heritable differences: nothing to select on'}
        </text>
        <text x={LEFT + 8} y={142} fontSize={7.5} fill={C.faint}>
          selection acts on lifetime reproductive success, of which survival is one part
        </text>

        <text x={LEFT} y={170} fontSize={7.5} fill={C.faint}>
          plus two processes that never stop regardless: mutation introduces new
        </text>
        <text x={LEFT} y={182} fontSize={7.5} fill={C.faint}>
          variation, and drift changes frequencies by chance in any finite population
        </text>
      </Figure>

      <ControlRows>
        <Slider
          name="Survival to adulthood"
          hiddenLabel="Proportion of children surviving to reproductive age"
          min={0.5}
          max={1}
          step={0.01}
          value={survival}
          onChange={setSurvival}
          display={`${Math.round(survival * 100)}%`}
        />
        <Slider
          name="Variation in family size"
          hiddenLabel="How much people differ in number of children"
          min={0}
          max={1}
          step={0.05}
          value={fertilityVar}
          onChange={setFertilityVar}
          display={fertilityVar.toFixed(2)}
        />
      </ControlRows>

      <Note>
        The claim that human evolution has stopped usually takes a specific form: modern medicine
        and agriculture mean almost everyone survives to adulthood, so natural selection has nothing
        to act on. The premise is roughly true in some countries; the conclusion does not follow.
        Push the survival slider to 100% and the bar does not empty — it just becomes one colour.
        Selection acts on lifetime reproductive success, and survival is one component of it.
        Differences in how many children people have, and at what age, remain substantial and are
        partly heritable. Selection is also only one of the processes: drift operates in every
        finite population and never stops, mutation introduces new variation every generation, and
        gene flow between populations is currently higher than at any point in human history — which
        is, measured as change in the distribution of genetic variation, one of the largest
        evolutionary changes happening to our species right now. The proportions here are
        illustrative of the logic rather than estimates for any real population.
      </Note>
    </Stack>
  );
}
