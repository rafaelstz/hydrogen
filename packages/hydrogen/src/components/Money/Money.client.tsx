import React, {ElementType} from 'react';
import {useMoney} from '../../hooks';
import {Props} from '../types';
import type {MoneyFragmentFragment} from './MoneyFragment';
import {MoneyFragment as Fragment} from '../../graphql/graphql-constants';

export interface MoneyProps<TTag> {
  /** An HTML tag to be rendered as the base element wrapper. The default is `div`. */
  as?: TTag;
  /** A [`MoneyV2` object](/api/storefront/reference/common-objects/moneyv2). */
  data: MoneyFragmentFragment;
}

/**
 * The `Money` component renders a string of the Storefront API's
 * [`MoneyV2` object](/api/storefront/reference/common-objects/moneyv2) according to the
 * `defaultLocale` in the `shopify.config.js` file.
 */
export function Money<TTag extends ElementType>(
  props: Props<TTag> & MoneyProps<TTag>
) {
  const {data, as, ...passthroughProps} = props;
  const moneyObject = useMoney(data);
  const Wrapper = as ?? 'div';

  return <Wrapper {...passthroughProps}>{moneyObject.localizedString}</Wrapper>;
}

Money.Fragment = Fragment;
export const MoneyFragment = Fragment;
