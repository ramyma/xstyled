import * as CSS from 'csstype'
import { num } from '@xstyled/util'
import { style, themeGetter, compose } from '../style'
import { px } from '../unit'
import { getColor, ColorGetter } from './colors'
import { getPx } from './units'
import { ExtractThemeProperty, SystemProperty, VariantsType } from '../types'

// Getters
export type BorderGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'borders'>
>
export const getBorder = themeGetter({
  name: 'border',
  key: 'borders',
  transform: (n: number | string) => (num(n) && n > 0 ? `${px(n)} solid` : n),
})

export type BorderWidthGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'borderWidths'>
>
export const getBorderWidth = themeGetter({
  name: 'borderWidth',
  key: 'borderWidths',
  compose: getPx,
  shorthand: true,
})

export type BorderColorGetter<T = {}> = ColorGetter<T>
export const getBorderColor = themeGetter({
  name: 'borderColor',
  compose: getColor,
  shorthand: true,
})

export type BorderStyleGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'borderWidths'>
>
export const getBorderStyle = themeGetter({
  name: 'borderStyle',
  key: 'borderStyles',
})

// Border

export interface BorderProps<T = {}> {
  border?: SystemProperty<BorderGetter<T> | CSS.Property.Border, T>
}
export const border = style<BorderProps>({
  prop: 'border',
  themeGet: getBorder,
})

export interface BorderColorProps<T = {}> {
  borderColor?: SystemProperty<ColorGetter | CSS.Property.BorderColor, T>
}
export const borderColor = style<BorderColorProps>({
  prop: 'borderColor',
  themeGet: getBorderColor,
})

export interface BorderWidthProps<T = {}> {
  borderWidth?: SystemProperty<
    BorderWidthGetter<T> | CSS.Property.BorderWidth,
    T
  >
}
export const borderWidth = style<BorderWidthProps>({
  prop: 'borderWidth',
  themeGet: getBorderWidth,
})

export interface BorderStyleProps<T = {}> {
  borderStyle?: SystemProperty<
    BorderStyleGetter<T> | CSS.Property.BorderStyle,
    T
  >
}
export const borderStyle = style<BorderStyleProps>({
  prop: 'borderStyle',
  themeGet: getBorderStyle,
})

// Outline

export interface OutlineProps<T = {}> {
  outline?: SystemProperty<BorderGetter<T> | CSS.Property.Outline, T>
}
export const outline = style<OutlineProps>({
  prop: 'outline',
  themeGet: getBorder,
})

export interface OutlineColorProps<T = {}> {
  outlineColor?: SystemProperty<ColorGetter | CSS.Property.OutlineColor, T>
}
export const outlineColor = style<OutlineColorProps>({
  prop: 'outlineColor',
  themeGet: getColor,
})

export interface OutlineWidthProps<T = {}> {
  outlineWidth?: SystemProperty<
    BorderWidthGetter<T> | CSS.Property.OutlineWidth,
    T
  >
}
export const outlineWidth = style<OutlineWidthProps>({
  prop: 'outlineWidth',
  themeGet: getBorderWidth,
})

export interface OutlineStyleProps<T = {}> {
  outlineStyle?: SystemProperty<
    BorderStyleGetter<T> | CSS.Property.OutlineStyle,
    T
  >
}
export const outlineStyle = style<OutlineStyleProps>({
  prop: 'outlineStyle',
  themeGet: getBorderStyle,
})

// Radius

export type RadiusGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'radii'>
>
export const getRadius = themeGetter({
  name: 'radius',
  key: 'radii',
  compose: getPx,
  shorthand: true,
})

export interface BorderRadiusProps<T = {}> {
  borderRadius?: SystemProperty<RadiusGetter<T> | CSS.Property.BorderRadius, T>
}
export const borderRadius = style<BorderRadiusProps>({
  prop: 'borderRadius',
  themeGet: getRadius,
})

// Divide

const divideSelector = `& > :not([hidden]) ~ :not([hidden])`

export interface DivideYProps<T = {}> {
  divideY?: SystemProperty<BorderWidthGetter<T>, T>
}
export const divideY = style<DivideYProps>({
  prop: 'divideY',
  themeGet: getBorderWidth,
  cssProperty: (_, { value }) => {
    const v = value === true ? 1 : value
    return {
      [divideSelector]: {
        '--x-divide-y-reverse': 0,
        borderTopWidth: `calc(${v} * calc(1 - var(--x-divide-y-reverse)))`,
        borderBottomWidth: `calc(${v} * var(--x-divide-y-reverse))`,
      },
    }
  },
})

