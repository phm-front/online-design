import type { CommonProps } from './defaultProps';
import type { TextProps, TextPropsFromMap } from '../h-text/hText';

type ComponentProps = TextProps;

export type AllComponentType = Partial<CommonProps> & ComponentProps;

export type AllComponentTypeKeys = keyof AllComponentType;

export type PropsToFormCommon = TextPropsFromMap;
