import { FC } from 'react';
import { Slider as BaseSlider, SliderProps, SliderThumb, SliderTrack } from 'react-aria-components';
import styles from './styles.module.css';

type Props = Omit<SliderProps, 'className' | 'style'>;

export const Slider: FC<Props> = (props) => {
  return (
    <BaseSlider {...props} className={styles.slider}>
      <SliderTrack>
        {({ state }) => (
          <>
            <div className={styles.sliderTrackBackground} />
            <div
              className={styles.sliderTrackFilled}
              style={{
                width: state.getThumbPercent(0) * 100 + '%',
              }}
            />
            <SliderThumb className={styles.sliderThumb} />
          </>
        )}
      </SliderTrack>
    </BaseSlider>
  );
};
