import * as CSS from 'csstype'
import { SystemProp, ITheme, Theme, VariantsType } from '../types'
import { style, compose } from '../style'
import { getSpace, SpaceGetter } from './space'

type GapProp<T extends ITheme> = SystemProp<
  SpaceGetter<T> | CSS.Property.Gap,
  T
>
export interface GapProps<T extends ITheme = Theme> {
  gap?: GapProp<T>
  motionSafeGap?: GapProp<T>
  motionReduceGap?: GapProp<T>
  firstGap?: GapProp<T>
  lastGap?: GapProp<T>
  oddGap?: GapProp<T>
  evenGap?: GapProp<T>
  visitedGap?: GapProp<T>
  checkedGap?: GapProp<T>
  focusWithinGap?: GapProp<T>
  hoverGap?: GapProp<T>
  focusGap?: GapProp<T>
  focusVisibleGap?: GapProp<T>
  activeGap?: GapProp<T>
  disabledGap?: GapProp<T>
  placeholderGap?: GapProp<T>
}
export const gap = style({
  prop: 'gap',
  themeGet: getSpace,
})

type ColumnGapProp<T extends ITheme> = SystemProp<
  SpaceGetter<T> | CSS.Property.ColumnGap,
  T
>
export interface ColumnGapProps<T extends ITheme = Theme> {
  columnGap?: ColumnGapProp<T>
  motionSafeColumnGap?: ColumnGapProp<T>
  motionReduceColumnGap?: ColumnGapProp<T>
  firstColumnGap?: ColumnGapProp<T>
  lastColumnGap?: ColumnGapProp<T>
  oddColumnGap?: ColumnGapProp<T>
  evenColumnGap?: ColumnGapProp<T>
  visitedColumnGap?: ColumnGapProp<T>
  checkedColumnGap?: ColumnGapProp<T>
  focusWithinColumnGap?: ColumnGapProp<T>
  hoverColumnGap?: ColumnGapProp<T>
  focusColumnGap?: ColumnGapProp<T>
  focusVisibleColumnGap?: ColumnGapProp<T>
  activeColumnGap?: ColumnGapProp<T>
  disabledColumnGap?: ColumnGapProp<T>
  placeholderColumnGap?: ColumnGapProp<T>
}
export const columnGap = style({
  prop: 'columnGap',
  themeGet: getSpace,
})

type RowGapProp<T extends ITheme> = SystemProp<
  SpaceGetter<T> | CSS.Property.RowGap,
  T
>
export interface RowGapProps<T extends ITheme = Theme> {
  rowGap?: RowGapProp<T>
  motionSafeRowGap?: RowGapProp<T>
  motionReduceRowGap?: RowGapProp<T>
  firstRowGap?: RowGapProp<T>
  lastRowGap?: RowGapProp<T>
  oddRowGap?: RowGapProp<T>
  evenRowGap?: RowGapProp<T>
  visitedRowGap?: RowGapProp<T>
  checkedRowGap?: RowGapProp<T>
  focusWithinRowGap?: RowGapProp<T>
  hoverRowGap?: RowGapProp<T>
  focusRowGap?: RowGapProp<T>
  focusVisibleRowGap?: RowGapProp<T>
  activeRowGap?: RowGapProp<T>
  disabledRowGap?: RowGapProp<T>
  placeholderRowGap?: RowGapProp<T>
}
export const rowGap = style({
  prop: 'rowGap',
  themeGet: getSpace,
})

type GridColumnProp<T extends ITheme> = SystemProp<CSS.Property.GridColumn, T>
export interface GridColumnProps<T extends ITheme = Theme> {
  gridColumn?: GridColumnProp<T>
  motionSafeGridColumn?: GridColumnProp<T>
  motionReduceGridColumn?: GridColumnProp<T>
  firstGridColumn?: GridColumnProp<T>
  lastGridColumn?: GridColumnProp<T>
  oddGridColumn?: GridColumnProp<T>
  evenGridColumn?: GridColumnProp<T>
  visitedGridColumn?: GridColumnProp<T>
  checkedGridColumn?: GridColumnProp<T>
  focusWithinGridColumn?: GridColumnProp<T>
  hoverGridColumn?: GridColumnProp<T>
  focusGridColumn?: GridColumnProp<T>
  focusVisibleGridColumn?: GridColumnProp<T>
  activeGridColumn?: GridColumnProp<T>
  disabledGridColumn?: GridColumnProp<T>
  placeholderGridColumn?: GridColumnProp<T>
}
export const gridColumn = style({ prop: 'gridColumn' })

