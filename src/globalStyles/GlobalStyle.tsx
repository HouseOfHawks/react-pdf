/* Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --react-pdf-annotation-layer: 1;
    --react-pdf-text-layer: 1;
    --annotation-unfocused-field-background: url("data:image/svg+xml;charset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13);'/></svg>");
    --highlight-bg-color: rgba(180, 0, 170, 1);
    --highlight-selected-bg-color: rgba(0, 100, 0, 1);
    --input-focus-border-color: Highlight;
    --input-focus-outline: 1px solid Canvas;
    --input-unfocused-border-color: transparent;
    --input-disabled-border-color: transparent;
    --input-hover-border-color: black;
  }

  @media (forced-colors: active) {
    :root {
      --highlight-bg-color: Highlight;
      --highlight-selected-bg-color: ButtonText;
      --input-focus-border-color: CanvasText;
      --input-unfocused-border-color: ActiveText;
      --input-disabled-border-color: GrayText;
      --input-hover-border-color: Highlight;
    }
    .annotationLayer .textWidgetAnnotation input:required,
    .annotationLayer .textWidgetAnnotation textarea:required,
    .annotationLayer .choiceWidgetAnnotation select:required,
    .annotationLayer .buttonWidgetAnnotation.checkBox input:required,
    .annotationLayer .buttonWidgetAnnotation.radioButton input:required {
      outline: 1.5px solid var(--selectedItem);
    }
  }

  [data-main-rotation='90'] {
    transform: rotate(90deg) translateY(-100%);
  }
  [data-main-rotation='180'] {
    transform: rotate(180deg) translate(-100%, -100%);
  }
  [data-main-rotation='270'] {
    transform: rotate(270deg) translateX(-100%);
  }

  .annotationLayer {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    transform-origin: 0 0;
  }

  .annotationLayer section {
    position: absolute;
    text-align: initial;
    pointer-events: auto;
    box-sizing: border-box;
    transform-origin: 0 0;
  }

  .annotationLayer .linkAnnotation > a,
  .annotationLayer .buttonWidgetAnnotation.pushButton > a {
    position: absolute;
    font-size: 1em;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .annotationLayer .buttonWidgetAnnotation.pushButton > canvas {
    width: 100%;
    height: 100%;
  }

  .annotationLayer .linkAnnotation > a:hover,
  .annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {
    opacity: 0.2;
    background: rgba(255, 255, 0, 1);
    box-shadow: 0 2px 10px rgba(255, 255, 0, 1);
  }

  .annotationLayer .textAnnotation img {
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }

  .annotationLayer .textWidgetAnnotation input,
  .annotationLayer .textWidgetAnnotation textarea,
  .annotationLayer .choiceWidgetAnnotation select,
  .annotationLayer .buttonWidgetAnnotation.checkBox input,
  .annotationLayer .buttonWidgetAnnotation.radioButton input {
    background-image: var(--annotation-unfocused-field-background);
    border: 2px solid var(--input-unfocused-border-color);
    box-sizing: border-box;
    font: calc(9px * var(--scale-factor)) sans-serif;
    height: 100%;
    margin: 0;
    vertical-align: top;
    width: 100%;
  }

  .annotationLayer .textWidgetAnnotation input:required,
  .annotationLayer .textWidgetAnnotation textarea:required,
  .annotationLayer .choiceWidgetAnnotation select:required,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:required,
  .annotationLayer .buttonWidgetAnnotation.radioButton input:required {
    outline: 1.5px solid red;
  }

  .annotationLayer .choiceWidgetAnnotation select option {
    padding: 0;
  }

  .annotationLayer .buttonWidgetAnnotation.radioButton input {
    border-radius: 50%;
  }

  .annotationLayer .textWidgetAnnotation textarea {
    resize: none;
  }

  .annotationLayer .textWidgetAnnotation input[disabled],
  .annotationLayer .textWidgetAnnotation textarea[disabled],
  .annotationLayer .choiceWidgetAnnotation select[disabled],
  .annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],
  .annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {
    background: none;
    border: 2px solid var(--input-disabled-border-color);
    cursor: not-allowed;
  }

  .annotationLayer .textWidgetAnnotation input:hover,
  .annotationLayer .textWidgetAnnotation textarea:hover,
  .annotationLayer .choiceWidgetAnnotation select:hover,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:hover,
  .annotationLayer .buttonWidgetAnnotation.radioButton input:hover {
    border: 2px solid var(--input-hover-border-color);
  }
  .annotationLayer .textWidgetAnnotation input:hover,
  .annotationLayer .textWidgetAnnotation textarea:hover,
  .annotationLayer .choiceWidgetAnnotation select:hover,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:hover {
    border-radius: 2px;
  }

  .annotationLayer .textWidgetAnnotation input:focus,
  .annotationLayer .textWidgetAnnotation textarea:focus,
  .annotationLayer .choiceWidgetAnnotation select:focus {
    background: none;
    border: 2px solid var(--input-focus-border-color);
    border-radius: 2px;
    outline: var(--input-focus-outline);
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox :focus,
  .annotationLayer .buttonWidgetAnnotation.radioButton :focus {
    background-image: none;
    background-color: transparent;
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox :focus {
    border: 2px solid var(--input-focus-border-color);
    border-radius: 2px;
    outline: var(--input-focus-outline);
  }

  .annotationLayer .buttonWidgetAnnotation.radioButton :focus {
    border: 2px solid var(--input-focus-border-color);
    outline: var(--input-focus-outline);
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,
  .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {
    background-color: var(--CanvasText);
    content: '';
    display: block;
    position: absolute;
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,
  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {
    height: 80%;
    left: 45%;
    width: 1px;
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {
    transform: rotate(45deg);
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {
    transform: rotate(-45deg);
  }

  .annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {
    border-radius: 50%;
    height: 50%;
    left: 30%;
    top: 20%;
    width: 50%;
  }

  .annotationLayer .textWidgetAnnotation input.comb {
    font-family: monospace;
    padding-left: 2px;
    padding-right: 0;
  }

  .annotationLayer .textWidgetAnnotation input.comb:focus {
    /*
     * Letter spacing is placed on the right side of each character. Hence, the
     * letter spacing of the last character may be placed outside the visible
     * area, causing horizontal scrolling. We avoid this by extending the width
     * when the element has focus and revert this when it loses focus.
     */
    width: 103%;
  }

  .annotationLayer .buttonWidgetAnnotation.checkBox input,
  .annotationLayer .buttonWidgetAnnotation.radioButton input {
    appearance: none;
  }

  .annotationLayer .popupTriggerArea {
    height: 100%;
    width: 100%;
  }

  .annotationLayer .popupWrapper {
    position: absolute;
    font-size: calc(9px * var(--scale-factor));
    width: 100%;
    min-width: calc(180px * var(--scale-factor));
    pointer-events: none;
  }

  .annotationLayer .popup {
    position: absolute;
    max-width: calc(180px * var(--scale-factor));
    background-color: rgba(255, 255, 153, 1);
    box-shadow: 0 calc(2px * var(--scale-factor)) calc(5px * var(--scale-factor))
    rgba(136, 136, 136, 1);
    border-radius: calc(2px * var(--scale-factor));
    padding: calc(6px * var(--scale-factor));
    margin-left: calc(5px * var(--scale-factor));
    cursor: pointer;
    font: message-box;
    white-space: normal;
    word-wrap: break-word;
    pointer-events: auto;
  }

  .annotationLayer .popup > * {
    font-size: calc(9px * var(--scale-factor));
  }

  .annotationLayer .popup h1 {
    display: inline-block;
  }

  .annotationLayer .popupDate {
    display: inline-block;
    margin-left: calc(5px * var(--scale-factor));
  }

  .annotationLayer .popupContent {
    border-top: 1px solid rgba(51, 51, 51, 1);
    margin-top: calc(2px * var(--scale-factor));
    padding-top: calc(2px * var(--scale-factor));
  }

  .annotationLayer .richText > * {
    white-space: pre-wrap;
    font-size: calc(9px * var(--scale-factor));
  }

  .annotationLayer .highlightAnnotation,
  .annotationLayer .underlineAnnotation,
  .annotationLayer .squigglyAnnotation,
  .annotationLayer .strikeoutAnnotation,
  .annotationLayer .freeTextAnnotation,
  .annotationLayer .lineAnnotation svg line,
  .annotationLayer .squareAnnotation svg rect,
  .annotationLayer .circleAnnotation svg ellipse,
  .annotationLayer .polylineAnnotation svg polyline,
  .annotationLayer .polygonAnnotation svg polygon,
  .annotationLayer .caretAnnotation,
  .annotationLayer .inkAnnotation svg polyline,
  .annotationLayer .stampAnnotation,
  .annotationLayer .fileAttachmentAnnotation {
    cursor: pointer;
  }

  .annotationLayer section svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .annotationLayer .annotationTextContent {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    color: transparent;
    user-select: none;
    pointer-events: none;
  }

  .annotationLayer .annotationTextContent span {
    width: 100%;
    display: inline-block;
  }

  .textLayer {
    position: absolute;
    text-align: initial;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    line-height: 1;
    text-size-adjust: none;
    forced-color-adjust: none;
    transform-origin: 0 0;
    z-index: 2;
  }

  .textLayer span,
  .textLayer br {
    color: transparent;
    position: absolute;
    white-space: pre;
    cursor: text;
    transform-origin: 0% 0%;
  }

  /* Only necessary in Google Chrome, see issue 14205, and most unfortunately
   * the problem doesn't show up in "text" reference tests. */
  .textLayer span.markedContent {
    top: 0;
    height: 0;
  }

  .textLayer .highlight {
    margin: -1px;
    padding: 1px;
    background-color: var(--highlight-bg-color);
    border-radius: 4px;
  }

  .textLayer .highlight.appended {
    position: initial;
  }

  .textLayer .highlight.begin {
    border-radius: 4px 0 0 4px;
  }

  .textLayer .highlight.end {
    border-radius: 0 4px 4px 0;
  }

  .textLayer .highlight.middle {
    border-radius: 0;
  }

  .textLayer .highlight.selected {
    background-color: var(--highlight-selected-bg-color);
  }

  /* Avoids https://github.com/mozilla/pdf.js/issues/13840 in Chrome */
  .textLayer br::selection {
    background: transparent;
  }

  .textLayer .endOfContent {
    display: block;
    position: absolute;
    left: 0;
    top: 100%;
    right: 0;
    bottom: 0;
    z-index: -1;
    cursor: default;
    user-select: none;
  }

  .textLayer .endOfContent.active {
    top: 0;
  }

`;
