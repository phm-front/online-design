import { commonDefaultProps } from '../utils/defaultProps';
import type { CommonProps } from '../utils/defaultProps';
import { without } from 'lodash-es';

export const textDefaultProps = {
  ...commonDefaultProps,
  tag: 'div',
  text: '',
  // 样式属性
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: ''
};

export const textStylePropNames = without(
  Object.keys(textDefaultProps),
  'tag', 'text', 'actionType', 'url'
);

interface TextProps {
  // text
  text: string;
  tag?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontStyle?: string;
  textDecoration?: string;
  lineHeight?: string;
  textAlign?: string;
  color?: string;
  backgroundColor?: string;
}

export type TextPropsType = TextProps & Partial<CommonProps>;