type GridRowProp<T extends ITheme> = SystemProp<CSS.Property.GridRow, T>
export interface GridRowProps<T extends ITheme = Theme> {
  gridRow?: GridRowProp<T>
  motionSafeGridRow?: GridRowProp<T>
  motionReduceGridRow?: GridRowProp<T>
  firstGridRow?: GridRowProp<T>
  lastGridRow?: GridRowProp<T>
  oddGridRow?: GridRowProp<T>
  evenGridRow?: GridRowProp<T>
  visitedGridRow?: GridRowProp<T>
  checkedGridRow?: GridRowProp<T>
  focusWithinGridRow?: GridRowProp<T>
  hoverGridRow?: GridRowProp<T>
  focusGridRow?: GridRowProp<T>
  focusVisibleGridRow?: GridRowProp<T>
  activeGridRow?: GridRowProp<T>
  disabledGridRow?: GridRowProp<T>
  placeholderGridRow?: GridRowProp<T>
}
export const gridRow = style({ prop: 'gridRow' })

type GridAutoFlowProp<T extends ITheme> = SystemProp<
  CSS.Property.GridAutoFlow,
  T
>
export interface GridAutoFlowProps<T extends ITheme = Theme> {
  gridAutoFlow?: GridAutoFlowProp<T>
  motionSafeGridAutoFlow?: GridAutoFlowProp<T>
  motionReduceGridAutoFlow?: GridAutoFlowProp<T>
  firstGridAutoFlow?: GridAutoFlowProp<T>
  lastGridAutoFlow?: GridAutoFlowProp<T>
  oddGridAutoFlow?: GridAutoFlowProp<T>
  evenGridAutoFlow?: GridAutoFlowProp<T>
  visitedGridAutoFlow?: GridAutoFlowProp<T>
  checkedGridAutoFlow?: GridAutoFlowProp<T>
  focusWithinGridAutoFlow?: GridAutoFlowProp<T>
  hoverGridAutoFlow?: GridAutoFlowProp<T>
  focusGridAutoFlow?: GridAutoFlowProp<T>
  focusVisibleGridAutoFlow?: GridAutoFlowProp<T>
  activeGridAutoFlow?: GridAutoFlowProp<T>
  disabledGridAutoFlow?: GridAutoFlowProp<T>
  placeholderGridAutoFlow?: GridAutoFlowProp<T>
}
export const gridAutoFlow = style({ prop: 'gridAutoFlow' })

type GridAutoColumnsProp<T extends ITheme> = SystemProp<
  CSS.Property.GridAutoColumns,
  T
>
export interface GridAutoColumnsProps<T extends ITheme = Theme> {
  gridAutoColumns?: GridAutoColumnsProp<T>
  motionSafeGridAutoColumns?: GridAutoColumnsProp<T>
  motionReduceGridAutoColumns?: GridAutoColumnsProp<T>
  firstGridAutoColumns?: GridAutoColumnsProp<T>
  lastGridAutoColumns?: GridAutoColumnsProp<T>
  oddGridAutoColumns?: GridAutoColumnsProp<T>
  evenGridAutoColumns?: GridAutoColumnsProp<T>
  visitedGridAutoColumns?: GridAutoColumnsProp<T>
  checkedGridAutoColumns?: GridAutoColumnsProp<T>
  focusWithinGridAutoColumns?: GridAutoColumnsProp<T>
  hoverGridAutoColumns?: GridAutoColumnsProp<T>
  focusGridAutoColumns?: GridAutoColumnsProp<T>
  focusVisibleGridAutoColumns?: GridAutoColumnsProp<T>
  activeGridAutoColumns?: GridAutoColumnsProp<T>
  disabledGridAutoColumns?: GridAutoColumnsProp<T>
  placeholderGridAutoColumns?: GridAutoColumnsProp<T>
}
export const gridAutoColumns = style({
  prop: 'gridAutoColumns',
})

