/* eslint-disable camelcase */
import { Box, BoxProps } from '@mui/material';
import React from 'react';

export interface IddleDogProps extends BoxProps {
  id: string;
  inverted?: boolean;
}

export const IddleDog_WIDTH = 100;
export const IddleDog_HEIGHT = 42;
export const IddleDog_FRAMES = 26;
export const IddleDog_X_OFFSET = 40.7;
export const IddleDog_Y_OFFSET = 12.2;
export const IddleDog_MARGIN = 30;

const IddleDog = ({ id, inverted, sx, ...rest }: IddleDogProps) => (
  <Box
    sx={{
      position: 'relative',
      overflow: 'hidden',
      width: IddleDog_WIDTH,
      height: IddleDog_HEIGHT,
      ...sx,
    }}
    {...rest}
  >
    <Box
      component="svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        position: 'absolute',
        top: 0,
        left: !inverted
          ? -(IddleDog_WIDTH + IddleDog_MARGIN) * (IddleDog_FRAMES - 1)
            - (!inverted ? IddleDog_MARGIN : 0)
          : 0,
        width: (IddleDog_WIDTH + IddleDog_MARGIN) * IddleDog_FRAMES,
        animation: `IddleDog${inverted ? 'Inverted' : ''} 0.65s steps(${IddleDog_FRAMES}, jump-none) infinite`,
        transform: !inverted ? 'scale(-1, 1)' : null,
      }}
    >
      {/* FRAME 1 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 0}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-1-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7642, 0.9536, -1.052, 1.5992, -8.6623, -0.5898)" width="1.75" xlinkHref={`#IddleDog-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddleDog-1-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 9.1841, -9.1101)" width="13.85" xlinkHref={`#IddleDog-1-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-1-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddleDog-1-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddleDog-1-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -11.8897)" width="8.9" xlinkHref={`#IddleDog-1-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0253, 0.0, 0.0, 2.4905, -14.715, -9.5403)" width="8.9" xlinkHref={`#IddleDog-1-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-1-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddleDog-1-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3595, -0.1926, 0.1926, 1.3595, -27.9717, -7.8495)" width="16.45" xlinkHref={`#IddleDog-1-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0259, -0.0259, 1.836, 7.3763, -0.3312)" width="1.75" xlinkHref={`#IddleDog-1-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 1.0607, -3.3932)" width="4.85" xlinkHref={`#IddleDog-1-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0815, 0.8353, -0.8353, 2.0815, -2.8549, 3.7317)" width="1.75" xlinkHref={`#IddleDog-1-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2337, -1.535, 1.1161, 1.6242, -9.5116, -2.1477)" width="1.75" xlinkHref={`#IddleDog-1-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-1-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-1-${id}-shape0`} />
        </g>
        <g id={`IddleDog-1-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-1-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-1-${id}-shape1`} />
        </g>
        <g id={`IddleDog-1-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-1-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-1-${id}-shape2`} />
        </g>
        <g id={`IddleDog-1-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-1-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-1-${id}-shape3`} />
        </g>
        <g id={`IddleDog-1-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-1-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-1-${id}-shape4`} />
        </g>
        <g id={`IddleDog-1-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-1-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-1-${id}-shape5`} />
        </g>
        <g id={`IddleDog-1-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 2 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 1}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-2-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7626, 0.9507, -1.0506, 1.5966, -8.6642, -0.5792)" width="1.75" xlinkHref={`#IddleDog-2-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-2-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.1474)" width="13.85" xlinkHref={`#IddleDog-2-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-2-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-2-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-2-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -11.8808)" width="8.9" xlinkHref={`#IddleDog-2-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0275, 0.0, 0.0, 2.4932, -14.775, -9.5002)" width="8.9" xlinkHref={`#IddleDog-2-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-2-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-2-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.359, -0.1916, 0.1916, 1.359, -27.9607, -7.854)" width="16.45" xlinkHref={`#IddleDog-2-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, 0.0243, -0.0243, 1.8359, 7.3719, -0.429)" width="1.75" xlinkHref={`#IddleDog-2-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.4355)" width="4.85" xlinkHref={`#IddleDog-2-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0798, 0.8327, -0.8327, 2.0797, -2.9597, 3.7399)" width="1.75" xlinkHref={`#IddleDog-2-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2285, -1.5353, 1.1164, 1.6203, -9.5556, -2.1867)" width="1.75" xlinkHref={`#IddleDog-2-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-2-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-2-${id}-shape0`} />
        </g>
        <g id={`IddleDog-2-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-2-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-2-${id}-shape1`} />
        </g>
        <g id={`IddleDog-2-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-2-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-2-${id}-shape2`} />
        </g>
        <g id={`IddleDog-2-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-2-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-2-${id}-shape3`} />
        </g>
        <g id={`IddleDog-2-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-2-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-2-${id}-shape4`} />
        </g>
        <g id={`IddleDog-2-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-2-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-2-${id}-shape5`} />
        </g>
        <g id={`IddleDog-2-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 3 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 2}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-3-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7586, 0.958, -1.0571, 1.5923, -8.6413, -0.5762)" width="1.75" xlinkHref={`#IddleDog-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-3-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.1474)" width="13.85" xlinkHref={`#IddleDog-3-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-3-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-3-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-3-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -11.8808)" width="8.9" xlinkHref={`#IddleDog-3-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0346, 0.0, 0.0, 2.502, -14.8075, -9.5322)" width="8.9" xlinkHref={`#IddleDog-3-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-3-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-3-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.359, -0.1918, 0.1918, 1.359, -27.9622, -7.8518)" width="16.45" xlinkHref={`#IddleDog-3-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0176, -0.0176, 1.836, 7.3534, -0.4209)" width="1.75" xlinkHref={`#IddleDog-3-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.4355)" width="4.85" xlinkHref={`#IddleDog-3-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0762, 0.8414, -0.8413, 2.0762, -2.9316, 3.7888)" width="1.75" xlinkHref={`#IddleDog-3-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2278, -1.5361, 1.1169, 1.6199, -9.5563, -2.1345)" width="1.75" xlinkHref={`#IddleDog-3-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-3-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-3-${id}-shape0`} />
        </g>
        <g id={`IddleDog-3-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-3-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-3-${id}-shape1`} />
        </g>
        <g id={`IddleDog-3-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-3-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-3-${id}-shape2`} />
        </g>
        <g id={`IddleDog-3-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-3-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-3-${id}-shape3`} />
        </g>
        <g id={`IddleDog-3-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-3-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-3-${id}-shape4`} />
        </g>
        <g id={`IddleDog-3-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-3-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-3-${id}-shape5`} />
        </g>
        <g id={`IddleDog-3-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 4 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 3}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-4-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.754, 0.9664, -1.0647, 1.5871, -8.5645, -0.5725)" width="1.75" xlinkHref={`#IddleDog-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-4-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.1474)" width="13.85" xlinkHref={`#IddleDog-4-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-4-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-4-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-4-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -11.8808)" width="8.9" xlinkHref={`#IddleDog-4-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0474, 0.0, 0.0, 2.5177, -14.8158, -9.6396)" width="8.9" xlinkHref={`#IddleDog-4-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-4-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-4-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3589, -0.1923, 0.1923, 1.3589, -28.0146, -7.7976)" width="16.45" xlinkHref={`#IddleDog-4-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, 0.0163, -0.0163, 1.8359, 7.3499, -0.4191)" width="1.75" xlinkHref={`#IddleDog-4-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.4855)" width="4.85" xlinkHref={`#IddleDog-4-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.072, 0.8515, -0.8515, 2.072, -2.8483, 3.8377)" width="1.75" xlinkHref={`#IddleDog-4-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2267, -1.5374, 1.118, 1.6191, -9.5078, -2.1306)" width="1.75" xlinkHref={`#IddleDog-4-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-4-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-4-${id}-shape0`} />
        </g>
        <g id={`IddleDog-4-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-4-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-4-${id}-shape1`} />
        </g>
        <g id={`IddleDog-4-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-4-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-4-${id}-shape2`} />
        </g>
        <g id={`IddleDog-4-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-4-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-4-${id}-shape3`} />
        </g>
        <g id={`IddleDog-4-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-4-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-4-${id}-shape4`} />
        </g>
        <g id={`IddleDog-4-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-4-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-4-${id}-shape5`} />
        </g>
        <g id={`IddleDog-4-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 5 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 4}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-5-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.742, 0.9875, -1.0786, 1.5776, -8.5114, -0.5228)" width="1.75" xlinkHref={`#IddleDog-5-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-5-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.1974)" width="13.85" xlinkHref={`#IddleDog-5-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-5-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-5-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-5-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -11.9308)" width="8.9" xlinkHref={`#IddleDog-5-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0665, 0.0, 0.0, 2.5412, -14.9026, -9.7752)" width="8.9" xlinkHref={`#IddleDog-5-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-5-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-5-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3581, -0.1974, 0.1974, 1.3581, -28.0423, -7.7037)" width="16.45" xlinkHref={`#IddleDog-5-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0084, -0.0084, 1.836, 7.2781, -0.4095)" width="1.75" xlinkHref={`#IddleDog-5-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.4855)" width="4.85" xlinkHref={`#IddleDog-5-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0613, 0.8766, -0.8767, 2.0613, -2.7658, 3.8357)" width="1.75" xlinkHref={`#IddleDog-5-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.22, -1.5467, 1.1247, 1.6142, -9.5679, -2.0556)" width="1.75" xlinkHref={`#IddleDog-5-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-5-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-5-${id}-shape0`} />
        </g>
        <g id={`IddleDog-5-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-5-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-5-${id}-shape1`} />
        </g>
        <g id={`IddleDog-5-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-5-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-5-${id}-shape2`} />
        </g>
        <g id={`IddleDog-5-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-5-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-5-${id}-shape3`} />
        </g>
        <g id={`IddleDog-5-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-5-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-5-${id}-shape4`} />
        </g>
        <g id={`IddleDog-5-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-5-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-5-${id}-shape5`} />
        </g>
        <g id={`IddleDog-5-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 6 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 5}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-6-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7324, 1.0041, -1.0988, 1.5635, -8.3439, -0.4048)" width="1.75" xlinkHref={`#IddleDog-6-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-6-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.1974)" width="13.85" xlinkHref={`#IddleDog-6-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-6-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-6-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-6-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -11.9308)" width="8.9" xlinkHref={`#IddleDog-6-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0921, 0.0, 0.0, 2.5726, -15.0691, -9.9402)" width="8.9" xlinkHref={`#IddleDog-6-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-6-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-6-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.358, -0.1983, 0.1983, 1.358, -28.1473, -7.6458)" width="16.45" xlinkHref={`#IddleDog-6-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, -2.0E-4, 2.0E-4, 1.836, 7.2545, -0.3989)" width="1.75" xlinkHref={`#IddleDog-6-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.5355)" width="4.85" xlinkHref={`#IddleDog-6-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0495, 0.9034, -0.9034, 2.0495, -2.6274, 3.8345)" width="1.75" xlinkHref={`#IddleDog-6-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2076, -1.5639, 1.1372, 1.6052, -9.5369, -1.8593)" width="1.75" xlinkHref={`#IddleDog-6-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-6-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-6-${id}-shape0`} />
        </g>
        <g id={`IddleDog-6-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-6-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-6-${id}-shape1`} />
        </g>
        <g id={`IddleDog-6-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-6-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-6-${id}-shape2`} />
        </g>
        <g id={`IddleDog-6-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-6-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-6-${id}-shape3`} />
        </g>
        <g id={`IddleDog-6-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-6-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-6-${id}-shape4`} />
        </g>
        <g id={`IddleDog-6-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-6-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-6-${id}-shape5`} />
        </g>
        <g id={`IddleDog-6-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 7 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 6}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-7-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7151, 1.0331, -1.1198, 1.5484, -8.1144, -0.2994)" width="1.75" xlinkHref={`#IddleDog-7-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-7-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.2474)" width="13.85" xlinkHref={`#IddleDog-7-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-7-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-7-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-7-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -11.9808)" width="8.9" xlinkHref={`#IddleDog-7-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1236, 0.0, 0.0, 2.6114, -15.1624, -10.1317)" width="8.9" xlinkHref={`#IddleDog-7-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-7-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-7-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3571, -0.2038, 0.2038, 1.3571, -28.2274, -7.4979)" width="16.45" xlinkHref={`#IddleDog-7-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, -0.0093, 0.0093, 1.8359, 7.2295, -0.3872)" width="1.75" xlinkHref={`#IddleDog-7-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.5855)" width="4.85" xlinkHref={`#IddleDog-7-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0367, 0.9316, -0.9315, 2.0367, -2.4841, 3.9346)" width="1.75" xlinkHref={`#IddleDog-7-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1997, -1.5744, 1.1449, 1.5995, -9.4981, -1.7805)" width="1.75" xlinkHref={`#IddleDog-7-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-7-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-7-${id}-shape0`} />
        </g>
        <g id={`IddleDog-7-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-7-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-7-${id}-shape1`} />
        </g>
        <g id={`IddleDog-7-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-7-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-7-${id}-shape2`} />
        </g>
        <g id={`IddleDog-7-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-7-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-7-${id}-shape3`} />
        </g>
        <g id={`IddleDog-7-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-7-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-7-${id}-shape4`} />
        </g>
        <g id={`IddleDog-7-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-7-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-7-${id}-shape5`} />
        </g>
        <g id={`IddleDog-7-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 8 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 7}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-8-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7003, 1.0569, -1.1463, 1.5287, -7.923, -0.125)" width="1.75" xlinkHref={`#IddleDog-8-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-8-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.2974)" width="13.85" xlinkHref={`#IddleDog-8-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-8-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-8-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-8-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.0308)" width="8.9" xlinkHref={`#IddleDog-8-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1591, 0.0, 0.0, 2.655, -15.3238, -10.3407)" width="8.9" xlinkHref={`#IddleDog-8-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-8-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-8-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3563, -0.2095, 0.2095, 1.3563, -28.3082, -7.3485)" width="16.45" xlinkHref={`#IddleDog-8-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8357, -0.0248, 0.0248, 1.8357, 7.1371, -0.3172)" width="1.75" xlinkHref={`#IddleDog-8-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.6355)" width="4.85" xlinkHref={`#IddleDog-8-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0198, 0.9671, -0.9671, 2.0198, -2.3153, 3.9367)" width="1.75" xlinkHref={`#IddleDog-8-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1863, -1.5925, 1.158, 1.5896, -9.5174, -1.5309)" width="1.75" xlinkHref={`#IddleDog-8-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-8-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-8-${id}-shape0`} />
        </g>
        <g id={`IddleDog-8-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-8-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-8-${id}-shape1`} />
        </g>
        <g id={`IddleDog-8-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-8-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-8-${id}-shape2`} />
        </g>
        <g id={`IddleDog-8-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-8-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-8-${id}-shape3`} />
        </g>
        <g id={`IddleDog-8-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-8-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-8-${id}-shape4`} />
        </g>
        <g id={`IddleDog-8-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-8-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-8-${id}-shape5`} />
        </g>
        <g id={`IddleDog-8-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 9 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 8}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-9-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6815, 1.0863, -1.1727, 1.5083, -7.8269, -0.1558)" width="1.75" xlinkHref={`#IddleDog-9-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-9-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.2974)" width="13.85" xlinkHref={`#IddleDog-9-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-9-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-9-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-9-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.0308)" width="8.9" xlinkHref={`#IddleDog-9-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1955, 0.0, 0.0, 2.6997, -15.4894, -10.604)" width="8.9" xlinkHref={`#IddleDog-9-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-9-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-9-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3553, -0.2152, 0.2152, 1.3553, -28.3884, -7.1986)" width="16.45" xlinkHref={`#IddleDog-9-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8353, -0.0405, 0.0405, 1.8353, 7.0446, -0.3965)" width="1.75" xlinkHref={`#IddleDog-9-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.6855)" width="4.85" xlinkHref={`#IddleDog-9-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0023, 1.0025, -1.0025, 2.0022, -2.1459, 4.0407)" width="1.75" xlinkHref={`#IddleDog-9-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1779, -1.6034, 1.1659, 1.5835, -9.4287, -1.4004)" width="1.75" xlinkHref={`#IddleDog-9-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-9-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-9-${id}-shape0`} />
        </g>
        <g id={`IddleDog-9-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-9-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-9-${id}-shape1`} />
        </g>
        <g id={`IddleDog-9-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-9-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-9-${id}-shape2`} />
        </g>
        <g id={`IddleDog-9-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-9-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-9-${id}-shape3`} />
        </g>
        <g id={`IddleDog-9-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-9-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-9-${id}-shape4`} />
        </g>
        <g id={`IddleDog-9-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-9-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-9-${id}-shape5`} />
        </g>
        <g id={`IddleDog-9-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 10 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 9}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-10-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6625, 1.1149, -1.1983, 1.4879, -7.6826, 0.0147)" width="1.75" xlinkHref={`#IddleDog-10-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-10-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.3474)" width="13.85" xlinkHref={`#IddleDog-10-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-10-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-10-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-10-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.0808)" width="8.9" xlinkHref={`#IddleDog-10-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2297, 0.0, 0.0, 2.7418, -15.6951, -10.8077)" width="8.9" xlinkHref={`#IddleDog-10-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-10-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-10-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3544, -0.2209, 0.2209, 1.3544, -28.4188, -7.0495)" width="16.45" xlinkHref={`#IddleDog-10-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.835, -0.0499, 0.0499, 1.835, 6.9691, -0.3839)" width="1.75" xlinkHref={`#IddleDog-10-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.7355)" width="4.85" xlinkHref={`#IddleDog-10-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9843, 1.0371, -1.0372, 1.9843, -1.9781, 4.0968)" width="1.75" xlinkHref={`#IddleDog-10-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1642, -1.6212, 1.1788, 1.5736, -9.3971, -1.2509)" width="1.75" xlinkHref={`#IddleDog-10-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-10-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-10-${id}-shape0`} />
        </g>
        <g id={`IddleDog-10-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-10-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-10-${id}-shape1`} />
        </g>
        <g id={`IddleDog-10-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-10-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-10-${id}-shape2`} />
        </g>
        <g id={`IddleDog-10-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-10-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-10-${id}-shape3`} />
        </g>
        <g id={`IddleDog-10-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-10-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-10-${id}-shape4`} />
        </g>
        <g id={`IddleDog-10-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-10-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-10-${id}-shape5`} />
        </g>
        <g id={`IddleDog-10-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 11 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 10}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-11-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6473, 1.1369, -1.2181, 1.4716, -7.5593, 0.0818)" width="1.75" xlinkHref={`#IddleDog-11-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-11-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.3974)" width="13.85" xlinkHref={`#IddleDog-11-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-11-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-11-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-11-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.1308)" width="8.9" xlinkHref={`#IddleDog-11-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2595, 0.0, 0.0, 2.7785, -15.8307, -10.9914)" width="8.9" xlinkHref={`#IddleDog-11-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-11-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-11-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3542, -0.2219, 0.2219, 1.3542, -28.4742, -6.9905)" width="16.45" xlinkHref={`#IddleDog-11-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8344, -0.0648, 0.0648, 1.8344, 6.9288, -0.3137)" width="1.75" xlinkHref={`#IddleDog-11-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.7855)" width="4.85" xlinkHref={`#IddleDog-11-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9664, 1.0704, -1.0704, 1.9663, -1.7644, 4.1046)" width="1.75" xlinkHref={`#IddleDog-11-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1562, -1.6313, 1.1862, 1.5678, -9.3573, -1.1224)" width="1.75" xlinkHref={`#IddleDog-11-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-11-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-11-${id}-shape0`} />
        </g>
        <g id={`IddleDog-11-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-11-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-11-${id}-shape1`} />
        </g>
        <g id={`IddleDog-11-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-11-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-11-${id}-shape2`} />
        </g>
        <g id={`IddleDog-11-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-11-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-11-${id}-shape3`} />
        </g>
        <g id={`IddleDog-11-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-11-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-11-${id}-shape4`} />
        </g>
        <g id={`IddleDog-11-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-11-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-11-${id}-shape5`} />
        </g>
        <g id={`IddleDog-11-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 12 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 11}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-12-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6326, 1.1578, -1.2367, 1.4559, -7.29, 0.1989)" width="1.75" xlinkHref={`#IddleDog-12-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-12-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.3974)" width="13.85" xlinkHref={`#IddleDog-12-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-12-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-12-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-12-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.1308)" width="8.9" xlinkHref={`#IddleDog-12-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2839, 0.0, 0.0, 2.8085, -15.9417, -11.1509)" width="8.9" xlinkHref={`#IddleDog-12-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-12-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-12-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3533, -0.2272, 0.2272, 1.3533, -28.602, -6.8938)" width="16.45" xlinkHref={`#IddleDog-12-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8341, -0.0732, 0.0732, 1.8341, 6.856, -0.3022)" width="1.75" xlinkHref={`#IddleDog-12-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.8355)" width="4.85" xlinkHref={`#IddleDog-12-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9523, 1.0956, -1.0956, 1.9523, -1.6273, 4.2117)" width="1.75" xlinkHref={`#IddleDog-12-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1487, -1.6408, 1.1931, 1.5623, -9.317, -0.9453)" width="1.75" xlinkHref={`#IddleDog-12-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-12-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-12-${id}-shape0`} />
        </g>
        <g id={`IddleDog-12-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-12-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-12-${id}-shape1`} />
        </g>
        <g id={`IddleDog-12-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-12-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-12-${id}-shape2`} />
        </g>
        <g id={`IddleDog-12-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-12-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-12-${id}-shape3`} />
        </g>
        <g id={`IddleDog-12-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-12-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-12-${id}-shape4`} />
        </g>
        <g id={`IddleDog-12-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-12-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-12-${id}-shape5`} />
        </g>
        <g id={`IddleDog-12-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 13 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 12}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-13-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6224, 1.1721, -1.2494, 1.445, -7.2421, 0.3111)" width="1.75" xlinkHref={`#IddleDog-13-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-13-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.3974)" width="13.85" xlinkHref={`#IddleDog-13-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-13-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-13-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-13-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.1308)" width="8.9" xlinkHref={`#IddleDog-13-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3027, 0.0, 0.0, 2.8317, -16.0275, -11.2856)" width="8.9" xlinkHref={`#IddleDog-13-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-13-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-13-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3532, -0.2278, 0.2278, 1.3532, -28.6053, -6.8385)" width="16.45" xlinkHref={`#IddleDog-13-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8337, -0.0811, 0.0811, 1.8337, 6.8848, -0.3412)" width="1.75" xlinkHref={`#IddleDog-13-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.8355)" width="4.85" xlinkHref={`#IddleDog-13-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9423, 1.1129, -1.1129, 1.9423, -1.5674, 4.2175)" width="1.75" xlinkHref={`#IddleDog-13-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1416, -1.6497, 1.1997, 1.5572, -9.3761, -0.9201)" width="1.75" xlinkHref={`#IddleDog-13-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-13-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-13-${id}-shape0`} />
        </g>
        <g id={`IddleDog-13-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-13-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-13-${id}-shape1`} />
        </g>
        <g id={`IddleDog-13-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-13-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-13-${id}-shape2`} />
        </g>
        <g id={`IddleDog-13-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-13-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-13-${id}-shape3`} />
        </g>
        <g id={`IddleDog-13-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-13-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-13-${id}-shape4`} />
        </g>
        <g id={`IddleDog-13-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-13-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-13-${id}-shape5`} />
        </g>
        <g id={`IddleDog-13-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 14 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 13}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-14-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6166, 1.1799, -1.2564, 1.4388, -7.1655, 0.2684)" width="1.75" xlinkHref={`#IddleDog-14-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-14-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.4474)" width="13.85" xlinkHref={`#IddleDog-14-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-14-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-14-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-14-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.1808)" width="8.9" xlinkHref={`#IddleDog-14-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3165, 0.0, 0.0, 2.8485, -16.0899, -11.3472)" width="8.9" xlinkHref={`#IddleDog-14-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-14-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-14-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3523, -0.2327, 0.2327, 1.3523, -28.6813, -6.695)" width="16.45" xlinkHref={`#IddleDog-14-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8333, -0.0885, 0.0885, 1.8333, 6.765, -0.3309)" width="1.75" xlinkHref={`#IddleDog-14-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.8855)" width="4.85" xlinkHref={`#IddleDog-14-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9367, 1.1225, -1.1226, 1.9367, -1.4837, 4.221)" width="1.75" xlinkHref={`#IddleDog-14-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1349, -1.6582, 1.2058, 1.5523, -9.3346, -0.8461)" width="1.75" xlinkHref={`#IddleDog-14-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-14-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-14-${id}-shape0`} />
        </g>
        <g id={`IddleDog-14-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-14-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-14-${id}-shape1`} />
        </g>
        <g id={`IddleDog-14-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-14-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-14-${id}-shape2`} />
        </g>
        <g id={`IddleDog-14-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-14-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-14-${id}-shape3`} />
        </g>
        <g id={`IddleDog-14-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-14-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-14-${id}-shape4`} />
        </g>
        <g id={`IddleDog-14-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-14-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-14-${id}-shape5`} />
        </g>
        <g id={`IddleDog-14-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 15 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 14}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-15-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6114, 1.187, -1.2626, 1.4333, -7.1419, 0.3748)" width="1.75" xlinkHref={`#IddleDog-15-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-15-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.4474)" width="13.85" xlinkHref={`#IddleDog-15-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-15-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-15-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-15-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.1808)" width="8.9" xlinkHref={`#IddleDog-15-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3256, 0.0, 0.0, 2.8598, -16.0814, -11.4381)" width="8.9" xlinkHref={`#IddleDog-15-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-15-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-15-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3522, -0.2331, 0.2331, 1.3522, -28.6828, -6.6418)" width="16.45" xlinkHref={`#IddleDog-15-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8332, -0.0894, 0.0894, 1.8332, 6.7626, -0.3297)" width="1.75" xlinkHref={`#IddleDog-15-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.8855)" width="4.85" xlinkHref={`#IddleDog-15-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9316, 1.1311, -1.1311, 1.9316, -1.504, 4.1742)" width="1.75" xlinkHref={`#IddleDog-15-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1341, -1.6591, 1.2064, 1.5517, -9.3353, -0.7934)" width="1.75" xlinkHref={`#IddleDog-15-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-15-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-15-${id}-shape0`} />
        </g>
        <g id={`IddleDog-15-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-15-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-15-${id}-shape1`} />
        </g>
        <g id={`IddleDog-15-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-15-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-15-${id}-shape2`} />
        </g>
        <g id={`IddleDog-15-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-15-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-15-${id}-shape3`} />
        </g>
        <g id={`IddleDog-15-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-15-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-15-${id}-shape4`} />
        </g>
        <g id={`IddleDog-15-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-15-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-15-${id}-shape5`} />
        </g>
        <g id={`IddleDog-15-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 16 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 15}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-16-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6067, 1.1931, -1.2682, 1.4284, -7.1207, 0.3305)" width="1.75" xlinkHref={`#IddleDog-16-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-16-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.1896, -9.4474)" width="13.85" xlinkHref={`#IddleDog-16-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-16-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-16-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-16-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.3221, -12.1808)" width="8.9" xlinkHref={`#IddleDog-16-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3307, 0.0, 0.0, 2.866, -16.1546, -11.4609)" width="8.9" xlinkHref={`#IddleDog-16-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-16-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-16-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3522, -0.2332, 0.2332, 1.3522, -28.6838, -6.6904)" width="16.45" xlinkHref={`#IddleDog-16-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8332, -0.0899, 0.0899, 1.8332, 6.7613, -0.329)" width="1.75" xlinkHref={`#IddleDog-16-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.1171, -3.8855)" width="4.85" xlinkHref={`#IddleDog-16-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9272, 1.1387, -1.1387, 1.9271, -1.4775, 4.227)" width="1.75" xlinkHref={`#IddleDog-16-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1337, -1.6596, 1.2068, 1.5514, -9.3357, -0.7918)" width="1.75" xlinkHref={`#IddleDog-16-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-16-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-16-${id}-shape0`} />
        </g>
        <g id={`IddleDog-16-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-16-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-16-${id}-shape1`} />
        </g>
        <g id={`IddleDog-16-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-16-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-16-${id}-shape2`} />
        </g>
        <g id={`IddleDog-16-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-16-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-16-${id}-shape3`} />
        </g>
        <g id={`IddleDog-16-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-16-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-16-${id}-shape4`} />
        </g>
        <g id={`IddleDog-16-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-16-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-16-${id}-shape5`} />
        </g>
        <g id={`IddleDog-16-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 17 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 16}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-17-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6078, 1.1971, -1.2706, 1.4304, -7.1155, 0.32)" width="1.75" xlinkHref={`#IddleDog-17-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.045, -1.2738, 1.0218, 1.3478, -15.2163, -3.4642)" width="1.75" xlinkHref={`#IddleDog-17-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7757, 0.8284, -0.8284, 0.7757, 9.1841, -9.4101)" width="13.85" xlinkHref={`#IddleDog-17-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-17-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0501, 0.0578, 1.2724, -1.5573, -7.9012)" width="4.85" xlinkHref={`#IddleDog-17-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7667, 0.4337, -0.5002, 1.5317, 0.7172, -2.3542)" width="1.75" xlinkHref={`#IddleDog-17-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2484, 0.5897, 0.5897, 1.2484, 7.3275, -12.1897)" width="8.9" xlinkHref={`#IddleDog-17-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3323, 0.0, 0.0, 2.868, -16.1119, -11.5183)" width="8.9" xlinkHref={`#IddleDog-17-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-17-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1976, 14.4803)" width="5.9" xlinkHref={`#IddleDog-17-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3526, -0.2355, 0.2355, 1.3526, -28.6518, -6.676)" width="16.45" xlinkHref={`#IddleDog-17-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8332, -0.0961, 0.0961, 1.8332, 6.7443, -0.2213)" width="1.75" xlinkHref={`#IddleDog-17-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.242, -0.7839, 0.7839, 1.242, 1.0607, -3.8432)" width="4.85" xlinkHref={`#IddleDog-17-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9284, 1.1431, -1.1431, 1.9284, -1.3671, 4.2181)" width="1.75" xlinkHref={`#IddleDog-17-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1337, -1.6666, 1.2119, 1.5514, -9.1497, -0.7331)" width="1.75" xlinkHref={`#IddleDog-17-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-17-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-17-${id}-shape0`} />
        </g>
        <g id={`IddleDog-17-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-17-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-17-${id}-shape1`} />
        </g>
        <g id={`IddleDog-17-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-17-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-17-${id}-shape2`} />
        </g>
        <g id={`IddleDog-17-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-17-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-17-${id}-shape3`} />
        </g>
        <g id={`IddleDog-17-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-17-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-17-${id}-shape4`} />
        </g>
        <g id={`IddleDog-17-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-17-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-17-${id}-shape5`} />
        </g>
        <g id={`IddleDog-17-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 18 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 17}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-18-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6071, 1.1926, -1.263, 1.433, -7.1857, 0.2185)" width="1.75" xlinkHref={`#IddleDog-18-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0435, -1.2693, 1.0189, 1.3467, -15.1063, -3.4167)" width="1.75" xlinkHref={`#IddleDog-18-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.2896, -9.3971)" width="13.85" xlinkHref={`#IddleDog-18-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-18-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4676, -0.0462, 0.0561, 1.2722, -1.5518, -7.9604)" width="4.85" xlinkHref={`#IddleDog-18-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4984, 1.5305, 0.7139, -2.3498)" width="1.75" xlinkHref={`#IddleDog-18-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.272, -12.1808)" width="8.9" xlinkHref={`#IddleDog-18-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3276, 0.0, 0.0, 2.8624, -16.1407, -11.5477)" width="8.9" xlinkHref={`#IddleDog-18-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-18-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-18-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3523, -0.2331, 0.2331, 1.3523, -28.6832, -6.7418)" width="16.45" xlinkHref={`#IddleDog-18-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8333, -0.0897, 0.0897, 1.8333, 6.8118, -0.1793)" width="1.75" xlinkHref={`#IddleDog-18-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.0672, -3.8854)" width="4.85" xlinkHref={`#IddleDog-18-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9276, 1.1379, -1.1379, 1.9276, -1.4803, 4.1767)" width="1.75" xlinkHref={`#IddleDog-18-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1337, -1.6592, 1.2065, 1.5516, -9.0352, -0.7427)" width="1.75" xlinkHref={`#IddleDog-18-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-18-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-18-${id}-shape0`} />
        </g>
        <g id={`IddleDog-18-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-18-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-18-${id}-shape1`} />
        </g>
        <g id={`IddleDog-18-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-18-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-18-${id}-shape2`} />
        </g>
        <g id={`IddleDog-18-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-18-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-18-${id}-shape3`} />
        </g>
        <g id={`IddleDog-18-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-18-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-18-${id}-shape4`} />
        </g>
        <g id={`IddleDog-18-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-18-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-18-${id}-shape5`} />
        </g>
        <g id={`IddleDog-18-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 19 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 18}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-19-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.617, 1.179, -1.2555, 1.4394, -7.2187, 0.2679)" width="1.75" xlinkHref={`#IddleDog-19-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0434, -1.2691, 1.0188, 1.3466, -15.1059, -3.4167)" width="1.75" xlinkHref={`#IddleDog-19-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7743, 0.8269, -0.8269, 0.7743, 9.2899, -9.3965)" width="13.85" xlinkHref={`#IddleDog-19-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-19-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0461, 0.0561, 1.2722, -1.5517, -7.9605)" width="4.85" xlinkHref={`#IddleDog-19-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7654, 0.4327, -0.4984, 1.5304, 0.7139, -2.3495)" width="1.75" xlinkHref={`#IddleDog-19-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2466, 0.5891, 0.5891, 1.2466, 7.2718, -12.1803)" width="8.9" xlinkHref={`#IddleDog-19-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.3118, 0.0, 0.0, 2.8429, -16.0185, -11.4265)" width="8.9" xlinkHref={`#IddleDog-19-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-19-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-19-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3523, -0.2325, 0.2325, 1.3523, -28.6301, -6.7966)" width="16.45" xlinkHref={`#IddleDog-19-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8337, -0.0821, 0.0821, 1.8337, 6.7821, -0.24)" width="1.75" xlinkHref={`#IddleDog-19-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2394, -0.7837, 0.7837, 1.2394, 1.0677, -3.8352)" width="4.85" xlinkHref={`#IddleDog-19-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9373, 1.1213, -1.1213, 1.9373, -1.5379, 4.1208)" width="1.75" xlinkHref={`#IddleDog-19-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.135, -1.6575, 1.2053, 1.5525, -9.0832, -0.7975)" width="1.75" xlinkHref={`#IddleDog-19-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-19-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-19-${id}-shape0`} />
        </g>
        <g id={`IddleDog-19-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-19-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-19-${id}-shape1`} />
        </g>
        <g id={`IddleDog-19-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-19-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-19-${id}-shape2`} />
        </g>
        <g id={`IddleDog-19-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-19-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-19-${id}-shape3`} />
        </g>
        <g id={`IddleDog-19-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-19-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-19-${id}-shape4`} />
        </g>
        <g id={`IddleDog-19-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-19-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-19-${id}-shape5`} />
        </g>
        <g id={`IddleDog-19-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 20 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 19}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-20-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6326, 1.157, -1.231, 1.4601, -7.3553, 0.0884)" width="1.75" xlinkHref={`#IddleDog-20-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0432, -1.2689, 1.0186, 1.3464, -15.105, -3.4165)" width="1.75" xlinkHref={`#IddleDog-20-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7742, 0.8268, -0.8268, 0.7742, 9.2905, -9.3451)" width="13.85" xlinkHref={`#IddleDog-20-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-20-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.046, 0.0561, 1.2722, -1.5516, -7.9607)" width="4.85" xlinkHref={`#IddleDog-20-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7653, 0.4326, -0.4983, 1.5303, 0.7139, -2.3492)" width="1.75" xlinkHref={`#IddleDog-20-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2464, 0.589, 0.589, 1.2464, 7.2713, -12.1294)" width="8.9" xlinkHref={`#IddleDog-20-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2812, 0.0, 0.0, 2.8054, -15.9295, -11.2396)" width="8.9" xlinkHref={`#IddleDog-20-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-20-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-20-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3532, -0.227, 0.227, 1.3532, -28.5502, -6.9447)" width="16.45" xlinkHref={`#IddleDog-20-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8341, -0.0731, 0.0731, 1.8341, 6.9063, -0.2524)" width="1.75" xlinkHref={`#IddleDog-20-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2392, -0.7836, 0.7836, 1.2392, 1.0684, -3.8347)" width="4.85" xlinkHref={`#IddleDog-20-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.956, 1.0881, -1.0881, 1.956, -1.7527, 4.0609)" width="1.75" xlinkHref={`#IddleDog-20-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1483, -1.6402, 1.1926, 1.5621, -9.065, -0.9956)" width="1.75" xlinkHref={`#IddleDog-20-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-20-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-20-${id}-shape0`} />
        </g>
        <g id={`IddleDog-20-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-20-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-20-${id}-shape1`} />
        </g>
        <g id={`IddleDog-20-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-20-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-20-${id}-shape2`} />
        </g>
        <g id={`IddleDog-20-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-20-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-20-${id}-shape3`} />
        </g>
        <g id={`IddleDog-20-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-20-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-20-${id}-shape4`} />
        </g>
        <g id={`IddleDog-20-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-20-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-20-${id}-shape5`} />
        </g>
        <g id={`IddleDog-20-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 21 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 20}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-21-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6574, 1.1207, -1.1983, 1.4867, -7.6266, -0.0394)" width="1.75" xlinkHref={`#IddleDog-21-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0428, -1.2685, 1.0183, 1.3461, -15.1037, -3.4662)" width="1.75" xlinkHref={`#IddleDog-21-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.774, 0.8266, -0.8266, 0.774, 9.2913, -9.2932)" width="13.85" xlinkHref={`#IddleDog-21-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-21-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0458, 0.056, 1.2722, -1.5512, -7.961)" width="4.85" xlinkHref={`#IddleDog-21-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.765, 0.4325, -0.4982, 1.5301, 0.7138, -2.3486)" width="1.75" xlinkHref={`#IddleDog-21-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2462, 0.5889, 0.5889, 1.2462, 7.2705, -12.0779)" width="8.9" xlinkHref={`#IddleDog-21-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.2337, 0.0, 0.0, 2.747, -15.6636, -10.9265)" width="8.9" xlinkHref={`#IddleDog-21-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-21-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-21-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3542, -0.2208, 0.2208, 1.3542, -28.417, -7.1485)" width="16.45" xlinkHref={`#IddleDog-21-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8348, -0.0563, 0.0563, 1.8348, 7.0016, -0.2253)" width="1.75" xlinkHref={`#IddleDog-21-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2389, -0.7834, 0.7834, 1.2389, 1.0697, -3.7342)" width="4.85" xlinkHref={`#IddleDog-21-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.9798, 1.0439, -1.0439, 1.9798, -1.954, 4.0007)" width="1.75" xlinkHref={`#IddleDog-21-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1626, -1.6208, 1.1786, 1.5726, -9.1444, -1.1986)" width="1.75" xlinkHref={`#IddleDog-21-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-21-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-21-${id}-shape0`} />
        </g>
        <g id={`IddleDog-21-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-21-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-21-${id}-shape1`} />
        </g>
        <g id={`IddleDog-21-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-21-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-21-${id}-shape2`} />
        </g>
        <g id={`IddleDog-21-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-21-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-21-${id}-shape3`} />
        </g>
        <g id={`IddleDog-21-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-21-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-21-${id}-shape4`} />
        </g>
        <g id={`IddleDog-21-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-21-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-21-${id}-shape5`} />
        </g>
        <g id={`IddleDog-21-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 22 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 21}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-22-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.6901, 1.0703, -1.1577, 1.5181, -7.8788, -0.2127)" width="1.75" xlinkHref={`#IddleDog-22-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0422, -1.2679, 1.0179, 1.3457, -15.1019, -3.4158)" width="1.75" xlinkHref={`#IddleDog-22-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7737, 0.8263, -0.8263, 0.7737, 9.2924, -9.2406)" width="13.85" xlinkHref={`#IddleDog-22-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-22-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0456, 0.0559, 1.2722, -1.5508, -8.0114)" width="4.85" xlinkHref={`#IddleDog-22-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7648, 0.4324, -0.498, 1.5298, 0.7137, -2.3476)" width="1.75" xlinkHref={`#IddleDog-22-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2458, 0.5887, 0.5887, 1.2458, 7.2196, -12.0261)" width="8.9" xlinkHref={`#IddleDog-22-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1739, 0.0, 0.0, 2.6734, -15.4912, -10.5578)" width="8.9" xlinkHref={`#IddleDog-22-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-22-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.0976, 14.5803)" width="5.9" xlinkHref={`#IddleDog-22-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3559, -0.2098, 0.2098, 1.3559, -28.307, -7.394)" width="16.45" xlinkHref={`#IddleDog-22-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8355, -0.0324, 0.0324, 1.8355, 7.1665, -0.2571)" width="1.75" xlinkHref={`#IddleDog-22-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2385, -0.7833, 0.7833, 1.2385, 1.0711, -3.6833)" width="4.85" xlinkHref={`#IddleDog-22-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0107, 0.9827, -0.9828, 2.0107, -2.2108, 3.8922)" width="1.75" xlinkHref={`#IddleDog-22-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.183, -1.5928, 1.1582, 1.5874, -9.1638, -1.4242)" width="1.75" xlinkHref={`#IddleDog-22-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-22-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-22-${id}-shape0`} />
        </g>
        <g id={`IddleDog-22-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-22-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-22-${id}-shape1`} />
        </g>
        <g id={`IddleDog-22-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-22-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-22-${id}-shape2`} />
        </g>
        <g id={`IddleDog-22-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-22-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-22-${id}-shape3`} />
        </g>
        <g id={`IddleDog-22-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-22-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-22-${id}-shape4`} />
        </g>
        <g id={`IddleDog-22-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-22-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-22-${id}-shape5`} />
        </g>
        <g id={`IddleDog-22-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 23 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 22}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-23-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7176, 1.025, -1.1116, 1.5518, -8.1901, -0.3986)" width="1.75" xlinkHref={`#IddleDog-23-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0417, -1.2675, 1.0175, 1.3454, -15.1002, -3.4154)" width="1.75" xlinkHref={`#IddleDog-23-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7735, 0.826, -0.826, 0.7735, 9.2933, -9.188)" width="13.85" xlinkHref={`#IddleDog-23-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-23-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4674, -0.0454, 0.0558, 1.2721, -1.5505, -8.0116)" width="4.85" xlinkHref={`#IddleDog-23-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7645, 0.4324, -0.4979, 1.5296, 0.7136, -2.3468)" width="1.75" xlinkHref={`#IddleDog-23-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2455, 0.5886, 0.5886, 1.2455, 7.2187, -11.9742)" width="8.9" xlinkHref={`#IddleDog-23-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.1158, 0.0, 0.0, 2.602, -15.2271, -10.1974)" width="8.9" xlinkHref={`#IddleDog-23-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-23-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.0976, 14.5803)" width="5.9" xlinkHref={`#IddleDog-23-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3568, -0.2032, 0.2032, 1.3568, -28.2206, -7.6001)" width="16.45" xlinkHref={`#IddleDog-23-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, -0.0086, 0.0086, 1.8359, 7.3313, -0.238)" width="1.75" xlinkHref={`#IddleDog-23-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2381, -0.7831, 0.7831, 1.2381, 1.0726, -3.5824)" width="4.85" xlinkHref={`#IddleDog-23-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0395, 0.9212, -0.9212, 2.0395, -2.566, 3.7898)" width="1.75" xlinkHref={`#IddleDog-23-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.1977, -1.572, 1.1431, 1.5981, -9.2406, -1.6797)" width="1.75" xlinkHref={`#IddleDog-23-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-23-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-23-${id}-shape0`} />
        </g>
        <g id={`IddleDog-23-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-23-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-23-${id}-shape1`} />
        </g>
        <g id={`IddleDog-23-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-23-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-23-${id}-shape2`} />
        </g>
        <g id={`IddleDog-23-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-23-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-23-${id}-shape3`} />
        </g>
        <g id={`IddleDog-23-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-23-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-23-${id}-shape4`} />
        </g>
        <g id={`IddleDog-23-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-23-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-23-${id}-shape5`} />
        </g>
        <g id={`IddleDog-23-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 24 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 23}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-24-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7392, 0.9876, -1.0828, 1.5717, -8.4463, -0.5067)" width="1.75" xlinkHref={`#IddleDog-24-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0413, -1.2671, 1.0172, 1.3451, -14.9989, -3.4151)" width="1.75" xlinkHref={`#IddleDog-24-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7733, 0.8258, -0.8258, 0.7733, 9.3441, -9.1361)" width="13.85" xlinkHref={`#IddleDog-24-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-24-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4674, -0.0453, 0.0558, 1.272, -1.5502, -8.0119)" width="4.85" xlinkHref={`#IddleDog-24-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7643, 0.4323, -0.4978, 1.5294, 0.7135, -2.3461)" width="1.75" xlinkHref={`#IddleDog-24-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2453, 0.5885, 0.5885, 1.2453, 7.218, -11.9228)" width="8.9" xlinkHref={`#IddleDog-24-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0718, 0.0, 0.0, 2.5479, -15.0268, -9.95)" width="8.9" xlinkHref={`#IddleDog-24-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-24-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.0976, 14.5803)" width="5.9" xlinkHref={`#IddleDog-24-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3576, -0.1971, 0.1971, 1.3576, -28.0869, -7.8021)" width="16.45" xlinkHref={`#IddleDog-24-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.836, 0.0018, -0.0018, 1.836, 7.3598, -0.2011)" width="1.75" xlinkHref={`#IddleDog-24-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2378, -0.783, 0.783, 1.2378, 1.0738, -3.5318)" width="4.85" xlinkHref={`#IddleDog-24-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0592, 0.876, -0.8761, 2.0592, -2.7648, 3.6922)" width="1.75" xlinkHref={`#IddleDog-24-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2113, -1.5527, 1.129, 1.6079, -9.2689, -1.8809)" width="1.75" xlinkHref={`#IddleDog-24-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-24-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-24-${id}-shape0`} />
        </g>
        <g id={`IddleDog-24-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-24-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-24-${id}-shape1`} />
        </g>
        <g id={`IddleDog-24-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-24-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-24-${id}-shape2`} />
        </g>
        <g id={`IddleDog-24-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-24-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-24-${id}-shape3`} />
        </g>
        <g id={`IddleDog-24-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-24-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-24-${id}-shape4`} />
        </g>
        <g id={`IddleDog-24-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-24-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-24-${id}-shape5`} />
        </g>
        <g id={`IddleDog-24-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 25 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 24}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-25-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7518, 0.9647, -1.0619, 1.5856, -8.6197, -0.5664)" width="1.75" xlinkHref={`#IddleDog-25-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0411, -1.2669, 1.017, 1.3449, -14.9982, -3.4148)" width="1.75" xlinkHref={`#IddleDog-25-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7732, 0.8257, -0.8257, 0.7732, 9.3446, -9.0851)" width="13.85" xlinkHref={`#IddleDog-25-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-25-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4674, -0.0452, 0.0557, 1.272, -1.55, -8.0121)" width="4.85" xlinkHref={`#IddleDog-25-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7642, 0.4323, -0.4977, 1.5293, 0.7135, -2.3458)" width="1.75" xlinkHref={`#IddleDog-25-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2451, 0.5885, 0.5885, 1.2451, 7.2174, -11.8721)" width="8.9" xlinkHref={`#IddleDog-25-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.044, 0.0, 0.0, 2.5137, -14.85, -9.725)" width="8.9" xlinkHref={`#IddleDog-25-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-25-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.0976, 14.5803)" width="5.9" xlinkHref={`#IddleDog-25-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.3584, -0.1917, 0.1917, 1.3584, -27.9566, -7.8989)" width="16.45" xlinkHref={`#IddleDog-25-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, 0.0165, -0.0165, 1.8359, 7.4506, -0.2694)" width="1.75" xlinkHref={`#IddleDog-25-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2376, -0.7829, 0.7829, 1.2376, 1.0743, -3.4814)" width="4.85" xlinkHref={`#IddleDog-25-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0707, 0.8483, -0.8484, 2.0706, -2.8553, 3.5953)" width="1.75" xlinkHref={`#IddleDog-25-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2235, -1.535, 1.1162, 1.6168, -9.3488, -2.0274)" width="1.75" xlinkHref={`#IddleDog-25-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-25-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-25-${id}-shape0`} />
        </g>
        <g id={`IddleDog-25-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-25-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-25-${id}-shape1`} />
        </g>
        <g id={`IddleDog-25-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-25-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-25-${id}-shape2`} />
        </g>
        <g id={`IddleDog-25-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-25-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-25-${id}-shape3`} />
        </g>
        <g id={`IddleDog-25-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-25-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-25-${id}-shape4`} />
        </g>
        <g id={`IddleDog-25-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-25-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-25-${id}-shape5`} />
        </g>
        <g id={`IddleDog-25-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
      {/* FRAME 26 */}
      <g transform={`matrix(1.0, 0.0, 0.0, 1.0, ${IddleDog_X_OFFSET + (IddleDog_WIDTH + IddleDog_MARGIN) * 25}, ${IddleDog_Y_OFFSET})`}>
        <use height="3.75" transform="matrix(1.2716, 0.0, 0.0, 1.1527, -18.5513, 8.3175)" width="5.9" xlinkHref={`#IddleDog-26-${id}-sprite0`} />
        <use height="5.75" transform="matrix(1.7592, 0.957, -1.0509, 1.5964, -8.709, -0.6363)" width="1.75" xlinkHref={`#IddleDog-26-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.0436, -1.2693, 1.0189, 1.3467, -15.1064, -3.4168)" width="1.75" xlinkHref={`#IddleDog-26-${id}-sprite1`} />
        <use height="5.4" transform="matrix(0.7744, 0.827, -0.827, 0.7744, 9.2896, -9.0974)" width="13.85" xlinkHref={`#IddleDog-26-${id}-sprite2`} />
        <use height="3.75" transform="matrix(1.1367, 0.0, 0.0, 0.9855, -6.0033, 5.3768)" width="5.9" xlinkHref={`#IddleDog-26-${id}-sprite0`} />
        <use height="7.55" transform="matrix(1.4675, -0.0462, 0.0561, 1.2722, -1.5517, -7.9604)" width="4.85" xlinkHref={`#IddleDog-26-${id}-sprite3`} />
        <use height="5.75" transform="matrix(1.7655, 0.4327, -0.4985, 1.5306, 0.714, -2.35)" width="1.75" xlinkHref={`#IddleDog-26-${id}-sprite1`} />
        <use height="7.2" transform="matrix(-1.2467, 0.5891, 0.5891, 1.2467, 7.2721, -11.8808)" width="8.9" xlinkHref={`#IddleDog-26-${id}-sprite4`} />
        <use height="7.2" transform="matrix(2.0295, 0.0, 0.0, 2.4958, -14.7841, -9.6096)" width="8.9" xlinkHref={`#IddleDog-26-${id}-sprite4`} />
        <use height="3.75" transform="matrix(0.867, 0.0, 0.0, 1.1367, 5.2424, 9.0971)" width="5.9" xlinkHref={`#IddleDog-26-${id}-sprite0`} />
        <use height="3.75" transform="matrix(1.389, 0.0, 0.0, 1.389, -12.1476, 14.5303)" width="5.9" xlinkHref={`#IddleDog-26-${id}-sprite0`} />
        <use height="13.0" transform="matrix(1.359, -0.1916, 0.1916, 1.359, -27.9612, -7.9034)" width="16.45" xlinkHref={`#IddleDog-26-${id}-sprite5`} />
        <use height="5.75" transform="matrix(1.8359, 0.024, -0.024, 1.8359, 7.4212, -0.2788)" width="1.75" xlinkHref={`#IddleDog-26-${id}-sprite1`} />
        <use height="7.55" transform="matrix(1.2395, -0.7838, 0.7838, 1.2395, 1.0671, -3.4355)" width="4.85" xlinkHref={`#IddleDog-26-${id}-sprite3`} />
        <use height="5.75" transform="matrix(2.0795, 0.8332, -0.8333, 2.0795, -2.908, 3.6397)" width="1.75" xlinkHref={`#IddleDog-26-${id}-sprite1`} />
        <use height="5.75" transform="matrix(2.2282, -1.5355, 1.1165, 1.6202, -9.4056, -2.136)" width="1.75" xlinkHref={`#IddleDog-26-${id}-sprite1`} />
      </g>
      <defs>
        <g id={`IddleDog-26-${id}-sprite0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <use height="3.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.95, -1.85)" width="5.9" xlinkHref={`#IddleDog-26-${id}-shape0`} />
        </g>
        <g id={`IddleDog-26-${id}-shape0`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.95, 1.85)">
          <path d="M-2.2 0.4 L-2.95 0.35 -2.65 -0.35 -2.3 -0.95 -1.65 -1.55 2.25 -1.85 2.8 -1.5 2.95 -0.45 2.9 -0.15 2.8 0.1 -0.95 1.9 -0.7 0.9 -0.55 0.25 0.55 -0.3 -0.55 0.25 -0.7 0.9 -2.45 1.55 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 -2.05 -0.1 -2.2 0.4" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.7 0.9 L-0.95 1.9 2.8 0.1 2.9 -0.15 2.95 -0.45 2.8 -1.5 2.25 -1.85 -1.65 -1.55 -2.3 -0.95 -2.65 -0.35 -2.95 0.35 -2.2 0.4 -2.05 -0.1 -0.95 -0.65 M-0.7 0.9 L-0.55 0.25 0.55 -0.3 M-2.2 0.4 L-2.45 1.55 -0.7 0.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5019608" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-26-${id}-sprite1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <use height="5.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -1.25, -2.75)" width="1.75" xlinkHref={`#IddleDog-26-${id}-shape1`} />
        </g>
        <g id={`IddleDog-26-${id}-shape1`} transform="matrix(1.0, 0.0, 0.0, 1.0, 1.25, 2.75)">
          <path d="M0.5 -1.75 L0.5 -1.2 0.4 -0.35 0.25 0.55 Q0.05 1.6 0.2 2.55 L0.0 2.7 -0.75 3.0 -0.75 2.3 Q-0.3 1.5 -0.25 0.35 L-0.4 -1.95 -0.3 -2.7 -0.2 -2.65 0.5 -1.75" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-0.3 -2.7 L-0.4 -1.95 -0.25 0.35 Q-0.3 1.5 -0.75 2.3 L-0.75 3.0 -0.85 3.0 -1.1 2.85 -1.25 -0.9 -1.0 -2.4 Q-0.7 -2.85 -0.3 -2.7" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M0.0 2.7 L0.2 2.55 Q0.05 1.6 0.25 0.55 L0.4 -0.35 0.5 -1.2 0.5 -1.75 M-1.0 -2.4 L-1.25 -0.9 -1.1 2.85" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.34117648" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-26-${id}-sprite2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <use height="5.4" transform="matrix(1.0, 0.0, 0.0, 1.0, -6.9, -2.7)" width="13.85" xlinkHref={`#IddleDog-26-${id}-shape2`} />
        </g>
        <g id={`IddleDog-26-${id}-shape2`} transform="matrix(1.0, 0.0, 0.0, 1.0, 6.9, 2.7)">
          <path d="M-6.9 -0.9 L-0.3 0.9 -1.2 -0.05 -2.1 -0.05 2.2 -0.8 -0.15 -0.2 6.95 -0.05 4.35 0.5 5.05 0.75 5.1 0.85 Q2.7 1.95 0.9 1.6 L2.3 2.35 -0.35 2.5 -3.8 1.85 -2.95 2.7 Q-5.5 1.5 -6.9 -0.9" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M2.75 -2.4 L1.7 -1.95 Q4.5 -1.6 6.95 -0.05 L-0.15 -0.2 2.2 -0.8 -2.1 -0.05 -1.2 -0.05 -0.3 0.9 -6.9 -0.9 -2.5 -2.7 -3.65 -1.7 Q0.1 -2.9 2.75 -2.45 L2.75 -2.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M6.95 -0.05 Q4.5 -1.6 1.7 -1.95 L2.75 -2.4 2.8 -2.45 2.75 -2.45 Q0.1 -2.9 -3.65 -1.7 L-2.5 -2.7 -6.9 -0.9 Q-5.5 1.5 -2.95 2.7 L-3.8 1.85 -0.35 2.5 2.3 2.35 0.9 1.6 Q2.7 1.95 5.1 0.85 L5.15 0.8 5.05 0.75 4.35 0.5 6.95 -0.05 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-26-${id}-sprite3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <use height="7.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -2.4, -3.2)" width="4.85" xlinkHref={`#IddleDog-26-${id}-shape3`} />
        </g>
        <g id={`IddleDog-26-${id}-shape3`} transform="matrix(1.0, 0.0, 0.0, 1.0, 2.4, 3.2)">
          <path d="M2.2 -1.45 L1.9 -1.45 Q1.15 -1.4 0.7 -0.95 L0.0 0.25 -0.3 1.45 Q-0.25 1.7 -0.5 2.05 -0.8 2.5 -1.45 2.5 L-2.0 2.35 -2.3 2.25 -2.25 2.5 -2.35 2.15 -2.4 1.15 -2.4 0.75 -2.15 -1.4 -0.95 -2.6 Q-0.05 -3.3 1.0 -3.15 1.7 -3.0 2.45 -2.45 L2.4 -2.25 2.2 -1.45" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.2 -1.45 L2.05 -1.05 1.5 0.3 1.5 0.35 Q0.85 1.8 0.75 2.9 L0.75 3.3 0.5 4.1 0.4 4.2 -0.1 4.35 -0.35 4.3 -1.1 4.05 -1.95 3.2 -2.2 2.7 -2.25 2.65 -2.25 2.5 -2.3 2.25 -2.0 2.35 -1.45 2.5 Q-0.8 2.5 -0.5 2.05 -0.25 1.7 -0.3 1.45 L0.0 0.25 0.7 -0.95 Q1.15 -1.4 1.9 -1.45 L2.2 -1.45" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M1.5 0.3 L2.05 -1.05 2.2 -1.45 2.4 -2.25 2.45 -2.45" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4117647" strokeWidth="0.05" />
          <path d="M-2.25 2.5 L-2.25 2.65 -2.2 2.7 -1.95 3.2 -1.1 4.05 -0.35 4.3 -0.1 4.35 0.4 4.2 M0.75 3.3 L0.75 2.9 Q0.85 1.8 1.5 0.35 L1.5 0.3 M-2.15 -1.4 L-2.4 0.75 -2.4 1.15 -2.35 2.15 -2.25 2.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-26-${id}-sprite4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <use height="7.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -4.55, -3.65)" width="8.9" xlinkHref={`#IddleDog-26-${id}-shape4`} />
        </g>
        <g id={`IddleDog-26-${id}-shape4`} transform="matrix(1.0, 0.0, 0.0, 1.0, 4.55, 3.65)">
          <path d="M-3.2 -1.65 L-2.6 -2.5 -1.8 -3.5 -1.75 -3.45 -2.15 -1.9 -3.2 -1.65" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M3.95 -1.5 L4.2 -1.0 4.35 0.15 Q4.3 0.65 3.85 0.85 3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -3.85 1.55 -2.8 1.45 -1.9 1.2 -1.65 1.3 -1.7 1.45 Q0.4 0.6 0.8 0.1 L1.9 -0.8 1.95 -0.65 1.2 0.65 2.9 -0.65 3.95 -1.5" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 2.9 -2.35 Q3.0 -2.2 3.25 -2.15 L3.9 -1.65 3.95 -1.5 2.9 -0.65 1.2 0.65 1.95 -0.65 1.9 -0.8 0.8 0.1 Q0.4 0.6 -1.7 1.45 L-1.65 1.3 -1.9 1.2 -2.8 1.45 -3.85 1.55 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.15 -1.9 M2.0 -1.8 L0.75 -1.65 1.0 -2.55 0.75 -1.65 2.0 -1.8 M-0.4 -1.5 L0.75 -1.65 -0.4 -1.5 M-1.55 -1.4 L-1.6 -0.5 -1.55 -1.4 -3.15 -0.4 -1.55 -1.4 -0.6 -2.4 -1.55 -1.4" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-2.15 -1.9 L-3.2 -1.65 M1.0 -2.55 L0.75 -1.65 2.0 -1.8 M-3.15 -0.4 L-1.55 -1.4 -0.6 -2.4 M-1.6 -0.5 L-1.55 -1.4 M0.75 -1.65 L-0.4 -1.5" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.24313726" strokeWidth="0.05" />
          <path d="M-2.15 -1.9 L0.05 -3.65 -0.6 -2.4 0.65 -3.25 1.6 -3.65 1.0 -2.55 2.5 -3.1 M3.85 0.85 Q3.45 1.1 3.1 1.45 L1.55 2.55 Q0.5 3.4 -1.0 3.55 L-2.9 2.9 -3.75 2.3 -4.1 1.85 -4.25 1.6 -4.55 1.15 -4.2 0.05 -3.55 -1.15 -3.2 -1.65 -2.6 -2.5 -1.8 -3.5 -1.75 -3.5 -1.75 -3.45 -2.15 -1.9 Z" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
        <g id={`IddleDog-26-${id}-sprite5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <use height="13.0" transform="matrix(1.0, 0.0, 0.0, 1.0, -7.65, -6.6)" width="16.45" xlinkHref={`#IddleDog-26-${id}-shape5`} />
        </g>
        <g id={`IddleDog-26-${id}-shape5`} transform="matrix(1.0, 0.0, 0.0, 1.0, 7.65, 6.6)">
          <path d="M-2.6 -4.2 L-3.3 -3.6 -3.05 -5.0 -2.6 -4.2 M-0.6 0.95 L-0.6 1.1 -0.45 1.1 -0.5 1.15 -0.6 1.1 -1.45 1.05 -0.6 0.95 M-4.85 1.65 L-4.25 2.0 -5.5 1.4 -5.85 1.2 -5.55 1.1 -4.85 1.65 M5.0 1.95 L4.95 1.9 5.0 1.9 5.0 1.95 M-3.65 0.95 L-3.7 0.9 -3.6 0.9 -3.65 0.95" fill="#b76b28" fillRule="evenodd" stroke="none" />
          <path d="M2.55 -1.5 Q1.95 -1.25 1.25 -1.85 L1.1 -2.1 Q0.9 -2.3 0.85 -2.55 1.25 -3.2 2.2 -3.6 2.7 -3.65 3.05 -3.95 L4.2 -5.35 5.25 -6.4 5.0 -5.55 4.75 -4.7 4.7 -4.65 4.55 -3.95 4.3 -2.6 3.25 -1.85 Q2.95 -1.6 2.55 -1.5 M5.0 -5.55 L4.7 -4.65 5.0 -5.55 M-6.3 -0.65 L-0.6 0.95 -1.45 1.05 -3.6 0.9 -3.7 0.9 -3.65 0.95 -2.6 1.95 -4.85 1.65 -5.55 1.1 -4.75 0.75 -6.1 -0.2 -6.3 -0.65 M-5.5 1.4 L-5.85 1.3 -5.85 1.2 -5.5 1.4 M-7.25 2.45 Q-7.15 2.45 -7.1 2.55 L-6.9 3.8 -6.25 3.7 -4.85 4.15 -0.75 3.2 2.2 2.45 1.25 1.75 4.75 1.05 8.15 1.75 5.95 4.6 1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 -7.65 3.2 -7.25 2.45 M5.0 1.95 L5.0 1.9 4.95 1.9 5.0 1.95 M-0.75 3.2 L-5.55 5.4 -6.85 4.85 -5.55 5.4 -0.75 3.2" fill="#8e2600" fillRule="evenodd" stroke="none" />
          <path d="M5.25 -6.4 L4.2 -5.35 3.05 -3.95 Q2.7 -3.65 2.2 -3.6 1.25 -3.2 0.85 -2.55 0.9 -2.3 1.1 -2.1 L1.25 -1.85 Q1.95 -1.25 2.55 -1.5 2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 7.3 -4.0 6.35 -3.6 7.9 -3.5 8.4 -2.1 8.8 -0.55 8.15 1.75 4.75 1.05 1.25 1.75 2.2 2.45 -0.75 3.2 -4.85 4.15 -6.25 3.7 -5.4 3.2 -5.7 2.75 -7.1 2.55 -5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 Q-7.15 2.45 -7.25 2.45 L-5.85 1.3 -5.5 1.4 -4.25 2.0 -4.85 1.65 -2.6 1.95 -1.7 2.0 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.6 0.9 -1.45 1.05 -0.6 1.1 -0.5 1.15 -0.45 1.1 -0.6 1.1 -0.6 0.95 -6.3 -0.65 -5.15 -1.55 -6.8 -2.7 -5.15 -2.45 -5.0 -3.4 -3.55 -5.5 -5.0 -3.4 -5.45 -4.15 -4.15 -6.6 -3.55 -5.5 Q-3.05 -5.8 -2.6 -6.15 L-3.05 -5.0 -3.3 -3.6 -2.6 -4.2 1.65 -6.4 0.75 -5.1 2.05 -5.1 2.2 -5.1 5.25 -6.4 M-0.45 -3.1 L1.25 -4.45 Q1.7 -4.7 2.05 -5.1 1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M-6.1 -0.2 L-4.75 0.75 -5.55 1.1 -5.85 1.2 -6.1 -0.2" fill="#b26421" fillRule="evenodd" stroke="none" />
          <path d="M-0.6 1.1 L-0.45 1.1 -0.5 1.15 -1.7 2.0 -2.6 1.95 -3.65 0.95 -3.7 0.9 M-7.1 2.55 L-5.7 2.75 -5.4 3.2 -6.25 3.7 -6.9 3.8 -7.1 2.55 M-1.45 1.05 L-0.6 1.1 M-3.6 0.9 L-1.45 1.05" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.05" />
          <path d="M2.55 -1.5 Q2.95 -1.6 3.25 -1.85 L4.3 -2.6 4.55 -3.95 4.7 -4.65 5.0 -5.55 5.25 -6.4 2.2 -5.1 2.05 -5.1 Q1.7 -4.7 1.25 -4.45 L-0.45 -3.1 M2.05 -5.1 L0.75 -5.1 1.65 -6.4 -2.6 -4.2 -3.3 -3.6 -3.05 -5.0 -2.6 -6.15 Q-3.05 -5.8 -3.55 -5.5 L-5.0 -3.4 -5.15 -2.45 -6.8 -2.7 -5.15 -1.55 -6.3 -0.65 -6.1 -0.2 -4.75 0.75 -5.55 1.1 -4.85 1.65 -4.25 2.0 -5.5 1.4 -5.85 1.2 -5.85 1.3 -7.25 2.45 -7.65 3.2 -6.85 4.85 -5.55 5.4 -0.75 3.2 M7.9 -3.5 L6.35 -3.6 7.3 -4.0 4.55 -3.95 M5.95 4.6 L1.8 4.55 3.1 5.05 1.5 4.85 -3.25 5.4 -4.6 6.0 -4.95 6.1 -5.15 6.4 -6.65 5.85 -6.85 4.85 M-2.6 -4.2 L-3.05 -5.0 M-3.55 -5.5 L-4.15 -6.6 -5.45 -4.15 -5.0 -3.4 M-5.55 1.1 L-5.85 1.2 -6.1 -0.2" fill="none" stroke="#5b0000" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.4" strokeWidth="0.05" />
        </g>
      </defs>
    </Box>
  </Box>
);

export default IddleDog;