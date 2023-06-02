import { pick } from 'lodash-es';
import type { CommonProps } from '@/common/utils/defaultProps';

export const useComponentCommon = <T extends CommonProps | Partial<CommonProps>>(
  props: T,
  pickerNames: string[]
) => {
  const styleProps = computed(() => pick(props, pickerNames));
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.open(props.url, '_self')
    }
  };
  return {
    styleProps,
    handleClick
  };
};