type GridAutoRowsProp<T extends ITheme> = SystemProp<
  CSS.Property.GridAutoRows,
  T
>
export interface GridAutoRowsProps<T extends ITheme = Theme> {
  gridAutoRows?: GridAutoRowsProp<T>
  motionSafeGridAutoRows?: GridAutoRowsProp<T>
  motionReduceGridAutoRows?: GridAutoRowsProp<T>
  firstGridAutoRows?: GridAutoRowsProp<T>
  lastGridAutoRows?: GridAutoRowsProp<T>
  oddGridAutoRows?: GridAutoRowsProp<T>
  evenGridAutoRows?: GridAutoRowsProp<T>
  visitedGridAutoRows?: GridAutoRowsProp<T>
  checkedGridAutoRows?: GridAutoRowsProp<T>
  focusWithinGridAutoRows?: GridAutoRowsProp<T>
  hoverGridAutoRows?: GridAutoRowsProp<T>
  focusGridAutoRows?: GridAutoRowsProp<T>
  focusVisibleGridAutoRows?: GridAutoRowsProp<T>
  activeGridAutoRows?: GridAutoRowsProp<T>
  disabledGridAutoRows?: GridAutoRowsProp<T>
  placeholderGridAutoRows?: GridAutoRowsProp<T>
}
export const gridAutoRows = style({ prop: 'gridAutoRows' })

type GridTemplateColumnsProp<T extends ITheme> = SystemProp<
  VariantsType<T['gridTemplateColumns']> | CSS.Property.GridTemplateColumns,
  T
>
export interface GridTemplateColumnsProps<T extends ITheme = Theme> {
  gridTemplateColumns?: GridTemplateColumnsProp<T>
  motionSafeGridTemplateColumns?: GridTemplateColumnsProp<T>
  motionReduceGridTemplateColumns?: GridTemplateColumnsProp<T>
  firstGridTemplateColumns?: GridTemplateColumnsProp<T>
  lastGridTemplateColumns?: GridTemplateColumnsProp<T>
  oddGridTemplateColumns?: GridTemplateColumnsProp<T>
  evenGridTemplateColumns?: GridTemplateColumnsProp<T>
  visitedGridTemplateColumns?: GridTemplateColumnsProp<T>
  checkedGridTemplateColumns?: GridTemplateColumnsProp<T>
  focusWithinGridTemplateColumns?: GridTemplateColumnsProp<T>
  hoverGridTemplateColumns?: GridTemplateColumnsProp<T>
  focusGridTemplateColumns?: GridTemplateColumnsProp<T>
  focusVisibleGridTemplateColumns?: GridTemplateColumnsProp<T>
  activeGridTemplateColumns?: GridTemplateColumnsProp<T>
  disabledGridTemplateColumns?: GridTemplateColumnsProp<T>
  placeholderGridTemplateColumns?: GridTemplateColumnsProp<T>
}
export const gridTemplateColumns = style({
  prop: 'gridTemplateColumns',
  key: 'gridTemplateColumns',
})

type GridTemplateRowsProp<T extends ITheme> = SystemProp<
  VariantsType<T['gridTemplateRows']> | CSS.Property.GridTemplateRows,
  T