export interface DivideXProps<T = {}> {
  divideX?: SystemProperty<BorderWidthGetter<T>, T>
}
export const divideX = style<DivideXProps>({
  prop: 'divideX',
  themeGet: getBorderWidth,
  cssProperty: (_, { value }) => {
    const v = value === true ? 1 : value
    return {
      [divideSelector]: {
        '--x-divide-x-reverse': 0,
        borderRightWidth: `calc(${v} * var(--x-divide-x-reverse))`,
        borderLeftWidth: `calc(${v} * calc(1 - var(--x-divide-x-reverse)))`,
      },
    }
  },
})

export interface DivideXReverseProps<T = {}> {
  divideXReverse?: SystemProperty<boolean, T>
}
export const divideXReverse = style<DivideXReverseProps>({
  prop: 'divideXReverse',
  cssProperty: () => ({
    [divideSelector]: {
      '--x-divide-x-reverse': '1',
    },
  }),
})

export interface DivideYReverseProps<T = {}> {
  divideYReverse?: SystemProperty<boolean, T>
}
export const divideYReverse = style<DivideYReverseProps>({
  prop: 'divideYReverse',
  cssProperty: () => ({
    [divideSelector]: {
      '--x-divide-y-reverse': '1',
    },
  }),
})

export interface DivideColorProps<T = {}> {
  divideColor?: SystemProperty<ColorGetter | CSS.Property.BorderColor, T>
}
export const divideColor = style<DivideColorProps>({
  prop: 'divideColor',
  themeGet: getBorderColor,
  cssProperty: (_, { value }) => ({
    [divideSelector]: {
      borderColor: value,
    },
  }),
})

export interface DivideStyleProps<T = {}> {
  divideStyle?: SystemProperty<BorderStyleGetter | CSS.Property.BorderStyle, T>
}
export const divideStyle = style<DivideStyleProps>({
  prop: 'divideStyle',
  themeGet: getBorderStyle,
  cssProperty: (_, { value }) => ({
    [divideSelector]: {
      borderStyle: value,
    },
  }),
})

export type RightWidthGetter<T = {}> = VariantsType<
  ExtractThemeProperty<T, 'ringWidths'>
>
export const getRingWidth = themeGetter({
  name: 'ringWidth',
  key: 'ringWidths',
  compose: getPx,
})

export interface RingProps<T = {}> {
  ring?: SystemProperty<BorderWidthGetter, T>
}
export const ring = style<RingProps>({
  prop: 'ring',
  themeGet: getRingWidth,
  cssProperty: (_, { value }) => ({
    '--x-ring-shadow': `var(--x-ring-inset, /*!*/ /*!*/) 0 0 0 ${value} var(--x-ring-color)`,
    boxShadow: 'var(--x-ring-shadow, 0 0 #0000), var(--x-shadow, 0 0 #0000)',
  }),
})

export interface RingInsetProps<T = {}> {
  ringInset?: SystemProperty<boolean, T>
}
export const ringInset = style<RingInsetProps>({
  prop: 'ringInset',
  cssProperty: () => ({ '--x-ring-inset': 'inset' }),
})

export interface RingColorProps<T = {}> {
  ringColor?: SystemProperty<ColorGetter, T>
}
export const ringColor = style<RingColorProps>({
  prop: 'ringColor',
  themeGet: getColor,
  cssProperty: (_, { value }) => ({ '--x-ring-color': value }),
})

export type BordersProps<T = {}> = BorderProps<T> &
  BorderColorProps<T> &
  BorderWidthProps<T> &
  BorderStyleProps<T> &
  BorderRadiusProps<T> &
  OutlineProps<T> &
  OutlineColorProps<T> &
  OutlineWidthProps<T> &
  OutlineStyleProps<T> &
  DivideXProps<T> &
  DivideYProps<T> &
  DivideXReverseProps<T> &
  DivideYReverseProps<T> &
  DivideColorProps<T> &
  DivideStyleProps<T> &
  RingProps<T> &
  RingInsetProps<T> &
  RingColorProps<T>
export const borders = compose<BordersProps>(
  border,
  borderColor,
  borderWidth,
  borderStyle,
  borderRadius,
  outline,
  outlineColor,
  outlineWidth,
  outlineStyle,
  divideX,
  divideY,
  divideXReverse,
  divideYReverse,
  divideColor,
  divideStyle,
  ring,
  ringInset,
  ringColor,
)
