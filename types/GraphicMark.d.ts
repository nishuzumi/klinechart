import {ChartData} from "./Chart";

export declare interface GraphicMarkViewport {
  width: number;
  height: number;
}

export declare interface XYPoint {
  x: number;
  y: number;
}

export declare interface TimestampPricePoint {
  timestamp?: number;
  dataIndex?: number;
  price?: number;
}

export declare interface PriceVolumePrecision {
  price: number;
  volume: number;
}

export declare type GraphicMarkDataSourceDrawType = 'line' | 'text' | 'continuous_line' | 'polygon' | 'arc';

export declare type GraphicMarkDataSourceDrawStyle = 'stroke' | 'fill';

export declare interface GraphicMarkDataSourceItem extends XYPoint {
  radius?: number;
  startAngle?: number;
  endAngle?: number;
  text?: string;
}

export declare interface GraphicMarkDataSource {
  type: GraphicMarkDataSourceDrawType;
  isDraw?: boolean;
  isCheck?: boolean;
  style?: GraphicMarkDataSourceDrawStyle;
  customMark?:GraphicMarkStyle
  dataSource: GraphicMarkDataSourceItem[] | GraphicMarkDataSourceItem[][];
}

export declare interface GraphicMark {
  name: string;
  totalStep: number;
  checkMousePointOn: (type: GraphicMarkDataSourceDrawType, points: GraphicMarkDataSourceItem | GraphicMarkDataSourceItem[], mousePoint: XYPoint) => boolean;
  createGraphicDataSource: (step: number, tpPoints: TimestampPricePoint[], xyPoints: XYPoint[], viewport: GraphicMarkViewport, precision: PriceVolumePrecision, xAxis: any, yAxis: any) => GraphicMarkDataSource[];
  performMousePressedMove?: (tpPoints: TimestampPricePoint[], pressedPointIndex: number, data: TimestampPricePoint) => void;
  performMouseMoveForDrawing?: (step: number, tpPoints: TimestampPricePoint[], data: TimestampPricePoint) => void;
  drawExtend?: (ctx: CanvasRenderingContext2D, graphicMarkDataSources: GraphicMarkDataSource[], markOptions: any, viewport: GraphicMarkViewport ,precision: PriceVolumePrecision, xAxis: any, yAxis: any) => void;
  onInit?:(id, name, totalStep, chartData, xAxis, yAxis)=>void;
  _tpPoints:TimestampPricePoint[];
  _drawStep:number;
  _chartData:ChartData;
}

export declare interface Point {
  backgroundColor: string;
  borderColor: string;
  borderSize: number;
  radius: number;
  activeBackgroundColor: string;
  activeBorderColor: string;
  activeBorderSize: number;
  activeRadius: number;
}

export declare interface ColorAnsSize {
  color: string;
  size: number;
}

export declare interface Fill {
  color: string;
}

export declare interface Polygon {
  stroke: ColorAnsSize;
  fill: Fill;
}

export declare interface Arc {
  stroke: ColorAnsSize;
  fill: Fill;
}

export declare interface Text {
  color: string;
  size: number;
  family: string;
  weight: string;
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginBottom: number;
}

export declare interface GraphicMarkStyle {
  point: Point;
  line: ColorAnsSize;
  polygon: Polygon;
  arc: Arc;
  text: Text;
}