>
export interface GridTemplateRowsProps<T extends ITheme = Theme> {
  gridTemplateRows?: GridTemplateRowsProp<T>
  motionSafeGridTemplateRows?: GridTemplateRowsProp<T>
  motionReduceGridTemplateRows?: GridTemplateRowsProp<T>
  firstGridTemplateRows?: GridTemplateRowsProp<T>
  lastGridTemplateRows?: GridTemplateRowsProp<T>
  oddGridTemplateRows?: GridTemplateRowsProp<T>
  evenGridTemplateRows?: GridTemplateRowsProp<T>
  visitedGridTemplateRows?: GridTemplateRowsProp<T>
  checkedGridTemplateRows?: GridTemplateRowsProp<T>
  focusWithinGridTemplateRows?: GridTemplateRowsProp<T>
  hoverGridTemplateRows?: GridTemplateRowsProp<T>
  focusGridTemplateRows?: GridTemplateRowsProp<T>
  focusVisibleGridTemplateRows?: GridTemplateRowsProp<T>
  activeGridTemplateRows?: GridTemplateRowsProp<T>
  disabledGridTemplateRows?: GridTemplateRowsProp<T>
  placeholderGridTemplateRows?: GridTemplateRowsProp<T>
}
export const gridTemplateRows = style({
  prop: 'gridTemplateRows',
  key: 'gridTemplateRows',
})

type GridTemplateAreasProp<T extends ITheme> = SystemProp<
  CSS.Property.GridTemplateAreas,
  T
>
export interface GridTemplateAreasProps<T extends ITheme = Theme> {
  gridTemplateAreas?: GridTemplateAreasProp<T>
  motionSafeGridTemplateAreas?: GridTemplateAreasProp<T>
  motionReduceGridTemplateAreas?: GridTemplateAreasProp<T>
  firstGridTemplateAreas?: GridTemplateAreasProp<T>
  lastGridTemplateAreas?: GridTemplateAreasProp<T>
  oddGridTemplateAreas?: GridTemplateAreasProp<T>
  evenGridTemplateAreas?: GridTemplateAreasProp<T>
  visitedGridTemplateAreas?: GridTemplateAreasProp<T>
  checkedGridTemplateAreas?: GridTemplateAreasProp<T>
  focusWithinGridTemplateAreas?: GridTemplateAreasProp<T>
  hoverGridTemplateAreas?: GridTemplateAreasProp<T>
  focusGridTemplateAreas?: GridTemplateAreasProp<T>
  focusVisibleGridTemplateAreas?: GridTemplateAreasProp<T>
  activeGridTemplateAreas?: GridTemplateAreasProp<T>
  disabledGridTemplateAreas?: GridTemplateAreasProp<T>
  placeholderGridTemplateAreas?: GridTemplateAreasProp<T>
}
export const gridTemplateAreas = style({
  prop: 'gridTemplateAreas',
})

type GridAreaProp<T extends ITheme> = SystemProp<CSS.Property.GridArea, T>
export interface GridAreaProps<T extends ITheme = Theme> {
  gridArea?: GridAreaProp<T>
  motionSafeGridArea?: GridAreaProp<T>
  motionReduceGridArea?: GridAreaProp<T>
  firstGridArea?: GridAreaProp<T>
  lastGridArea?: GridAreaProp<T>
  oddGridArea?: GridAreaProp<T>
  evenGridArea?: GridAreaProp<T>
  visitedGridArea?: GridAreaProp<T>
  checkedGridArea?: GridAreaProp<T>
  focusWithinGridArea?: GridAreaProp<T>
  hoverGridArea?: GridAreaProp<T>
  focusGridArea?: GridAreaProp<T>
  focusVisibleGridArea?: GridAreaProp<T>
  activeGridArea?: GridAreaProp<T>
  disabledGridArea?: GridAreaProp<T>
  placeholderGridArea?: GridAreaProp<T>
}
export const gridArea = style({ prop: 'gridArea' })

export type GridsProps<T extends ITheme = Theme> = GapProps<T> &
  ColumnGapProps<T> &
  RowGapProps<T> &
  GridColumnProps<T> &
  GridRowProps<T> &
  GridAutoFlowProps<T> &
  GridAutoColumnsProps<T> &
  GridAutoRowsProps<T> &
  GridTemplateColumnsProps<T> &
  GridTemplateRowsProps<T> &
  GridTemplateAreasProps<T> &
  GridAreaProps<T>
export const grids = compose(
  gap,
  columnGap,
  rowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
)
